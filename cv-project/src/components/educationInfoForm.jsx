import { useState, useEffect } from "react";

export default function EducationInfoForm(props) {
  // const [schools, setSchools] = useState([]);
  const [educationItemActive, setEducationItemActive] = useState(false);
  // const [editSchool, setEditSchool] = useState(null);

  return (
    <div className="education-info section">
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
          educationInfo={props.educationInfo}
          setEducationInfo={props.setEducationInfo}
          editSchool={props.editEducation}
        />
      </div>
    </div>
  );
}

function EducationForm({
  isActive,
  educationInfo,
  setEducationInfo,
  editSchool,
}) {
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
    ? educationInfo.findIndex(
        (school) => school.schoolName === editSchool.schoolName,
      )
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
                const updatedSchools = [...educationInfo];
                if (schoolId !== -1 && schoolId !== null) {
                  updatedSchools[schoolId] = {
                    schoolName: schoolName,
                    graduationDate: graduationDate,
                    fieldOfStudy: fieldOfStudy,
                  };
                  setEducationInfo(updatedSchools);
                } else {
                  setEducationInfo([
                    ...educationInfo,
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
