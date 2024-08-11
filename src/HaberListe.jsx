import { Badge, ListGroup } from "react-bootstrap"
import { BoxArrowUpRight } from "react-bootstrap-icons"

const HaberListe = ({veri})=> {

    return (
        <ListGroup as="ol" numbered>
        {veri.hits.map( (haber) => {
          return (
            <ListGroup.Item
              key={haber.objectID}
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
    )
}

export default HaberListe