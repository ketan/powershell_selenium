﻿using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.IE;
using OpenQA.Selenium.PhantomJS;
using System.Collections.ObjectModel;
using System.IO;
using System.Threading;
using System.Linq;
using System.Drawing;
using System.Windows.Forms;
using Protractor.Extensions;

namespace Protractor.Test
{

    [TestFixture]
    public class Way2AutomationTests
    {
        private StringBuilder verificationErrors = new StringBuilder();
        private IWebDriver driver;
        private NgWebDriver ngDriver;
        private WebDriverWait wait;
        private IAlert alert;
        private string alert_text;
        private Regex theReg;
        private const int wait_seconds = 3;
        private Actions actions;
        private const String base_url = "http://www.way2automation.com/angularjs-protractor/banking";

        [TestFixtureSetUp]
        public void SetUp()
        {
            // driver = new PhantomJSDriver();
            driver = new FirefoxDriver();
            //driver = new ChromeDriver();
            //var options = new InternetExplorerOptions() { IntroduceInstabilityByIgnoringProtectedModeSettings = true };
            //driver = new InternetExplorerDriver(options);
            driver.Manage().Window.Size = new System.Drawing.Size(700, 500);
            driver.Manage().Timeouts().SetScriptTimeout(TimeSpan.FromSeconds(60));
            ngDriver = new NgWebDriver(driver);
            wait = new WebDriverWait(driver, TimeSpan.FromSeconds(wait_seconds));
            actions = new Actions(driver);
        }

        [SetUp]
        public void NavigateToBankingExamplePage()
        {
            driver.Navigate().GoToUrl(base_url);
            ngDriver.Url = driver.Url;
        }

        [TestFixtureTearDown]
        public void TearDown()
        {
            try
            {
                driver.Close();
                driver.Quit();
            }
            catch (Exception) { } /* Ignore cleanup errors */
            Assert.IsEmpty(verificationErrors.ToString());
        }

        [Test]
        public void ShouldLogintToWay2AutomationSite()
        {
            String login_url = "http://way2automation.com/way2auto_jquery/index.php";
            string username = "sergueik";
            string password = "i011155";

            driver.Navigate().GoToUrl(login_url);
            // signup
            var signup_element = driver.FindElement(By.CssSelector("div#load_box.popupbox form#load_form a.fancybox[href='#login']"));
            actions.MoveToElement(signup_element).Build().Perform();
            ngDriver.Highlight(signup_element);
            signup_element.Click();
            // enter username
            var login_username = driver.FindElement(By.CssSelector("div#login.popupbox form#load_form input[name='username']"));
            ngDriver.Highlight(login_username);
            login_username.SendKeys(username);
            // enter password
            var login_password_element = driver.FindElement(By.CssSelector("div#login.popupbox form#load_form input[type='password'][name='password']"));
            ngDriver.Highlight(login_password_element);
            login_password_element.SendKeys(password);
            // click "Login"
            actions.MoveToElement(driver.FindElement(By.CssSelector("div#login.popupbox form#load_form [value='Submit']"))).Click().Build().Perform();
            // block until the login popup box disappears
            wait.Until(d => (d.FindElements(By.CssSelector("div#login.popupbox")).Count == 0));
        }

