import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { navigate } from 'gatsby'

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    navigate('/')
  }

  handleChange = event => {
    const { name, type, value } = event.target
    console.log(event.target.value)
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }

  render() {
    return (
      <Layout>
        <FormContainer>
          <h1>Contact Us</h1>
          <form
            onSubmit={this.handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Dont fille this out: <input name="bot-field" onChange={'/'} />
              </label>
            </p>
            <Input>
              <label htmlFor="firstName">
                First Name:
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  plaheholder="Your name"
                  autoComplete="off"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Last Name:
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  plaheholder="Smith"
                  autoComplete="off"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  name="email"
                  type="text"
                  id="email"
                  plaheholder="Your name"
                  autoComplete="off"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
              <select
                name="subject"
                type="select"
                value={this.subject}
                onChange={this.handleChange}
              >
                Subject:
                <option value="requestInfo"> Request for Information</option>
                <option value="quoteRequest">Quote request</option>
                <option value="errorReport">Error Report</option>
                <option value="contentSugestion">Content Sugestion</option>
              </select>
              Message:
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleChange}
              />
              Got a specific question?
            </Input>
            <button type="submit" disabled={!this.state.email}>
              Submit
            </button>
          </form>
        </FormContainer>
      </Layout>
    )
  }
}

const FormContainer = styled.div`
  padding: 9rem 0 0 0;

  h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
  }

  label {
    text-align: center;
  }
`

const Input = styled.div`
  border: 1px solid green;
`

export default Form
