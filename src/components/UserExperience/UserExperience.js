import React from "react";
import EditableUserInfo from "../EditableUserInfo/EditableUserInfo";
import './user-experience.css'
import plusImg from './plus-thick.svg'
export default function UserExperience ({experience, onChangeField, experienceTemplate}) {
  
  function changeField(object) {
    const allExperience = experience;
    const index = allExperience.findIndex((obj) => obj.id === object.id)
    const updatedExperience = object
    
    if (Object.keys(object).every(key => key === 'id')) {
      allExperience.splice(index, 1)
      console.log('only id!')
    } else {
      allExperience.splice(index, 1, updatedExperience)
    }
    
    onChangeField(allExperience)
  }

  function onClickAdd() {
    const allExperience = experience;
    allExperience.push(experienceTemplate())
    
    onChangeField(allExperience)
  }

  const experienceCards = experience.map((object, index) => {
    return (
      <EditableUserInfo info={object} onChangeField={changeField} removable={true} key={object.id} />
    );
  });

  return (
    <div className="user-experience-component">
      <button className="user-experience-component-add" onClick={onClickAdd}>
        <img src={plusImg} alt="add" />
      </button>
      <div className="user-experience-cards">{experienceCards}</div>
     </div>
  );
}
