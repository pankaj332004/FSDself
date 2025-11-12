import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export function MyApp(){
  return(
    <div>
      <h1>custom app !!</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit goolge'
// }

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )

const anotheruser = "chai aur react"

const reactElement =React.createElement(
  'a',
  {href: 'https://google.com',target:"_blank"},
  'click me to visit google ',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactElement
  
)
