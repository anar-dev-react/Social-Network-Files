import './App.css';
import {HashRouter,BrowserRouter, Redirect, Route} from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Sider } from './Components/Sider/Sider';
import { Footer } from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './BLL/store';
import ProfileContainer from './Components/Profile/Profile.container';
import SchoolmatesContainer from './Components/SchoolMates/Schoolmates.container';
import LoginContainer from './Components/Login/Login.container';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


function App(p) {

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Sider/>
      <Route exact path="/" render={()=><Redirect to="/Profile"/>}/>
      <Route path="/Login" render={()=><LoginContainer/>}/>
      <Route path="/Profile/:userId?" render={()=><ProfileContainer/>}/>
      <Route path="/Schoolmates" render={()=><SchoolmatesContainer/>}/>
      <Route path="/Dialogs" render={()=><DialogsContainer/>}/>
      <Footer/>
      {/* <Route path="" render={()=><div>404 NOT FOUND</div>}/> */}
    </div>
    </Provider>
    {/* </BrowserRouter> */}
    </HashRouter>

  );
}

export default App;
