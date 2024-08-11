import { useState } from "react";
import "./App.css";

function App() {
  const [degerler, degerleriGuncelle] = useState({})

  function inputDegistir(olay) {
    const name = olay.target.name;
    const value = olay.target.value;
    degerleriGuncelle(degerler => ( {...degerler, [name]: value}))
  }

  return (
    <>
      <div>Veri input değeri: {degerler.ad} {degerler.soyad} {degerler.telefon} {degerler.eposta}</div>
      <input name="ad" value={degerler.ad || ""} onChange={inputDegistir} placeholder="Ad" />
      <input name="soyad" value={degerler.soyad || ""} onChange={inputDegistir} placeholder="Soyad" />
      <input name="telefon" value={degerler.telefon || ""} onChange={inputDegistir} placeholder="Telefon" />
      <input name="eposta" value={degerler.eposta || ""} onChange={inputDegistir} placeholder="Eposta" />
    </>
  )
}

export default App;
