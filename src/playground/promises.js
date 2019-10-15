
const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        // resolve('this is my resolve data')
        reject('ada yang gak beres')
    }, 20000)
    
})

console.log('before')

promise.then((data)=>{
    console.log('1',data)
}).catch((error) => {
    console.log('error: ', error) //akan memanggil fungsi reject
})

console.log('after')