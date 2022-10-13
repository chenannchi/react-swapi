import { useState, useEffect } from "react";
import { getPilots } from "../../services/sw-api";


const PilotList = (props) => {
  const [pilots, setPilots] = useState([])
  const pilotUrls = props.starship.pilots

  useEffect(() => {
    const fetchPilots = async () => {
      const pilotsData = await getPilots(pilotUrls)
      setPilots(pilotsData)
    }
    fetchPilots()
  }, [pilotUrls])

  return (
    <>
      <div>
        {pilots.length ?
          <>
            <h3>Pilot list</h3>
            {pilots.map(pilot =>
              <div key={pilot.name}>{pilot.name}</div>
            )}
          </>
          :
          <>
            <p>No pilots!</p>
          </>
        }
      </div>
    </>
  );
}

export default PilotList;