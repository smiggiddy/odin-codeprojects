import { useState } from "react";

export default function EducationInfo() {
  const [graduationDate, setGraduationDate] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  return (
    <div>
      <div className="education-info-form">
        <input
          type="text"
          placeholder="School Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Graduation Date"
          value={graduationDate}
          onChange={(e) => setGraduationDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Field of Study"
          value={fieldOfStudy}
          onChange={(e) => setFieldOfStudy(e.target.value)}
        />
        <button>Submit</button>
      </div>
      <div className="education-info">
        <h2>School: {schoolName}</h2>
        <p>
          Graduation Date: {graduationDate}
          <br /> Field of Study: {fieldOfStudy}
        </p>
        <button>remove</button>
        <button>edit</button>
      </div>
    </div>
  );
}
