import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { ReqresApi } from "../POM/reqresApiPOM";

let reqresApi = new ReqresApi();
Given('I get list of all users.',() => {
    reqresApi.AllUsers();
})
When('I get data of only one user with firsname {word}.',(name) => {
    let st = new reqresApi.OnlyUser();
    st.should('have.property','first_name',name)
})

And('I did not get any data for user 23 with the status 404.',()=>{
    let st = new reqresApi.NoUser();
    st.should('have.property','status',404)
    // console.log(st)
})

And('I am creating user with the post request.',()=>{
    let st = new reqresApi.CreatingUser()
    st.should('have.property','name',"morpheus")
    // console.log(st)
})

And('I update the job of user.',()=>{
    let st = new reqresApi.UpdateJob();
    st.should('have.property','status',200)
})

And('I update the job of user using patch req.',()=>{
    let st = new reqresApi.UpdateJobWithPatch();
    st.should('have.property','status',200)
})

And('I delete the user.',()=>{
    let st = new reqresApi.DeleteUser();
    st.should('have.property','status',204)
})

And('I register the user.',()=>{
    let st = new reqresApi.RegisterUser();
    st.should('have.property','status',200)
})

And('I register the user but remain unsuccessful.',()=>{
    let st = new reqresApi.UnableToRegisterUser();
    st.should('have.property','status',400)
})

And('I successfully login.',()=>{
    let st = new reqresApi.Login();
    st.should('have.property','status',200)
})

And('I was not able to login with wrong credentials.',()=>{
    let st = new reqresApi.LoginUnsuccessful();
    st.should('have.property','status',400)
})
