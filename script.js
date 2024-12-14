//Concept script of run functionality 
const randomNumGenerator = (num) =>{
    return Math.floor(Math.random() * num);
}

//Deck array containing each card as an object 

const tarotDeck = [
    fool = {name: 'The Fool', value:['some sort of folly, brought upon by a sense of mania', 'an extravagance in intoxication', 'a sense of frenzy, one that caused exposure and feelings of betrayal']},
    magician = {name:'The Magician', value:['a sense of personal skill and self-confidence', 'a sense of pain from a loss or disaster', 'some sort of personal or mental sickness']},
    highPriestess = {name: 'The High Priestess', value:['an uncertain future, filled with secrets and mystery', 'some sort of wisdom, possibly brought on by silence and tenacity', 'a person of interest, possibly a woman']},
    empress = {name: 'The Empress', value:['fruitfulness brought about after much action', 'some sort of initiative, possibly something you may doubt', 'a sense of a clandestine unknown, possibly making things difficult amd causing ignorance']},
    emperor = {name: 'The Emperor', value:['a sense of stability and power', 'a great person, perhaps that protects or inspires', 'some sort of conviction or reason, perhaps something you hold that aids you']},
    hierophant = {name: 'The Hierophant', value:['some sort of marriage alliance, one that feels like captivity or servitude', 'some sort of marriage alliance, one that feels merciful and good', 'a sense of inspiration from someone you did not expect']},
    lovers = {name: 'The Lovers', value:['some sort of foolish attraction', 'a sense of love and beauty brought one by trials overcome', 'a beautiful person, someone whom you are attracted to']},
    chariot = {name: 'The Chariot', value:['a sense of assistance and support, perhaps a sense of spirit and nature providing care', 'a sense of triumph brought on by a sense of war in ones spirit or environment', 'a presumption vengeance, one brought on by trouble']},
    strength = {name: 'Strength', value:['a sense of power and energy both physical and spiritual', 'some sort of generosity, perhaps a magnanimous act', 'a sense of courage in action']},
    hermit = {name: 'The Hermit', value:['a sense of cautiousness in ones next action', 'some sort of treason perhaps brought upon by concealment in ones thoughts', 'a sense of roguery brought on by corruption']},
    wheelOfFortune = {name: 'The Wheel of Fortune', value:['a sense of destiny and a desire for instant happiness', 'some sort of fortune and success, perhaps one that seemed based on luck', 'a sense of increased feelings, perhaps an excessive amount']},
    justice = {name: 'Justice', value:['a sense of impartial fairness, perhaps a apathetic judgment', 'a sense of rightness in ones own actions', 'an executive decision, one that is based in strong moral principles']},
    hangedMan = {name: 'The Hanged Man', value:['some sort wisdom brought upon by trials, or perhaps wisdom brought on by intuition', 'a sense of wariness, or unwillingness to take a risks', 'some sort of sacrifice']},
    death = {name: 'Death', value:['a sense of the end, perhaps a sense of ones own mortality', 'some sort of destruction in ones environment', 'a sense of inertia']},
    temperance = {name: 'Temperance', value:['a sense of frugality, perhaps linked the economy and money', 'a sense of physical management, perhaps lacking in moderation', 'some sort of accommodation to be made, perhaps for you or someone close']},
    devil = {name: 'The Devil', value:['a sense of violence, ravage and forceful', 'some sort of vehemence, brought on by extraordinary efforts', 'a sense of fatality, one which is predestined, but not necessarily evil']},
    tower = {name: 'The Tower', value:['some sort of misery and distress brought upon by ruin', 'a sense of disgrace, perhaps brought on by poverty or deception', 'an adversity, perhaps one calamity, or else a series of misfortunes']},
    star = {name: 'The Star', value:['a sense of something lost or stolen, either physical or emotional', 'a sense of ones basic needs are lacking, perhaps causing feelings of abandonment', 'a sense of hope and brightness']},
    moon = {name: 'The Moon', value:['a sense of danger brought on by a feeling of hidden enemies', 'some sort of slander, one that was an error', 'a sense of terror in darkness, perhaps brought on by the unknown']},
    sun = {name: 'The Sun', value:['a sense of happiness and fortune in ones marriage or relationship', 'some sort of fortune in partnership', 'a sense of contentment in all aspects']},
    lastJudgment = {name: 'The Last Judgment', value:['some sort of change in position, perhaps uncovering a new perspective', 'a sense of renewal, perhaps brought on by the outcome of an action', 'a sense of weakness']},
    theWorld = {name: 'The World', value:['a sense of assured success in ones route', 'some sort of change, perhaps a physical or spiritual voyage', 'a sense of permanence'
    ]}
];
//TODO#1 started with only the greater arcana cards to simplify, add the rest of the deck


//draw card, save message and info, conditions of past present and future draws messages 
const drawCard = (arr) => {
    let num = arr.length; 
    let card = arr[randomNumGenerator(num)];
    return card;
}
//console.log(drawCard(tarotDeck));
//draw card while spread is no greater than 3, or create three different variables, but perhaps those should be for the message... and message pulls from array which then sends a random value
const getRandomValue = (obj) => {
    for (const key in obj) {
        if (Array.isArray(obj[key])){
            let valueArray = obj[key];
        for (const value of obj[key]) {
            let num = valueArray.length;
            let reading = valueArray[randomNumGenerator(num)];
            return reading;
        }
    }
    }
    //return tarotDeck[2].value[0];
   } 

//console.log(getRandomValue(drawCard(tarotDeck)));

//validation for not double drawing a card

//run tarot reading
const tarotReading = () => {

    let past = drawCard(tarotDeck);
    let present = drawCard(tarotDeck);
    let future = drawCard(tarotDeck);
    if(past === present) {
        present = drawCard(tarotDeck);
    } 
    if (past === future) {
        future = drawCard(tarotDeck);
    } 
    if (present === future) {
        present = drawCard(tarotDeck);
    } 
        return(`Welcome 
        Let us see what the cards can tell us. \n
        Your past is the ${past.name}
        and in it was ${getRandomValue(past)}. \n
        Your present is the ${present.name}
        and you are surrounded by ${getRandomValue(present)}. \n
        Your future is the ${future.name}
        and it will bring ${getRandomValue(future)}. \n
        The cards will forever change, take them as you will.`)
    }

console.log(tarotReading());