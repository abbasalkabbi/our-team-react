import React from "react";
import TeamM from "./TeamM";
import Datateam from './DataTeam';
const Team=()=>{
// make for loop and get our team commponents
  const members=Datateam.map(data=> <TeamM
    key={data.id}
    id={data.id}
    name={data.name}
    img={data.img}
    email={data.email}
    web={data.web} />)

    return(
      <div className="row">
           
          {members}
         
      </div>
    )
}
export default Team;