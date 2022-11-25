let func = (num1, num2) => {
    if(num1 > num2){
        return console.log(num2);
    }else if(num1 < num2){
        return console.log(num1)
    }else if(num1 = num2){
        return console.log("!")
    }else{
        alert("ERROR!")
    }
}

func(20, 10);
func(20, 35);
func(50, 50);
func("some word");

let a = prompt("Введите что-нибудь: ")

if(a){
    const showLength = () => {
        console.log(a.length)
    }
}

showLength();

let firstNum = document.querySelector(".firstNum");
    secondNUm = document.querySelector(".secondNum");

let plus = document.querySelector(".plus");
    minus = document.querySelector('.minus');
    multiply = document.querySelector(".multiply");
    division = document.querySelector(".division");

    let op;
    let result;

    const calck = () => {
        switch(op){
            case "+":
                result = +firstNum.value + +secondNUm.value;
                break;
            case "-":
                result = +firstNum.value - +secondNUm.value;
                break;
            case "*":
                result = +firstNum.value * +secondNUm.value;
                break;
            case "/":
                result = +firstNum.value / +secondNUm.value;
                break;
        };
    }

    plus.addEventListener("click", () => {
        op = "+";
        calck();
        console.log(result);
    })

    minus.addEventListener("click", () => {
        op = "-";
        calck();
        console.log(result);
    })

    multiply.addEventListener("click", () => {
        op = "*";
        calck();
        console.log(result);
    })

    division.addEventListener("click", () => {
        op = "/";
        calck();
        console.log(result);
    })

