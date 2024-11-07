import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import {assets} from "../../assets/assets"
import { context } from '../../context/Context'

const Sidebar = ({hideBar,setHideBar}) => {
    const [extended,setExtended]=useState(false)
    const {onSent,prevPrompts,setRecentprompt,newchat}=useContext(context)
   async function loadprompt(prompt){
              setRecentprompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className={`sidebar ${hideBar?"":"hide-bar"}`}>
        <div className="top">
            <img onClick={()=>{
                setExtended((prev)=>!prev)
            }} className='menu' src={assets.menu_icon} alt="" />
        
        <div onClick={()=>{
            newchat()
        }} className="new-chat">
            <img src={assets.plus_icon} alt="" />
            {extended?<p>New Chat</p>:<></>}
        </div>
        {extended?<div className="recent">
            <p className="recent-title">
                Recent
            </p>
            {prevPrompts.map((item,index)=>{
                return(
                <div onClick={()=>{
                    loadprompt(item)
                }} className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0,18)}...</p>
               </div>
                )
            })}
          
        </div>:<></>}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:<></>}
            </div>
       
        
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:<></>}
            </div>
       
       
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Setting</p>:<></>}
            </div>
        </div>
    </div>
  )
  
}

export default Sidebar