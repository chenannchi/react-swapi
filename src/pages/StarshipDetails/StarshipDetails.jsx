import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/sw-api"
import { Link } from "react-router-dom"
import PilotList from "../PilotList/PilotList"
import "./StarshipDetails.css"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <div id="page">
        <div id="title">STAR WARS STARSHIPS</div>
        {starshipDetails.name ?
          <div className="card-container">
            <div className="card">
              <div>NAME:{starshipDetails.name}</div>
              <div>MODEL:{starshipDetails.model}</div>
              <div>
                <PilotList starship={starshipDetails} />
              </div>
              <Link
                to="/"
              >
                <div>RETURN</div>
              </Link>
            </div>
          </div>
          :
          <>
            <p>Loading...</p>
          </>

        }
      </div>
    </>
  );
}

export default StarshipDetails