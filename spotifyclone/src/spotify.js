export const authEndpoint="https://accounts.spotify.com/authorize"

const redirectUri="http://localhost:3000/";
const clientId="a6db3f2fd1b84494b0cada379be5355c"

const scopes=["user-read-recently-played","user-read-currently-playing",
"user-read-playback-state","user-modify-playback-state","user-top-read"];

export const getTokenFromUrl=()=>{
    return window.location.hash //gets the string from hash from the url
        .substring(1)           //removing the 1st word from the string..ie, #
        .split("&")
        .reduce((initial,item)=>{
            var parts=item.split("=")
            initial[parts[0]]=decodeURIComponent(parts[1])//de
            return initial
        
        },{})

}

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;