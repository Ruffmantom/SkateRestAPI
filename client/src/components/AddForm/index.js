import React, {useEffect, useState} from 'react';
import "./style.css";
import API from "../../utils/API";

export default function AddForm(props) { 
    // defining state
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState(0);
    const [sponsors, setSponsors] = useState("");
    const [skaterImg, setskaterImg] = useState("");
    const [bio, setBio] = useState("");
    const [xgames, setXgames] = useState(0);
    const [dewTour, setDewTour] = useState(0);
    const [sls, setSls] = useState(0);
    const [vps, setVps] = useState(0);
    const [ss, setSS] = useState(0);
    const [batb, setBatb] = useState(0);
    const [gOs, setGoS] = useState(0);
    const [tampa, setTampa] = useState(0);
    const [redBull, setRedBull] = useState(0);



    return (

        <div className="form-cont main-cont">
            <h1 className="title">Add New Skater</h1>
            <form id="skaterForm" action="submit" name="skaterForm">
                <div className="left">
                    <label className="inputTitle" htmlFor="fullName">Skaters Full Name</label>
                    <input className="input" name="fullName" type="text" />
                    <label className="inputTitle" htmlFor="age">Age</label>
                    <input className="input" name="age" type="number" />
                    <label className="inputTitle" htmlFor="sponsors">Sponsors</label>
                    <input className="input" name="sponsors" type="text" />
                    <label className="inputTitle" htmlFor="imgLink">Image Link</label>
                    <input className="input" name="imgLink" type="text" />
                    <label className="inputTitle" htmlFor="bio">Bio</label>
                    <textarea className="input" name="bio" type="text" defaultValue={""} />
                </div>
                <div className="middle">
                    <label className="inputTitle" htmlFor="xGames">How many X Games Gold Medals</label>
                    <input className="input" name="xGames" type="text" />
                    <label className="inputTitle" htmlFor="dTour">How many Dew Tour Gold Medals</label>
                    <input className="input" name="dTour" type="text" />
                    <label className="inputTitle" htmlFor="sls">How many Street League Gold Medals</label>
                    <input className="input" name="sls" type="text" />
                    <label className="inputTitle" htmlFor="vps">How many Vans Park Series Gold Medals</label>
                    <input className="input" name="vps" type="text" />
                    <label className="inputTitle" htmlFor="ssessions">How many Simple Session Gold Medals</label>
                    <input className="input" name="ssessions" type="text" />
                </div>
                <div className="right">
                    <label className="inputTitle" htmlFor="batb">How many Battle At the Berrics wins</label>
                    <input className="input" name="batb" type="text" />
                    <label className="inputTitle" htmlFor="gOrSlides">How many Grind or Slide wins</label>
                    <input className="input" name="gOrSlides" type="text" />
                    <label className="inputTitle" htmlFor="tampPro">How many Tampa Pro wins</label>
                    <input className="input" name="tampPro" type="text" />
                    <label className="inputTitle" htmlFor="redBull">How many Red Bull Heartline wins</label>
                    <input className="input" name="redBull" type="text" />
                </div>
            </form>
            <div className="btnContainer">
                <button className="submit-btn" type="submit" form="skaterForm">Submit</button>
            </div>
        </div>


    )
}
