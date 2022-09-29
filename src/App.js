import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import SignUpModal from './components/SignUpModal';
import SignInModal from './components/SignInModal';

function App() {
  return (
    <div>
      <Navbar />
      <SignUpModal/>
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
