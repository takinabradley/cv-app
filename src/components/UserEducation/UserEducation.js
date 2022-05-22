import React from "react"
export default class UserEducation extends React.Component {
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
    if (e.target.id === 'user-education-school') {
      field = 'school'
    } else if (e.target.id === 'user-education-study') {
      field = 'study'
    } else if (e.target.id === 'user-education-date') {
      field = 'date'
    } else if (e.target.id === 'user-education-profession') {
      field = 'profession'
    }

    onChangeUser('education', { ...this.props.education, [field]: e.target.value })
  }

  render() {
    const { school, study, date } = this.props.education
    return (
      <div className='user-education-component'>
        <form action="" onChange={this.onChangeField}>
          <button type='button' onClick={this.onClickEdit}>Edit</button>
          
          <label htmlFor="user-education-school">
            <span>School:</span>
            <input id='user-education-school' type="text" value={school} disabled/>
          </label>

          <label htmlFor="user-education-study">
            <span>Study:</span>
            <input id='user-education-study' type="text" value={study} disabled/>
          </label>

          <label htmlFor="user-education-date">
            <span>Date:</span>
            <input id='user-education-date' type="date" value={date} disabled/>
          </label>

        </form>
      </div>
    )
  }
}