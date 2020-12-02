const msg = document.querySelector('.msg');
const guess = document.querySelector('input')
const btn = document.querySelector('.btn')
let play = false;
let newWords = "";
let randomWords = "";
let sWords = ['python', 'javascript', 'c++', 'php', 'java', 'c#', 'html', 'css', 'reactjs', 'angular', 'swift', 'android', 'sql'];

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempSwords = sWords[ranNum];
    console.log(newTempSwords.split(""));
    return newTempSwords;

}

const crambleWords = (arr) => {
    for (let i = arr.length-1; i > 0; i--) {
        let temp = arr[i]
        //console.log(temp);
        let j = Math.floor(Math.random() * (i + 1))

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', ()=> {
    if(!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randomWords = crambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess THe Word: ${randomWords}`;
    }else{
        let tempWord = guess.value;
        if(tempWord === newWords) {
            play = false;
            msg.innerHTML = `Awsome It's Correct. it is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }else{
            msg.innerHTML = `Sorry It's Incorrect. Please try Again ${randomWords}`;
        }
    }
})