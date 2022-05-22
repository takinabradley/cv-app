import React from "react"
import noUserImg from './blank-image.svg'
import styles from './user-img.css'

export default class UserImg extends React.Component {
  constructor(props) {
    super(props)

    this.changeUserImg = this.changeUserImg.bind(this)
  }

  changeUserImg(e) {
    const img = URL.createObjectURL(e.target.files[0]);
    
    this.props.onChangeUser('img', img)
  }

  render() {
    const img = (this.props.img) ? this.props.img : noUserImg
    return (
      <div className='user-img-component'>
        <label htmlFor="img-select"><img src={img} alt="" /></label>
        <input type="file" name='img-select' id='img-select' onChange={this.changeUserImg}/>
      </div>
    )
  }
}