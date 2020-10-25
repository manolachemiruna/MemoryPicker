import auth from '@react-native-firebase/auth';

    export function Register(email,password){
    
        console.log(email,password);

        auth.createUserWithEmailAndPassword(email,password)
          .then( userCredential => {
            console.log(userCredential);
    
            return this.db.doc(`users/${userCredential.user.uid}`).set({
                email: userCredential.email,});
          })

          .catch( error => {
            console.log("eroare la creare user");
            console.log(error);
          });
}
