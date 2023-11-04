//Navbar

const navlist = document.querySelector(".navlist");
const iTag = document.querySelector(".menu");
const close = document.querySelector(".close");

iTag.addEventListener('click', () => {
    navlist.classList.add("show");

    close.addEventListener('click', () => {
        navlist.classList.remove("show");
    });
});


// Thime Selection 

const time = document.querySelector(".time");

function getTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = (hour < 10)? `0${hour}`:hour;
    hour = (hour > 12)? `0${hour - 12}` : hour;
    minute = (minute < 10)? `0${minute}`:minute;
    second = (second < 10)? `0${second}`:second;
    ampm = (hour >= 12)? "PM" : "AM";

    time.innerHTML = `${hour} : ${minute} : ${second} ${ampm}`;

}

setInterval(function(){
    getTime();
}, 1000);



// Dark theme 

const theme = document.querySelector(".theme");
const body = document.body;
const logo = document.querySelector(".logo");

theme.addEventListener(
    'click',
    () => {
        body.classList.toggle("dark");
        logo.classList.toggle("white");
    }
)

// Image slider 

const slides = document.querySelectorAll(".img-slider");
let counter = 0;

slides.forEach(
    function(slide , index){
        slide.style.left = `${index * 100}%`;
    }
)

const preImage = () => {
    counter--;
    if(counter < 0){
        counter = 0;
    }
    setImage();
}

const nexImage = () => {
    counter++;
    if(counter === slides.length){
        counter = 0;
    }
    setImage();
}

const setImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

// Quize Section 

const question = [
    {
        'ques' : 'Which is the following Elon Musk Company?',
        'a' : 'Google',
        'b' : 'Microsolt',
        'c' : 'Tesla',
        'd' : 'Amazon',
        'currect' : 'c'
    },
    {
        'ques' : 'Witch is the richesd country in the world?',
        'a' : 'America',
        'b' : 'China',
        'c' : 'Japan',
        'd' : 'Singapur',
        'currect' : 'b'
    },
    {
        'ques' : 'International Currency is -',
        'a' : 'Dollar',
        'b' : 'Rupi',
        'c' : 'Taka',
        'd' : 'Diner',
        'currect' : 'a'
    },
    {
        'ques' : 'Which is the world largest forest?',
        'a' : 'Sundarban',
        'b' : 'Amazon',
        'c' : 'Atlantic Forest',
        'd' : 'Crooked Forest',
        'currect' : 'b'
    },
    {
        'ques' : 'Which is the Most heighest Building in the world?',
        'a' : 'Burj Khalifa',
        'b' : 'Shanghai Tower',
        'c' : 'China Zun',
        'd' : 'Lakhta Center',
        'currect' : 'a'
    },
    
]

const ques_line = document.querySelector(".ques-line");
const option = document.querySelectorAll(".option");
let index = 0;

let total = question.length;
let right = 0;
let wrong = 0;

const placeQuize = () => {
    reset();
    if(index === total){
        setTimeout(() => {
            return endQuize();
        }, 2000)
    }
    const data = question[index];
    ques_line.innerHTML = data.ques;

    option[0].nextElementSibling.innerHTML = data.a;
    option[1].nextElementSibling.innerHTML = data.b;
    option[2].nextElementSibling.innerHTML = data.c;
    option[3].nextElementSibling.innerHTML = data.d;
}

const submitQuize = () => {
    const data = question[index];
    const ans = getvalue();
    if(ans === data.currect){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    placeQuize();
    return;
}

const getvalue = () => {
    let answer;
    option.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    option.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuize = () => {
    document.querySelector(".Quize").innerHTML = `
    <div style="text-align:center">
    <h4> Thanks For Playing..</h4>
    <h4> You got ${right} right and ${wrong} wrong answer.
    </div>
    `;
}


placeQuize();


// Todo Section 


const inptToDo = document.querySelector(".inptToDo");
const liToDo = document.querySelector(".li-todo");

inptToDo.addEventListener(
    'keypress',
    (event) => {
        if(event.key === "Enter"){
            getInput(inptToDo.value);
            inptToDo.value = "";
        }
    }
);

const getInput = (input) => {
    const li = document.createElement("li");
    li.innerHTML = `${input} <i class="fa-solid fa-xmark"></i>`;
    liToDo.appendChild(li);

    li.addEventListener(
        'click',
        () => {
            li.classList.toggle("done");
        }
    )
    li.querySelector("i").addEventListener('click', () => {
        li.remove();
    })
}


//Random Color Section


const createColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNumber.toString(16);
    
    document.querySelector(".random-color").style.backgroundColor = randomColor;
    const colour = document.querySelector(".colour");
    colour.innerHTML = randomColor;

    colour.addEventListener('click', () => {
        navigator.clipboard.writeText(randomColor);
    })
}

document.querySelector(".clickMe").addEventListener('click', () => {
    createColor();
})

// date section 

function setDate () {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September','October', 'Novembar', 'December'];
    const date = new Date();
    const getDay = date.getDate();
    const getMonth = date.getMonth();
    let setMonth = month[getMonth];
    const getYear = date.getFullYear();

    document.querySelector(".D-M-Y").innerHTML = `${getDay}<sup>th</sup> ${setMonth}, ${getYear}`;
}

setDate();