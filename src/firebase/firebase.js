import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_API_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_API_DATABASE_URL,
    projectId: process.env.FIREBASE_API_PROJECT_ID,
    storageBucket: process.env.FIREBASE_API_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_API_MESSAGING_SENDER_ID
  };


  firebase.initializeApp(config);

const database = firebase.database();

//Optional Exports

export { firebase, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses')
// .once('value')
// .then( (snapshot) => {
//     //get array
//     const expenses = [];

//     snapshot.forEach( (childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Netflix',
//     note: 'Tv habit',
//     amount: 7.99,
//     createdAt: 0
// });

//   database.ref('notes/-LDrMhvkaKQG0cdjKR08').update({
//       body: 'buy food'
//   })

//   database.ref('notes').push({
//       title: 'To Do',
//       body: 'Go for a run'
//   });

//   database.ref().on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach( (childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   });

//   setTimeout( () => {
//     database.ref().update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Seattle',
//         name: 'Andrew'
//     });
//   }, 3500);

//   database.ref()
//   .once('value')
//   .then( (snapshot) => {
//     const val = snapshot.val();

//     console.log(val);
//   })
//   .catch((e) => {
//       console.log('Error Fetching data...', e)
//   });


  //************ CREATE DATA **********
//   database.ref().set({
//       name: 'Morgan',
//       age: 31,
//       stressLevel: 6,
//       location: {
//           city: 'Lafayette',
//           country: 'United States'
//       },
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       }
//   }).then(() => {
//       console.log('data is saved');
//   }).catch( (e) => {
//     console.log('This failed ', e);
//   });

// //   database.ref().set('This is my data');

// // database.ref('age').set(28);
// // database.ref('location/city').set('Vacaville');

// database.ref('attributes').set({
//     height: 73,
//     weight: 193
// }).then( () => {
//     console.log('Added Data');
// }).catch( (e) => {
//     console.log('Error yo: ', e);
// })


//****************REMOVE DATA**********************

