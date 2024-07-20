var somar = require('./soma');

//criando o primeiro teste
test('somar 1 + 1 para o resultado em 2', function(){
    var resultado = somar(1 , 1);
    
    expect(resultado).toBe(2)
})

//criando o segundo teste
test('Somar 15 + 27 + 300 para resultar em 342', function(){
    var resultado = somar(15, 27, 300);

    expect(resultado).toBe(342)
})