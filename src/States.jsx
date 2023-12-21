
import { useContext, createContext, useState } from "react";


const Context = createContext();

export const States = ({ children }) => {
    const [Student, setStudent] = useState([]);
    const [Register,setRegister]=useState([]);
    return (
        <Context.Provider
            value={{
                Student,
                setStudent,
                Register,setRegister
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStates = () => useContext(Context);