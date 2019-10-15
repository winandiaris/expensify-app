// import * as firebase from 'firebase/app'
import * as firebase from 'firebase'
//import "firebase/firestore"


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFDGOsIWosftBpBh4QQbKGLC6PzbPTZKY",
    authDomain: "expensify2-b03c0.firebaseapp.com",
    databaseURL: "https://expensify2-b03c0.firebaseio.com",
    projectId: "expensify2-b03c0",
    storageBucket: "",
    messagingSenderId: "377423434620",
    appId: "1:377423434620:web:c9f383fd9280caa588caf9",
    measurementId: "G-N1L6V6GK27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database = firebase.database()

//   database.ref().set({ //ref sebagai root/nama database, set untuk write kedalam ref()
//       name: 'aris_win',
//       age: 26,
//       isSingle: false,
//       location: {
//           city: 'philadhelpia',
//           country: 'united states'
//       }
//   })
// .then(()=>{
//       console.log('database berhasil')
//   }).catch((e)=>{
//       console.log('database bermasalah',e)
//   })
// //update  
// database.ref().update({
  // name: 'Aris Winandi',
  // age: 39,
  // job: 'programmer',
  // 'location/city': 'semarang',
  // 'location/country' : 'indonesia'
// })

// database.ref('isSingle').remove()
// .then(() => {console.log('isSingle berhasil dilenyapkan')})
// .catch(()=>{console.log('data gagal dihapus')})


// const onValueChange = database.ref().on('value', (snapshot)=>{ // mengambil value dbase, snapshot=callback data
//   console.log(snapshot.val())           //data ditampilkan di console
// }, (e)=>{                               //kondisi error
//   console.log('Error pengambilan data', e)//tampilan jika error
// })
  
// //pada detik ke 3.5s, nilai age = 40
// setTimeout(()=>{
//   database.ref('age').set(40)
// }, 3500)

// //menghentikan proses .on() pada detik ke 7s, menggunakan .off()
// setTimeout(()=>{
//   database.ref().off('value',onValueChange)
// },7000)

// //pada detik ke 10.5s, nilai age = 45, data berubah di database, namun tidak dikirimkan ke callback/console karena sebelumnya sudah di off
// setTimeout(()=>{
//   database.ref('age').set(60)
// }, 10500)

// const notes = [
//   {
//     id: '12',
//   title: 'first title',
//   body: 'first body'
//   },
//   {
//     id: '13fsddf',
//     title: 'second title',
//     body: 'second body'
//   }
// ]

// database.ref('notes').set(notes)

//.push() akan membuat nama property unik 
// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 54663216854241
// })
// database.ref('expenses').push({
//   description: 'Phone Bill',
//   note: '',
//   amount: 5900,
//   createdAt: 3235252344
// })
// database.ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 1200,
//   createdAt: 66345554
// })
// database.ref('expenses').push({
//   description: 'brack',
//   note: '',
//   amount: 1260,
//   createdAt: 7856856865
// })
// database.ref('expenses').push({
//   description: 'bracket',
//   note: '',
//   amount: 75677,
//   createdAt: 75675675677
// })
database.ref('expenses').push({
  description: 'bracket',
  note: 'ggsdfgfs',
  amount: 4674,
  createdAt: 468456746
})
// database.ref().remove()

// database.ref('expenses') // mengambil root expenses
// .once('value') //mengambil value firebase (jika ingin realtime/watch, gunakan .on())
// .then( //jika koneksi berhasil, isi dari then dijalankan
//   (snapshot)=>{
//     const expenses = [] //mendefinisikan expenses sebagai array

//     snapshot.forEach((childSnapshot)=>{//foreach = mengambil snapshot dari tiap child - ada 3
//       expenses.push({ //melakukan push in ke object, setiap object mempunyai key
//         id: childSnapshot.key, //mengisi id dengan key dari child yang saat ini bentuknya random dan string
//         ...childSnapshot.val() //karena nilai id diatas belum diketahui objek lain yang mengikuti, maka untuk mendapatkan nilainya, di pecah array atas nama snapshotChild. hal ini akan membuat array baru
//       })
//     })

//     console.log(expenses)
//   }
// )

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

//child_added
database.ref('expenses').on('child_added', (snapshot)=>{
  console.log(snapshot.key, snapshot.val())
})





// database.ref().set('this is my data') //akan menghapus semua field dengan kalimat tsb

// database.ref('age').set(27)
// database.ref('location/city').set('semarang2')

// database.ref('attributes').set({
//     height: 74,
//     weight: 150
// }).then(()=>{
//     console.log('data attribute berhasil ditambahkan')
// }).catch((e)=>{
//     console.log('data attribute gagal ditambahkan')
// })