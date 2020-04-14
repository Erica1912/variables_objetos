import React from 'react'

export default function Saludar(props){
  return (
      <div>
        <h1>Hola {props.userInfo.nombre}, tiene {props.userInfo.edad} años y le gusta el color {props.userInfo.color}</h1>
      </div>
  )
}
