import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const TableStats = (props) => (
  <tr>
    <td> {props.text} </td>
    <td> {props.value} </td>
  </tr>
)

const Statics = (props) => {
  let all = props.good + props.neutral + props.bad
  let avgScore = props.good - props.bad
  let average = avgScore/all
  let perPositive = props.good/all*100+'%'

  if (all > 0) {
    return(
      <tr>
        <TableStats text='Good' value={props.good} />
        <TableStats text='Neutral' value={props.neutral} />
        <TableStats text='Bad' value={props.bad} />
        <TableStats text='All' value={all} />
        <TableStats text='Average' value={average} />
        <TableStats text='Positive' value={perPositive} />
      </tr>
    )
  }
  else {
    return(
      <p>No feedback given </p>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => {
    setGood(newValue)
  }

  const setToNeutral = (newValue) => {
    setNeutral(newValue)
  }

  const setToBad = (newValue) => {
    setBad(newValue)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text = 'Good' />
      <Button handleClick={() => setToNeutral(neutral + 1)} text = 'Neutral' />
      <Button handleClick={() => setToBad(bad + 1)} text = 'Bad' />
      <h1>Statistics</h1>
      <Statics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 