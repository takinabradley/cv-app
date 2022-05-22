import React from "react";
import styles from './user-experience.css'
export default class UserExperience extends React.Component {
  constructor(props) {
    super(props)

    this.onClickEdit = this.onClickEdit.bind(this)
    this.onChangeField = this.onChangeField.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)

    this.removeButton = null;
  }

  onClickEdit(e) {
    const formInputs = e.target.parentNode.querySelectorAll('input, textArea')
    formInputs.forEach(input => input.toggleAttribute('disabled'))
    const removeButton = e.target.nextElementSibling
    if (getComputedStyle(removeButton).visibility === 'hidden') {
      removeButton.style.visibility = 'visible'
    } else {
      removeButton.style.visibility = 'hidden'
    }

    this.removeButton = removeButton 
  }

  onClickRemove(e) {
    const allExperience = this.props.experience
    const index = e.target.parentNode.getAttribute('data-key')
    allExperience.splice(index, 1)

    e.target.style.visibility = 'hidden'
    this.props.onChangeUser('experience', allExperience)
  }

  onChangeField(e) {
    const onChangeUser = this.props.onChangeUser;
    const field = e.target.getAttribute('name')
    const index = e.currentTarget.getAttribute('data-key')

    const allExperience = this.props.experience;
    const currentExperience = allExperience[index];
    const updatedExperience = { ...currentExperience, [field]: e.target.value }
    
    allExperience.splice(index, 1, updatedExperience)

    onChangeUser('experience', allExperience)
  }

  onClickAdd() {
    const allExperience = this.props.experience;
    allExperience.push(this.props.experienceTemplate)
    
    this.props.onChangeUser('experience', allExperience)
  }

  render() {
    const experienceCards = this.props.experience.map((object, index) => {
      return (
        <form className="experience-card" data-key={index} key={index} onChange={this.onChangeField}>
          <button type='button' onClick={this.onClickEdit}>Edit</button>
          <button className='experience-card-remove' type='button' onClick={this.onClickRemove}>Remove</button>
          <label>
            <span>Company:</span>
            <input type="text" value={object.company} name='company' disabled/>
          </label>

          <label>
            <span>Title:</span>
            <input type="text" value={object.title} name='title' disabled/>
          </label>

          <label>
            <span>Tasks:</span>
            <textarea value={object.tasks} name='tasks' disabled/>
          </label>

          <label>
            <span>Start date:</span>
            <input type="date" value={object.date} name='startDate' disabled/>
          </label>

          <label>
            <span>End date:</span>
            <input type="date" value={object.date} name='endDate' disabled/>
          </label>
        </form>
      );
    });

    return (
      <div className="user-experience-component">
        <button onClick={this.onClickAdd}>Add</button>
        {experienceCards}
      </div>
    );
  }
}
