import {useReducer, useState , useEffect} from "react";
import Button from "./buttons";



function Score() {  

    const [status , setstatus] = useState(false)
    const [loaded, setLoaded] = useState(false);


    function reducer(state , action){
     
 switch(action.type) {   // writing this code for adding runs and wicket and wide, no balls , overs 
  case "onerun": { //one run
      const balls = state.balls +1 
      return {
        ...state , total : state.total +1 ,
          balls : state.balls === 5? 0:balls , 
          overs : state.balls === 5 ? state.overs +1 : state.overs
        
        
        };
  
} 
case "tworun": {//two run 
      const balls = state.balls +1 
      return {
        ...state , total : state.total +2 ,
          balls : state.balls === 5? 0:balls , 
          overs : state.balls === 5 ? state.overs +1 : state.overs
        
        
        };
  
} 

case "threerun": { //three run 
      const balls = state.balls +1 
      return {
        ...state , total : state.total +3 ,
          balls : state.balls === 5? 0:balls , 
          overs : state.balls === 5 ? state.overs +1 : state.overs
        
        
        };
  
}
case "fourrun": { //fourrun
      const balls = state.balls +1 
      return {
        ...state , total : state.total +4 ,
          balls : state.balls === 5? 0:balls , 
          overs : state.balls === 5 ? state.overs +1 : state.overs
        
        
        };
  
}

case "fiverun": { //five run 
      const balls = state.balls +1 
      return {
        ...state , total : state.total +5 ,
          balls : state.balls === 5? 0:balls , 
          overs : state.balls === 5 ? state.overs +1 : state.overs
        
        
        };
  
} 
case "sixrun": { // sixruns 
      const balls = state.balls +1  ;
     
    
      return {
        ...state , 
          total : state.total +6 ,
          balls : state.balls === 5? 0:balls , 
           overs: state.balls === 5 ? state.overs +1 : state.overs ,
           
        };
  
} 

case "end" :{ 
      

    return{...state  ,total: 0 , balls : 0 , overs : 0 , wicket : 0} 
    
}
 case "wide" :
    return {...state , total: state.total +1} 
case "Wicket": {
    const balls = state.balls +1  ;
     
    
      return {
        ...state , 
          wicket : state.wicket +1 ,
          balls : state.balls === 5? 0:balls , 
           overs: state.balls === 5 ? state.overs +1 : state.overs ,
           
        };
  
}
   
    
    
case "load": 
 console.log("LOAD ACTION", action.payload);
  return action.payload;

 default:
    return state

   

} 




}
const [state , dispatch] = useReducer(reducer , {total : 0 , wicket : 0 ,  overs: 0 , balls: 0  , }) 

// local storage..incase the user reload accidently the data shouldd not reset 


useEffect(() => {
  const getstate = JSON.parse(localStorage.getItem("display"));

  if (getstate) {
    dispatch({
      type: "load",
      payload: getstate,
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
           <h1 className="text-3xl font-bold">Bating-team: {state.total}/{state.wicket}</h1> 
           <span>overs : {state.overs}.{state.balls} </span>  
           
        </div>   
   


    { status===false? <div className="grid grid-cols-3 gap-2"> 
            <Button innercomponent={"1"} clicktype={"onerun"} dispatch={dispatch} />
            <Button innercomponent={"2"} clicktype={"tworun"} dispatch={dispatch} />
            <Button innercomponent={"3"} clicktype={"threerun"} dispatch={dispatch} /> 
            <Button innercomponent={"4"} clicktype={"fourrun"} dispatch={dispatch} /> 
            <Button innercomponent={"5"} clicktype={"fiverun"} dispatch={dispatch} /> 
            <Button innercomponent={"6"} clicktype={"sixrun"} dispatch={dispatch} />  
            <Button innercomponent={"wide"} clicktype={"wide"} dispatch={dispatch} />
             <Button innercomponent={"Wicket"} clicktype={"Wicket"} dispatch={dispatch} />
       

            
        </div> : ""}
       {status ===false ?  <button className="bg-red-600 text-white font-bold p-2" onClick={()=> {setstatus(true) }}>end ininings?</button> : ""}
       {status === true ?  <button className="bg-green-600 font-black p-2 text-white" onClick={() =>{setstatus(false) , dispatch({type:"end"})}  }>start second inings</button> : ""} 



    </div>
    
    
    </>
)



} 

export default Score

