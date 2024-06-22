export default function GeneralInfoDisplay(props) {
  const basicInfo = props.basicInfo;
  return (
    <>
      {basicInfo ? (
        <div className="basic-info">
          <h1>{basicInfo.fullName}</h1>
          <div className="basic-info-details">
            <p>{basicInfo.location}</p>
            <p>{basicInfo.email}</p>
            <p>{basicInfo.phone}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