        [Test]
        public void ShouldDeposit()
        {
            ngDriver.FindElement(NgBy.ButtonText("Customer Login")).Click();
            ReadOnlyCollection<NgWebElement> ng_customers = ngDriver.FindElement(NgBy.Model("custId")).FindElements(NgBy.Repeater("cust in Customers"));
            // select customer to log in
            ng_customers.First(cust => Regex.IsMatch(cust.Text, "Harry Potter")).Click();

            ngDriver.FindElement(NgBy.ButtonText("Login")).Click();
            ngDriver.FindElement(NgBy.Options("account for account in Accounts")).Click();

            // inspect the account
            NgWebElement ng_account_number_element = ngDriver.FindElement(NgBy.Binding("accountNo"));
            int account_id = 0;
            int.TryParse(ng_account_number_element.Text.FindMatch(@"(?<account_number>\d+)$"), out account_id);
            Assert.AreNotEqual(0, account_id);

            int account_amount = -1;
            int.TryParse(ngDriver.FindElement(NgBy.Binding("amount")).Text.FindMatch(@"(?<account_amount>\d+)$"), out account_amount);
            Assert.AreNotEqual(-1, account_amount);
            NgWebElement ng_deposit_button_element = ngDriver.FindElement(NgBy.PartialButtonText("Deposit"));
            Assert.IsTrue(ng_deposit_button_element.Displayed);
            ng_deposit_button_element.Click();

            // core Selenium
            wait.Until(ExpectedConditions.ElementExists(By.CssSelector("form[name='myForm']")));
            NgWebElement ng_form_element = new NgWebElement(ngDriver, driver.FindElement(By.CssSelector("form[name='myForm']")));

            // deposit amount
            NgWebElement ng_deposit_amount_element = ng_form_element.FindElement(NgBy.Model("amount"));
            ng_deposit_amount_element.SendKeys("100");

            ng_deposit_button_element = ng_form_element.FindElement(NgBy.ButtonText("Deposit"));
            actions.MoveToElement(ng_deposit_button_element.WrappedElement).Build().Perform();
            ngDriver.Highlight(ng_deposit_button_element);
            Thread.Sleep(1000);
            ng_deposit_button_element.Click();

            // inspect message
            var ng_message_element = ngDriver.FindElement(NgBy.Binding("message"));
            StringAssert.Contains("Deposit Successful", ng_message_element.Text);
            ngDriver.Highlight(ng_message_element);

            // re-read the amount
            int updated_account_amount = -1;
            int.TryParse(ngDriver.FindElement(NgBy.Binding("amount")).Text.FindMatch(@"(?<account_amount>\d+)$"), out updated_account_amount);
            Assert.AreEqual(updated_account_amount, account_amount + 100);
        }


        [Test]
        public void ShouldWithdraw()
        {
            ShouldDeposit();
            int account_amount = -1;
            int.TryParse(ngDriver.FindElement(NgBy.Binding("amount")).Text.FindMatch(@"(?<account_amount>\d+)$"), out account_amount);
            Assert.AreNotEqual(-1, account_amount);

            ngDriver.FindElement(NgBy.PartialButtonText("Withdrawl")).Click();

            // core Selenium
            Thread.Sleep(1000);
            wait.Until(ExpectedConditions.ElementExists(By.CssSelector("form[name='myForm']")));
            NgWebElement ng_form_element = new NgWebElement(ngDriver, driver.FindElement(By.CssSelector("form[name='myForm']")));
            NgWebElement ng_withdrawl_amount_element = ng_form_element.FindElement(NgBy.Model("amount"));
            ng_withdrawl_amount_element.SendKeys((account_amount + 100).ToString());

            NgWebElement ng_withdrawl_button_element = ng_form_element.FindElement(NgBy.ButtonText("Withdraw"));
            ngDriver.Highlight(ng_withdrawl_button_element);
            ng_withdrawl_button_element.Click();

            // inspect message
            var ng_message_element = ngDriver.FindElement(NgBy.Binding("message"));
            StringAssert.Contains("Transaction Failed. You can not withdraw amount more than the balance.", ng_message_element.Text);
            ngDriver.Highlight(ng_message_element);

            // re-read the amount
            int updated_account_amount = -1;
            int.TryParse(ngDriver.FindElement(NgBy.Binding("amount")).Text.FindMatch(@"(?<account_amount>\d+)$"), out updated_account_amount);
            Assert.AreEqual(account_amount, updated_account_amount);


            Thread.Sleep(1000);
            wait.Until(ExpectedConditions.ElementExists(By.CssSelector("form[name='myForm']")));
            ng_form_element = new NgWebElement(ngDriver, driver.FindElement(By.CssSelector("form[name='myForm']")));

            ng_form_element.FindElement(NgBy.Model("amount")).SendKeys((account_amount - 10).ToString());
            ng_form_element.FindElement(NgBy.ButtonText("Withdraw")).Click();
            // inspect message
            ng_message_element = ngDriver.FindElement(NgBy.Binding("message"));
            StringAssert.Contains("Transaction successful", ng_message_element.Text);
            ngDriver.Highlight(ng_message_element);

            // re-read the amount
            int.TryParse(ngDriver.FindElement(NgBy.Binding("amount")).Text.FindMatch(@"(?<account_amount>\d+)$"), out updated_account_amount);
            Assert.AreEqual(10, updated_account_amount);

        }

