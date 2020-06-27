import React from "react";
import "./App.css";
import setHorario from "./helpers/setHorario";
import { trabajadores } from "./info/trabajadores";

function App() {
    const trabs = setHorario(trabajadores);
    return <p>{JSON.stringify(trabs, null, 3)}</p>;
}

export default App;
