import React, { Component } from 'react'
import '../Form.css'


class AddNote extends Component {
  state = {
      title: '',
      description: '',
      date: ''
  }

  handleChange = event => {
      const { name, value } = event.target
      this.setState({ [name]: value })
  }

  handleSubmit = event => {
      event.preventDefault();
      const note = { ...this.state }
      this.props.addNote(note)
      Object.keys(note).forEach(item => {
        note[item] = ''
      })
      this.setState({ ...note })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input className="feedback-input" name='title' onChange={this.handleChange} value={this.state.title} type="text" placeholder='Titre'/>
            <textarea className="feedback-input" name="description" onChange={ this.handleChange} value={ this.state.description} type="text" placeholder='Description'/>
            <input type="submit" value="Ajouter"/>
        </form>
      </div>
    )
  }
}

export default AddNote
