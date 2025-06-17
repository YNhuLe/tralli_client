import { useState } from "react";

function ClientPayment() {
  const [cardNum, setCardNum] = useState("");
  const [expirationDay, setExpirationDay] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cvv, setCvv] = useState("");

  const [error, setError] = useState({
    cardNum: "",
    expirationDay: "",
    postalCode: "",
    nameOnCard: "",
    cvv: "",
  });

  const handleChangeCardNum = (event) => {
    setCardNum(event.target.value);
  };

  const handleExpirationDay = (event) => {
    setExpirationDay(event.target.value);
  };

  const handlePostalCode = (event) => {
    setPostalCode(event.target.value);
  };

  const handleNameOnCard = (event) => {
    setNameOnCard(event.target.value);
  };

  const handleCvv = (event) => {
    setCvv(event.target.value);
  };
  return (
    <>
      <form onSubmit="/">
        <p>Card Number</p>
        <input type="text" />
      </form>
    </>
  );
}
export default ClientPayment;
