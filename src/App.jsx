import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import Form from "./routes/Form";
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Form />} />
      </Route>
    </Routes>
    
  ); 
};

export default App;