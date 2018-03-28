// render columns based on props
import React, { Component } from 'react';
import { Row, Button, Input, Form, FormGroup, Col, Table } from 'reactstrap';

class TicketListFaculty extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], tickets: [] }
    }

    componentDidMount() {
        fetch('/tickets')
            .then(res => res.json())
            .then(tickets => this.setState({ tickets }));
    }
    render() {
        return (
            <div>
                <h1>Tickets</h1>
                <Row>
                    <Table>
                        <thead>
                            <tr key="ticketheader">
                                <th>id</th>
                                <th>username</th>
                                <th>status</th>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tickets.map(ticket =>
                                <tr key={ticket.id}>
                                    <td>{ticket.id}</td>
                                    <td>{ticket.username}</td>
                                    <td>{ticket.status}</td>
                                    <td>{ticket.recipient}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Row>
            </div>
        );
    }
}

export default TicketListFaculty;