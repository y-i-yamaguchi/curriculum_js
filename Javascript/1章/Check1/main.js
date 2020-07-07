let numbers = [2, 5, 12, 13, 15, 18, 22];

//ここに答えを実装してください。↓↓↓
for(let num = 0 ; num < numbers.length;  num++){
    if(num % 2 === 0){
        isEven(numbers[num]);
    }
}

function isEven(num) {
    console.log(num + 'は偶数です');
}

class Car{
    constructor(gasolin,number){
        this.gasolin = gasolin;
        this.number = number;
    }
    getNumGas(){
        console.log(`ガソリンは ${this.gasolin} です。ナンバーは${this.number}です。`);
    }
}

let RX7 = new Car ('ハイオク' , 4444 );
RX7.getNumGas();