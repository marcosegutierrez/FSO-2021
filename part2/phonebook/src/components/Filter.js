import React from 'react'

const Filter = (props) => {
    const { showAll, setShowAll } = props

    const handleShowAll = (event) => {
        setShowAll(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            Filter shown with <input
                value={showAll}
                onChange={handleShowAll}
            />
        </div>
    )
}

export default Filter