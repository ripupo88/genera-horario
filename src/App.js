import React from "react";
import "./App.css";
import setHorario from "./helpers/setHorario";
import { trabajadores } from "./info/trabajadores";
import SimpleTable from "./components/table/table";

function App() {
  const trabs = setHorario(trabajadores);
  return <SimpleTable />;
}

export default App;
