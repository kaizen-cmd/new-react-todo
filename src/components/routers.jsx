import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "./loginform";
import RegisterForm from "./registerform";
import NavBar from "./navbar";
import TaskBox from "./taskbox";

const BaseRouter = () => {
    return (
        <div>

            <Route exact path='/' render={() => {
                return (
                    <div>
                        <NavBar active="home"/>
                        <TaskBox />
                    </div>
                );
            }} />

            <Route exact path='/login' render={() => {
                return (
                    <div>
                        <NavBar active="login"/>
                        <LoginForm />
                    </div>
                );
            }} />

            <Route exact path='/register' render={() => {
                return (
                    <div>
                        <NavBar />
                        <RegisterForm />
                    </div>
                );
            }} />

        </div>
    )
}

export default BaseRouter;