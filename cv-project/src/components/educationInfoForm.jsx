import { useState, useEffect } from "react";
import Input from "./input";
import Button from "./button";

export default function EducationInfoForm(props) {
  return (
    <>
      <EducationForm
        isActive={props.educationItemActive}
        educationInfo={props.educationInfo}
        setEducationInfo={props.setEducationInfo}
        editSchool={props.editEducation}
      />
    </>
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
    ? educationInfo.findIndex((school) => school.id === editSchool.id)
    : null;

  const contactFormStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      {isActive ? (
        <div className="education-info-form">
          <h2 className="general-info-header">Education History</h2>
          <form action="" style={contactFormStyle}>
            <Input
              label={true}
              labelName="School"
              name="School"
              type="text"
              placeholder=""
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
            <Input
              label={true}
              labelName="Graduation date"
              name="graduationDate"
              type="text"
              placeholder=""
              value={graduationDate}
              onChange={(e) => setGraduationDate(e.target.value)}
            />
            <Input
              label={true}
              labelName="Degree/Field of study"
              name="degree"
              type="text"
              placeholder=""
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
            />
            <div className="btn-group">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setGraduationDate("");
                  setSchoolName("");
                  setFieldOfStudy("");
                  schoolId = null;
                }}
                text="Clear"
              />
              <Button
                type="submit"
                className="submit-btn"
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
                        id: crypto.randomUUID(),
                      },
                    ]);
                  }

                  setGraduationDate("");
                  setSchoolName("");
                  setFieldOfStudy("");
                }}
                text="Submit"
              />
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
