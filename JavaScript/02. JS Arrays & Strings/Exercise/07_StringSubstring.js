function stringSubstring(word, text) {
    let smallLettersArr = text.toLowerCase().split(" ");
    let output = `${word} not found!`;
    for (let element of smallLettersArr) {
        if (element === word) {
            output = word;

        }
    }

    console.log(output);

}
stringSubstring('javascript', 'JavaScript is the best programming language')
stringSubstring('python',
    'JavaScript is the best programming language'
)