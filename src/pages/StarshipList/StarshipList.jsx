import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom"

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
        <h3>STAR WARS STARSHIPS LIST</h3>
        <div className="ship-container">
          {starships.map(starship =>
            <Link 
              to='/starship' 
              state={{ starship }} 
              key={starship.name}
            >
              <div className="class-div">
                {starship.name}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default StarshipList;