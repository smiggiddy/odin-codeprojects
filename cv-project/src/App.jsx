import GeneralInfoForm from "./components/generalInfoForm";
import GeneralInfoDisplay from "./components/generalInfoDisplay";
import EducationInfoDisplay from "./components/educationInfoDisplay";
import EducationInfoForm from "./components/educationInfoForm";
import ExperienceForm from "./components/experienceForm";
import ExperienceDisplay from "./components/experienceDisplay";

import "./App.css";
import { useState } from "react";
import Button from "./components/button";

function App() {
  const [basicInfo, setBasicInfo] = useState({
    fullName: "Marvin Gaye",
    phone: "301-240-5555",
    email: "mgaye@motown.com",
    location: "Detriot, MI",
  });
  const [educationInfo, setEducationInfo] = useState([
    {
      schoolName: "Bowie State University",
      graduationDate: "2020",
      fieldOfStudy: "Computer Technology: Network Security",
    },
  ]);
  const [editEducation, setEditEducation] = useState(null);
  const [employmentHistory, setEmploymentHistory] = useState([
    {
      employer: "Google",
      jobTitle: "Site Reliability Engineer",
      jobDescription: "Keeping servers online and happy",
      employmentStart: "09/2020",
      employmentEnd: "present",
    },
  ]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [educationItemActive, setEducationItemActive] = useState(false);

  return (
    <div className="container">
      <div className="form">
        <GeneralInfoForm setBasicInfo={setBasicInfo} basicInfo={basicInfo} />
        <div className="btn-group">
          <Button
            onClick={() => {
              setEducationItemActive(!educationItemActive);
            }}
            text="Add Education"
            className="normal-btn"
          />
          <Button
            onClick={() => setShowJobForm(!showJobForm)}
            text="Add Employment"
            className="normal-btn"
          />
        </div>
        <EducationInfoForm
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          setEditEducation={setEditEducation}
          editEducation={editEducation}
          educationItemActive={educationItemActive}
        />
        <ExperienceForm
          employmentHistory={employmentHistory}
          setEmploymentHistory={setEmploymentHistory}
          showJobForm={showJobForm}
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
