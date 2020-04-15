const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve({
            nome: 'Gleison',
            age: 35
        });
    }, 5000);
});

console.log('before');

promise.then( (data) => {
    console.log(data);

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('This is my other promises');
        }, 5000);
    }).then( (str) => {
        console.log('does this run?', str);
    }).catch( (erro) => {
        console.log('erro: ', erro);
    });
});

console.log('after');