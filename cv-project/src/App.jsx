import GeneralInfoForm from "./components/generalInfoForm";
import GeneralInfoDisplay from "./components/generalInfoDisplay";
import EducationInfoDisplay from "./components/educationInfoDisplay";
import EducationInfoForm from "./components/educationInfoForm";
import ExperienceForm from "./components/experienceForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [educationInfo, setEducationInfo] = useState([]);
  const [editEducation, setEditEducation] = useState(null);

  return (
    <div className="container">
      <div className="form">
        <GeneralInfoForm setBasicInfo={setBasicInfo} basicInfo={basicInfo} />
        <EducationInfoForm
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          setEditEducation={setEditEducation}
          editEducation={editEducation}
        />
        <ExperienceForm />
      </div>
      <div className="resume">
        <GeneralInfoDisplay basicInfo={basicInfo} />
        <EducationInfoDisplay
          educationInfo={educationInfo}
          setEditEducation={setEditEducation}
          setEducationInfo={setEducationInfo}
        />
      </div>
    </div>
  );
}

export default App;
