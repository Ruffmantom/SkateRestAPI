import React, { useEffect, useState } from 'react';
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


    const newSkater = {
        fullName: fullName,
        age: age,
        sponsors: sponsors,
        imgLink: skaterImg,
        bio: bio,
        XG: xgames,
        DT: dewTour,
        SLS: sls,
        VPS: vps,
        SS: ss,
        BATB: batb,
        GOS: gOs,
        tampa: tampa,
        RBHL: redBull
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // make sure everything worked
        console.log("form submitted!");
        console.log(newSkater);
        // submit to database
        API.saveSkater(newSkater)
            .then((res) => ({
                result: res.data
            }))
            .catch(err => console.log(err));
    }





    return (

        <div className="form-cont main-cont">
            <h1 className="title">Add New Skater</h1>
            <form id="skaterForm" action="submit" name="skaterForm">
                <div className="left">
                    <label className="inputTitle" htmlFor="fullName">Skaters Full Name</label>
                    <input className="input" onChange={e => setFullName(e.target.value)} name="fullName" type="text" />
                    <label className="inputTitle" htmlFor="age">Age</label>
                    <input className="input" onChange={e => setAge(e.target.value)} name="age" type="number" />
                    <label className="inputTitle" htmlFor="sponsors">Sponsors</label>
                    <input className="input" onChange={e => setSponsors(e.target.value)} name="sponsors" type="text" />
                    <label className="inputTitle" htmlFor="imgLink">Image Link</label>
                    <input className="input" onChange={e => setskaterImg(e.target.value)} name="imgLink" type="text" />
                    <label className="inputTitle" htmlFor="bio">Bio</label>
                    <textarea className="input" onChange={e => setBio(e.target.value)} name="bio" type="text" />
                </div>
                <div className="middle">
                    <label className="inputTitle" htmlFor="xGames">How many X Games Gold Medals</label>
                    <input className="input" onChange={e => setXgames(e.target.value)} name="xGames" type="number" defaultValue={0} />
                    <label className="inputTitle" htmlFor="dTour">How many Dew Tour Gold Medals</label>
                    <input className="input" onChange={e => setDewTour(e.target.value)} name="dTour" type="number" defaultValue={0} />
                    <label className="inputTitle" htmlFor="sls">How many Street League Gold Medals</label>
                    <input className="input" onChange={e => setSls(e.target.value)} name="sls" type="number" defaultValue={0} />
                    <label className="inputTitle" htmlFor="vps">How many Vans Park Series Gold Medals</label>
                    <input className="input" onChange={e => setVps(e.target.value)} name="vps" type="number" defaultValue={0} />
                    <label className="inputTitle" htmlFor="ssessions">How many Simple Session Gold Medals</label>
                    <input className="input" onChange={e => setSS(e.target.value)} name="ssessions" type="number" defaultValue={0} />
                </div>
                <div className="right">
                    <label className="inputTitle" htmlFor="batb">How many Battle At the Berrics wins</label>
                    <input className="input" onChange={e => setBatb(e.target.value)} name="batb" type="number" defaultValue={0} />
                    <label className="inputTitle" htmlFor="gOrSlides">How many Grind or Slide wins</label>
                    <input className="input" onChange={e => setGoS(e.target.value)} name="gOrSlides" type="number" defaultValue={0} />
                    <label className="inputTitle" htmlFor="tampPro">How many Tampa Pro wins</label>
                    <input className="input" onChange={e => setTampa(e.target.value)} name="tampPro" type="number" defaultValue={0} />
                    <label className="inputTitle" htmlFor="redBull">How many Red Bull Heartline wins</label>
                    <input className="input" onChange={e => setRedBull(e.target.value)} name="redBull" type="number" defaultValue={0} />
                </div>
            </form>
            <div className="btnContainer">
                <button className="submit-btn" onClick={handleFormSubmit} type="submit" form="skaterForm">Submit</button>
            </div>
        </div>


    )
}
