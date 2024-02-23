var name = "Yash";

function sayHello() {
    console.log(this.name);
}

const sayHi = () => {
    console.log(this.name);
}

sayHi();
sayHello();