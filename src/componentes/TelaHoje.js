
import { useContext } from "react";

import UserContext from "../contextos/UserContext";

function TelaHoje(){
    
    const {usuario} = useContext(UserContext);

    console.log(usuario);
    
    return (
        <h1>Hoje!</h1>
    );
}

export default TelaHoje;