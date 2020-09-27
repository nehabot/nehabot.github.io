import  React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import { render } from '@testing-library/react';


class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                {/* both /roster and /roster/:number begin with /roster */}
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        );
    }
}
// const Main = () => (
//     <main>
//         <Switch>
//             <Route exact path='/' component={Home}/>
//             {/* both /roster and /roster/:number begin with /roster */}
//             <Route path='/about' component={About}/>
//             <Route path='/contact' component={Contact}/>
//         </Switch>
//     </main>
// )
export default Main