import React from "react";
import styles from './editable-user-info.css'

/* Props: 
    info: An object with keys representing the editable fields.
    onChangeField: a callback to the parent component to change state. 
      Should know what state to change without passing in a prop
    removable: true or false
*/
export default class EditableUserInfo extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    
    this.onClickEdit = this.onClickEdit.bind(this)
    this.onChangeField = this.onChangeField.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)
  }

  onClickEdit(e) {
    const formInputs = e.target.parentNode.querySelectorAll('input:not(input[type="checkbox"]')
    formInputs.forEach(input => input.toggleAttribute('disabled'))
  }

  onClickRemove(e) {
    if (this.props.info.id) {
      const id = { id: this.props.info.id}
      this.props.onChangeField(id)
    } else {
      this.props.onChangeField(null)
    }
    
  }

  onChangeField(e) {
    // do not continue if the edit checkbox is clicked.
    if (e.target.getAttribute('type') === 'checkbox') return;

    let field = e.target.name;
    this.props.onChangeField({
      ...this.props.info,
      [field]: e.target.value
    })
  }

  render() {
    /* this could be done better, but would also force the object data structure
      it takes in to be more complicated */
    if (this.props.info === null) return null;

    const elements = [];
    for (const key in this.props.info) {
      if (key === 'id') continue
      
      let type = 'text'
      if (key === 'email') {
        type = 'email'
      } else if (key === 'phone') {
        type = 'phone'
      } else if (key === 'date' || key === 'startDate' || key === 'endDate') {
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

    if (elements.length === 0) return;
    return (
      <div className="editable-user-info" onChange={this.onChangeField}>
        <form action="">
          <input className='editable-user-info-edit' type='checkbox' onClick={this.onClickEdit} />
          {(this.props.removable) ? <button className='editable-user-info-remove' type='button' onClick={this.onClickRemove}>Remove</button> : ''} 
          {elements}
        </form>
      </div>
    );
  }
}
