import { useState, useEffect } from "react";

export default function EducationInfo() {
  const [schools, setSchools] = useState([]);
  const [educationItemActive, setEducationItemActive] = useState(false);
  const [editSchool, setEditSchool] = useState(null);

  const mainDivStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  };

  return (
    <div className="education-info section" style={mainDivStyle}>
      {schools.length <= 0 ? (
        <>
          <p>Add your Education info</p>
        </>
      ) : (
        <EducationDisplay
          schools={schools}
          setSchools={setSchools}
          setEditSchool={setEditSchool}
        />
      )}
      <div>
        <button
          onClick={() => {
            setEducationItemActive(!educationItemActive);
          }}
        >
          Add Education Info
        </button>

        <EducationForm
          isActive={educationItemActive}
          schools={schools}
          setSchools={setSchools}
          editSchool={editSchool}
        />
      </div>
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
              <button onClick={() => props.setEditSchool(item)}>edit</button>
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

function EducationForm({ isActive, schools, setSchools, editSchool }) {
  const [graduationDate, setGraduationDate] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");

  useEffect(() => {
    if (editSchool) {
      setGraduationDate(editSchool.graduationDate);
      setSchoolName(editSchool.schoolName);
      setFieldOfStudy(editSchool.fieldOfStudy);
    } else {
      setGraduationDate("");
      setSchoolName("");
      setFieldOfStudy("");
    }
  }, [editSchool]);

  let schoolId = editSchool
    ? schools.findIndex((school) => school.schoolName === editSchool.schoolName)
    : null;

  const contactFormStyle = {
    display: "flex",
    flexDirection: "column",
    width: "30vw",
  };

  return (
    <div>
      {isActive ? (
        <div className="education-info-form">
          <form action="" style={contactFormStyle}>
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
                const updatedSchools = [...schools];
                if (schoolId !== -1 && schoolId !== null) {
                  updatedSchools[schoolId] = {
                    schoolName: schoolName,
                    graduationDate: graduationDate,
                    fieldOfStudy: fieldOfStudy,
                  };
                  setSchools(updatedSchools);
                } else {
                  setSchools([
                    ...schools,
                    {
                      schoolName: schoolName,
                      fieldOfStudy: fieldOfStudy,
                      graduationDate: graduationDate,
                    },
                  ]);
                }

                setGraduationDate("");
                setSchoolName("");
                setFieldOfStudy("");
              }}
            >
              Submit
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setGraduationDate("");
                setSchoolName("");
                setFieldOfStudy("");
              }}
            >
              Clear
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
