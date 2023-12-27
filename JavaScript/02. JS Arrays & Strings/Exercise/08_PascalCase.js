function splitter(text) {
    let regex = /[A-Z][a-z]*/g;
    let matches = text.match(regex);
    let resultString = matches.join(', ');
    console.log(resultString);
}
splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');