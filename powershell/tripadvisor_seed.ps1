#Copyright (c) 2015 Serguei Kouzmine
#
#Permission is hereby granted, free of charge, to any person obtaining a copy
#of this software and associated documentation files (the "Software"), to deal
#in the Software without restriction, including without limitation the rights
#to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
#copies of the Software, and to permit persons to whom the Software is
#furnished to do so, subject to the following conditions:
#
#The above copyright notice and this permission notice shall be included in
#all copies or substantial portions of the Software.
#
#THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
#IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
#FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
#AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
#LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
#OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
#THE SOFTWARE.

param(
  [string]$browser = '',
  [string]$base_url = 'http://www.tripadvisor.com/',
  [int]$max_pages = 3,
  [switch]$grid,
  [switch]$debug,
  [switch]$pause
)
[bool]$fullstop = [bool]$PSBoundParameters['pause'].IsPresent

$MODULE_NAME = 'selenium_utils.psd1'
Import-Module -Name ('{0}/{1}' -f '.',$MODULE_NAME)
load_shared_assemblies


if ([bool]$PSBoundParameters['grid'].IsPresent) {
  $selenium = launch_selenium -browser $browser -grid
  Start-Sleep -Millisecond 500
} else {
  $selenium = launch_selenium -browser $browser
}
$selenium.Manage().Window.Maximize()
$selenium.Navigate().GoToUrl($base_url)

[OpenQA.Selenium.Interactions.Actions]$actions = New-Object OpenQA.Selenium.Interactions.Actions ($selenium)

Write-Output 'Input main search'
$main_search_word = 'restaurant'
[string]$mainsearch_selector = "input#mainSearch"
[string]$mainsearch_data = $main_search_word
[object]$mainsearch_element = find_element -css_selector $mainsearch_selector
highlight ([ref]$selenium) ([ref]$mainsearch_element)
$mainsearch_element.Clear()

$mainsearch_element.SendKeys(($mainsearch_data + [OpenQA.Selenium.Keys]::Enter))


Write-Output 'Input search of interest'
$city_country = 'Prague, Czech Republic, Europe'
[string]$point_of_interest_city_country_selector = "input[id='GEO_SCOPED_SEARCH_INPUT']"
[string]$point_of_interest_city_country_data = $city_country + [OpenQA.Selenium.Keys]::Enter
[object]$point_of_interest_city_country_element = find_element -css_selector $point_of_interest_city_country_selector
highlight ([ref]$selenium) ([ref]$point_of_interest_city_country_element)
$point_of_interest_city_country_element.Clear()
$point_of_interest_city_country_element.SendKeys($point_of_interest_city_country_data)

Start-Sleep -Millisecond 100

[string]$div_geoscoped_selector = "div[id='GEO_SCOPE_CONTAINER'] > div[class *='geoScopeDisplay']"
[object]$div_geoscoped_element = find_element -css_selector $div_geoscoped_selector

# highlight ([ref]$selenium) ([ref]$div_geoscoped_element)


Start-Sleep -Millisecond 1000


# $element_css_selector = "span[class='poi-name']"
$element_css_selector = "li[class*='displayItem'][class *= 'result']"
$elements = $div_geoscoped_element.FindElements([OpenQA.Selenium.By]::CssSelector($element_css_selector))
$elements.count
$max_count = 10
$element_count = 0
$element_found = $false
$elements | ForEach-Object {
  $element_count++
  if ($element_found -or ($element_count -gt $max_count)) {
    return
  }

  $element = $_
  [void]$actions.MoveToElement([OpenQA.Selenium.IWebElement]$element).Build().Perform()

  highlight_new -element $element
  Start-Sleep -Millisecond 100
  $element.Text
  if ($element.Text -match 'Bohemia') {
    [void]$actions.MoveToElement([OpenQA.Selenium.IWebElement]$element).Click().Build().Perform()
    Write-Output 'Selected point ot interest'
    $element_found = $true
    return
  }
}

Write-Output 'Search'
[string]$search_submit_selector = "button[id='SEARCH_BUTTON']"
[object]$search_submit_element = find_element -css_selector $search_submit_selector
highlight ([ref]$selenium) ([ref]$search_submit_element)
[void]$actions.MoveToElement([OpenQA.Selenium.IWebElement]$search_submit_element).Click().Build().Perform()
Start-Sleep -Millisecond 3000
Write-Output 'Search results'
[NUnit.Framework.StringAssert]::Contains('/Restaurants',$selenium.url,{})
[NUnit.Framework.StringAssert]::Contains('Bohemia',$selenium.url,{})


0..2 | ForEach-Object {
  $page_count = $_

  $search_results_css_selector = "div[id='EATERY_SEARCH_RESULTS'] a.property_title"

  $search_results_elements = $selenium.FindElements([OpenQA.Selenium.By]::CssSelector($search_results_css_selector))


  $search_results_elements.count
  $max_count = 100
  $element_count = 0
  $search_results_elements | ForEach-Object {
    $element_count++
    if ($element_count -gt $max_count) {
      return
    }

    $search_results_element = $_
    [void]$actions.MoveToElement([OpenQA.Selenium.IWebElement]$search_results_element).Build().Perform()
    $search_results_element.Text
    highlight_new -element $search_results_element
  }

  custom_pause -fullstop $fullstop

  [string]$pagination_selector = "div[id = 'EATERY_LIST_CONTENTS'] div[class *='pagination']"
  [object]$pagination_element = find_element -css_selector $pagination_selector
  highlight ([ref]$selenium) ([ref]$pagination_element)

  custom_pause -fullstop $fullstop

  [string]$results_next_page_selector = ("{0} a.nav.next" -f $pagination_selector)
  [object]$results_next_page_element = find_element -css_selector $results_next_page_selector
  highlight ([ref]$selenium) ([ref]$results_next_page_element)

  [void]$actions.MoveToElement([OpenQA.Selenium.IWebElement]$results_next_page_element).Click().Build().Perform()

  Start-Sleep -Millisecond 10000
}

cleanup ([ref]$selenium)
