export default function ExperienceDisplay(props) {
  return (
    <div className="job-info">
      <h2>Experience</h2>
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
            <div className="job-details">
              <h2 className="job-employer">{item.employer}</h2>
              <p className="job-dates">
                {item.employmentStart} - {item.employmentEnd}
              </p>
            </div>
            <h3 className="job-title">{item.jobTitle}</h3>
            <p>{item.jobDescription}</p>
          </div>
        );
      })}
    </>
  );
}
