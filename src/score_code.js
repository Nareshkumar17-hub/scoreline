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

case "onerun and runout": { //one run
      const balls = state.balls +1 
      return {
        ...state ,
        history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket : state.wicket , target:state.total+1 }] ,
        total : state.total +1 ,
        balls : state.balls === 5? 0:balls , 
        overs : state.balls === 5 ? state.overs +1 : state.overs  ,
        wicket:  state.wicket +1

    }
  }
case "tworuns and runout": { //one run
      const balls = state.balls +1 
      return {
        ...state ,
        history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket : state.wicket , target:state.total+1 }] ,
        total : state.total +2 ,
        balls : state.balls === 5? 0:balls , 
        overs : state.balls === 5 ? state.overs +1 : state.overs  ,
        wicket:  state.wicket +1

    }
  }

  case "threeruns and runout": { //one run
      const balls = state.balls +1 
      return {
        ...state ,
        history: [...state.history , {total: state.total , balls: state.balls , overs: state.overs , wicket : state.wicket , target:state.total+1 }] ,
        total : state.total +3 ,
        balls : state.balls === 5? 0:balls , 
        overs : state.balls === 5 ? state.overs +1 : state.overs  ,
        wicket:  state.wicket +1

    }
  }



   
    
    
case "load": 
 console.log("LOAD ACTION", action.payload);
  return action.payload
 default:
    return state

   

}  


 





}

export default reducer