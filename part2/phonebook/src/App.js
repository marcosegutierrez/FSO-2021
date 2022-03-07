import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: 12345678, id:1}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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

    return (
        <div>
            <h2>Phonebook</h2>
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
                {persons.map(person => (
                    <li key={person.id}>
                        {person.name} {person.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App