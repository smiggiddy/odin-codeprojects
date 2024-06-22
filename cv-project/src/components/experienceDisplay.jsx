export default function ExperienceDisplay(props) {
  return (
    <div className="job-info">
      <JobList jobs={props.employmentHistory} />
    </div>
  );
}

function JobList(props) {
  return (
    <>
      {props.jobs.map((item) => {
        return (
          <div className="job" key={item.id}>
            <h2>{item.employer}</h2>
            <h3>{item.jobTitle}</h3>
            <p>
              {item.employmentStart} - {item.employmentEnd}
            </p>
            <p>{item.jobDescription}</p>
          </div>
        );
      })}
    </>
  );
}
