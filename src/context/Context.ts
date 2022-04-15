import React from "react";

interface appContext{
    contextData?:{}
}

const Context = React.createContext<appContext>({})
export default Context