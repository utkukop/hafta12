import { Badge, ListGroup } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";

function App() {
  const [veri, veriGuncelle] = useState({ hits: [] });

  useEffect( ()=> {

    const veriCek = async ()=> {
      const sonuc = await fetch("https://hn.algolia.com/api/v1/search?query=javascript")
      const jsSonuc = await sonuc.json()

      veriGuncelle( jsSonuc )
    }

    veriCek()

  }, [] )



  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>Javascript Haberler</h1>

          <ListGroup as="ol" numbered>
            {veri.hits.map( (haber) => {
              return (
                <ListGroup.Item
                key={haber.story_id}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{haber.title}</div>
                    <strong>Yazar:</strong> {haber.author}  <a target="_blank" href={haber.url}> <BoxArrowUpRight /> </a>
                  </div>
                  <Badge bg="primary" pill>
                    {haber.points}
                  </Badge>
                </ListGroup.Item>
              )
            }
            )}
          </ListGroup>
        </div>
      </div>
    </section>
  );
}

export default App;
