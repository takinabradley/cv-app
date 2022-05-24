import React from "react";
import UserImg from "./components/UserImg/UserImg";
import UserExperience from "./components/UserExperience/UserExperience";
import EditableUserInfo from './components/EditableUserInfo/EditableUserInfo'
import "./styles/app.css";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        img: null,
        contact: { name: '', phone: '', email: '', profession: '' },
        education: { school: '', study: '', date: '' },
        experience: []
      },
    }
    

    this.experienceTemplate = () => ({
      company: "",
      title: "",
      tasks: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    });

    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(field, change) {
    this.setState({
      user: {
        ...this.state.user,
        [field]: change,
      }
    })
  }


  render() {
    const { img, contact, education, experience } = this.state.user;
    return (
      <div className="app">

          <div className="app-top">
            <UserImg img={img} onChangeImg={(change) => this.changeUser('img', change)} />

            <EditableUserInfo
              info={contact}
              onChangeField={(change) => this.changeUser('contact', change)}
            />

            <EditableUserInfo
              info={education}
              onChangeField={(change) => this.changeUser('education', change)}
            />
          </div>

          <div className="app-bottom">
            <UserExperience
              experience={experience}
              onChangeField={(change) => this.changeUser('experience', change)}
              experienceTemplate={this.experienceTemplate}
            />
          </div>

      </div>
    );
  }
}

export default App;
