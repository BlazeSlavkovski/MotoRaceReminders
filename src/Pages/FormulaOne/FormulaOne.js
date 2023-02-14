import "./FormulaOne.scss"
import Header from "../../Components/Header/Header"
import axios from "axios"
import {useState} from "react"
import { useEffect } from "react";
import RaceCard from "../../Components/RaceCard/RaceCard";
import backIcon from "../../Assets/back_arrow_icon.svg"
import { useNavigate } from "react-router-dom";

export default function FormulaOne(){
    let nav = useNavigate()
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
        
        <RaceCard key={cir.Circuit.Location.Locality} raceData={cir}/>
        
        
    ))

    function goBack(){
        nav(-1)
    }

    return(
        <>
            <Header/>
            <div className="races__nav">
                <img src={backIcon} className="races__nav__back" onClick={goBack}/>
                <p className="races__title">Races for the 2023 Season</p>
            </div>
            
            <div className="races">
                
                {races}
            </div>
                
        </>
    )
}