//Concept script of run functionality 
const randomNumGenerator = (num) =>{
    return Math.floor(Math.random() * num);
}

//Deck array containing each card as an object 

const tarotDeck = [
    fool = {name: '', value:[]},
    magician = {name:'The Magician', value:['a sense of personal skill and self-confidence', 'a sense of pain from a loss or disaster', 'some sort of personal or mental sickness']},
    highPriestess = {name: 'The High Priestess', value:[]},
    empress = {name: '', value:[]},
    emperor = {name: '', value:[]},
    hierophant = {name: '', value:[]},
    lovers = {name: '', value:[]},
    chariot = {name: '', value:[]},
    strength = {name: '', value:[]},
    hermit = {name: '', value:[]},
    wheelOfFortune = {name: '', value:[]},
    justice = {name: '', value:[]},
    hangedMan = {name: '', value:[]},
    death = {name: '', value:[]},
    temperance = {name: '', value:[]},
    devil = {name: '', value:[]},
    tower = {name: '', value:[]},
    star = {name: '', value:[]},
    moon = {name: '', value:[]},
    sun = {name: '', value:[]},
    lastJudgment = {name: '', value:[]},
    theWorld = {name: '', value:[]}
];
//TODO#1 started with only the greater arcana cards to simplify, add the rest of the deck


//draw card, save message and info, conditions of past present and future draws messages 
//validation for not double drawing a card

//run tarot reading