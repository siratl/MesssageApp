import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class App extends Component {
  state = {
    sms: {
      messageText: '',
    },

    error: false,
  };

  sendSMS = ev => {
    ev.preventDefault();
    const { sms } = this.state;

    if (this.state.sms.messageText === '') {
      return this.setState({ error: true });
    } else {
      fetch(
        `http://localhost:4444/api/send-sms?messageText=${sms.messageText}`,
      );
      this.setState({ sms: { messageText: '' }, error: false });
    }
  };

  handleInputChange = ev => {
    this.setState({ sms: { [ev.target.name]: ev.target.value }, error: false });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Send SMS</h1>
        </header>

        <main className="App-body">
          <Form onSubmit={this.sendSMS} className="App-form">
            <FormGroup row>
              <Label for="messageText" sm={2}>
                Message
              </Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="messageText"
                  onChange={this.handleInputChange}
                  placeholder={
                    this.state.error
                      ? 'THIS FIELD CANNOT BE EMPTY!'
                      : 'Type your message here...'
                  }
                  value={this.state.sms.messageText}
                  id={this.state.error ? 'messageTextError' : 'messageText'}
                />
              </Col>
            </FormGroup>
            <Button type="submit">Send Message</Button>
          </Form>
        </main>
      </div>
    );
  }
}

export default App;
