import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      Copyright Jakub Szrama {date.getDate()} {date.getMonth()} {date.getFullYear()}
    </footer>
  )
}

export default Footer