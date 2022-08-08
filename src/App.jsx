import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn"
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
    
  ); 
};

export default App;