export function login(item) {
    return fetch(`https://maargo-lite-pm2e5.ondigitalocean.app/login?anon_id=${item}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
   }