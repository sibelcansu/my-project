import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [ad, setAd] = useState("");
  const [kartNo, setKartNo] = useState("");
  const [ay, setAy] = useState("");
  const [yil, setYil] = useState("");
  const [guvenlik, setGuvenlik] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    
    alert(`
      Adınız: ${ad}
      Kart Numaranız: ${kartNo}
      Ay: ${ay}
      Yıl: ${yil}
      Güvenlik Kodunuz: ${guvenlik}`);
  };


  return (
    <div className="paymentContainer">
      <h2 className="title">Ödeme Bilgileri</h2>
      <p className="subtitle">Kredi kartı bilgilerini giriniz</p>

      <form className="paymentForm" onSubmit={handleClick}>
        <div className="formGroup">
          <label>Kart Üzerindeki İsim</label>
          <input
            type="text"
            placeholder="Ahmet Yılmaz"
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
            <select className="ay" onChange={(e) => setAy(e.target.value)}>
              <option value="">AA</option>
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Yıl</label>
            <select onChange={(e) => setYil(e.target.value)}>
              <option value="">YY</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
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

        <button className="btn" onClick={handleClick}>
          Şimdi Öde
        </button>
      </form>
    </div>
  );
};

export default App;
