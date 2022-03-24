import React, {useState} from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import ToShow from './components/ToShow'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: 12345678, id: 1},
        {name: 'Ada Lovelace', number: 22366788, id: 2},
        {name: 'Dan Abramov', number: 12432343, id: 3},
        {name: 'Mary Poppendieck', number: 39236423, id: 4},
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [showAll, setShowAll] = useState('')

    return (
        <div>
            <Filter showAll={showAll} setShowAll={setShowAll} />
            <Form
                persons={persons} newName={newName} newNumber={newNumber}
                setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} />
            <ToShow showAll={showAll} persons={persons} />
        </div>
    )
}

export default App