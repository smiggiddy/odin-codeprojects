import GeneralInfoForm from "./components/generalInfoForm";
import GeneralInfoDisplay from "./components/generalInfoDisplay";
import EducationInfoDisplay from "./components/educationInfoDisplay";
import EducationInfoForm from "./components/educationInfoForm";
import ExperienceForm from "./components/experienceForm";
import ExperienceDisplay from "./components/experienceDisplay";

import "./App.css";
import { useState } from "react";

function App() {
  const [basicInfo, setBasicInfo] = useState({
    fullName: "Marvin Gaye",
    phone: "301-240-5555",
    email: "mgaye@motown.com",
    location: "Detriot, MI",
  });
  const [educationInfo, setEducationInfo] = useState([]);
  const [editEducation, setEditEducation] = useState(null);
  const [employmentHistory, setEmploymentHistory] = useState([]);

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
        <ExperienceForm
          employmentHistory={employmentHistory}
          setEmploymentHistory={setEmploymentHistory}
        />
      </div>
      <div className="resume">
        <GeneralInfoDisplay basicInfo={basicInfo} />
        <EducationInfoDisplay
          educationInfo={educationInfo}
          setEditEducation={setEditEducation}
          setEducationInfo={setEducationInfo}
        />
        <ExperienceDisplay employmentHistory={employmentHistory} />
      </div>
    </div>
  );
}

export default App;
