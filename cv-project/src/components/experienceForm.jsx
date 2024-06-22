import { useState } from "react";

export default function ExperienceForm(props) {
  // const [jobs, setJobs] = useState([]);
  const [showJobForm, setShowJobForm] = useState(false);

  return (
    <div className="Job-info-form">
      <button onClick={() => setShowJobForm(!showJobForm)}>
        Add Employer Info
      </button>
      <JobForm
        setJobs={props.setEmploymentHistory}
        jobs={props.employmentHistory}
        isActive={showJobForm}
      />
    </div>
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

    const key = crypto.randomUUID();
    const newJob = { ...stuff, id: key };

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
