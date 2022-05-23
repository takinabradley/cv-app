import React from "react";
import styles from './editable-user-info.css'
export default class UserContact extends React.Component {
  constructor(props) {
    super(props)
    
    this.onClickEdit = this.onClickEdit.bind(this)
    this.onChangeField = this.onChangeField.bind(this)
  }

  onClickEdit(e) {
    const formInputs = e.target.parentNode.querySelectorAll('input:not(input[type="checkbox"]')
    formInputs.forEach(input => input.toggleAttribute('disabled'))
  }

  onChangeField(e) {
    // do not continue if the edit checkbox is clicked.
    if (e.target.getAttribute('type') === 'checkbox') return;
    let field = e.target.name;
    this.props.onChangeUser(this.props.fieldName, {
      ...this.props.info,
      [field]: e.target.value
    })
  }

  render() {
    // const { name, phone, email, profession } = this.props.contact;
    const elements = [];
    for (const key in this.props.info) {
      let type = 'text'
      if (key === 'email') {
        type = 'email'
      } else if (key === 'phone') {
        type = 'phone'
      } else if (key === 'date') {
        type = 'date'
      }

      elements.push(
        <label htmlFor={"editable-user-info-" + key} key={key}>
          <span>{key}:</span>
          <input
            id={"user-contact-" + key}
            type={type}
            name={key}
            value={this.props.info[key]}
            disabled
          />
        </label>
      )
    }
    return (
      <div className="editable-user-info" onChange={this.onChangeField}>
        <form action="">
          <input className='editable-user-info-edit' type='checkbox' onClick={this.onClickEdit} />
          {elements}
        </form>
      </div>
    );
  }
}
