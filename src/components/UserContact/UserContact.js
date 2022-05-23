import React from "react";
import styles from './user-contact.css'
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
    let field = e.target.name;
    this.props.onChangeUser('contact', {
      ...this.props.contact,
      [field]: e.target.value
    })
  }

  render() {
    const { name, phone, email, profession } = this.props.contact;
    return (
      <div className="user-contact-component" onChange={this.onChangeField}>
        <form action="">
          <input className='user-contact-edit' type='checkbox' onClick={this.onClickEdit}/>
          <label htmlFor="user-contact-name">
            <span>Name:</span>
            <input id='user-contact-name' type="text" name='name' value={name} disabled/>
          </label>

          <label htmlFor="user-contact-phone">
            <span>Phone:</span>
            <input id='user-contact-phone' type="telephone" name='phone' value={phone} disabled/>
          </label>

          <label htmlFor="user-contact-email">
            <span>Email:</span>
            <input id='user-contact-email' type="email" name="email" value={email} disabled/>
          </label>

          <label htmlFor="user-contact-profession">
            <span>Profession:</span>
            <input id='user-contact-profession' type="text" name="profession" value={profession} disabled/>
          </label>
        </form>
      </div>
    );
  }
}
