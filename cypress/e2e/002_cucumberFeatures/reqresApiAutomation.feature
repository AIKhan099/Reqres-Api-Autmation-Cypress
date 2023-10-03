Feature: API Sample Testing 

	Scenario: All get request.
		Given I get list of all users.
		When I get data of only one user with firsname Janet.
		And I did not get any data for user 23 with the status 404.
		And I am creating user with the post request.
		And I update the job of user.
        And I update the job of user using patch req.
        And I delete the user.
        And I register the user.
        And I register the user but remain unsuccessful.
        And I successfully login.
        And I was not able to login with wrong credentials.