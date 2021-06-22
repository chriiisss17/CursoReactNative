import database from '@react-native-firebase/app';

database.then(snapshot=>{
    console.log(snapshot.val())
})