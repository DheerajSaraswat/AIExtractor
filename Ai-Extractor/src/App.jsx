import Extractor from './components/Extractor'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  

  return (
    <div className="h-screen w-screen bg-blue-950 flex flex-col justify-center items-center text-white">
      <Header />
      <Extractor />
      <Footer />
    </div>
  );
}

export default App
