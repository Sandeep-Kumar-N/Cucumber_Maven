package stepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	WebDriver driver;

	@When("^User in Login Page$")
	public void user_in_Login_Page(){
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\sande\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://mail.google.com/mail");
		driver.manage().window().maximize();	
		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);
		
	}

	@Then("^User Enters \"(.*)\" and Clicks on Next$")
	public void user_Enters_UserName_and_Clicks_on_Next(String username) {
		driver.findElement(By.xpath("//input[@name='identifier' and @aria-label='Email or phone']")).sendKeys(username);
		driver.findElement(By.xpath("//content/span[text()='Next']")).click();
	}
	
	/*
	 * //Applicable for the step in login2.feature
	 * 
	 * @Then("^User Enters UserName and Clicks on Next$") public void
	 * user_Enters_UserName_and_Clicks_on_Next(DataTable userName) {
	 * List<List<String>> table = userName.raw(); 
	 * driver.findElement(By.xpath("//input[@name='identifier' and @aria-label='Email or phone']")).sendKeys(table.get(0).get(0));
	 * driver.findElement(By.xpath("//content/span[text()='Next']")).click(); 
	 * }
	 */

	//Applicable for the step in login3.feature
	@Then("^User Enters UserName and Clicks on Next$")
	public void user_Enters_UserName_and_Clicks_on_Next(DataTable data) {
		
		/*
		 * for (Map<String, String> table : data.asMaps(String.class, String.class)) {
		 * driver.findElement(By.xpath("//input[@name='identifier' and @aria-label='Email or phone']")).sendKeys(table.get("UserName")); 
		 * }
		 */
		Map<String, String> table = (Map<String, String>) data.asMaps(String.class, String.class);

			driver.findElement(By.xpath("//input[@name='identifier' and @aria-label='Email or phone']"))
					.sendKeys(table.get("UserName"));
		driver.findElement(By.xpath("//content/span[text()='Next']")).click();
	}
	@Then("^User Enters Password and Clicks on Login$")
	public void user_Enters_Password_and_Clicks_on_Login(){
		driver.findElement(By.xpath("//input[@name='password' and @type='password']")).sendKeys("Abcde@1234");
		driver.findElement(By.xpath("//div[@id=\"passwordNext\"]/content/span")).click();
	}

	@Then("^User Navigates to Mail Home Page$")
	public void user_Navigates_to_Mail_Home_Page(){
		String title = null;
		WebElement inbox = driver.findElement(By.linkText("Inbox"));
		try {
			if (inbox.isDisplayed()==true) {
				title = driver.getTitle();
				System.out.println("Title of the Page is " + title);
				if (!title.contains("Inbox")==true){
					System.out.println("TItle of the Page is Not Correct");
				}	
			}		
		}catch(NoSuchElementException e){
			System.out.println("Could not find inbox Element");
		}finally {
		driver.close();
		}
	}
	
	
	
}
