export function setAnonId(item) {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/set_anon_id?user_input=${item}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
   }   