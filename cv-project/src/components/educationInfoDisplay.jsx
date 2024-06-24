export default function EducationInfoDisplay(props) {
  return (
    <div className="education-info">
      <h2>Education</h2>
      <EducationDisplay
        educationInfo={props.educationInfo}
        setEducationInfo={props.setEducationInfo}
        setEditEducation={props.setEditEducation}
      />
    </div>
  );
}

function EducationDisplay(props) {
  return (
    <>
      {props.educationInfo.map((item) => {
        return (
          <div key={item.schoolName} className="education-item">
            <h2>{item.schoolName}</h2>
            <p>
              Graduation: {item.graduationDate + " "}
              {item.fieldOfStudy}
            </p>
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
