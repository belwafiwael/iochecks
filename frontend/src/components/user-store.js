import { writable } from "svelte/store";
import { addUserAPI } from "../lib/api.js";

const users = writable([])
const costumUsersStore = {
    subscribe:users.subscribe,
    setUser:(usersArray) => {
        users.set(usersArray)
    },
    addUser:(data) => {
        const newUser = {
            ...data
        }
        addUserAPI(newUser)
        users.update(items => {
            return [newUser, ...items]
        });


    },
}
export default costumUsersStore