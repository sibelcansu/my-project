import React from 'react'
import "./App.css";

const App = () => {
  return (
    <div className='paymentContainer'>
      <h2 className='title'>Ödeme Bilgileri</h2>
      <p className="subtitle">Kredi kartı bilgilerini giriniz</p>

      <form className="paymenyForm">
        <div className="formGroup">
          <label>Kart Üzerindeki İsim</label>
          <input type="text" placeholder="Adınızı Giriniz"/>
        </div>

        <div className="formGroup">
          <label>Kart Numarası</label>
          <input type="text" placeholder="0000 0000 0000 0000"/>
        </div>

        <div className="formGroup">
          <label>Ay</label>
          <input type="text" placeholder="Adınızı Giriniz"/>
        </div>

        <div className="formGroup">
          <label>Yıl</label>
          <input type="text" placeholder=""/>
        </div>

        <div className="formGroup">
          <label>Güvenlik Kodu</label>
          <input type="text" placeholder="123"/>
        </div>

        <Button>Şimdi Öde</Button>
      </form>
      
    </div>
  )
}

const Button=(props)=>{
  return <button className="btn" type="submit">{props.children}</button>;

};

const Metin=(props)=>{
  return <h2>{props.children}</h2>;
}

const Bilgiler=(props)=>{
  return <h4>{props.children}</h4>

}
export default App

{/* <Metin>Ödeme Bilgileri</Metin>
      <p>Kredi kartı bilgilerinizi giriniz</p>
      <Bilgiler>Kart Üzerindeki İsim</Bilgiler>
      <input></input>
      <Bilgiler>Kart Numarası</Bilgiler>

       */}