        [Test]
        public void ShouldLoginCustomer()
        {
            NgWebElement ng_customer_login_button_element = ngDriver.FindElement(NgBy.ButtonText("Customer Login"));
            StringAssert.IsMatch("Customer Login", ng_customer_login_button_element.Text);
            ngDriver.Highlight(ng_customer_login_button_element);
            // core Selenium
            IWebElement customer_login_button_element = driver.FindElement(By.XPath("//button[contains(.,'Customer Login')]"));
            StringAssert.IsMatch("Customer Login", customer_login_button_element.Text);
            ngDriver.Highlight(customer_login_button_element);

            ng_customer_login_button_element.Click();
            NgWebElement ng_user_select_element = ngDriver.FindElement(NgBy.Input("custId"));
            StringAssert.IsMatch("userSelect", ng_user_select_element.GetAttribute("id"));
            ReadOnlyCollection<NgWebElement> ng_customers = ng_user_select_element.FindElements(NgBy.Repeater("cust in Customers"));
            Assert.AreNotEqual(0, ng_customers.Count);
            // pick a customer
            NgWebElement first_customer = ng_customers.First();
            Assert.IsTrue(first_customer.Displayed);
            
            // the {{user}} is composed from first and last name
            StringAssert.IsMatch("(?:[^ ]+) +(?:[^ ]+)", first_customer.Text);            
            string user = first_customer.Text;
            first_customer.Click();
            
            // login button
            NgWebElement ng_login_button_element = ngDriver.FindElement(NgBy.ButtonText("Login"));
            Assert.IsTrue(ng_login_button_element.Displayed && ng_login_button_element.Enabled);
            ngDriver.Highlight(ng_login_button_element);
            ng_login_button_element.Click();

            NgWebElement ng_greeting_element = ngDriver.FindElement(NgBy.Binding("user"));
            Assert.IsNotNull(ng_greeting_element);
            StringAssert.IsMatch(user, ng_greeting_element.Text);
            ngDriver.Highlight(ng_greeting_element);

            NgWebElement ng_account_number_element = ngDriver.FindElement(NgBy.Binding("accountNo"));
            Assert.IsNotNull(ng_account_number_element);
            theReg = new Regex(@"(?<account_id>\d+)$");
            Assert.IsTrue(theReg.IsMatch(ng_account_number_element.Text));
            ngDriver.Highlight(ng_account_number_element);

            NgWebElement ng_account_amount_element = ngDriver.FindElement(NgBy.Binding("amount"));
            Assert.IsNotNull(ng_account_amount_element);
            theReg = new Regex(@"(?<account_amount>\d+)$");
            Assert.IsTrue(theReg.IsMatch(ng_account_amount_element.Text));
            ngDriver.Highlight(ng_account_amount_element);

            NgWebElement ng_account_currency_element = ngDriver.FindElement(NgBy.Binding("currency"));
            Assert.IsNotNull(ng_account_currency_element);
            theReg = new Regex(@"(?<account_currency>(?:Dollar|Pound|Rupee))$");
            Assert.IsTrue(theReg.IsMatch(ng_account_currency_element.Text));
            ngDriver.Highlight(ng_account_currency_element);
        }

