import React from 'react'

const ToShow = (props) => {
    const { showAll, persons } = props

    const personsToShow = showAll === ''
        ? persons
        : persons.filter(p => p.name.toLowerCase().includes(showAll.toLowerCase()))

    return (
        <div>
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

export default ToShow