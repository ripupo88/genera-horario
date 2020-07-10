import React from "react";
import { NavBar } from "../navBar/NavBar";
import { HorarioScreen } from "../view/HorarioScreen";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeScreem } from "../view/HomeScreem";
import { Container } from "@material-ui/core";

function Admin() {
    return (
        <>
            <NavBar />
            <Container maxWidth="md">
                <Switch>
                    <Route exact path="/horario">
                        <HorarioScreen />
                    </Route>
                    <Route path="/home">
                        <HomeScreem />
                    </Route>
                    <Redirect to="home" />
                </Switch>
            </Container>
        </>
    );
}

export default Admin;
