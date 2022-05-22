import React from 'react';
import UserImg from './components/UserImg/UserImg'
import UserContact from './components/UserContact/UserContact';
import UserEducation from './components/UserEducation/UserEducation';
import UserExperience from './components/UserExperience/UserExperience'
import appStyles from './styles/app-styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        img: null,
        contact: { name: '', phone: '', email: '', profession: '' },
        education: { school: '', study: '', date: '' },
        experience: []
      },
      experienceTemplate: {
        company: '', title: '', tasks: '', startDate: '', endDate: ''
      }
    }
    
    this.onChangeUser = this.onChangeUser.bind(this)
  }

  onChangeUser(field, change) {
    this.setState({
      user: {
        ...this.state.user,
        [field]: change,
      }
    })
  }

  render() {
    const { img, contact, education, experience } = this.state.user
    return (
      <div className="app">
        <main>
          <div className='app-top'>
            <UserImg  img={img} onChangeUser={this.onChangeUser}/>
            <UserContact  contact={contact} onChangeUser={this.onChangeUser}/>
            <UserEducation  education={education} onChangeUser={this.onChangeUser}/>
          </div>

          <div className="app-bottom">
            <UserExperience
              experience={experience}
              onChangeUser={this.onChangeUser}
              experienceTemplate={{ ...this.state.experienceTemplate }}
            />
          </div>
        </main>
        
      </div>
    )
  }
}

export default App;
