class First {
    hello() {
        console.log(`Привет, я - метод родителя`);
    }
}

class Second extends First{
    hello() {
        super.hello();
        console.log(`А я - метод наследника`);
    }
}

let smth = new Second;
smth.hello();