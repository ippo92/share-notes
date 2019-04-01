import React, { Component } from 'react'
import AddNote from './AddNote'
import AdminForm from './AdminForm'
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'
import Login from './Login'

class Admin extends Component {

  state = {
    uid: null,
    owner: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.handleAuth({ user })
      }
    })
  }
  
  handleAuth =  async authData => {
    const box = await base.fetch(this.props.pseudo, { context: this })

    if (!box.user) {
      await base.post(`${this.props.pseudo}/user`, {
        data: authData.user.uid
      })
    }

    this.setState({
      uid: authData.user.uid,
      owner: box.user || authData.user.uid
    })
  }

  authenticate = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider()
    firebaseApp.auth().signInWithPopup(authProvider).then(this.handleAuth)
  }

  logout = async () => {
    console.log('Déconnexion')
    await firebase.auth().signOut()
    this.setState({ uid: null})
  }

  render() {
    const { notes, addNote, updateNote, loadExamples, deleteNote} = this.props


    const logout = <button onClick={ this.logout }>Déconnexion</button>



    if (!this.state.uid) {
      return <Login authenticate={this.authenticate}/>
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Tu ne possède pas ce carnet de notes</p>
          {logout}
        </div>
      )
    }

    return (
      <div>
      <AddNote addNote={ addNote}></AddNote>
      {
        Object.keys(notes).map( key => 
        <AdminForm key={key} id={key} updateNote={updateNote} deleteNote={deleteNote} notes={notes}></AdminForm>)
      }
      <footer>
        {logout}
        <button onClick={ loadExamples}>Remplir</button>
      </footer>
      </div>
    )
  }
}

export default Admin
