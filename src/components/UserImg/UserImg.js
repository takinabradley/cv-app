import React from "react"
import noUserImg from './blank-image.svg'
import './user-img.css'

export default function UserImg ({onChangeImg, img}) {

  function changeUserImg(e) {
    const newImg = URL.createObjectURL(e.target.files[0]);
    onChangeImg(newImg)
  }

  return (
    <div className='user-img-component'>
      <label htmlFor="img-select"><img src={(img) ? img : noUserImg} alt="" /></label>
      <input type="file" name='img-select' id='img-select' onChange={changeUserImg}/>
    </div>
  )
}