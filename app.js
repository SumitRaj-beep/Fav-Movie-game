let favouritemovie="Avatar";
let guess=prompt("GUESS THE MOVIE");
while((guess!=favouritemovie) && (guess!="quit")){

    
    guess=prompt("WRONG GUESS, guess again");

}

if(guess==favouritemovie){
    console.log("Congrats u won!");
}
else {
    console.log("you quit.")
}