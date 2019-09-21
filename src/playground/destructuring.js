//console.log('destructuring')
//=================OBJECT DESTRUCTURING============================
// const person = {
//     //name: '',
//     age: 36,
//     location: {
//         city: 'semarang',
//         temp: 90
//     }
// }

//deklarasi 1
// const name = person.name
// const age = person.age
// const city = person.location.city
// const temp = person.location.temp

//deklarasi 2
// const {name: firstname = 'Anonymous', age } = person
// const {city, temp:temperature} = person.location
// console.log(`${person.name} is have age ${person.age} and live in ${person.location.city}`)
// console.log(
//     `${name} is have age ${age} and live in ${city} with ${temperature} farhenheit temperature`
//     )

// console.log(`${firstname} is have age ${age} and live in ${city}`)

//=================ARRAY DESTRUCTURING============================

const alamat = []

const [, , kab='nama kab. belum ditentukan ', ] = alamat

//console.log(`Anda berada di desa ${alamat[1]}, kecamatan ${alamat[2]}`)
//console.log(`Anda berada di desa ${desa}, kecamatan ${kec}, kabupaten ${kab}, kode pos ${kodePos}`)
console.log(`Anda berada di kabupaten ${kab}`)