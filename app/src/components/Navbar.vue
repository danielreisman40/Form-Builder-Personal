<template>

    <nav class="bg-blue-500 dark:bg-blue-900">

        <div class="w-full flex flex-wrap p-5 justify-between">

            <div class="w-3/12 py-3 align-middle text-black text-2xl dark:text-white">
                <h1> Form Builder Application </h1>
            </div>

            <div class="flex w-4/12 py-3">
                <ul class="flex w-full justify-evenly text-xl font-bold items-center">
                    <li> 
                        <RouterLink to="/home"> Home </RouterLink>
                    </li>
                    <li> 
                        <RouterLink to="/about"> About </RouterLink>
                    </li>
                    <li> 
                        <RouterLink to="#"> Templates </RouterLink>
                    </li>

                    <div v-if="currentUserStore.user">
                        <li>
                            <button type="submit" @click="logout"> Logout </button>
                        </li>
                    </div>

                    <div v-else>
                        <li>
                            <RouterLink to="/user/login"> Login </RouterLink>
                        </li>
                    </div>

                </ul>

            </div>

        </div>

    </nav>

    <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router';
import { useCurrentUserStore } from '@/stores/pocketbase/pocketbase';
import {useAuthStore} from '@/stores/authStore'


const currentUserStore = useCurrentUserStore();

const logout = () => {
    useAuthStore().logout_user();
    router.push({path: "/home"})
}

</script>


<style scoped>

ul li a,
ul li a:after,
ul li a:before,
ul li button:after,
ul li button:before{
  transition: all .5s;
}

nav ul li a:hover, nav ul li button:hover {
  color: white;
}

ul li a, ul li button {
    position: relative;
}


ul li a::after, ul li button:after{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: #aaa;
    height: 1px;
}

ul li a:hover::after, ul li button:hover::after {
    width: 100%;
}

</style>