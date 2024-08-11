import "./App.css";
import { useEffect, useState } from "react";
import HaberListe from "./HaberListe";
import { Alert, Spinner } from "react-bootstrap";

function App() {
  const [veri, veriGuncelle] = useState({ hits: [] })
  const [sorgu, sorguGuncelle] = useState("Javascript")
  const [inputVerisi, inputVerisiGuncelle] = useState("")
  const [yukleniyor, yukleniyorGuncelle] = useState(false)
  const [hata, hataGuncelle] = useState(false)

  useEffect( ()=> {

    const veriCek = async ()=> {
      yukleniyorGuncelle(true)

      try {
        const sonuc = await fetch("https://hn.algolia2342353.com/api/v1/search?query="+sorgu)
        const jsSonuc = await sonuc.json()
        veriGuncelle( jsSonuc )
      } catch (error) {
        hataGuncelle(true)
      }

      yukleniyorGuncelle(false)
    }

    veriCek()

  }, [sorgu] )


  function aramaBaslat() {
    sorguGuncelle(inputVerisi)
  }

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col">

          <div className="d-flex justify-content-between align-items-center">
            <h1>{sorgu} Haberler</h1> 
            <div className="d-flex justify-content-between align-items-center"> 
              <input value={inputVerisi} onChange={(olay)=>inputVerisiGuncelle(olay.target.value)} className="form-control" type="text" placeholder="Arama anahtarı.." /> 
              <button onClick={aramaBaslat} className="btn btn-success ms-3">Ara</button> 
            </div>
          </div>

          { hata && <Alert variant="danger">Bir hata oluştu..</Alert> }
          { yukleniyor === true ? <p> <Spinner animation="grow" /> Yükleniyor..</p> :  !hata && <HaberListe veri={veri} /> }  
        </div>
      </div>
    </section>
  );
}

export default App;
