import "./SpecificRacePage.scss"
import Header from "../../Components/Header/Header"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function SpecificRacePage(){
    const [raceData, setRaceData] = useState()
    let race = useParams()

    async function grabRaceData(){
        try{
            let {data} = await axios.get(`http://localhost:8080/${race.name}`)
            setRaceData(data)
            
        }catch{
            console.log("Error 404")
        }
    }

    useEffect(() =>{
        grabRaceData()
    },[])

    console.log(raceData)
    if(!raceData){
        return(<div>Loading...</div>)
    }

    return(
        <div className="specificRace">
            <Header/>
            <p>{raceData.RaceName}</p>
            <div className="specificRace__details">
                <img className="specificRace__circuit"src={raceData.CircuitImage}/>
                <div>
                    
                </div>
            </div>
        </div>
    )
}