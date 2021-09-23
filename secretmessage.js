let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Removing the last string from the array
secretMessage.pop();
//Confirming my update on the array by logging to the console
console.log(secretMessage.length);
//Adding two strings to the array using the .push() method
secretMessage.push('to', 'Program');
// changing the string 'easily' to 'right
secretMessage[7]='right';
//Removing the firs string element
secretMessage.shift();
//Adding the string 'programming' to the beginning of the element
secretMessage.unshift('Programming');
//Removing and replacing some strings with "know" using the .splice method
secretMessage.splice(6, 1, 'know');
secretMessage.splice(7, 1, 'know');
secretMessage.splice(8, 1, 'know');
secretMessage.splice(9, 1, 'know');
secretMessage.splice(10, 1, 'know');
// printing secret message array as a sentence
console.log(secretMessage.join(' '));