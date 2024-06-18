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
        <EducationDisplay schools={education} setSchools={setEducation} />
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
          <div key={item.schoolName} className="education-info">
            <h2>School: {item.schoolName}</h2>
            <p>
              Graduation Date: {item.graduationDate + " "}
              Field of Study: {item.fieldOfStudy}
              <button onClick={() => EducationItem({ editActive: item })}>
                edit
              </button>
              <button
                onClick={() =>
                  deleteEducationItem(
                    props.schools,
                    item.schoolName,
                    props.setSchools,
                  )
                }
              >
                remove
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

function EducationItem({ isActive, schools, setSchools, editActive }) {
  const [graduationDate, setGraduationDate] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  if (editActive) {
    setGraduationDate(editActive.graduationDate);
    setSchoolName(editActive.schoolName);
    setFieldOfStudy(editActive.fieldOfStudy);
    isActive === true;
  }

  return (
    <div>
      {isActive ? (
        <div className="education-info-form">
          <form action="">
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
                    schoolName: schoolName,
                    fieldOfStudy: fieldOfStudy,
                    graduationDate: graduationDate,
                  },
                ]);
                setGraduationDate("");
                setSchoolName("");
                setFieldOfStudy("");
              }}
            >
              Submit
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

function deleteEducationItem(schools, item, setSchools) {
  const filteredSchools = schools.filter(
    (school) => school.schoolName !== item,
  );
  setSchools(filteredSchools);
}
