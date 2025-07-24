import { useState } from "react";
import "./PaymentInfo.scss";
import errors from "../../assets/icons/error-24px.svg";
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
    <section className="payment__section">
      <h2>Payment Information</h2>
      <form className="payment__form">
        <div className="payment__form-property">
          <label className="payment__label">Card Number</label>
          <input
            type="text"
            value={cardNum}
            onChange={handleChangeCardNum}
            className={`payment__form-input ${error.fullName ? "invalid" : ""}`}
          />
          <div className={error.cardNum ? "error__state" : ""}>
            {error.cardNum && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="payment__form-property">
          <label className="payment__label">Expiration Date(MM/YY)</label>
          <input
            type="text"
            value={cvv}
            onChange={handleChangeCvv}
            className={`payment__form-input ${error.cvv ? "invalid" : ""}`}
          />
          <div className={error.cvv ? "error__state" : ""}>
            {error.cvv && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="payment__form-property">
          <label className="payment__label">Zip/Postal Code</label>
          <input
            type="text"
            value={zipCode}
            onChange={handleChangeZipCode}
            className={`payment__form-input ${error.zipCode ? "invalid" : ""}`}
          />
          <div className={error.zipCode ? "error__state" : ""}>
            {error.zipCode && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="payment__form-property">
          <label className="payment__label">Name on card</label>
          <input
            type="text"
            value={nameOnCard}
            onChange={handleChangeNameOnCard}
            className={`payment__form-input ${error.zipCode ? "invalid" : ""}`}
          />
          <div className={error.nameOnCard ? "error__state" : ""}>
            {error.nameOnCard && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="payment__form-property">
          <label className="payment__label">CVV (3 digits)</label>
          <input
            type="text"
            value={expirationDate}
            onChange={handleChangeExpirationDate}
            className={`payment__form-input ${
              error.expirationDate ? "invalid" : ""
            }`}
          />
          <div className={error.expirationDate ? "error__state" : ""}>
            {error.expirationDate && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

export default PaymentInfo;
