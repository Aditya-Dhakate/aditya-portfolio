import React from 'react'
import './DarkTheme.css'

export const DarkTheme = ({onClick, toggle}) => {
  return (
    <i onClick={onClick}
     className={`change-theme ${toggle ? 'ri-sun-line' : 'ri-moon-line'}`}>
    </i>
  )
}
