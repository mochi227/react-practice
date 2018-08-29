import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'subject[0][value]': '',
      'message[0][value]': '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://react.php71/rest/session/token', {
      mode: 'cors',
    }).then(function(response) {
      return response.text();
    }).then((token) => {
      const method = "POST";
      // const bodyString = JSON.stringify(body);
      console.log
      fetch('http://react.php71/contact_message', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Authorization':'Basic YWRtaW46cGFzc3dvcmQ=',
          'X-CSRF-TOKEN':'CIGL7Z5dtT5DzEx6D88dR4X3N-zWWgQZljLhiHgkN8U',
        },
        body: {
          'contact_form':[{'target_id':'feedback'}],
          'name':[{'value':'aaaa'}],
          'mail':[{'value':'sendonly@studio-umi.jp'}],
          'subject':[{'value':'title'}],
          'message':[{'value':'message'}],
        },
      });
    }).then(() => {
      alert('submt');
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state['subject[0][value]']} name="subject[0][value]" onChange={this.handleChange} />
        <textarea value={this.state['message[0][value]']} name="message[0][value]" onChange={this.handleChange}/>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Contact;
