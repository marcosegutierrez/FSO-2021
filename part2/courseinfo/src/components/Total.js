import React from 'react'

const Total = ({course}) => {
  const total = course.parts.reduce((s, p) => s+p.exercises, 0)
  return (
    <>
      <b>Number of exercises {total}</b>
    </>
  )
}

export default Total