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