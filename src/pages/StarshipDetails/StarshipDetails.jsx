import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/sw-api"
import { Link } from "react-router-dom"
import PilotList from "../PilotList/PilotList"

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
      <div>
        {starshipDetails.name ?
        <>
          {/* {console.log(starshipDetails)} */}
          <h3>{starshipDetails.name}</h3>
          <div>{starshipDetails.model}</div>
          <div>
            <PilotList starship={starshipDetails} />
          </div>
          <Link
            to="/"
          >
            <div>RETURN</div>
          </Link>
        </>
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