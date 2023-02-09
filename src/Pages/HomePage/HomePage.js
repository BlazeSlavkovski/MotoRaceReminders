import "./HomePage.scss"
import axios from "axios"
import {useState} from "react"
import { useEffect } from "react";

export default function HomePage(){
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
            <div className="test"> 
            This is the homepage
                {races}
            </div>
            
        </>
    )
}