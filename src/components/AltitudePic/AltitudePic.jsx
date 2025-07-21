import "./AltitudePic.scss";
import { useUser } from "../../context/UserProvider";
function AltitudePic({ alType }) {
  const { user, loading } = useUser();
  return (
    <div className={`altitude ${alType === "trades" ? "altitude-trades" : ""}`}>
      <h1 className="location">Altitude at</h1>
      <p className="location__name">
        {user?.residential_community || "Residence"}
      </p>
    </div>
  );
}

export default AltitudePic;
