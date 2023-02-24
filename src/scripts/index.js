import { getUser } from "./services/user.js";
import { getRepositories , getInfoRepo } from "./services/repositories.js";
import { getEvent } from "./services/events.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById('btn-search').addEventListener('click', async () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
    console.log(await getEvent(userName));
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName) {
    if(userName.length === 0) {
        alert('preencha o campo com o usúario do Github')
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)

    //const eventResponse = await getEvent(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    //user.setEvent(eventResponse)

    screen.renderUser(user)
    getEventData(userName)

}

async function getEventData(userName){
    getEvent(userName).then(reposData => {
        let eventItens = ""
        reposData.forEach(repo => {
            eventItens += `<li>${repo.repo.name} - ${repo.payload.description}</li>`
        })
        if (eventItens.length > 0) {
        document.querySelector('.profile-data').innerHTML += `<div class="eventos">
                                                                <h2>Eventos</h2>
                                                                <ul>${eventItens}</ul>
                                                              </div>`
        }else {
            document.querySelector('.profile-data').innerHTML += `<div class="eventos">
                                                                    <h2>Eventos</h2>
                                                                    <ul>${'Não possui eventos recentes (ta desatualizado em 😂)'}</ul>
                                                                  </div>`
        }
    })
}





console.log(await getInfoRepo())