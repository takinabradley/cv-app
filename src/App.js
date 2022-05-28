import React from "react";
import UserImg from "./components/UserImg/UserImg";
import UserExperience from "./components/UserExperience/UserExperience";
import EditableUserInfo from './components/EditableUserInfo/EditableUserInfo'
import "./styles/app.css";
import uniqid from "uniqid";

function App() {
  const [user, setUser] = React.useState({
    img: null,
    contact: { name: '', phone: '', email: '', profession: '' },
    education: { school: '', study: '', date: '' },
    experience: []
  })

  const experienceTemplate = () => ({
      company: "",
      title: "",
      tasks: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
  });

  function changeUser(field, change) {
    setUser({
        ...user,
        [field]: change,
    })
  }

  return (
      <div className="app">

          <div className="app-top">
            <UserImg img={user.img} onChangeImg={(change) => changeUser('img', change)} />

            <EditableUserInfo
              info={user.contact}
              onChangeField={(change) => changeUser('contact', change)}
            />

            <EditableUserInfo
              info={user.education}
              onChangeField={(change) => changeUser('education', change)}
            />
          </div>

          <div className="app-bottom">
            <UserExperience
              experience={user.experience}
              onChangeField={(change) => changeUser('experience', change)}
              experienceTemplate={experienceTemplate}
            />
          </div>

      </div>
    );

  
}

export default App;