        [Test]
        public void ShouldAddCustomer()
        {
            // switch to "Add Customer" screen
            ngDriver.FindElement(NgBy.ButtonText("Bank Manager Login")).Click();
            ngDriver.FindElement(NgBy.PartialButtonText("Add Customer")).Click();

            // fill new Customer data
            IWebElement ng_first_name_element = ngDriver.FindElement(NgBy.Model("fName"));
            ngDriver.Highlight(ng_first_name_element);
            StringAssert.IsMatch("First Name", ng_first_name_element.GetAttribute("placeholder"));
            ng_first_name_element.SendKeys("John");

            IWebElement ng_last_name_element = ngDriver.FindElement(NgBy.Model("lName"));
            ngDriver.Highlight(ng_last_name_element);
            StringAssert.IsMatch("Last Name", ng_last_name_element.GetAttribute("placeholder"));
            ng_last_name_element.SendKeys("Doe");

            IWebElement ng_post_code_element = ngDriver.FindElement(NgBy.Model("postCd"));
            ngDriver.Highlight(ng_post_code_element);
            StringAssert.IsMatch("Post Code", ng_post_code_element.GetAttribute("placeholder"));
            ng_post_code_element.SendKeys("11011");

            // NOTE: there are two 'Add Customer' buttons on this form
            NgWebElement ng_add_dustomer_button_element = ngDriver.FindElements(NgBy.PartialButtonText("Add Customer"))[1];
            actions.MoveToElement(ng_add_dustomer_button_element.WrappedElement).Build().Perform();
            ngDriver.Highlight(ng_add_dustomer_button_element);
            ng_add_dustomer_button_element.Submit();

            // confirm
            string alert_text = null;
            try
            {
                alert = ngDriver.WrappedDriver.SwitchTo().Alert();
                alert_text = alert.Text;
                StringAssert.StartsWith("Customer added successfully with customer id :", alert_text);
                alert.Accept();
            }
            catch (NoAlertPresentException ex)
            {
                // Alert not present
                verificationErrors.Append(ex.StackTrace);
            }
            catch (WebDriverException ex)
            {
                // Alert not handled by PhantomJS
                verificationErrors.Append(ex.StackTrace);
            }

            int customer_id = 0;
            int.TryParse(alert_text.FindMatch(@"(?<customer_id>\d+)$"), out customer_id);
            Assert.AreNotEqual(0, customer_id);

            // switch to "Customers" screen
            ngDriver.FindElement(NgBy.PartialButtonText("Customers")).Click();

            // discover newly added customer
            ReadOnlyCollection<NgWebElement> ng_customers = ngDriver.FindElements(NgBy.Repeater("cust in Customers"));
            NgWebElement newly_added_customer = ng_customers.First(cust => Regex.IsMatch(cust.Text, "John Doe"));
            Assert.IsNotNull(newly_added_customer);

            actions.MoveToElement(newly_added_customer.WrappedElement).Build().Perform();
            ngDriver.Highlight(newly_added_customer);

            // confirm searching for the customer name
            ngDriver.FindElement(NgBy.Model("searchCustomer")).SendKeys("John");
            ng_customers = ngDriver.FindElements(NgBy.Repeater("cust in Customers"));
            Assert.AreEqual(1, ng_customers.Count);

        }

        [Test]
        public void ShouldDeleteCustomer()
        {
            // switch to "Add Customer" screen
            ngDriver.FindElement(NgBy.ButtonText("Bank Manager Login")).Click();
            ngDriver.FindElement(NgBy.PartialButtonText("Add Customer")).Click();

            // fill new Customer data
            ngDriver.FindElement(NgBy.Model("fName")).SendKeys("John");
            ngDriver.FindElement(NgBy.Model("lName")).SendKeys("Doe");
            ngDriver.FindElement(NgBy.Model("postCd")).SendKeys("11011");

            // NOTE: there are two 'Add Customer' buttons on this form
            NgWebElement ng_add_dustomer_button_element = ngDriver.FindElements(NgBy.PartialButtonText("Add Customer"))[1];
            actions.MoveToElement(ng_add_dustomer_button_element.WrappedElement).Build().Perform();
            ngDriver.Highlight(ng_add_dustomer_button_element);
            ng_add_dustomer_button_element.Submit();
            // confirm
            ngDriver.WrappedDriver.SwitchTo().Alert().Accept();

            // switch to "Home" screen
            ngDriver.FindElement(NgBy.ButtonText("Home")).Click();
            ngDriver.FindElement(NgBy.ButtonText("Bank Manager Login")).Click();
            ngDriver.FindElement(NgBy.PartialButtonText("Customers")).Click();

            // found new customer
            ReadOnlyCollection<NgWebElement> ng_customers = ngDriver.FindElements(NgBy.Repeater("cust in Customers"));
            // collect all usernames -  
            ReadOnlyCollection<NgWebElement> ng_users = ngDriver.FindElements(NgBy.RepeaterColumn("cust in Customers", "user"));

            NgWebElement newly_added_customer = ng_customers.Single(cust => Regex.IsMatch(cust.Text, "John Doe"));
            Assert.IsNotNull(newly_added_customer);




            // remove button
            NgWebElement ng_delete_customer_button_element = newly_added_customer.FindElement(NgBy.ButtonText("Delete"));
            StringAssert.IsMatch("Delete", ng_delete_customer_button_element.Text);
            actions.MoveToElement(ng_delete_customer_button_element.WrappedElement).Build().Perform();
            ng_delete_customer_button_element.Click();

            // confirm the cusomer is no loger present
            ng_customers = ngDriver.FindElements(NgBy.Repeater("cust in Customers"));
            IEnumerable<NgWebElement> removed_customer = ng_customers.TakeWhile(cust => Regex.IsMatch(cust.Text, "John Doe.*"));
            Assert.IsEmpty(removed_customer);
        }

