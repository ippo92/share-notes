import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import notes from './notes'
import Admin from './components/Admin'
import Note from './components/Note'
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    notes: {}
  }

  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/notes`, {
      context: this,
      state: 'notes'
    })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  addNote = note => {
    const notes = {...this.state.notes }
    notes[`note-${Date.now()}`] = note
    this.setState({ notes })
  }

  updateNote = (key, newNote) => {
    const notes = {...this.state.notes }
    notes[key] = newNote
    this.setState({ notes })
  }

  deleteNote = key => {
    const notes = {...this.state.notes }
    notes[key] = null
    this.setState({ notes })
  }

  loadExamples = () => this.setState({ notes })

  render () {
    const notes = Object.keys(this.state.notes).map(key => <Note key={key} details= { this.state.notes[key]}></Note>)
    return (
      <div className='box'>
        <Header pseudo={ this.state.pseudo} ></Header>
        <div className='cards'>
          { notes }
        </div>
        <Admin  pseudo={ this.state.pseudo} deleteNote={this.deleteNote} notes={this.state.notes} updateNote={this.updateNote} addNote={this.addNote} loadExamples={ this.loadExamples }></Admin>
      </div>
    )
  }
}

export default App
