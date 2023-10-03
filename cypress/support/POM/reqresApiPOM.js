


function getReq(){
    let res = cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body.data);
            // return body.data
        })
        // console.log("here it is", typeof res, "here it is")
        // return JSON.parse(JSON.stringify(res.body))
    }

export class ReqresApi{
     AllUsers(){
        // console.log("This is POM");
        let res = cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body.data);
            // return body.data
        })
        // return " hello "
    };
    OnlyUser(){
        // console.log("This is POM");
        return cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2",
            headers: {
                accept: "application/json"
            }
        }).its('body').its('data')
        
    }
    NoUser(){
        // console.log("This is POM");
        return cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/23",
            headers: {
                accept: "application/json"
            },
            failOnStatusCode: false
        }) //.its('Status')
}
CreatingUser(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: 
            {
                "name": "morpheus",
                "job": "leader"
            },
        failOnStatusCode: false
    }).its('body')
}

UpdateJob(){
    return cy.request({
        method: "PUT",
        url: "https://reqres.in/api/users/2",
        body: 
            {
                "name": "morpheus",
                "job": "zion resident"
            }
    }) //.its('Status')
}

UpdateJobWithPatch(){
    return cy.request({
        method: "PATCH",
        url: "https://reqres.in/api/users/2",
        body: 
            {
                "name": "morpheus",
                "job": "zion resident"
            }
    }) //.its('Status')
}

DeleteUser(){
    return cy.request({
        method: "DELETE",
        url: "https://reqres.in/api/users/2",
        
    }) //.its('Status')
}

RegisterUser(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/register",
        body: 
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        
    }) //.its('Status')
}
UnableToRegisterUser(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/register",
        body: 
            {
                "email": "sydney@fife"
            },
        failOnStatusCode: false
        
    }) 
}

Login(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/login",
        body: 
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            },
        failOnStatusCode: false
        
    })
}

LoginUnsuccessful(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/login",
        body: 
            {"email": "peter@klaven"
            },
        failOnStatusCode: false
        
    })
}


}