        [Test]
        public void ShouldOpenAccount()
        {
            // switch to "Add Customer" screen
            ngDriver.FindElement(NgBy.ButtonText("Bank Manager Login")).Click();
            ngDriver.FindElement(NgBy.PartialButtonText("Open Account")).Click();

            // fill new Account data
            NgWebElement ng_customer_select_element = ngDriver.FindElement(NgBy.Model("custId"));
            StringAssert.IsMatch("userSelect", ng_customer_select_element.GetAttribute("id"));
            ReadOnlyCollection<NgWebElement> ng_customers = ng_customer_select_element.FindElements(NgBy.Repeater("cust in Customers"));

            // select customer to log in
            NgWebElement account_customer = ng_customers.First(cust => Regex.IsMatch(cust.Text, "Harry Potter*"));
            Assert.IsNotNull(account_customer);
            account_customer.Click();

            NgWebElement ng_currencies_select_element = ngDriver.FindElement(NgBy.Model("currency"));
            // use core Selenium
            SelectElement currencies_select_element = new SelectElement(ng_currencies_select_element.WrappedElement);
            IList<IWebElement> account_currencies = currencies_select_element.Options;
            IWebElement account_currency = account_currencies.First(cust => Regex.IsMatch(cust.Text, "Dollar"));
            Assert.IsNotNull(account_currency);
            currencies_select_element.SelectByText("Dollar");

            // add the account
            var submit_button_element = ngDriver.WrappedDriver.FindElement(By.XPath("/html/body//form/button[@type='submit']"));
            StringAssert.IsMatch("Process", submit_button_element.Text);
            submit_button_element.Click();

            try
            {
                alert = driver.SwitchTo().Alert();
                alert_text = alert.Text;
                StringAssert.StartsWith("Account created successfully with account Number", alert_text);
                alert.Accept();
            }
            catch (NoAlertPresentException ex)
            {
                // Alert not present
                verificationErrors.Append(ex.StackTrace);
            }
            catch (WebDriverException ex)
            {
                // Alert not handled by PhantomJS
                verificationErrors.Append(ex.StackTrace);
            }

            // Confirm account added for customer
            Assert.IsEmpty(verificationErrors.ToString());

            // switch to "Customers" screen
            ngDriver.FindElement(NgBy.PartialButtonText("Customers")).Click();

            // get customers
            ng_customers = ngDriver.FindElements(NgBy.Repeater("cust in Customers"));
            // discover customer
            NgWebElement ng_customer_element = ng_customers.First(cust => Regex.IsMatch(cust.Text, "Harry Potter"));
            Assert.IsNotNull(ng_customer_element);

            // extract the account id from the alert message
            string account_id = alert_text.FindMatch(@"(?<account_id>\d+)$");
            Assert.IsNotNullOrEmpty(account_id);
            // search accounts of specific customer
            ReadOnlyCollection<NgWebElement> ng_customer_accounts = ng_customer_element.FindElements(NgBy.Repeater("account in cust.accountNo"));

            NgWebElement account_matching = ng_customer_accounts.First(acc => String.Equals(acc.Text, account_id));
            Assert.IsNotNull(account_matching);
            ngDriver.Highlight(account_matching);
        }

        [Test]
        public void ShouldSortCustomersAccounts()
        {
            ngDriver.FindElement(NgBy.ButtonText("Bank Manager Login")).Click();
            ngDriver.FindElement(NgBy.PartialButtonText("Customers")).Click();
            // core Selenium
            wait.Until(ExpectedConditions.ElementExists(By.CssSelector("a[ng-click*='sortType'][ng-click*= 'fName']")));
            IWebElement sort_first_name_element = ngDriver.WrappedDriver.FindElement(By.CssSelector("a[ng-click*='sortType'][ng-click*= 'fName']"));
            StringAssert.Contains("First Name", sort_first_name_element.Text);
            ngDriver.Highlight(sort_first_name_element);
            sort_first_name_element.Click();

            ReadOnlyCollection<NgWebElement> ng_accounts = ngDriver.FindElements(NgBy.Repeater("cust in Customers"));
            NgWebElement first_customer = ng_accounts.First();
            StringAssert.Contains("Ron", first_customer.Text);
            sort_first_name_element.Click();

            ng_accounts = ngDriver.FindElements(NgBy.Repeater("cust in Customers"));
            first_customer = ng_accounts.First();
            StringAssert.Contains("Albus", first_customer.Text);
        }
    }
}
