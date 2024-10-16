<template>

    <div>
        <div class="flex justify-center pt-36 w-screen items-center">
            <div class="w-full md:w-1/2 flex flex-col items-center ">
                <!-- text login -->
                <h1 class="text-center text-2xl font-bold text-gray-600 mb-6 dark:text-white">
                    LOGIN
                </h1>

                <!-- email input -->
                <div class="w-3/4 mb-6">
                    <input type="email" name="email" id="email" v-model="username" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold text-black rounded hover:ring-1 outline-blue-500" placeholder="Email or User Name">
                </div>

                <!-- password input -->
                <div class="w-3/4 mb-6">
                    <input type="password" name="password" id="password" v-model="password" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold text-black rounded hover:ring-1 outline-blue-500 " placeholder="Password">
                </div>

                <!-- remember input -->
                <div class="w-3/4 flex flex-row justify-between">
                    <div class=" flex items-center gap-x-1">
                        <input type="checkbox" name="remember" id="" class=" w-4 h-4  ">
                        <label for="" class="text-sm text-slate-400">Remember me</label>
                    </div>
                    <div>
                        <a href="#" class="text-sm text-slate-400 hover:text-blue-500">Forgot?</a>
                    </div>
                </div>
                
                <!-- button -->
                <div class="w-3/4 mt-4">
                    <button type="submit" @click="doLogin" class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN </button>

                    <br>
                    <br>

                    <button type="submit" @click="toSignUp" class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> CREATE ACCOUNT </button>
                </div>

            </div>
        </div>
    </div> 

</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import {useAuthStore} from '../../stores/authStore'
    import router from '@/router';

    const authStore = useAuthStore();

    const username = ref("");
    const password = ref("");

    function doLogin() {
         
        if(!username.value || !password.value) {
            alert("Please enter username or password")
        }

        else {

            authStore.login_user(username.value, password.value);
                
            username.value = "";
            password.value=""

            router.push({path: '/home'})

        }
    }

    function toSignUp():void {
        router.push({path: "/user/signup"})
    }

</script>

<style scoped>

</style>