
import { useEffect,useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import { useDataLayervalue } from './DataLayer';

const spotify = new SpotifyWebApi()
function App() {

  const[{user, token},dispatch]=useDataLayervalue()//pulls any thing fromt he datalayer

  useEffect(()=>{
  
    const hash=getTokenFromUrl()//gets the tokenobject from urlfunction
  
    console.log(hash)
    window.location.hash = ""//hiding the accesstoken from the url
  
    const _token = hash.access_token//gets the accesstoken  from the object hash 
  
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
    
      spotify.setAccessToken(_token)// it sets the access token to the spotify web api 
      spotify.getMe().then((user)=>{//it gets the user details..its a method in s.webapi
        dispatch({//here the setuser type data is dispatched which is then listeneed using the reducer in reducer.js
          type:"SET_USER",
          user:user
        })
      })
    }
  },[])
  
  return (
    <div className="app">
     {token ? <Player spotify={spotify}/>:<Login/>}
    </div> 
  );
}

export default App;
