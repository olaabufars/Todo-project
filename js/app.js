/*var name = window.prompt("Enter your name: ");
var gender = window.prompt("Enter your gender: ");
var age;
var skip_not;
/*while(gender != "female" && gender != "male"){
    var gender = window.prompt("Enter your gender: ");
}:(

switch(gender) {
    case "female":
        {age = window.prompt("Enter your age: ");
        while(age <= 0){
            alert("your age is less than zero or equal");
            age = window.prompt("Enter your age: ");
        }
        skip_not = confirm("press ok if you want skip welcome message");if(skip_not == 0){alert("Your Welcome Ms "+name);}}
      break;
    case "male":
        {age = window.prompt("Enter your age: ");while(age <= 0){
            alert("your age is less than zero or equal");
            age = window.prompt("Enter your age: ");
        }skip_not = confirm("press ok if you want skip welcome message");if(skip_not == 0){alert("Your Welcome Mr "+name);}}
      break;
    default:
        {age = window.prompt("Enter your age: ");while(age <= 0){
            alert("your age is less than zero or equal");
            age = window.prompt("Enter your age: ");
        }skip_not = confirm("press ok if you want skip welcome message");if(skip_not == 0){alert("Your Welcome  "+name);}}
  }*/

/*var age = window.prompt("Enter your age: ");

while(age <= 0){
    alert("your age is less than zero or equal");
    age = window.prompt("Enter your age: ");
}
var skip_not = confirm("skip welcoming message");
if(skip_not == 1){alert("Your Welcome Ms "+name);}
else if(gender == "male"){alert("Your Welcome Mr "+name);}}*/

/****************************here the task6 **********************************/

firstAnswer = window.prompt("write 'yes' or 'no' if you are married: ");
secondAnswer = window.prompt("write 'yes' or 'no' if you have a puppy: ");
thirdAnswer = window.prompt("write 'yes' or 'no' if you are happy: ");
const array = [];
function QuestionNoYs_1(Answer1){
    let firstItemInArray;

if (Answer1 != null && Answer1 != "" ){
    firstItemInArray = Answer1;
    }
else if (Answer1 == null || Answer1.length == 0) {
    firstItemInArray = "invalid";
} 
else{firstItemInArray = "invalid";}
return firstItemInArray;}



function QuestionNoYs_2(Answer2){
    let secondItemInArray;
if (Answer2 != null && Answer2 != "" ){
    secondItemInArray = Answer2;
    }
else if (Answer2 == null || Answer2.length == 0) {
    secondItemInArray = "invalid";
} 
else{secondItemInArray = "invalid";}
return secondItemInArray;}


function QuestionNoYs_3(Answer3){
    let thirdItemInArray;
if (Answer3 != null && Answer3 != "" ){
    thirdItemInArray = Answer3;
    }
else if (Answer3 == null || Answer3.length == 0) {
    thirdItemInArray = "invalid";
} 
else{thirdItemInArray = "invalid";}
return thirdItemInArray;}

let firstItemInArray = QuestionNoYs_1(firstAnswer);
let secondItemInArray = QuestionNoYs_2(secondAnswer);
let thirdItemInArray = QuestionNoYs_3(thirdAnswer);

array.push(firstItemInArray, secondItemInArray, thirdItemInArray);
console.log(array);