import { useState } from "react";
import Input from "./input";

export default function ExperienceForm(props) {
  return (
    <>
      <JobForm
        setJobs={props.setEmploymentHistory}
        jobs={props.employmentHistory}
        isActive={props.showJobForm}
      />
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
        <div className="job-info-form">
          <h2 className="general-info-header">Employment History</h2>
          <form action="" style={formStyle}>
            <Input
              name="employer"
              label={true}
              labelName="Employer"
              type="text"
              placeholder=""
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
            />
            <Input
              name="jobTitle"
              label={true}
              labelName="Job title"
              type="text"
              placeholder=""
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <Input
              name="startDate"
              label={true}
              labelName="Start date"
              type="text"
              placeholder=""
              value={employmentStart}
              onChange={(e) => setEmploymentStart(e.target.value)}
            />
            <Input
              name="endDate"
              label={true}
              labelName="End date"
              type="text"
              placeholder=""
              value={employmentEnd}
              onChange={(e) => setEmploymentEnd(e.target.value)}
            />
            <div className="input">
              <label>Description</label>
              <textarea
                name="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>
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
        </div>
      ) : null}
    </>
  );
}
