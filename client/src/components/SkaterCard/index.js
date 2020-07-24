import React from './node_modules/react';
import "./style.css";

export default function SkaterCard(props) {
    return (
        <div className="form-cont main-cont">
            <div className="skater-card">
                <div className="img-cont">
                    <img src="https://img.redbull.com/images/c_crop,x_811,y_0,h_4912,w_6549/c_fill,w_750,h_536/q_auto,f_auto/redbullcom/2017/06/26/8121058c-c14f-44c2-afd9-41dad21d7840/ryan-sheckler-hart-lines-2017-portrait" alt="{props.skater}" />
                    <h3 className="skater-name">Ryan Sheckler</h3>
                </div>
                <div className="info-cont">
                    <img src="./client/src/assets/images/pullDown.png" alt="" />
                    <div className="drop-down">
                        <div className="bio-cont">
                            <h3>Bio</h3>
                            <p className="bio">Ryan Allen Sheckler is an American professional skateboarder and
                            entrepreneur, and was the star of the MTV-produced reality television series Life of
                            Ryan. Sheckler was listed in Fox Weekly's "15 Most Influential Skateboarders of
          All-Time" article.</p>
                        </div>
                        <div className="stats">
                            <p className="stat">X-Games Golds: 10</p>
                            <p className="stat">Dew Tour Golds: 5</p>
                            <p className="stat">Simple Sessions Golds: 1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
