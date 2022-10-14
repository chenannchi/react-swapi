import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom"
import "./StarshipList.css"

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
      // console.log(starshipData)
    }
    fetchStarshipData()
  }, [])

  return (
    <>
      <div>
        <>
          <div id="page">
            <div id="title">STAR WARS STARSHIPS LIST</div>
            <div className="list-card-container">
              <div id="all-starships">
                {starships.map(starship =>
                  <div className="list-card" key={starship.name}>
                    <Link
                      className="link"
                      to='/starship'
                      state={{ starship }}
                    >
                      <div className="class-div">
                        {starship.name}
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default StarshipList;