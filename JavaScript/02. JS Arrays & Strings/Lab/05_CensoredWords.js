function censoringWords(sentence, word){
    const regex = new RegExp(word,"g");
    const replacement = "*". repeat(word.length);
    console.log(sentence.replace(regex, replacement));
}
censoringWords('A small sentence with some words', 'small');