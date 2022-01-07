export function sendVerificationCode(item) {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/email_id?user_email=${item}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
   }

   export function emailVerification(item) {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/verify_emailed_code?user_code_input=${item}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
   }   