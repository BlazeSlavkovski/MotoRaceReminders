import "./FormulaOne.scss"
import Header from "../../Components/Header/Header"
import axios from "axios"
import {useState} from "react"
import { useEffect } from "react";

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
    console.log(data)

    const races = data.map((cir) =>(
        <>
            <img className="image" src={cir.ActionImage}></img>
            <img className="image" src={cir.CircuitImage}></img>
        </>
        
    ))

    return(
        <>
            <Header/>
            <p>Races for the 2023 Season</p>
                {races}
        </>
    )
}