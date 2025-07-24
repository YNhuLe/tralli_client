import { useState } from "react";
import "./PaymentInfo.scss";
function PaymentInfo() {
  const [cardNum, setCardNum] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [error, setError] = useState({
    cardNum: "",
    cvv: "",
    nameOnCard: "",
    zipCode: "",
    expirationDate: "",
  });

  const handleChangeCardNum = (event) => {
    setCardNum(event.target.value);
  };

  const handleChangeCvv = (event) => {
    setChangeCvv(event.target.value);
  };

  const handleChangeNameOnCard = (event) => {
    setNameOnCard(event.target.value);
  };

  const handleChangeZipCode = (event) => {
    setZipCode(event.target.value);
  };

  const handleChangeExpirationDate = (event) => {
    setExpirationDate(event.target.value);
  };
  return (
    <section>
      <h2>Payment info</h2>
      <form>
        <div>
          <input type="text" />
        </div>
      </form>
    </section>
  );
}

export default PaymentInfo;
