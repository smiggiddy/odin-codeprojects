import { useState } from "react";

export default function Experience() {
  const [jobs, setJobs] = useState([]);
  const [showJobForm, setShowJobForm] = useState(false);

  const mainDivStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  };

  return (
    <div className="jobs" style={mainDivStyle}>
      <div className="job-info">
        <JobList jobs={jobs} />
      </div>
      <div className="Job-info-form">
        <button onClick={() => setShowJobForm(!showJobForm)}>
          Add Employer Info
        </button>
        <JobForm setJobs={setJobs} jobs={jobs} isActive={showJobForm} />
      </div>
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

function JobForm({ isActive, jobs, setJobs }) {
  const [employer, setEmployer] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState([]);
  const [employmentStart, setEmploymentStart] = useState("");
  const [employmentEnd, setEmploymentEnd] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "30vw",
  };

  function clear() {
    setEmployer("");
    setJobTitle("");
    setJobDescription("");
    setEmploymentEnd("");
    setEmploymentStart("");
  }

  function handleSubmit(event, stuff) {
    event.preventDefault();

    const newJob = { ...stuff };

    setJobs([...jobs, newJob]);

    clear();
  }

  return (
    <>
      {isActive ? (
        <form action="" style={formStyle}>
          <input
            type="text"
            placeholder="Employer"
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
          />
          <input
            type="text"
            placeholder="Job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employment Start Date"
            value={employmentStart}
            onChange={(e) => setEmploymentStart(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employment End Date"
            value={employmentEnd}
            onChange={(e) => setEmploymentEnd(e.target.value)}
          />
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              clear();
            }}
          >
            Clear
          </button>
          <button
            onClick={(e) =>
              handleSubmit(e, {
                employer,
                jobTitle,
                jobDescription,
                employmentStart,
                employmentEnd,
              })
            }
          >
            Submit
          </button>
        </form>
      ) : null}
    </>
  );
}
