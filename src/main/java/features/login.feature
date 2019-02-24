Feature: Handling G-Mail Login Part 

#Without Examples Keyword
#Scenario: Login to G-Mail
#Given: User in Gmail Portal
#When User in Login Page
#Then User Enters "sandeep.nagothi9" and Clicks on Next
#Then User Enters Password and Clicks on Login
#Then User Navigates to Mail Home Page

#With Examples Keyword
Scenario Outline: Login to G-Mail 
	Given: User in Gmail Portal
	When User in Login Page 
	Then User Enters "<UserName>" and Clicks on Next 
	Then User Enters Password and Clicks on Login 
	Then User Navigates to Mail Home Page 
	
	Examples: 
		|	UserName			|	Password	|
		|	sandeep.nagothi9	|	Skype@1234	|
		|	sandeep.nagothi		|	Skype@1234	|