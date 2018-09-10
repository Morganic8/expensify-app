const promise = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        // resolve({
        //     name: 'Morgan',
        //     age: 31
        // });
        reject('something went wrong!')
    }, 3500);
});


console.log('before');


promise.then((data) => {
    console.log(data);
}).catch( (e) => {
    console.log('error: ' + e);
});

console.log('after');