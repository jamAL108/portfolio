import React from 'react'
import './little.css';
const Little = () => {
  return (
    <div className="little">
      {window.screen.width>913 ? (
        <>
        <h1>Ambitious developer with a</h1>
        <h1>passion to solve modern </h1> <h1>problems!</h1>
        </>
      ) : (
        <h1>Ambitious developer with a
       passion to solve modern problems!</h1>
      )}
    </div>
  )
}

export default Little