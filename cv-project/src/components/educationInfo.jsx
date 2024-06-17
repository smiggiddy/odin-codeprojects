import { useState } from "react";

export default function EducationInfo() {
  const [education, setEducation] = useState([]);
  const [educationItemActive, setEducationItemActive] = useState(false);

  return (
    <div>
      {education.length <= 0 ? (
        <>
          <p>Add your Education info</p>
        </>
      ) : (
        <EducationDisplay schools={education} />
      )}
      <button
        onClick={() => {
          setEducationItemActive(!educationItemActive);
        }}
      >
        Add Education Info
      </button>
      <EducationItem
        isActive={educationItemActive}
        schools={education}
        setSchools={setEducation}
      />
    </div>
  );
}

function EducationDisplay(props) {
  return (
    <div>
      {props.schools.map((item) => {
        return (
          <div key={item.school} className="education-info">
            <h2>School: {item.school}</h2>
            <p>
              Graduation Date: {item.graduation + " "}
              Field of Study: {item.concentration}
              <button>edit</button>
              <button>remove</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

function EducationItem({ isActive, schools, setSchools }) {
  const [graduationDate, setGraduationDate] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  return (
    <div>
      {isActive ? (
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
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setSchools([
                ...schools,
                {
                  school: schoolName,
                  concentration: fieldOfStudy,
                  graduation: graduationDate,
                },
              ]);
              setGraduationDate("");
              setSchoolName("");
              setFieldOfStudy("");
            }}
          >
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
}
