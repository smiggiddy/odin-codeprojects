export default function EducationInfoDisplay(props) {
  return (
    <>
      <EducationDisplay
        educationInfo={props.educationInfo}
        setEducationInfo={props.setEducationInfo}
        setEditEducation={props.setEditEducation}
      />
    </>
  );
}

function EducationDisplay(props) {
  return (
    <>
      {props.educationInfo.map((item) => {
        return (
          <div key={item.schoolName} className="education-info">
            <h2>School: {item.schoolName}</h2>
            <p>
              Graduation: {item.graduationDate + " "}
              Degree: {item.fieldOfStudy}
              <button onClick={() => props.setEditEducation(item)}>edit</button>
              <button
                onClick={() =>
                  deleteEducationItem(
                    props.educationInfo,
                    item.schoolName,
                    props.setEducationInfo,
                  )
                }
              >
                remove
              </button>
            </p>
          </div>
        );
      })}
    </>
  );
}

function deleteEducationItem(educationInfo, item, setEducationInfo) {
  const filteredSchools = educationInfo.filter(
    (school) => school.schoolName !== item,
  );
  setEducationInfo(filteredSchools);
}
