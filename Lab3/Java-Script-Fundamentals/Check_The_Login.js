let login = prompt("Who's there?");

if(login === "Admin") {
    let password = prompt("Password?", "");
    if(password === "TheMaster"){
        alert("Welcome!");
    }else if(password === "" || password === null) {
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
}else if(login === "" || password === null) {
    alert("Canceled");
}else{
    alert("I don't know you");
}