// we need to create a  context 
//provider
//consumer
import React ,{useContext, useEffect, useReducer} from "react";
import reducer from "./reducer"


const AppContext = React.createContext();



 




const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer );
  const updateHomePage = ()=>{
    return dispatch(
      {type:'UPDATE_HOME',
      payload:{
        name:" Divya Prakash Singh",
     image:"https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/hero.svg",
      } ,
    }
    );
   }
   const updateAboutpage = () =>{
    return   dispatch({
      type:"UPDATE_ABOUT",
      payload: {
        name:"Prakash singh",
     image:"https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/about1.svg",
      },
    });
  };
  
  //to det ApI date
 const getServices = async(url) =>{
  try{
    const res = await fetch(url);
    const data = await res.json();
    dispatch({type:"GET_SERVICES", payload:data})
  }catch(error){
    console.log(error);
  }
 };

  
// to call ApI


  
  return <AppContext.Provider value = {{...state,updateAboutpage,updateHomePage}}>
    {children}
  </AppContext.Provider>
};


//global Custome hook

const useGlobalContext = () => {
  return useContext(AppContext);
}


export {AppProvider ,useGlobalContext,};