let age = prompt("Enter your age", "");

if(age <= 14 || age >= 90) {
    alert("This is true")
}else{
    alert("Sad")
}

let age2 = prompt("Enter your age again", "");
if(!(age2 >= 14 && age2 <= 90)) {
    alert("This is also true")
}