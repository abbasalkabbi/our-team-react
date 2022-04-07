import React from "react";

const TeamM=(props)=>{
    return(
      <div className="card col-md-4 col-sm-6"  >
          <div className="card-header">
              <img src={props.img} alt={props.name} style={{maxWidth:'100%'}}/>
          </div>
          <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <h6 className="card-text">{props.email}</h6>
              <a href={props.web} class="btn btn-primary">Website</a>
          </div>
      </div>
    )
}
export default TeamM;