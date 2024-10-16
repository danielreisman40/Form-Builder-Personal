import { ref } from "vue";
import { defineStore } from "pinia";
import { pbServer } from "./pocketbase/pocketbase";

export const useAuthStore = defineStore('authStore', () => {

    const login_user = async (username:string, password:string) => {

        try {
            await pbServer.collection('users').authWithPassword(username, password);
        } catch (error) {
            alert("Username or Password is Incorrect")
        }

    };

    const logout_user = () => {
        pbServer.authStore.clear();
    };

    const sign_up_user = async (sign_up_data) => {
        try {
            await pbServer.collection('users').create(sign_up_data)
        } catch (error) {
            console.log(error)
        }
    };

    return {
        login_user,
        logout_user,
        sign_up_user,
    }

});