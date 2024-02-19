function loadRepos() {
	const usernameField = document.getElementById("username");
	const usernameAsText = usernameField.value;
	// Takes the username from input field and turns it into plain text.

	const reposList = document.getElementById("repos");

	reposList.innerHTML = '';

	const baseURL = `https://api.github.com/users/${usernameAsText}/repos`;
	// Substitutes the username from input and pastes it URL.

	if (usernameAsText === "") {
		// Display an error message, alert, or any other indication that the field is empty
		console.error('Username cannot be empty.');
		return; // Stop execution if the field is empty
	}
	fetch(baseURL)
		.then(res => {
			// Check if the response status is ok
			if (!res.ok) {
				throw new Error(`Error: ${res.status} - ${res.statusText}`);
			}
			return res.json();
		})
		.then(result => {
			const repositories = Object.values(result);
			createLiItem(repositories, reposList);
			console.log(reposList);
			usernameField.value = '';
		})
		.catch(error => {
			// Handle errors, e.g., display an error message in the list
			console.error('Error fetching data:', error);
			const errorLiItem = document.createElement("li");
			errorLiItem.textContent = `Error: ${error.message}`;
			reposList.appendChild(errorLiItem);
		});
}
function createLiItem(repos, reposList) {
	for (const repository of repos) {
		const newLiItem = document.createElement("li");
		// Extracting full_name and html_url from 
		const fullName = repository.full_name;
		const htmlUrl = repository.html_url;

		// Creating a link and setting its attributes
		const link = document.createElement("a");
		link.href = htmlUrl;
		link.textContent = fullName;

		// Appending the link to the list item
		newLiItem.appendChild(link);

		// Appending the list item to the reposList
		reposList.appendChild(newLiItem);
	}
}
