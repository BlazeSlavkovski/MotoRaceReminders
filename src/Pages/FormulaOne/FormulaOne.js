import "./FormulaOne.scss"
import Header from "../../Components/Header/Header"
import axios from "axios"
import {useState} from "react"
import { useEffect } from "react";
import RaceCard from "../../Components/RaceCard/RaceCard";

export default function FormulaOne(){

    const [data, setData] = useState();
    useEffect(()=>{

        async function grabData(){
            try{
                let {data} = await axios.get("http://localhost:8080/")
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
        <>
            <RaceCard raceData={cir}/>
        </>
        
    ))

    return(
        <>
            <Header/>
            <p className="races__title">Races for the 2023 Season</p>
            <div className="races">
                
                {races}
            </div>
                
        </>
    )
}