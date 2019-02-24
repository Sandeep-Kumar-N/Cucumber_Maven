Feature: Handling G-Mail Login Part 

Scenario: Login to G-Mail 
	Given: User in Gmail Portal
	When User in Login Page 
	Then User Enters UserName and Clicks on Next 
		|	UserName			|	Password	|
		|	sandeep.nagothi9	|	Abcde@1234	|
		|	sandeep.nagothi8	|	QWERT@5678	|
	Then User Enters Password and Clicks on Login 
	Then User Navigates to Mail Home Page