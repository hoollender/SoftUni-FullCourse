function findHashtag(textToProcess){
    let regex = /#[A-Za-z]+/gm;
    let matches = textToProcess.match(regex);
    for (let word of matches) {
        word = word.replace('#','');
        console.log(word);
    }

}
findHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');