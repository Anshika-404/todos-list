import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    height: "60px",
  }
  return (
    <footer className="bg-dark text-light py-3" style=
    {footerStyle} >
      <p className="text-center">
      Copyright &copy; MyTodosList.com | All Rights Reserved | Terms and Conditions
      </p>
    </footer>
  )
}

export default Footer
