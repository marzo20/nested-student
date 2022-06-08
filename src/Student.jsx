import React, { Component } from 'react'
import Score from './Score'

class Student extends Component{
    render() {
        return(
            <>
            <h1>{this.props.student.name}</h1>
            <p>{this.props.student.bio}</p>
             {this.props.student.scores.map((score, index) => (
                <Score 
                score={score}
                key={`score-${index}`}
                />
            ))}
            </>
            
        )
    }
}


export default Student