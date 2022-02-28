import React from 'react'
import Part from './Part'

const Content = (props) => {
  const { parts } = props.course
  return (
      parts.map(part => (
        <Part key={part.id} parts={part} />
      ))    
  )
}

export default Content