import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB77WcC55R7SHasfdHCvTER6yYiTvDAiKQ",
  authDomain: "share-notes-5ddf3.firebaseapp.com",
  databaseURL: "https://share-notes-5ddf3.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
