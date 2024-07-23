import logo from './logo.svg';
import React,{useState,Suspense,lazy} from 'react'
import FirstComponent from './Components/FirstComponent';
import FormsComponent from './Components/FormsComponent';
import HocComponent from './Components/HocComponent';
import CompositionComponent from './Components/CompositionComponent';
import LifecycleComponent from './Components/lifecycleComponent';
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import {Navigate} from 'react-router-dom'
import HomePage from './Components/pages/HomePage';
import AboutPage from './Components/pages/AboutPage';
import ContactPage from './Components/pages/ContactPage';
import { GlobalProvider } from './Components/Context Provider/GlobalContext';
import YourComponent from './Components/Context Provider/YourComponent';
import InputForm from './Components/State and props/InputForm';
import ComponentWithError from './Components/Boundry/ComponentWithError';
import ErrorBoundary from './Components/Boundry/ErrorBoundary';
import NormalComponent from './Components/Boundry/NomalComponent';
import { AuthProvider } from './Components/Authentication/AuthContext';
import LoginPage from './Components/Authentication/Login';
import ProtectedRoute from './Components/Authentication/ProtectedRoute';
import ProtectedPage from './Components/Authentication/ProtectedPage';
import LikeButton from './Components/Optimistic UI/LikeButton';
const MessageComponent=CompositionComponent(HocComponent);
const LazyComponent=lazy(()=>import ('./Components/LazyComponent'));
const appStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  margin: '0 auto',
  padding: '20px',
  maxWidth: '800px',
};

const navStyle = {
  marginBottom: '20px',
  listStyleType: 'none', 
  padding: 0, 
};

const navLinkStyle = {
  margin: '0 15px',
  textDecoration: 'none',
  color: '#007bff',
  fontWeight: 'bold',
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '20px auto',
  fontFamily: 'Times Roman'
};
const fallbackStyle = {
  textAlign: 'center',
  fontSize: '1.2rem',
  color: '#888',
  marginTop: '20px'
};
const Home=React.lazy(()=>import('./Components/Code Splitting and lazy loading/home'));
const About=React.lazy(()=>import('./Components/Code Splitting and lazy loading/about'));
const Contact=React.lazy(()=>import('./Components/Code Splitting and lazy loading/contact'));
const headingStyle = {
  textAlign: 'center',
  color: '#333',
  marginBottom: '20px',
  fontSize: '2rem'
};

const formContainerStyle = {
  padding: '20px',
  backgroundColor: '#ffe0b2',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'center'
};
function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);  
  }
  return (
    <div className="App">
      <header className="App-header">
   <center><FirstComponent/></center>
   <br/>
   <FormsComponent/>
   <br/>
   <center><h1>Composition Component</h1></center>
   <MessageComponent message="hello World"/>
   <br/>
   <CompositionComponent/>
   <br/>
   <LifecycleComponent/>
   <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    <br/>
    <div>
      <h1 style={headingStyle}>State Lift-Up Example</h1>
      <div style={formContainerStyle}>
        <InputForm onInputChange={handleInputChange} />
      </div>
    </div>
      <br/>
      <center><h1>Context API</h1></center>    
      <GlobalProvider>
      <YourComponent/>
    </GlobalProvider>
    <br/>
    <div style={containerStyle}>
    <center><h1>Advanced UI</h1></center>
      <Suspense fallback={<div style={fallbackStyle}>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
    <br/>
    {/* <div>
      <h1>My React App</h1>
      <ErrorBoundary>
        <ComponentWithError /> 
      </ErrorBoundary>
      <NormalComponent /> 
    </div> */}
    <center><h1>Authenticaion</h1></center>
      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <ProtectedRoute element={ProtectedPage} />
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
     <br/>
     <div>
      <center><h1>Optimistic UI</h1></center>
      <LikeButton itemId="123" initialLikes={10} />
    </div>
   <br/>
   <center><h1>Code Splitting</h1>
   <Router>
      <div style={appStyle}>
        <nav>
          <ul style={navStyle}>
            <li style={{ display: 'inline' }} ><Link to="/" style={navLinkStyle}>Home</Link></li>
            <li style={{ display: 'inline' }}><Link to="/about" style={navLinkStyle}>About</Link></li>
            <li style={{ display: 'inline' }} ><Link to="/contact" style={navLinkStyle} >Contact</Link></li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
    </center>
      </header>
    </div>
  );
}

export default App;
