const buyClay = () => {
    const pottery = {}
    return pottery;
}

const makePottery = (pottery, shape) => {
    pottery.shape = shape;
    return pottery;
}

const bisqueFire = (pottery) => {
    pottery.readyForGlazing = true;
    return pottery;
}


const glazePottery = (pottery) => {
    if(pottery.readyForGlazing) {
        pottery.glazing = "Midnight Blue";
        return pottery;
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it!");
    }
}

const finalFiring = (pottery, temperature) => {
    if (temperature > 1200) {
        pottery.cracked = true;
    }
    else {
        pottery.cracked = false;
    }
}

const makeBowl = (shape) => {
    const boughtClay = buyClay()
    const basicBowl = makePottery(boughtClay,shape)
    const fired = bisqueFire(basicBowl)
    const glaze = glazePottery(fired) 
    console.log(glaze)
}

makeBowl("plant pot")