console.log('hello my name is Amine');

const options ={
    method: 'GET',
}


// fetch('/api/getData/',options).then(res.json())
// .then(resa=>{
//     console.log(res);
// })

fetch('/api/getData/?clientID=2')
.then(response=> {
    return response.json()
})
.then(response=> {
    console.log(response.body)
});