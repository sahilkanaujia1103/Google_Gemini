import React, { useContext } from 'react'
import "./Menu.css"
import {assets} from "../../assets/assets"
import { context } from '../../context/Context'
import menu_icon from "../../assets/menu_icon.png"

const Menu = ({hideBar,setHideBar}) => {
    const {
        input,
        setInput,
        recentPrompt,
        setRecentprompt,
        prevPrompts,
        setPrevPrompts,
        onSent,
        loading,
        showResult,
        resultData

    }=useContext(context)
    const hidebar=()=>{
        hideBar?setHideBar(false):setHideBar(true)
    }
  return (
    <div className='main'>
        <div className="nav">
            
            <p>Gemini</p>
            <img onClick={()=>{
                hidebar()
            }} className='menu-icon' src={menu_icon} alt="" />
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
        {!showResult?<>
            <div className="greet">
                <p> <span>Hello, Sahil.</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                <p>Suggest beautiful places of Europe for vacation and enjoying Life</p>
                <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                <p>Briefy explain the concept of tesla coil made Nikola Tesla</p>
                <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                <p>How manage the large team to achieve the Goals and become good leader</p>
                <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                <p>Improve readibility of the following Code</p>
                <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </>:<>
            <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<><div className="loader">
                         <hr />
                         <hr />
                         <hr />
                    </div></>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                   
                </div>
            </div>
        </>}
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>{
                        setInput(e.target.value)
                    }} value={input} type="text" name="" id=""  placeholder='Enter a prompt here'/>
                
                <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input?<img onClick={()=>{
                    onSent()
                }} src={assets.send_icon} alt="" />:<></>}
                </div>
                </div>
                <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
    </div>
  )
}

export default Menu