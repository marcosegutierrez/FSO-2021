import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
    const { course } = props
    return(
        course.map(courses => (
            <div key={courses.id}>
                <Header course={courses} />
                <Content course={courses} />
                <Total course={courses} />
            </div>
        ))
    )
}

export default Course