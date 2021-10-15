
//Firebase
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';

//sweetalert2
import Swal from 'sweetalert2';

import { types } from '../types/types';

//Another Actions
// import { cleanNotes } from './notes';
// import { finishLoading, startLoading } from './ui';

//--------------- Login -------------------------------------------

//Para logguearse normal
export const startLoginEmailPassword = (email:string, password:string) => {
    const auth = getAuth();
    return (dispatch:any) => {
        // dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setTimeout(() => {
                    if(user.uid != null && user.displayName !=null){
                        dispatch(login(user.uid, user.displayName))
                    }
                }, 3000);
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }
}

//Para logguearse por google
export const startGoogleLogin = () => {
    const auth = getAuth();
    return (dispatch:any) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                if(user.uid != null && user.displayName !=null){
                    dispatch(login(user.uid, user.displayName))
                }
            });
    }
}

//Login despliega los valores del usuario en el state
export const login = (uid:string, displayName:string) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

//--------------- Register -------------------------------------------

export const startRegisterWithEmailPassword = (email:string, password:string, name:string) => {
    const auth = getAuth();
    return (dispatch:any) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });
                console.log(user);
                if(user.uid != null && user.displayName !=null){
                    dispatch(login(user.uid, user.displayName))
                }
            }).catch(e => {
                console.log(e);
            });
    }
}

export const logout = () => ({
    type: types.logout
})
