
function checkAge(age){
    return (age > 18) ? true : confirm("Did parents allow you?");
}

function checkAgeIF(age2){
    return (age2 > 18) || confirm("Did parents allow you?");
}