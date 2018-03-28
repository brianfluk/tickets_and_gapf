// render columns based on props
import React, { Component } from 'react';
import { Row, Input, Button, Form } from 'reactstrap';

class FacultyList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [], 
            tickets: [] 
        }
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr key="facultyheader">
                            <th>Full Name</th>
                            <th>no. Domestic</th>
                            <th>no. International</th>
                            <th> Grant </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td><Input type="text"/></td>
                                <td><Input type="text"/></td>
                                <td><Button color="success">Grant</Button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FacultyList;