export function self_assessment(item) {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/self_assessment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(item)
    })
      .then(data => data.json())
   }   