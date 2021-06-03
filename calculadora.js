class Calculadora{

    Calculadora(){};

    suma (a, b){
        return a+b;
    }

    resta(a, b){
        return a-b;
    }

    multiplicacion(a, b){
        return a*b;
    }

    division(a, b){
        if (b != 0 ){
            return a/b;
        } else {
            throw new Error('Se intenta dividir entre cero.');
        }
    }
    
} export default Calculadora;
