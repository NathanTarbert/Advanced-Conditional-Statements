function fruitOrVegatable(item){

    switch(item){
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
        console.log("fruits");
        break;
    
    
    case "cucumber":
    case "pepper":
    case "carrot":
    case "onion":
        console.log("vegatables");
        break;
    default:
        console.log("unknown");
        break;
    }

    }

    


fruitOrVegatable("banana");
fruitOrVegatable("carrot");