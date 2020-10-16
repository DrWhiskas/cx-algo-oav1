function isAPangrams(str)
{
    const  alphabet = "abcdefghijklmnopqrstuvwxyz" // this variable  contains all the alphabet's letters
    
   let lowr = str.toLowerCase(); // variable which will puts the text in lowercase 

  // for (let i=0; i<str.length; i++) 
    for (let char of alphabet) // letters incrementations
    {
       if (!lowr.includes(char)) // if the text doesn't contains all the alphabet's letters, it will return "false" 
       {
           return false
       }

    }    

    return true // if the text contains all the alphabet's letter, it will return "true"
}


console.log(isAPangrams("abcdefghijklmnopqrstuvwxyz")) // test 1 : when it's true

console.log(isAPangrams("Feel the magic in the air")) // test 2 : when it's false