import React1, { useEffect } from 'react'

const Navbar = ({ color }) => {
  
  // case 1: Run on every render
  useEffect(() => {
    alert("I will run on every render")
  })

  // case 2: run on only first render
  useEffect(() => {
    alert("welcome to my page")
  }, [])

  // case 3: run only when certain value change
  useEffect(() => {
    alert("Hey i am running because color was change")
  }, [color])

  // this is the example of cleanup function
  useEffect(() =>{
    alert("Hey welcome to my page. This is first render of app.jsx")
  
    return() =>{
      alert("component was unmounted")
    }

   },[])


  return (
    <div>hey i am navbar of {color} color heheh...</div>
  )
}

export default Navbar