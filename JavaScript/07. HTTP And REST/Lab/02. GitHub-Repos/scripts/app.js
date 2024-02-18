function loadRepos() {
   const baseURL = 'https://api.github.com/users/testnakov/repos';
   const divContent = document.getElementById("res");

   fetch(baseURL)
      .then(res => res.text())
      .then(result => {
         divContent.textContent = result;
      })
}