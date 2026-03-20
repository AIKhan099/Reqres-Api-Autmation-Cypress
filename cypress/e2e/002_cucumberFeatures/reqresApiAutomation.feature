Feature: API Sample Testing 

	Scenario:   Getting All and Specific User and Creating New User.
		Given I get list of all users.
		When I get data of only one user with firsname Janet.
		And I did not get any data for user 23 with the status 404.
		And I am creating user with the post request.
		
    Scenario: Updating User And Deleting it.
		Given I update the job of user.
        When I update the job of user using patch req.
        And I delete the user.

    Scenario: Registering New User And Logging In with Correct And Wrong Credentials.
        Given I register the user.
        And I successfully login.

    Scenario: Unable to Register Because of Wrong Payload
       Given I register the user but remain unsuccessful due to missing password.
       Given I register the user but remain unsuccessful due to missing email.



    Scenario: Unable to Login With Wrong Credentials.
        Given I was not able to login with wrong password.
        And I was not able to login with wrong email.