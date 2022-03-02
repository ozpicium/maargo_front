import { userId } from "../screens/GettingStarted";

export function logout() {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/logout/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
   }

   export function deleteAccount() {
       return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/delete_account/${userId}`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
       })
         .then(data => data.json())
      } 