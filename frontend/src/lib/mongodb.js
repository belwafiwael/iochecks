import * as Realm from "realm-web";
const api = new Realm.App({ id:"application-chainpactw-sudcn" });

function handleUserRegister(newUser) {
    return new Promise((resolve) => {
        api.emailPasswordAuth
        .registerUser(newUser.email, newUser.password)
        .then(() => {
            const credentials = Realm.Credentials.emailPassword(
                newUser.email, 
                newUser.password
            );
            api.logIn(credentials).then(user => {
                resolve(user)
            })
        })
    })
}
function handleUserLogout(newUser) {
    api.currentUser?.logOut()   
        .then(() => console.log("user logout"))
        .catch(err => console.log(err))
}

export  {api, handleUserRegister, handleUserLogout}