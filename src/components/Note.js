import React from 'react'

const Note = ({ details }) => {

return (
<article className="note">
  <header>
    <div className="colors">
      <span className="color color-1"></span>
      <span className="color color-2"></span>
      <span className="color color-3"></span>
      <span className="color color-4"></span>
      <span className="color color-5"></span>
    </div>
    
    <span>{details.date}</span>
    </header>
  
  <div className="content">
    <p>{details.description}</p>
  </div>
  <footer>
    <span className="author">{ details.title}</span>
  </footer>
</article>
) 
}

export default Note