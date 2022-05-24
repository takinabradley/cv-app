import React from "react";
import EditableUserInfo from "../EditableUserInfo/EditableUserInfo";
import './user-experience.css'
import plusImg from './plus-thick.svg'
export default class UserExperience extends React.Component {
  constructor(props) {
    super(props)

    this.onChangeField = this.onChangeField.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
    
  }

  
  onChangeField(object) {
    const allExperience = this.props.experience;
    const index = allExperience.findIndex((obj) => obj.id === object.id)
    const updatedExperience = object
    
    if (Object.keys(object).every(key => key === 'id')) {
      allExperience.splice(index, 1)
      console.log('only id!')
    } else {
      allExperience.splice(index, 1, updatedExperience)
    }
    
    this.props.onChangeField(allExperience)
  }

  onClickAdd() {
    const allExperience = this.props.experience;
    allExperience.push(this.props.experienceTemplate())
    
    this.props.onChangeField(allExperience)
  }

  render() {
    const experienceCards = this.props.experience.map((object, index) => {

      return (
        <EditableUserInfo info={object} onChangeField={this.onChangeField} removable={true} key={object.id} />
      );
    });

    return (
      <div className="user-experience-component">
        <button className="user-experience-component-add" onClick={this.onClickAdd}>
          <img src={plusImg} alt="add" />
        </button>
        <div className="user-experience-cards">{experienceCards}</div>
      </div>
    );
  }
}
