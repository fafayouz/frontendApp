import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './Pages/Admin'
import AdminDashbord from './components/AdminDashbord/AdminDashbord'

const App = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Admin-Secret-Page" component={Admin} />
                <Route exact path="/Admin-dashbord" component={AdminDashbord} />
            </Switch>
        </Router>
        </>
    )
}

export default App
