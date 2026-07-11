import {useReducer, useState , useEffect, use} from "react";
import Button from "./buttons";



function Score() {  

    const [status , setstatus] = useState(false)
    const [loaded, setLoaded] = useState(false); 
    const [endmatch , setendmatch] = useState(false)  
    const [showtarget , setshowtarget] = useState(false)

    


    function reducer(state , action){
     
 switch(action.type) {   // writing this code for adding runs and wicket and wide, no balls , overs 
  case "onerun": { //one run
      const balls = state.balls +1 
      return {
        ...state ,
        history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket : state.wicket , target:state.total+1 }] ,
        total : state.total +1 ,
        balls : state.balls === 5? 0:balls , 
        overs : state.balls === 5 ? state.overs +1 : state.overs 

        };
  
} 
case "tworun": {//two run 
      const balls = state.balls +1 
      return {
        ...state ,
         history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket : state.wicket , target:state.total +1 }] ,
         total : state.total +2 ,
          balls : state.balls === 5? 0:balls , 
          overs : state.balls === 5 ? state.overs +1 : state.overs
        
        
        };
  
} 

case "threerun": { //three run 
      const balls = state.balls +1 
      return {
        ...state ,
         history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket: state.wicket , target:state.total + 1}] , 
        total : state.total +3 ,
          balls : state.balls === 5? 0:balls , 
          overs : state.balls === 5 ? state.overs +1 : state.overs
        
        
        };
  
}
case "fourrun": { //fourrun
      const balls = state.balls +1 
      return {
        ...state ,
         history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket:state.wicket , target:state.total+1 }] ,
        total : state.total +4 ,
          balls : state.balls === 5? 0:balls , 
          overs : state.balls === 5 ? state.overs +1 : state.overs
        
        
        };
  
}

case "fiverun": { //five run 
      const balls = state.balls +1 
      return {
        ...state ,
         history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket: state.wicket , target:state.total +1}] ,
        total : state.total +5 ,
          balls : state.balls === 5? 0:balls , 
          overs : state.balls === 5 ? state.overs +1 : state.overs
        
        
        };
  
} 
case "sixrun": { // sixruns 
      const balls = state.balls +1  ;
     
    
      return {
        ...state , 
         history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs ,wicket: state.wicket , target:state.total +1 }] ,
          total : state.total +6 ,
          balls : state.balls === 5? 0:balls , 
           overs: state.balls === 5 ? state.overs +1 : state.overs ,
           
        };
  
} 

case "end" :{ 
      

    return{...state  ,
       history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs ,wicket:state.wicket , target:state.total +1}] ,
      total: 0 , balls : 0 , overs : 0 , wicket : 0 } 
    
}
 case "wide" :
    return {...state ,
       history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket : state.wicket , target:state.total+1 }] ,
       total: state.total +1} 
case "Wicket": {
    const balls = state.balls +1  ;
     
    
      return {
        ...state , 
         history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket : state.wicket , target:state.total +1 }] ,
          wicket : state.wicket +1 ,
          balls : state.balls === 5? 0:balls , 
           overs: state.balls === 5 ? state.overs +1 : state.overs ,
           
        };
  
}
case "dot" : {
 const balls = state.balls +1  ;
     
    
      return {
        ...state , 
        history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket : state.wicket , target:state.total +1}] , 
          balls : state.balls === 5? 0:balls , 
           overs: state.balls === 5 ? state.overs +1 : state.overs ,
           
        };
  
} 
case "undo": {
  return {
    ...state , 
    total : state.history.at(-1).total , 
    wicket : state.history.at(-1).wicket , 
    overs : state.history.at(-1).overs , 
    balls : state.history.at(-1).balls

  }
} 

case "target" : {
   return{...state  ,
       history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs ,wicket:state.wicket , target:state.total +1}] ,
      total: 0 , balls : 0 , overs : 0 , wicket : 0 , target: state.total +1  , history : []} 
    
}

case "new match" :{ 
      

    return{...state  ,
       history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs ,wicket:state.wicket , target:state.total +1}] ,
      total: 0 , balls : 0 , overs : 0 , wicket : 0  , history: [] , target : null} 
    
}


   
    
    
case "load": 
 console.log("LOAD ACTION", action.payload);
  return action.payload
 default:
    return state

   

}  

 





}
const [state , dispatch] = useReducer(reducer , {total : 0 , wicket : 0 ,  overs: 0 , balls: 0  , history : [] , target: 0}) 



useEffect(()=>{
 if (state.target > 0 && state.total >= state.target) {
        alert("Match won!");
        setendmatch(true); 
        
    }




    } ,[state.target , state.total])

// local storage..incase the user reload accidently the data shouldd not reset 


useEffect(() => {
  const getstate = JSON.parse(localStorage.getItem("display"));

  if (getstate) {
    dispatch({
      type: "load",
      payload: {
    ...getstate,
    history: getstate.history ?? []
  }
    });
  }

  setLoaded(true);
}, []);

useEffect(() => {
  if (!loaded) return;

  localStorage.setItem("display", JSON.stringify(state));
}, [state, loaded]); 






  

return(
    <>
    
    <div className="flex flex-col items-center justify-between gap-5 ">
        <div className="p-4 m-8"> 

           {showtarget ? <h1 className="text-2xl font-bold text-center"> target :{state.target}</h1> :""}
           <h1 className="text-3xl font-bold">Bating-team: {state.total}/{state.wicket}</h1> 
           <span>overs : {state.overs}.{state.balls} </span>   

           
        </div>   
   


    { status===false? <div className="grid grid-cols-3 gap-2" style={{display: endmatch ? "none" : "grid"}}>  
          
            <Button innercomponent={"1"} clicktype={"onerun"} dispatch={dispatch} />
            <Button innercomponent={"2"} clicktype={"tworun"} dispatch={dispatch} />
            <Button innercomponent={"3"} clicktype={"threerun"} dispatch={dispatch} /> 
            <Button innercomponent={"4"} clicktype={"fourrun"} dispatch={dispatch} /> 
            <Button innercomponent={"5"} clicktype={"fiverun"} dispatch={dispatch} /> 
            <Button innercomponent={"6"} clicktype={"sixrun"} dispatch={dispatch} />  
            <Button innercomponent={"wide"} clicktype={"wide"} dispatch={dispatch} />
            <Button innercomponent={"Wicket"} clicktype={"Wicket"} dispatch={dispatch} />
            <Button innercomponent={"Dot"} clicktype={"dot"} dispatch={dispatch} />
       

            
        </div> : ""} 
       {status === false?  <button className="bg-green-500 font-bold text-white p-4 rounded-2xl" onClick={() => dispatch({type: "undo"})} style={{display: endmatch ? "none" : "block"}}>Undo</button> : ""}
       {status ===false ?  <button className="bg-red-600 text-white font-bold p-2 rounded-xl" onClick={()=> {setstatus(true)  , dispatch({type:"target"})}} style={{display: endmatch ? "none" : "block"}} >end ininings?</button> : ""}
       {status === true ?  <button className="bg-green-600 font-black p-2 text-white rounded-xl" onClick={() =>{setstatus(false) ,setshowtarget(true) , dispatch({type:"end"})}} style={{display: endmatch ? "none" : "block"}}>start second inings</button> : "" } 
         {endmatch === true ?  <button className="bg-green-600 font-black p-4 text-white rounded-xl" onClick={() =>{setendmatch(false) , setshowtarget(false) , dispatch({type: "new match"}) }  }>new match</button> : ""} 



    </div>
    
    
    </>
)



} 

export default Score

