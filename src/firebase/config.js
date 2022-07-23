import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkegLtjJYcffKvE6lmGsoYuqTRWYzXZ0c',
  authDomain: 'udemy-dojo-blog-61e55.firebaseapp.com',
  projectId: 'udemy-dojo-blog-61e55',
  storageBucket: 'udemy-dojo-blog-61e55.appspot.com',
  messagingSenderId: '286899018852',
  appId: '1:286899018852:web:1e13c3b86e649e5afa1371',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
