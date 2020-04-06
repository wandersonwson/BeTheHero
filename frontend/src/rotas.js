import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Cadastro from "./pages/Cadastro";
import Profile from "./pages/Profile";
import NovoCaso from "./pages/NovoCaso";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/profile" component={Profile} />
                <Route path="/caso" component={NovoCaso} />
            </Switch>
        </BrowserRouter>
    );
}