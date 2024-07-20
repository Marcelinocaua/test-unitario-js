var mostrar = require('./nome');

// primeiro teste
test('mostrar nome caua', function(){
    var resultado = mostrar("caua");
    
    expect(resultado).toBe("caua");
});

// segundo teste
test('mostrar nome', function(){
    var resultado = mostrar();

    expect(resultado).toBe("sem nome");
});