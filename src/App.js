import Home from './components/Pages/Home'

//Main pages
import Fafibe from './components/Pages/Main/Fafibe.js'
import Fatec from './components/Pages/Main/Fatec.js'
import Ufscar from './components/Pages/Main/Ufscar.js'
import Unifran from './components/Pages/Main/Unifran.js'
import Usp from './components/Pages/Main/Usp.js'
import Matutino from './components/Submenu/Matutino.js'
import Vespertino from './components/Submenu/Vespertino.js'
import Noturno from './components/Submenu/Noturno.js'
import Novotec from './components/Submenu/Novotec.js'
import Especializacao from './components/Submenu/Especilizacao.js'
import Header from './components/Header/Header'
import Header2 from './components/Header/Header2'

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="index">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header/>
              <Home/>
            </Route>

            <Route path='/fafibe'>
              <Header/>
              <Fafibe />
            </Route>

            <Route path='/fatec'>
              <Header2/>
              <Fatec />
            </Route>

            <Route path='/ufscar'>
              <Header menu='main' />
              <Ufscar />
            </Route>

            <Route path='/unifran'>
              <Header menu='main' />
              <Unifran />
            </Route>

            <Route path='/usp'>
              <Header menu='main' />
              <Usp />
            </Route>

            <Route path='/matutino'>
              <Header2 />
              <Matutino />
            </Route>

            <Route path='/vespertino'>
              <Header2 />
              <Vespertino />
            </Route>

            <Route path='/noturno'>
              <Header2 />
              <Noturno />
            </Route>

            <Route path='/novotec'>
              <Header2 />
              <Novotec />
            </Route>

            <Route path='/especializacao'>
              <Header2 />
              <Especializacao/>
            </Route>

          </Switch>
        </Router>
    </div>
  );
}