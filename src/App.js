import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class App extends Component {
    render() {
        return (
            <Router>
                <Wrapper>
                    <Navbar>
                        <Logo>
                          <div>Champ</div>
                          <div>Counter</div>
                        </Logo>
                        <MenuList>
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/counters">Counters</Link></li>
                          <li><Link to="/builds">Builds</Link></li>
                          <li><Link to="/staffhelp">Staff Help</Link></li>
                        </MenuList>
                    </Navbar>
                    <Main>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/counters" component={Counters}/>
                        <Route exact path="/builds" component={Builds}/>
                        <Route exact path="/staffhelp" component={StaffHelp}/>
                    </Main>    
                </Wrapper>
            </Router>
        )
    }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Counters = () => (
  <div>
    <h2>Counters</h2>
  </div>
)

const Builds = () => (
  <div>
    <h2>Builds</h2>
  </div>
)

const StaffHelp = () => (
  <div>
    <h2>Staff Help</h2>
  </div>
)

const Wrapper = styled.div`
    border: 5px solid goldenrod;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
const Navbar = styled.div`
    border: 5px solid blue;
    display: flex;
    align-items: center;
`;
const Logo = styled.div`
  border: 5px solid palevioletred;
  font-size: 30px;
  padding-left: 20px;
`;
const MenuList = styled.ul`
  border: 5px solid aqua;
  flex: 1;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  font-size: 20px;
`;
const Main = styled.div`
    border: 5px solid red;
    flex: 1;
    padding: 20px;
`;

