import React from "react"


function Card (props) {

    return (
                
        <div className="card">
        <div className="top">
            <p> {props.id}</p>
            <h2 className="name">{props.name}</h2>
                    <img
                        src={props.img}
                        alt="image"
                        className="circle-img" 
                    />
        </div>
            <div className="bottom">
                <p className="info">{props.tel}</p>
                <p className="info">{props.email}</p>
            </div>
        </div>
    );
}

export default Card;