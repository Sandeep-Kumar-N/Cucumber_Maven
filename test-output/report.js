$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sande/Selenium_Projects/maven-demo/src/main/java/features/login3.feature");
formatter.feature({
  "line": 1,
  "name": "Handling G-Mail Login Part",
  "description": "",
  "id": "handling-g-mail-login-part",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to G-Mail",
  "description": "Given: User in Gmail Portal",
  "id": "handling-g-mail-login-part;login-to-g-mail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User in Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enters UserName and Clicks on Next",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 7
    },
    {
      "cells": [
        "sandeep.nagothi9",
        "Skype@1234"
      ],
      "line": 8
    },
    {
      "cells": [
        "sandeep.nagothi8",
        "Skype@5678"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Enters Password and Clicks on Login",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Navigates to Mail Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_in_Login_Page()"
});
formatter.result({
  "duration": 8061226300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Enters_UserName_and_Clicks_on_Next(DataTable)"
});
formatter.result({
  "duration": 709346400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Enters_Password_and_Clicks_on_Login()"
});
formatter.result({
  "duration": 10076599900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027password\u0027 and @type\u003d\u0027password\u0027]\"}\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d73.0.3683.20 (8e2b610813e167eee3619ac4ce6e42e3ec622017),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SANDY\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.20 (8e2b610813e16..., userDataDir: C:\\Users\\sande\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53146}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.109, webStorageEnabled: true}\nSession ID: cdc858bcf2a18f0ef9837dc20968f5b2\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027password\u0027 and @type\u003d\u0027password\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.LoginStepDefinition.user_Enters_Password_and_Clicks_on_Login(LoginStepDefinition.java:58)\r\n\tat ✽.Then User Enters Password and Clicks on Login(C:/Users/sande/Selenium_Projects/maven-demo/src/main/java/features/login3.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Navigates_to_Mail_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
});