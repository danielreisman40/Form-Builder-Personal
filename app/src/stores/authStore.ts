import { ref } from "vue";
import { defineStore } from "pinia";
import { pbServer } from "./pocketbase/pocketbase";

export const useAuthStore = defineStore('authStore', () => {

    const loginUser = async (username:string, password:string) => {

        try {
            await pbServer.collection('users').authWithPassword(username, password);
        } catch (error) {
            alert("Username or Password is Incorrect")
        }

    };

    const logoutUser = () => {
        pbServer.authStore.clear();
    };

    const signUpUser = async (data:object) => {
        try {
            await pbServer.collection('users').create(data)

            await loginUser;
        } catch (error) {
            console.log(error)
        }
    };

    return {
        loginUser,
        logoutUser,
        signUpUser,
    }

});