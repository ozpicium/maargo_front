export function getBlogs() {
    return fetch('https://maargo-lite-pm2e5.ondigitalocean.app/blogs')
      .then(data => data.json())
  }