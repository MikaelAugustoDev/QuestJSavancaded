const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto de Perfil">
                                            <div clas="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                                <p>${user.bio ?? 'Não possui bio cadastrado 😢'}</p>
                                                <div class="followers-following">
                                                    <div class="followers">
                                                        <h3>Seguidores</h3>
                                                        <p>${user.followers ?? 'Não possui seguidores 😢'}</p>
                                                    </div>
                                                    <div class="following">
                                                        <h3>Seguindo</h3>
                                                        <p>${user.following ?? 'Não segue ninguém (anti-social 😢)'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                      </div>`

                                      

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li>    
                                                                    <a href="${repo.html_url}" target:"_blank">${repo.name}
                                                                        <div class="inforepo">
                                                                            <p>🍴 ${repo.forks}</p>
                                                                            <p>⭐ ${repo.stargazers_count}</p>
                                                                            <p>👀 ${repo.watchers}</p>
                                                                            <p>👨‍💻 ${repo.language}</p>
                                                                        </div>
                                                                    </a>
                                                                </li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML +=   `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }else {
            this.userProfile.innerHTML +=   `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${'Não Possui Repositorios (vai codar vagabundo😂)'}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usúario não encontrado</h3>'
    }
}

export { screen }