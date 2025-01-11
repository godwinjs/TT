import {Context} from "./Context"

const ContextProvider = ({Children}) => {

    // contextValue const can be accessed anywhere in the app through contextAPI
    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {Children}
        </Context.Provider>
    )
}

export default ContextProvider