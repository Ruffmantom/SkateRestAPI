import React, { useEffect, useState } from 'react';
import "./style.css";
import dropBtn from "../../assets/images/pullDown.png";
import upBtn from "../../assets/images/pullUp.png";

export default function SkaterCard(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="form-cont main-cont">
            <div className="skater-card">
                <div className="img-cont">
                    <img src={props.skaterImg} alt={props.fullName} />
                    <h3 className="skater-name">{props.fullName}</h3>
                </div>
                <div className="info-cont">
                    {open && <div className="drop-down">
                        <div className="bio-cont">
                            <h3 className="hThree">Bio</h3>
                            <p className="bio">{props.bio}</p>
                            <h3>Sponsors</h3>
                            <p className="bio sponsors">{props.sponsors}</p>
                        </div>
                        <h3 className="hThree">Stats</h3>
                        <ul className="stats">
                            {/* this list will have to filter for the stats that are greater than 0 */}
                            {/* so that it only displays the golds or wins that the current skater has */}
                            <li className="stat">X-Games Golds: 10</li>
                            <li className="stat">Dew Tour Golds: 5</li>
                            <li className="stat">Simple Sessions Golds: 1</li>
                        </ul>
                    </div>}

                    <img className="dropdownBtn" onClick={() => setOpen(open => !open)} src={open ? upBtn : dropBtn} alt="" />
                </div>
            </div>
        </div>
    )
}
