import React, { createContext, useState } from 'react'
export const addProjectResponeContext = createContext()
export const editProjectResponseContext = createContext()

const ContextApi = ({children}) => {
    const [addProjectResponse,setAddProjectResponse] = useState("")
    const [editProjectResponse,setEditProjectResponse] = useState("")
  return (
    <editProjectResponseContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
      <addProjectResponeContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
          {children}
      </addProjectResponeContext.Provider>
    </editProjectResponseContext.Provider>
  )
}

export default ContextApi