export default function GeneralInfoDisplay(props) {
  const basicInfo = props.basicInfo;
  return (
    <>
      {
        basicInfo ?
          (
            <div className="basic-info" >
              <h1>{basicInfo.firstName + " " + basicInfo.lastName}</h1>
              <p>{basicInfo.email}</p>
              <p>{basicInfo.phone}</p>
            </div>
          ) : null
      }
    </>

  )
}
