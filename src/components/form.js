import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <select>
          Subject:
          <option value="requestInfo"> Request for Information</option>
          <option value="quoteRequest">Quote request</option>
          <option value="errorReport">Error Report</option>
          <option value="contentSugestion">Content Sugestion</option>
        </select>
        Message:
        <textarea>Got a specific question?</textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
