import { createContext, useState } from "react";
import run from "../config/gemini";


export const context=createContext()
  
 const ContextProvider=(props)=>{
   
    const [input,setInput]=useState("")
    const [recentPrompt,setRecentprompt]=useState("")
    const [prevPrompts,setPrevPrompts]=useState([])
    const [showResult,setShowResult]=useState(false)
    const [loading,setLoading]=useState(false)
    const [resultData,setResultdata]=useState("")
     function delaypara(index,nextword){
        setTimeout(()=>{
            setResultdata((prev)=>(prev+nextword))
        },index*75)
    }
    const newchat=()=>{
        setLoading(false)
        setShowResult(false)
    }

    const  onSent=async (prompt)=>{
        setResultdata("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt!==undefined){
            response= await run(prompt)

           setRecentprompt(prompt)
        }
        else{
            setRecentprompt(input)
        setPrevPrompts((prev)=>([...prev,input]))
           response= await run(input)
        }
        
      let responseArray=response.split("**")
      let newresponse=""
      for(let i=0;i<responseArray.length;i++){
        if(i===0||i%2!==1){
            newresponse+=responseArray[i]
        }
        else{
            newresponse+="<b>"+responseArray[i]+"</b>"
        }
      }
      const newresponse2=newresponse.split("*").join("</br>")
      const newresponseArray=newresponse2.split(" ")
      for(let i=0;i<newresponseArray.length;i++){
        let nextword=newresponseArray[i]
        delaypara(i,nextword+" ")
      }
      setResultdata(newresponse2)
      setLoading(false)
      setInput("")
    }

      

    const contextvalue={
        input,
        setInput,
        recentPrompt,
        setRecentprompt,
        prevPrompts,
        setPrevPrompts,
        onSent,
        loading,
        showResult,
        resultData,
        newchat

    }
   
    
    return(
        <context.Provider value={contextvalue}>
            {props.children}
        </context.Provider>
    )

 }
 export default ContextProvider