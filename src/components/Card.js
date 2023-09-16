import React from "react"
import '../style/Card.css'

const Card = ({id, name, email}) => {
    return (
        <div className="div-out">
            <img src={`https://robohash.org/${id}?200x200}`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;