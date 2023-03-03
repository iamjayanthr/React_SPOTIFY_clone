import React,
{createContext,
useContext,
useReducer} from "react"
//these all are used to make the datalayer using context-API sothat prop drilling is not needed and can update the levels easily
//levels: APP->A.Login,B.Player->a.sidebar,b.playlist....
//so user can use this for easy access through context api
//Context provides a way to pass data through the component tree without having to pass props down manually at every level.
export const DataLayerContext = createContext()

export const DataLayer = ({ initialState, reducer, children}) => (
    <DataLayerContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayervalue = () =>useContext(DataLayerContext)

//so basically the datalayer contain the data..ie, user,songs,playlist etc