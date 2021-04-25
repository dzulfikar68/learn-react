import React from 'react'
import { Route, Switch } from "react-router"
import PostPage from "../page/PostPage"
import TodoPage from "../page/TodoPage"

const Routes = () => (
    <Switch>
        <Route exact path="/" component={TodoPage}/>
        <Route path="/todo" component={TodoPage}/>
        <Route path="/post" component={PostPage}/>
    </Switch>
)

export default Routes