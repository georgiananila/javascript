//Operatorul rest va permite sa creati o functie care preia un nr variabil de argumente

const sum = (function () {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));//6

//================TRANSFORMARE=============
const sum2 = (function () {
    return function sum2(...args) {//"..."=rest operator

        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum2(1, 2, 3, 4));//6