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
            <select className="ay">
              <option>AA</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Yıl</label>
            <select>
              <option>YY</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
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

        <button className="btn" onClick={handleClick}>Şimdi Öde</button>

        
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

