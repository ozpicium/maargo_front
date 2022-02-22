import { userId } from "../screens/GettingStarted";

export function self_assessment(item) {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/submit_self_assessment/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(item)
    })
      .then(data => data.json())
   }   

   export function get_self_assessment() {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/retrieve_self_assessment/${userId}`)
      .then(data => data.json())
  }