import React from "react";
import styles from './user-experience.css'

export default class UserExperience extends React.Component {
  constructor(props) {
    super(props)

    this.onClickEdit = this.onClickEdit.bind(this)
    this.onChangeField = this.onChangeField.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)

  }

  onClickEdit(e) {
    //keeps edit checkbox enabled
    const formInputs = e.target.parentNode.querySelectorAll(
      'input:not(input[type="checkbox"]), textArea'
    )

    formInputs.forEach(input => input.toggleAttribute('disabled'))
  }


  onClickRemove(e) {
    const allExperience = this.props.experience
    const index = e.target.parentNode.getAttribute('data-key')
    allExperience.splice(index, 1)

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
    allExperience.push(this.props.experienceTemplate())
    
    this.props.onChangeUser('experience', allExperience)
  }

  render() {
    const experienceCards = this.props.experience.map((object, index) => {

      return (
        <form className="experience-card" data-key={index} key={object.id} onChange={this.onChangeField}>
          <input type="checkbox" className='experience-card-edit' onClick={this.onClickEdit}/>
          <button
            className='experience-card-remove'
            type='button'
            onClick={this.onClickRemove}
          >
            Remove
          </button>

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
