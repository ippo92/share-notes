import React from 'react'



const  Login = ({ authenticate }) => {

    const divStyle = {
        marginBottom: '20px',
        width: '220px',
        height: '36px',
        border: 'none',
        borderRadius: '2px',
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: '500',
        cursor: 'pointer'
      };

    return (
      <div>
        <h2>Connecte toi pour créer tes notes ! </h2>
        <button style={divStyle} className="social-signin google"onClick={authenticate}> Me connecter avec Google </button>
      </div>
    )
  }


export default Login