import React, { Component } from 'react'
import Student from './Student'

class Roster extends Component{
    render() {
        return(
            <> 
            {this.props.students.map((student, index) => (
                <Student 
                student={student}
                key={`Student-${index}`}
                />
            ))}
            </>
          
            
        )
    }
}


export default Roster