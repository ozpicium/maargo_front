import { userId } from "../screens/GettingStarted"

export function getWelcomeChat() {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/chat_transcript/${userId}`)
      .then(data => data.json())
  }

  export function userResponse(item) {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/chat_user_response/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(item)
    })
      .then(data => data.json())
   }

   export function reStart() {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/chat_restart/${userId}`)
      .then(data => data.json())
  }