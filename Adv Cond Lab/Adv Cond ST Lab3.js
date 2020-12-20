function vowelOrConsenant(letter){

    var englishLetter = letter.toLowerCase();
    if(englishLetter == "a" || englishLetter == "e" || englishLetter == "i" || englishLetter == "o" || englishLetter == "u"){
        console.log("Vowel");
    }else{
        console.log("Consonant");
    }
}
vowelOrConsenant("a");
vowelOrConsenant("x");
vowelOrConsenant("E");
vowelOrConsenant("i");
vowelOrConsenant("b");