<template>

    <div class="flex justify-center pt-36 w-screen items-center">
                <div class="w-full md:w-1/2 flex flex-col items-center ">
                    <!-- text login -->
                    <h1 class="text-center text-2xl font-bold text-gray-600 mb-6 dark:text-white">
                        CREATE ACCOUNT
                    </h1>

                    <!-- Email input -->
                    <div class="w-3/4 mb-6">
                        <input type="email" name="email" id="email" v-model="user_data.email" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold text-black rounded hover:ring-1 outline-blue-500" placeholder="Email">
                    </div>

                    <!-- Username input -->
                    <div class="w-3/4 mb-6">
                        <input type="text" name="username" id="username" v-model="user_data.username" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold text-black rounded hover:ring-1 outline-blue-500" placeholder="Username">
                    </div>

                    <!-- Password input -->
                    <div class="w-3/4 mb-6">
                        <input type="password" name="password" id="password" v-model="user_data.password" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold text-black rounded hover:ring-1 outline-blue-500 " placeholder="Password">
                    </div>

                    <!-- Confirm Password Input -->
                    <div class="w-3/4 mb-6">
                        <input type="password" name="confirm_password" id="confirm_password" v-model="user_data.passwordConfirm" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold text-black rounded hover:ring-1 outline-blue-500 " placeholder="Confirm Password">
                    </div>

                    <!-- button -->
                    <div class="w-3/4 mt-2">
                        <button type="submit" @click="doSignUp(user_data)" class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> CREATE ACCOUNT </button>
                    </div>

                </div>
    </div>

</template>

<script setup lang="ts">

    import {ref} from 'vue'
    import {useAuthStore} from '../../stores/authStore'
    import router from '@/router';
    import { reactive } from 'vue';

    const auth_store = useAuthStore(); 

    const user_data = reactive({
        email: ref(""),
        username: ref(""),
        password: ref(""),
        passwordConfirm: ref("")
    });

    //const confirm_password = ref("");

    function doSignUp(sign_up_data):void {
        //authStore.signUpUser(data)

        sign_up_data = user_data;

        if(sign_up_data.password !== sign_up_data.passwordConfirm) {
            alert("Passwords do not match! Please ensure password match. ");
            return;
        }

        else {
            console.log(sign_up_data);
            auth_store.sign_up_user(sign_up_data)
            auth_store.login_user(sign_up_data.username, sign_up_data.password);
            router.push({path: '/home'})
            return;
        }
        
    }

</script>

<style scoped>

</style>