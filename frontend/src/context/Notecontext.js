import React,{createContext,useState} from 'react'
const NoteContext = createContext()
function NoteProvider({children}) {
  const [show,setShow] = useState(false)
  return (
    <>
    <NoteContext.Provider value={{show,setShow}}>
    {children}
    </NoteContext.Provider>
    </>
  )
}

export {NoteContext,NoteProvider}