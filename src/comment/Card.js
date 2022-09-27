import React from "react";

const Card = (props)=>{
    console.log(props);
    return <div className="ui cards">
    <div className="card">
      <div className="content">
        {props.children}
        <p>Etat : {props.etat}</p>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button" onClick={()=>props.changeHandler(props.id, "Approuvé")}  >Approve</div>
          <div className="ui basic red button" onClick={()=>props.changeHandler(props.id, "Décliné")}  >Decline</div>
        </div>
      </div>
    </div>
    </div>
}

export default Card;