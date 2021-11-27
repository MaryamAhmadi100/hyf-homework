let name;
let todo = []; 
console.log("What is my name?:    " + getReply("What is my name"));
console.log("Hello, my name is Benjamin:    " + getReply("Hello my name is Benjamin"));
console.log("Hello, my name is Benjamin:    " + getReply("Hello my name is Benjamin"));
console.log("What is my name:   " + getReply("What is my name"));
console.log("Add fishing to my todo:   " + getReply("Add fishing to my todo"));
console.log("Add singing to my todo:   " + getReply("Add singing to my todo"));
console.log("Remove fishing from my todo:   " + getReply("Remove fishing from my todo"));
console.log("What is on my todo?:   " + getReply("What is on my todo?"));
console.log("What day is it today?: "   + getReply("What day is it today?"));

function getReply(command){
    if(command == 'Hello my name is Benjamin'){
        if(name == "Benjamin"){
            return "Hello Benjamin";
        }else{
            name = "Benjamin";
            return "Nice to meet you Benjamin";
        }
    }
    else if(command == "What is my name"){
        if(name == "Benjamin"){
            return "Your name is " + name;
        }else{
            return "I don't know your name";
        }
    }
    else if(command == "Add fishing to my todo"){
        todo.push("fishing");
        return "fishing added";
    }
    else if(command == "Add singing to my todo"){
        todo.push("singing");
        return "singing added";
    }
    else if(command == "Remove fishing from my todo"){
        for(i = todo.length-1; i>=0;i--){
            if(todo[i] == "fishing"){
                todo.splice(i,1);
                return "Removed fishing"
            }
        }
    }
    else if(command == "What is on my todo?"){
        return "Your todos: " + todo;
    }else if(command == "What day is it today?"){
        return Date();
    }else{
        return "I don't understand";
    }

}