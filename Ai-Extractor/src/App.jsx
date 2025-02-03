import Extractor from './components/Extractor'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen w-full bg-blue-950 flex flex-col items-center text-white p-4 md:justify-center">
      <div className="flex flex-col items-center md:mb-8">
        <Header />
      </div>
      <Extractor />
      <Footer />
    </div>
  );
}

export default App
