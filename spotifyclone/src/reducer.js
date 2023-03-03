export const initialState = {
    user: null,
   //remove token after completion
    token: "BQC70gQFliNK715MR2wTAbilH02nRDBTvn-WWcECY4Vp-JdrlND_IVc9pVb9xY96Gny9SRhPOPiW0QwKoyLG98bhJjJRHG_9S3TtKRE0U9z3GMJBAiUHrNJe15btJjFAOaEmIi4N4C-k_WRdhf_k2w4RekDroz4HB5Ci2XvHzyaSNQl-AM4JnZZMMJmBSy_fxVWGXcm-zxb4j1LzSw",
    playlist: [],
    playing: false,
    item: null
}
// these all are the initial data of the datalayer

const reducer = (state,action) => {
    console.log(action)//makes it easier for debugging
    //action -> type, [payload]
    switch (action.type){
        case"SET_USER"://listens for the dispatched things and sets the user to user in the datalayer
            return{
                ...state,
                user:action.user
            }
        case"SET_TOKEN":
            return{
                ...state,
                token:action.token
            }    
        default:
            return state
    }
}

export default reducer