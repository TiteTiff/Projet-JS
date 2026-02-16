// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.splice(21, 1);
console.log(secretMessage);

secretMessage.splice(secretMessage.length, 0, "to", "program");
console.log(secretMessage);

secretMessage.splice(6, 1, 'right');
console.log(secretMessage);

secretMessage.splice(0, 1);
console.log(secretMessage);

secretMessage.splice(0, 0, "Programming");
console.log(secretMessage);

secretMessage.splice(5, 5, "know");
console.log(secretMessage);

console.log(secretMessage.join(" "))