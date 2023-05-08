import './App.css';


import Footer from './Home/Components/Footer';
import Header from './Home/Components/Header';
import Pagamento from './Home/Components/Pagamento';
import Produto from './Home/Components/Produto';
import Slogan from './Home/Components/Slogan';
import Video from './Home/Components/Video';

function App() {
    return (
      <div className="App">

    <Header/>
      <Slogan/>
      <Video/>
      <Produto/>
      <Pagamento/>
      <Footer/>
    </div>
  );
}

export default App;