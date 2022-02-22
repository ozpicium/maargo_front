export function contactUs(item) {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/contact_request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),

    })
      .then(data => data.json())
   }