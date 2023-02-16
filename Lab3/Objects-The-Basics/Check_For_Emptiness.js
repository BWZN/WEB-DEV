let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

function isEmpty(){
    for(let key in schedule) {
        // if(schedule[key] != null ) {
        //     return false;
        // }
        return false;
    }
    return true;
}