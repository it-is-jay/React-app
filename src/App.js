import './App.css';
import Header from './Heading';
import Footer from './components/Footer';
import Main from './components/Main';
import Side from './components/Sidebar';
import Image from './components/Image';
import Button from './components/Button';
import ModeToggler from './components/ModeToggler';
import HooksForm from './components/HooksForm';
import ModeTogglerHooks from './components/ModeTogglerHooks';
import ReducerHook from './components/hooks/ReducerHook'
import Page1 from './components/routes/Page1';
import Page2 from './components/routes/Page2';
import DateMessage from './components/routes/DateMessage';
import Logo from './assets/images/logo192.png'

import LoginContext from './context/LoginContext';

import { Routes, Route, Link } from 'react-router-dom';

function App(props) {
  const ArrowFunction = (props) => {
    return (
      <div>
        <p>Data displayed using arrow function -- {props.name}</p>
      </div>
    )
  };

  const getRandomNum = () => Math.floor(Math.random() * 10) + 1

  return (
    <div>
      <Header name="Jay" color="Red"/>
      <p>Data displayed using props: {props.properties}</p>
      <Side salutation="Hola"/>
      <Main content="Have a great day!"/>

      <ArrowFunction name="Anonymous function JSX"/>
      <div>
        <p>Random number: {getRandomNum()}</p>
      </ div>
      <Image src="./favicon.ico" alt="description of the image"/>
      <Button text="Click me!"/>
      <Footer name={<p>Mine ---passing an HTML tag as JSX prop</p>}/>
      <h2>Mode Toggeler without React hooks</h2>
      <ModeToggler />
      <h1>React Hooks:</h1>
      <h2>Mode Toggeler with React hooks</h2>
      <ModeTogglerHooks/>
      <br/>
      <HooksForm />
      <br/>
      <h1>React Contenxt API:</h1>
      <p>Pass data from one component to another using context</p>
      <LoginContext/>
      <br/>
      <h1>Reducer Hook:</h1>
      <ReducerHook/>
      <br/>
      <h1>React Router:</h1>
      <nav>
        <Link to='/page1'> Page 1 </Link>
        <Link to='/page2'>Page 2</Link>
        <Link to='/date'> Date </Link>
        <Link to='/image'> Image </Link>
      </nav>
      <Routes>
        <Route path='/page1' element={<Page1/>}></Route>
        <Route path='/page2' element={<Page2/>}></Route>
        <Route path='/date' element={<DateMessage/>}></Route>
        <Route path='/image' element={<img src={Logo} alt='Image imported as module'/>}></Route>
      </Routes>
    </div>
  );  
}

export default App;
