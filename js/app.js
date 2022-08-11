let yourName = prompt("What is your name ?");

let gender = prompt("What is your gender ?");

let age = prompt("Who old are you ?");
if(age <= 0)
{
    alert("Your age invaild")
}

let result = confirm("Do you want to show a welcoming message ?")

if(result)
{
    if(gender == "male"){
        alert(`Welcome Mr ${yourName ? yourName : ""}`);
    }else if(gender == "female"){
        alert(`Welcome Ms ${yourName ? yourName : ""}`);
    }else{
        alert(`Welcome`);
    }
}

const array_questions = [];

let q1 = prompt("Are you a software engineer ?")
array_questions[0] = q1
let q2 = prompt("Are you tooler than 1.80cm ?")
array_questions[1] = q2
let q3 = prompt("you marrie ?")
array_questions[2] = q3


for(let i = 0; i < array_questions.length; i++)
{
    switch(array_questions[i])
    {
        case "Yes" :
        array_questions[i] = "Yes"
        break;
    
        case "y" :
        array_questions[i] = "y"
        break;
    
        case "No" :
        array_questions[i] = "No"
        break;
    
        case "n" :
        array_questions[i] = "n"
        break;
    
        default : 
        array_questions[i] = "Invalid"
        break;
    
    }

    console.log(array_questions[i]);

}


let stars = prompt("How many stars you rate the questions ?")
if(stars == 0)
{
    alert("Thank you")
}else if(stars == 1){
    alert("Thank you for *")
}else if(stars == 2){
    alert("Thank you for **")
}else if(stars == 3){
    alert("Thank you for ***")
}else if(stars == 4){
    alert("Thank you for ****")
}else if(stars == 5){
    alert("Thank you for *****")
}else{
    alert("Thank you for visiting my site")
}

