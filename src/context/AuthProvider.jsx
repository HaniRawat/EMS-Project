import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"


export const AuthContext = createContext()

function AuthProvider({ children }) {
  

    const [userData, setuserData] = useState(null)
    // localStorage.clear()

    useEffect(()=>{
      setLocalStorage()
        const {employees} = getLocalStorage()
        setuserData(employees)
    },[])

  return (
    <div>
        <AuthContext.Provider value={[userData, setuserData]} >
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider