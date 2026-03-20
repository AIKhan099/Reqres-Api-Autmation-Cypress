


function getReq(){
    let res = cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2",
            headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
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
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
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
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
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
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
            failOnStatusCode: false
        }) //.its('Status')
}
CreatingUser(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
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
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
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
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
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
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
        
    }) //.its('Status')
}

RegisterUser(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/register",
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
        body: 
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        
    }) //.its('Status')
}
UnableToRegisterUserBodyMissingPassword(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/register",
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
        body: 
            {
                "email": "sydney@fife"
            },
        failOnStatusCode: false
        
    }) 
}

UnableToRegisterUserBodyMissingEmail(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/register",
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
        body: 
            {
                 "password": "pistol"
            },
        failOnStatusCode: false
        
    }) 
}

Login(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/login",
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
        body: 
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            },
        failOnStatusCode: false
        
    })
}

LoginUnsuccessfulWrongPassword(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/login",
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
        body: 
            {"email": "peter@klaven",
            "password": "123"
            },
        failOnStatusCode: false
        
    })
}

LoginUnsuccessfulWrongEmail(){
    return cy.request({
        method: "POST",
        url: "https://reqres.in/api/login",
         headers: {
                "x-api-key": "reqres_88320d72debe4fe9aafa60cb100646a0",
                accept: "application/json"
            },
        body: 
            {"email": "peter@klaven",
            "password": "pistol"
            },
        failOnStatusCode: false
        
    })
}


}

