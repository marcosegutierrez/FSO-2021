import React, {useState} from 'react'

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

    const addData = (event) => {
        event.preventDefault()
        if(persons.some((p) => p.name === newName)){
            alert(`${newName} is already added to Phonebook`)
        }
        else{
            const personObjet = {
                name: newName,
                number: newNumber,
                id: persons.length+1
            }
            setPersons(persons.concat(personObjet))
        }
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const personsToShow = showAll === ''
        ? persons
        : persons.filter( p => p.name.toLowerCase().includes(showAll.toLowerCase()))
    

    const handleShowAll = (event) => {
        setShowAll(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filter shown with <input
                    value={showAll}
                    onChange={handleShowAll}
                    />
            </div>
            <h2>Add a New</h2>
            <form onSubmit={addData}>
                <div>
                    Name: <input 
                        value={newName}
                        onChange={handleNameChange}
                        />
                </div>
                <div>
                    Number: <input
                        value={newNumber}
                         onChange={handleNumberChange}
                        />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {personsToShow.map(p => (
                    <li key={p.id}>
                    {p.name} {p.number}
                    </li>                    
                ))}
            </ul>
        </div>
    )
}

export default App