import React, {Component} from 'react';

class Person extends Component {

    render(){
        return <div>
            <p>Hi My name is {this.props.name}</p>
            <p>I am {this.props.age} years old</p>
        </div>;
    }

}

export default Person;