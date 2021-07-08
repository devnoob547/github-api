async function getRepos() {
  try {
    const response = await fetch('https://api.github.com/users/devnoob547/repos')
    const data = await response.json()

    show(data)
  } catch (error) {
    console.error(error)
  }
}

getRepos()

function show(repos) {
  let output = ''

  for(let repo of repos) {
    output += `<div class="repo">
      <a href="${repo.html_url}">
        <h2>${repo.name}</h2>
      </a>
      <p>${repo.description ? repo.description : ''}</p>

      <span class="language">${repo.language ? repo.language : ''}</span>
    </div>`
  }

  document.querySelector('main .repos').innerHTML = output
}