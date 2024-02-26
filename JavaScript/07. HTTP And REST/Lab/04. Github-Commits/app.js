function loadCommits() {

    const usernameField = document.getElementById("username");
    const usernameAsText = usernameField.value;
    const repoField = document.getElementById("repo");
    const repoAsText = repoField.value;

    const unorderedList = document.getElementById("commits");
    console.log(unorderedList);

    const baseURL = `https://api.github.com/repos/${usernameAsText}/${repoAsText}/commits`

    unorderedList.innerHTML = '';

    fetch(baseURL)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error: ${res.status} (Not Found)`);
            }
            return res.json();
        })
        .then(result => {
            const commits = result;
            addListItem(commits, unorderedList);
        })
        .catch(error => {
            console.error('Error fetching commits:', error);
            const errorLiItem = document.createElement("li");
            errorLiItem.textContent = `Error: ${error.message}`;
            unorderedList.appendChild(errorLiItem);
        });
}
function addListItem(commits, unorderedList) {
    for (const commit of commits) {
        const newLiItem = document.createElement("li");

        const authorName = commit.commit.author.name;
        console.log(authorName)
        const commitMessage = commit.commit.message;
        newLiItem.textContent = `${authorName}: ${commitMessage}`
        unorderedList.appendChild(newLiItem);
    }
}