module.exports = operaciones = {
    sumar : (num1,num2) => {
        return Number(num1) + Number(num2);
    },
    restar : (num1,num2) => {
        return num1 - num2;
    },
    dividir : (num1,num2) => {
        if ((num1 > 0) && (num2 > 0)) {
            return num1 / num2;
        } else {
            console.log("No se puede dividir por 0");
        }
        
    },
    multiplicar : (num1,num2) => {
        return num1 * num2;
        
    },
}