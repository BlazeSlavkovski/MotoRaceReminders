import Header from "../../Components/Header/Header"
import axios from "axios"
import {useState} from "react"
import { useEffect } from "react";
import RaceCard from "../../Components/RaceCard/RaceCard";
import "./FollowingPage.scss"

export default function FollowingPage(){
    const [data, setData] = useState();
    useEffect(()=>{

        async function grabData(){
            try{
                let {data} = await axios.get("http://localhost:8080/following")
                setData(data)
            }catch{
                console.log("Error 404")
            }
        }

        grabData()
    },[])

    if(!data){
        return <div>loading....</div>
    }
    

    const races = data.map((cir) =>(
        
        <RaceCard key={cir.Circuit.Location.Locality} raceData={cir}/>
        
        
    ))

    return(
        <>
            <Header/>
            <p className="races__following">Races for the 2023 Season</p>
            <div className="races">
            
                {races}
            </div>
                
        </>
    )
}