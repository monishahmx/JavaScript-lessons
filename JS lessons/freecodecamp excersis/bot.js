/*You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's from, and its favorite programming language, respectively.
You should log "My name is (botName) and I live on (botLocation)." to the console.
You should log "My favorite programming language is (favoriteLanguage)." to the console.
You should use let to create a codingFact variable and assign it a string that is a fun fact about the bot's favorite programming language, using the favoriteLanguage variable.
You should log the codingFact to the console.
You should reassign the codingFact variable to a new fact about the bot's favorite programming language using the favoriteLanguage variable again.
You should log the codingFact to the console again.
You should reassign the codingFact variable to a third fact about the bot's favorite programming language using the favoriteLanguage variable again.
You should log the codingFact to the console a third time.
You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the console as a farewell statement from the bot.
*/

console.log(`Hello! I'm your coding fun fact guide!`);
let botName = `Teacher`;
let botLocation = `Universe`;
let favoriteLanguage = `JavaScript`;

console.log(`My name is ${botName} and I live on ${botLocation}.`);
console.log(`My favorite programming language is ${favoriteLanguage}.`);

let codingFact;
codingFact = `The fun fat about the ${favoriteLanguage} is its dynamically typed langauge`;
console.log(codingFact);

codingFact = `The second fun fact about ${favoriteLanguage} is that it adds functionality to the webpage`;

console.log(codingFact);
codingFact = `The Third fun fact about ${favoriteLanguage} is that it is  supports both functional and object-oriented programming`;

console.log(codingFact);
console.log(
  `It was fun sharing these facts with you. Goodbye! - ${botName} from ${botLocation}.`,
);
