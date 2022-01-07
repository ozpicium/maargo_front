export function new_onboarding(item) {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/onboarding`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(item)
    })
      .then(data => data.json())
   }   