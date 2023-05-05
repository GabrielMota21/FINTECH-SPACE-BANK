
import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Pagamento from './Components/Pagamento';
import Produto from './Components/Produto';
import Slogan from './Components/Slogan';
import Video from './Components/Video';


function App() {
  return (
    <div className="App">
      <Header/>
      <Slogan/>
      <Video/>
      <Produto/>
      <Pagamento/>
      
    </div>
  );
}

export default App;
