

// Задача №1
//відповідь до завдання пишемо під цим рядком
const button = document.querySelector('.task-one .btn');
button.addEventListener('click', showText);

/*
Коментар 1:
1) Увесь код має одночасно працювати на сторінці, тобто виконані завдання не треба коментувати
2) В умові написано, що це має бути не просто .btn,  а .btn, що лежить в .task-one 
Зараз просто пощастило, що ця кнопка перша буде, бо querySelector обере саме перший елемент з подібним класом серед усіх, що є на сторінці
Статус: виконано, треба виправити
*/

// Задача №2
//відповідь до завдання пишемо під цим рядком

 const butTasck2 = document.querySelector('.task-two .btn');
 butTasck2.addEventListener('click', showText);

 const cleanBtn =  document.querySelector('.task-two .btn-green');
 const outputHide = document.querySelector('.task-two .output');
    cleanBtn.addEventListener('click', function(){
        outputHide.textContent = '';
    });
/*
Коментар 2:
Статус: не виконано
*/


// Задача №3
//відповідь до завдання пишемо під цим рядком


const btn = document.querySelector('.task-three .btn').addEventListener('click', getText);
const outputThree = document.querySelector('.task-three .output');
function getText(){ 
    const inputText = document.querySelector('.task-three .input').value;
    outputThree.innerHTML = inputText;

    if (inputText === ''){
     outputThree.textContent = 'Заповніть поле вводу';
        const errorText = document.querySelector('.task-three');
              errorText.classList.add('error');
    
    }
  
    if (inputText !== ''){
           const errorText = document.querySelector('.task-three');
                 errorText.classList.remove('error');
       
       }

} 

/*
Коментар 3:
1) Основні DOM-елементи слід виносити в окремі змінні, щоб не було плутанини і не писати кожен раз document.querySelector...
2) Варто форматувати код, щоб прибрати зайві відступи та пробіли
Статус: виконано, є допрацювання
*/


//Задача №4
//відповідь до завдання пишемо під цим рядком

const btnForm = document.querySelector('.task-four .js-btn-4').addEventListener('click', validateText);
const userName = document.querySelector('.form-group .input');
const messageText = document.querySelector('.form-group .textarea');
const resultOutput = document.querySelector('.task-four .js-output-4');




function validateText() {

if(messageText.value === '' && userName.value === ''){
    resultOutput.textContent = 'Заповніть обидва поля';
    userName.closest('.form-group').classList.add('error');
    messageText.closest('.form-group').classList.add('error');

} else if (userName.value === ''){
    resultOutput.textContent = 'Заповніть поле Імя';
    userName.closest('.form-group').classList.add('error');
} else if (messageText.value === ''){
    resultOutput.textContent = 'Заповніть поле Повідомлення';
    messageText.closest('.form-group').classList.add('error');
} else {
    resultOutput.textContent = 'Дякуємо ' + userName.value +' ваше повідомлення відправлене!';
    userName.closest('.form-group').classList.remove('error');
    messageText.closest('.form-group').classList.remove('error');
    }
}

/*
Коментар 4:
1) https://i.imgur.com/lbl6rbm.jpg - якщо в першому полі є текст, то треба знімати клас з помилкою
2) https://i.imgur.com/v3ZHNjH.jpg - так само і з другим полем
3) https://i.imgur.com/ufZIE0m.jpg - тут не потрібна ще одна перевірка. Ми вже все перевірили до цього. Останній else якраз і каже нам, що в усіх інших випадках зробити те, що ми напишемо))
Статус: треба допрацювати логіку додавання/прибирання класу з помилкою, прибрати зайву перевірку

*/

//Задача №5
//відповідь до завдання пишемо під цим рядком

const btnCheck = document.querySelector('.task-five .js-btn-5').addEventListener('click', checkBox);
const checkVector = document.querySelector('.checkbox');
const outputCkeck = document.querySelector('.js-output-5');


function checkBox(){
 if(checkVector.checked){
    outputCkeck.textContent = 'Відмічено';
    outputCkeck.classList.remove('error');
 } else {
    outputCkeck.textContent = 'не відмічено';
    outputCkeck.classList.add('error');
 }
}
/*
Коментар 5:
1) Думаю, слід також прибирати клас з помилкою, коли "Відмічено". Інакше дивно виглядає
Статус: виконано; додати прибирання класу при "виконано"

*/


//Задача №6
//відповідь до завдання пишемо під цим рядком


const newMesseger = document.querySelector('.form-group .text-6') ;
const showOutput = document.querySelector('.task-six .js-output-6');

newMesseger.addEventListener('input', showTypingText )

 function showTypingText(){

    showOutput.innerHTML =  newMesseger.value;
    
 }

/*
Коментар 6:
Статус: виконано;

*/



//Задача №7
//відповідь до завдання пишемо під цим рядком


const choiceSelector = document.querySelector('.form-group .js-select-7') ;
const resaultChoice = document.querySelector('.task-six .js-output-7');

    choiceSelector.addEventListener('change', showOption);


function showOption() {
    resaultChoice.textContent = 'Ваша оцінка: ' + choiceSelector.value +'';

}

/*
Коментар 7:
Статус: виконано;

*/