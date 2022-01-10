fetch("https://numbersapi.p.rapidapi.com/random/trivia?json=true", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "fea525fcc8msh8a1cf1b053c08fep16b93djsn3b021f26bc78"
	}
})
.then(response => {
	return response.json();
})
.then(data => {
	const fact = data.text;
    const factElement = document.getElementById('factElement');

    factElement.innerHTML = fact;
});