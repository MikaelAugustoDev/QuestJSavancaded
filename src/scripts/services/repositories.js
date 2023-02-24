import { baseUrl, repositoriesQuantity } from "../variables.js";

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

async function getInfoRepo(userName){
    const response = await fetch('https://api.github.com/users/cadudias/repos')
    return await response.json()
}

export { getRepositories , getInfoRepo }