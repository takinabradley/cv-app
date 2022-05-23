import React from "react"
import styles from './user-education.css'
export default class UserEducation extends React.Component {
  constructor(props) {
    super(props)
    
    this.onClickEdit = this.onClickEdit.bind(this)
    this.onChangeField = this.onChangeField.bind(this)
  }

  onClickEdit(e) {
    const formInputs = e.target.parentNode.querySelectorAll('input:not([type="checkbox"])')
    formInputs.forEach(input => input.toggleAttribute('disabled'))
  }


  onChangeField(e) {
    let field = e.target.getAttribute('name')
    this.props.onChangeUser('education', {
      ...this.props.education,
      [field]: e.target.value
    })
  }

  render() {
    const { school, study, date } = this.props.education
    return (
      <div className='user-education-component'>
        <form action="" onChange={this.onChangeField}>
          <input className='user-education-edit' type='checkbox' onClick={this.onClickEdit}/>
          
          <label htmlFor="user-education-school">
            <span>School:</span>
            <input id='user-education-school' type="text" name='school' value={school} disabled/>
          </label>

          <label htmlFor="user-education-study">
            <span>Study:</span>
            <input id='user-education-study' type="text" name='study' value={study} disabled/>
          </label>

          <label htmlFor="user-education-date">
            <span>Date:</span>
            <input id='user-education-date' type="date" name='date' value={date} disabled/>
          </label>

        </form>
      </div>
    )
  }
}