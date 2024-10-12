import { ref, computed} from 'vue'
import { defineStore } from 'pinia';
import PocketBase from 'pocketbase';

export const pbServer = new PocketBase('http://127.0.0.1:8090');

export const useCurrentUserStore = defineStore('currentUser', () => {

    const user = ref(pbServer.authStore.model);

    pbServer.authStore.onChange((auth) => {
        console.log('authStore changed', auth);
        user.value = pbServer.authStore.model
    });
  
    return {user}
 
});

