import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import {HashRouter as Router, Switch, Route} from 'react-router-dom' 
import { PersistGate } from 'redux-persist/integration/react'
//
import { url } from './config'

// 

// Homepage
import OneShare from "./pages/home/index.js";

// Onboard
import SignIn from "./pages/onboard/sign_in.js";
import SignUp from "./pages/onboard/sign_up.js";
import AdminEntry from "./pages/onboard/admin_entry.js";

// Dashboard
import Home from "./pages/dashboard/home.js";
import AdminHome from "./pages/dashboard/admin_home.js";

// Dashboard



const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router>
					<Switch>
						{/* */}
            <Route path="/" exact component={OneShare} />
            
            {/* onboard route*/}
            <Route path={url.signIn} exact component={SignIn} />
					  <Route path={url.signUp} exact component={SignUp} />        
					  <Route path={url.aEntry} exact component={AdminEntry} />        
            
            {/* dashboard route */}
            <Route path={url.dashHome} exact component={Home} />  
            <Route path={url.adminHome} exact component={AdminHome} />
          </Switch>
				</Router>
			</PersistGate>
		</Provider>
	)
}


export default App

