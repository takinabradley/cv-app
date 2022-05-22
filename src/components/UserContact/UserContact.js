import React from "react";
export default class UserContact extends React.Component {
  constructor(props) {
    super(props)
    
    this.onClickEdit = this.onClickEdit.bind(this)
    this.onChangeField = this.onChangeField.bind(this)
  }

  onClickEdit(e) {
    const formInputs = e.target.parentNode.querySelectorAll('input')
    formInputs.forEach(input => input.toggleAttribute('disabled'))
  }


  onChangeField(e) {
    const onChangeUser = this.props.onChangeUser;
    let field;
    if (e.target.id === 'user-contact-name') {
      field = 'name'
    } else if (e.target.id === 'user-contact-phone') {
      field = 'phone'
    } else if (e.target.id === 'user-contact-email') {
      field = 'email'
    } else if (e.target.id === 'user-contact-profession') {
      field = 'profession'
    }

    onChangeUser('contact', { ...this.props.contact, [field]: e.target.value })
  }

  render() {
    const { name, phone, email, profession } = this.props.contact;
    return (
      <div className="user-contact-component" onChange={this.onChangeField}>
        <form action="">
          <button type='button' onClick={this.onClickEdit}>Edit</button>
          <label htmlFor="user-contact-name">
            <span>Name:</span>
            <input id='user-contact-name' type="text" value={name} disabled/>
          </label>

          <label htmlFor="user-contact-phone">
            <span>Phone:</span>
            <input id='user-contact-phone' type="telephone" value={phone} disabled/>
          </label>

          <label htmlFor="user-contact-email">
            <span>Email:</span>
            <input id='user-contact-email' type="email" value={email} disabled/>
          </label>

          <label htmlFor="user-contact-profession">
            <span>Profession:</span>
            <input id='user-contact-profession' type="text" value={profession} disabled/>
          </label>
        </form>
      </div>
    );
  }
}
