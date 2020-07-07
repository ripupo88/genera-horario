import React from "react";
import "./App.css";
import { HorarioScreen } from "./components/view/HorarioScreen";
import { NavBar } from "./components/navBar/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <HorarioScreen />
        </div>
    );
}

export default App;
