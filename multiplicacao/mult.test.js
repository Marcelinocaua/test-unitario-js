var multiplicar = require('./mult');

//criando o primeiro teste
test('multiplicar 4 * 4 para o resultado em 16', function(){
    var resultado = multiplicar(4 , 4);
    
    expect(resultado).toBe(16)
})

//criando o segundo teste
test('mutiplicar 5 * 5 para resultar em 25', function(){
    var resultado = multiplicar(5, 5);

    expect(resultado).toBe(25)
})