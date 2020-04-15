import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_changed', (snashot) => {
//     console.log(snashot.key, snashot.val());
// });

// database.ref('expenses').on('child_added', (snashot) => {
//     console.log(snashot.key, snashot.val());
// });

// database.ref('expenses').on('child_removed', (snashot) => {
//     console.log(snashot.key, snashot.val());
// });

// database.ref('expenses').on('value', (snashot) => {
//     console.log(snashot.val());
// });

// database.ref('expenses').once('value')
//     .then( (snashot) => {
//         const expenses = [];

//         snashot.forEach( (childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Rent Abril',
//     note: '',
//     amount: 15089,
//     createdAt: 947298347928374
// });

// database.ref('expenses').push({
//     description: 'Gás',
//     note: '',
//     amount: 8000,
//     createdAt: 91827398173123
// });

// database.ref('expenses').push({
//     description: 'Transport Public',
//     note: '',
//     amount: 4050,
//     createdAt: 929472984778234
// });

// database.ref('casais/-M4l11Py5LtyTUZ9la3G').remove();

// database.ref('casais').push(
//     {
//         ele: 'Gleison',
//         ela: 'Maria'
//     }
// );

// const notes = [
//     {
//         id: '12',
//         title: 'First note',
//         body: 'This is my note'
//     },
//     {
//         id: '972e98e',
//         title: 'Another note',
//         body: 'This is my note'
//     }
// ];

// database.ref('notes').set(notes);

// database.ref().on('value', (snashot) => {
//     const val = snashot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// database.ref().on('value', (snashot) => {
//     console.log(snashot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(36);
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(37);
// }, 3500);

// database.ref('job/company')
//     .once('value')
//     .then( (snashot) => {
//         const val = snashot.val();
//         console.log(val);
//     })
//     .catch( (error) => {
//         console.log('Error fetching data', error);
//     });

// database.ref().set({
//     name: 'Gleison Freitas',
//     age: 35,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Fortaleza',
//         state: 'Ceará',
//         country: 'Brazil'
//     }
// }).then( () => {
//     console.log('Data is saved.');
// }).catch( (e) => {
//     console.log('this failed.', e);
// });

// database.ref('isSingle')
// .remove()
// .then( () => {
//     console.log('Data was removed');
// }).catch( (error) => {
//     console.log('Did not remove data!', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// });


// database.ref().update({
//     name: 'Sola',
//     age: '30',
//     job: 'Software developer',
//     isSingle: null
// });

// database.ref().set('This is my databse');

// database.ref('age').set(30);
// database.ref('location/city').set('São Paulo');
// database.ref('location/state').set('São Paulo');
// database.ref('location/street').set('Avenida I');

// database.ref('attributes').set({
//     height: 1.70,
//     weigth: 82.00
// }).then( () => {
//     console.log('Second set call worked.')
// }).catch( (e) => {
//     console.log('Things didn´t for the second error', e);
// });

