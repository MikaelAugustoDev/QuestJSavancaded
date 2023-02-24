import { baseUrl } from "../variables.js";

async function getEvent(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=10`)
    return await response.json()
}

export { getEvent }