import React from 'react'

const Form = (props) => {
    const { persons, newName, newNumber, setPersons, setNewName, setNewNumber } = props

    const addData = (event) => {
        event.preventDefault()
        if (persons.some((p) => p.name === newName)) {
            alert(`${newName} is already added to Phonebook`)
        }
        else {
            const personObjet = {
                name: newName,
                number: newNumber,
                id: persons.length + 1
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
        </div>
    )
}

export default Form