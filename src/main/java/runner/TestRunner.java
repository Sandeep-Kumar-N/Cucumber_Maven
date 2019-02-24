package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features="C:\\Users\\sande\\Selenium_Projects\\maven-demo\\src\\main\\java\\features\\login3.feature",
			glue = {"stepDefinitions"},
			format = {"pretty", "html:test-output"},
			monochrome = true,
			strict = true,
			dryRun = false
			)
	
	public class TestRunner {
	
	}
