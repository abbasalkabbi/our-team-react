import React, { Component } from "react";
import TeamM from "./TeamM";
import Datateam from './DataTeam';
class  Team extends Component{
     // eslint-disable-next-line no-useless-constructor
     constructor(){
      super()
      this.state={members:Datateam,show:false}
      this.ShowMembers=this.ShowMembers.bind(this)
      
        }
      // event button when clik chencg state.show
      ShowMembers(){
        if(this.state.show===true){
          this.setState(prevstate=>{return{
            show:false
           }})
        }
        else{
          this.setState(prevstate=>{return{
            show:true
           }})
        }
        
      }
      // for loop team members
      mapping(x){
       
        const  datam= x.map(data=> 
        
         <TeamM
          key={data.id}
          id={data.id}
          name={data.name}
          img={data.img}
          email={data.email}
          web={data.web} />
          )
          return datam
        }
      //render Start
      render(){
       
               return(
                 <div className="row">
                     
                        <button className='btn btn-primary  btn-lg btn-block' onClick={this.ShowMembers}>{this.state.show?'Hide Member':'Show Member'}</button> 

                        {this.state.show ?this.mapping(this.state.members):'No Data'}

                 </div>
               )
      }//render End
}
export default Team;