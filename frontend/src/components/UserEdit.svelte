<script>
    import { createEventDispatcher } from "svelte"
    import TextInput from "../UI/TextInput.svelte"
    import Button from "../UI/Button.svelte"
    import users from "../components/user-store" 
    import {handleUserRegister} from "../lib/mongodb.js"   

    const dispatch = createEventDispatcher()
    let username=""
    let lastname=""
    let dtbirth=""
    let email=""
    let password=""

    const  submitForm  = () => {
        let newUser = {
            username:username,
            lastname:lastname,
            dtbirth:dtbirth,
            email:email,
            password:password
        }
        
        handleUserRegister(newUser)
        .then((user) => {
            if(!!user){
                users.addUser({...newUser})
                dispatch("save-user", {newUser}) 
            }
        }).catch(err => console.log(err))    
    }
</script>
<form on:submit|preventDefault={submitForm}>
    <TextInput 
        id="username" 
        label="Name" 
        placeholder="Enter your name"
        value={username}
        on:input={event => (username = event.target.value)}
    />
    <TextInput 
        id="lastname" 
        label="LastName" 
        placeholder="Enter your lastname"
        value={lastname}
        on:input={event => (lastname = event.target.value)}
    />
    <TextInput 
        id="dtbirth" 
        label="dtbirth" 
        placeholder="Enter your dtbirth"
        value={dtbirth}
        on:input={event => (dtbirth = event.target.value)}
    />
    <TextInput 
        id="email" 
        label="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        on:input={event => (email = event.target.value)}
    />
    <TextInput 
        id="password" 
        label="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        on:input={event => (password = event.target.value)}
    />
    <Button type="button" color="btn btn-primary" on:click={submitForm}>Submit</Button>
</form>


