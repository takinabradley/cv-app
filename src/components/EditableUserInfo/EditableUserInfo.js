import React from "react";
import './editable-user-info.css'
import trashIcon from './trash-can-outline.svg'
/* Props: 
    info: An object with keys representing the editable fields.
    onChangeField: a callback to the parent component to change state. 
      Should know what state to change without passing in a prop
    removable: true or false, obvious
*/

export default function EditableUserInfo({ info, onChangeField, removable }) {
  function onClickEdit(e) {
    //start edit
    const formInputs = e.target.parentNode.querySelectorAll('input:not(input[type="checkbox"]), textarea')
    formInputs.forEach(input => input.toggleAttribute('disabled'))

    //possible future confirm edit
  }

  function onClickRemove(e) {
    if (info.id) {
      // If this component is used inside another to create many editable fields,
      // pass the ID value back to a parent component to deal with removal
      const id = { id: info.id}
      onChangeField(id)
    } else {
      onChangeField({})
    }
  }

  function changeField(e) {
    console.log(e.target)
    // do not continue if the edit checkbox is clicked.
    if (e.target.getAttribute('type') === 'checkbox') return;

    let field = e.target.name;
    //pass edited object back to parent function
    onChangeField({
      ...info,
      [field]: e.target.value
    })
  }

  function decideInputType(key) {
    if (key === 'email') {
      return 'email'
    } else if (key === 'phone') {
      return 'phone'
    } else if (key === 'date' || key === 'startDate' || key === 'endDate') {
      return 'date'
    } else {
      return 'text'
    }
  }

  function createElementsFromInfo(info) {
    /* this could be done better, but would also force the object data structure
    it takes in to be more complicated */
    const elements = [];
    for (const key in info) {
      if (key === 'id') continue
      let type = decideInputType(key)
      let inputElem;

      if (key !== 'tasks') {
        inputElem = (
          <input
              type={type}
              name={key}
              value={info[key]}
              disabled
          />
        )
      } else {
        inputElem = (
          <textarea
              name={key}
              value={info[key]}
              disabled
          />
        )
      }
      
      elements.push(
        <label key={key}>
          <span>{key}:</span>
          {inputElem}
        </label>
      )
    }

    return elements
  }

  function createRemoveButton() {
    return (
      <button
          className="editable-user-info-remove"
          type="button"
          onClick={onClickRemove}
        >
          <img src={trashIcon} alt="delete" />
        </button>
    )
  }

  
  if (info === null) return null;
  const elements = createElementsFromInfo(info)
  let removeButton = (removable) ? createRemoveButton() : null
  if (elements.length === 0) return null; 
  return (
    <form action="" className="editable-user-info" onChange={changeField}>
      <input className='editable-user-info-edit' type='checkbox' onClick={onClickEdit} />
      {removeButton} 
      {elements}
    </form>
  );
}

