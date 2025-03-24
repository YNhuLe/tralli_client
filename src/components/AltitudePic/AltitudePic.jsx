import "./AltitudePic.scss";

function AltitudePic({ alType, residentialCom }) {
  return (
    <div className={`altitude ${alType === "trades" ? "altitude-trades" : ""}`}>
      <h1 className="location">Altitude at</h1>
      <p className="location__name">{residentialCom}</p>
    </div>
  );
}

export default AltitudePic;
