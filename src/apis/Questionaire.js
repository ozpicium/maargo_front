import { userId } from "../screens/Onboard";
import { userId as userID } from "../screens/GettingStarted";

export function new_onboarding(item) {
  return fetch(
    `https://maargo-lite-pm2e5.ondigitalocean.app/submit_onboarding/${userId === "" ?userID: userId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }
  ).then((data) => data.json());
}

export function retrieveOnboarding() {
  return fetch(
    `https://maargo-lite-pm2e5.ondigitalocean.app/retrieve_onboarding/${userId === "" ?userID: userId}`
  ).then((data) => data.json());
}
