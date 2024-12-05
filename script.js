//Concept script of run functionality 
const randomNumGenerator = (num) =>{
    return Math.floor(Math.random() * num);
}

//Deck array containing each card as an object 

const tarotDeck = [
    fool = {name: 'The Fool', value:[]},
    magician = {name:'The Magician', value:['a sense of personal skill and self-confidence', 'a sense of pain from a loss or disaster', 'some sort of personal or mental sickness']},
    highPriestess = {name: 'The High Priestess', value:['an uncertain future, filled with secrets and mystery', 'some sort of wisdom, possibly brought on by silence and tenacity', 'a person of interest, possibly a woman']},
    empress = {name: 'The Empress', value:['fruitfulness brought about after much action', 'some sort of initiative, possibly something you may doubt', 'a sense of a clandestine unknown, possibly making things difficult amd causing ignorance']},
    emperor = {name: 'The Emperor', value:[]},
    hierophant = {name: 'The Hierophant', value:[]},
    lovers = {name: 'The Lovers', value:[]},
    chariot = {name: 'The Chariot', value:[]},
    strength = {name: 'Strength', value:[]},
    hermit = {name: 'The Hermit', value:[]},
    wheelOfFortune = {name: 'The Wheel of Fortune', value:[]},
    justice = {name: 'Justice', value:[]},
    hangedMan = {name: 'The Hanged Man', value:[]},
    death = {name: 'Death', value:[]},
    temperance = {name: 'Temperance', value:[]},
    devil = {name: 'The Devil', value:[]},
    tower = {name: 'The Tower', value:[]},
    star = {name: 'The Star', value:[]},
    moon = {name: 'The Moon', value:[]},
    sun = {name: 'The Sun', value:[]},
    lastJudgment = {name: 'The Last Judgment', value:[]},
    theWorld = {name: 'The World', value:[]}
];
//TODO#1 started with only the greater arcana cards to simplify, add the rest of the deck


//draw card, save message and info, conditions of past present and future draws messages 
const drawCard = (arr) => {
    let num = arr.length; 
    return arr[randomNumGenerator(num)];
}
//console.log(drawCard(tarotDeck));
//draw card while spread is no greater than 3, or create three different variables, but perhaps those should be for the message... and message pulls from array which then sends a random value

//validation for not double drawing a card

//run tarot reading