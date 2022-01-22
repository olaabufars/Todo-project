var name = window.prompt("Enter your name: ");
var gender = window.prompt("Enter your gender: ");
var age;
var skip_not;
/*while(gender != "female" && gender != "male"){
    var gender = window.prompt("Enter your gender: ");
}:(*/

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
  }

/*var age = window.prompt("Enter your age: ");

while(age <= 0){
    alert("your age is less than zero or equal");
    age = window.prompt("Enter your age: ");
}
var skip_not = confirm("skip welcoming message");
if(skip_not == 1){alert("Your Welcome Ms "+name);}
else if(gender == "male"){alert("Your Welcome Mr "+name);}}*/
