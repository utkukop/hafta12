import { useState } from "react";

function AramaKutusu( {aramaBaslat} ) {
    const [inputVerisi, inputVerisiGuncelle] = useState("")

  return (
    <div className="d-flex justify-content-between align-items-center">
      <input
        value={inputVerisi}
        onChange={(olay) => inputVerisiGuncelle(olay.target.value)}
        className="form-control"
        type="text"
        placeholder="Arama anahtarı.."
      />
      <button onClick={ ()=> { aramaBaslat(inputVerisi)  } } className="btn btn-success ms-3">
        Ara
      </button>
    </div>
  );
}

export default AramaKutusu