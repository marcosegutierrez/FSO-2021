import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Aro Hellas', id:1}
    ])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const personObjet = {
            name: newName,
            id: persons.length+1
        }
        
        setPersons(persons.concat(personObjet))
        setNewName('')
    }
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    Name: <input 
                        value={newName} onChange={handleNameChange}
                        />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default App