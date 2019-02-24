Feature: Handling G-Mail Login Part 

Scenario: Login to G-Mail 
	Given: User in Gmail Portal
	When User in Login Page 
	Then User Enters UserName and Clicks on Next 
		|sandeep.nagothi9|Abcde@1234|Number 420|
		|sandeep.nagothi8|Fghij@5678|Number 420|
	Then User Enters Password and Clicks on Login 
	Then User Navigates to Mail Home Page