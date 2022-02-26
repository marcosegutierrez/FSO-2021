import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Stats = (props) => (
  <p>
    Good {props.good}<br/>
    Neutral {props.neutral}<br/>
    Bad {props.bad}<br/>
    All {props.all}
  </p>
)

const Average = (props) => {
  let avgScore = props.good - props.bad
  let average = avgScore/props.all
  return(<p>Average {average}</p>)
}

const Positive = (props) => {
  let perPositive = props.good/props.all*100
  return(<p>Porsitive {perPositive}%</p>)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setToGood = (newValue) => {
    setGood(newValue)
    setAll(all+1)
  }

  const setToNeutral = (newValue) => {
    setNeutral(newValue)
    setAll(all+1)
  }

  const setToBad = (newValue) => {
    setBad(newValue)
    setAll(all+1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text = 'Good' />
      <Button handleClick={() => setToNeutral(neutral + 1)} text = 'Neutral' />
      <Button handleClick={() => setToBad(bad + 1)} text = 'Bad' />
      <h1>Statistics</h1>
      <Stats good = {good} neutral = {neutral} bad = {bad} all = {all} />
      <Average good = {good} bad = {bad} all = {all} />
      <Positive good = {good} all = {all} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 