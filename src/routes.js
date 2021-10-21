import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorLinks from "./ColorLinks";
import ColorPage from "./ColorPage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/colors">
                <ColorLinks />
            </Route>
            <Route exact path="/colors/:color">
                <ColorPage />
            </Route>
            <Redirect to="/colors"></Redirect>
        </Switch>
    );
};

export default Routes;