export function getHelplines() {
    return fetch('https://maargo-lite-pm2e5.ondigitalocean.app/helplines')
      .then(data => data.json())
  }