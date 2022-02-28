import React from 'react'
import Part from './Part'

const Content = (props) => {
  const { parts } = props.course
  return (
      parts.map(part => (
        <Part key={parts.id} parts={part} />
      ))    
  )
}

export default Content