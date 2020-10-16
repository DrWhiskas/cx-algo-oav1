let nbWord = 0 // variable containing the number of words

function howManyCamelCase(str)  // function to count the number of word with  "str" as argument 
{
     for (let i = 0; i < str.length; i++) // initialisation of our variable "i" to 
     {
        const code = str.charCodeAt(i) 

        if (code >= 65 && code <= 90) // ASCII  table ; if the text contains uppercase letters, the nbWord variable will be incremented
        {
            nbWord++ // incrementation of the variable
        }
     }

    return nbWord // returning the variable 
}


console.log(howManyCamelCase('howManyCamelCase')) // function call
