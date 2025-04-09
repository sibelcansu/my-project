import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [ad, setAd] = useState("");
  const [kartNo, setKartNo] = useState("");
  const [guvenlik, setGuvenlik] = useState("");
  
  const handleClick = () => {
    alert(`
      Adınız: ${ad}
      Kart Numaranız: ${kartNo}
      Güvenlik Kodunuz: ${guvenlik}`);
  };

  return (
    <div className="paymentContainer">
      <h2 className="title">Ödeme Bilgileri</h2>
      <p className="subtitle">Kredi kartı bilgilerini giriniz</p>

      <form className="paymentForm">
        <div className="formGroup">
          <label>Kart Üzerindeki İsim</label>
          <input
            type="text"
            placeholder="Adınızı Giriniz"
            onChange={(e) => setAd(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label>Kart Numarası</label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            onChange={(e) => setKartNo(e.target.value)}
          />
        </div>

        <div className="selectContainer">
          <div className="formGroup">
            <label>Ay</label>
            <select>
              <option>AA</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Yıl</label>
            <select>
              <option>AA</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Güvenlik Kodu</label>
            <input
              type="text"
              placeholder="123"
              onChange={(e) => setGuvenlik(e.target.value)}
            />
          </div>
        </div>

        <button className="btn" onClick={handleClick}>Gönder</button>

        
      </form>
    </div>
  );
};


const Metin = (props) => {
  return <h2>{props.children}</h2>;
};

const Bilgiler = (props) => {
  return <h4>{props.children}</h4>;
};
export default App;

