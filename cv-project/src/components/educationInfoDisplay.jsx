export default function EducationInfoDisplay(props) {
  return (
    <div>
      {props.educationInfo.length <= 0 ? (
        <>
          <p>Add your Education info</p>
        </>
      ) : (
        <EducationDisplay
          educationInfo={props.educationInfo}
          setEducationInfo={props.setEducationInfo}
          setEditEducation={props.setEditEducation}
        />
      )}
    </div>
  );
}

function EducationDisplay(props) {
  return (
    <div>
      {props.educationInfo.map((item) => {
        return (
          <div key={item.schoolName} className="education-info">
            <h2>School: {item.schoolName}</h2>
            <p>
              Graduation Date: {item.graduationDate + " "}
              Field of Study: {item.fieldOfStudy}
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
    </div>
  );
}

function deleteEducationItem(educationInfo, item, setEducationInfo) {
  const filteredSchools = educationInfo.filter(
    (school) => school.schoolName !== item,
  );
  setEducationInfo(filteredSchools);
}
