import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => (
  <p>{props.text} {props.state}</p>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [avgScore, setAvgScore] = useState(0)

  const setToGood = (newValue) => {
    setGood(newValue)
    setAll(all+1)
    setAvgScore(avgScore+1)
    setToAvg(avgScore)
  }

  const setToNeutral = (newValue) => {
    setNeutral(newValue)
    setAll(all+1)
    setAvgScore(avgScore)
    setToAvg(avgScore)
  }

  const setToBad = (newValue) => {
    setBad(newValue)
    setAll(all+1)
    setAvgScore(avgScore-1)
    setToAvg(avgScore)
  }

  const setToAvg = (avgValue) => {
    if (all !== 0){
      setAvg(avgValue/all)
    }
    else setAvg(avgValue)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text = 'Good' />
      <Button handleClick={() => setToNeutral(neutral + 1)} text = 'Neutral' />
      <Button handleClick={() => setToBad(bad + 1)} text = 'Bad' />
      <h1>Statics</h1>
      <Display text = 'Good' state = {good} />
      <Display text = 'Neutral' state = {neutral} />
      <Display text = 'Bad' state = {bad} />
      <Display text = 'All' state = {all} />
      <Display text = 'Average' state = {avg} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 