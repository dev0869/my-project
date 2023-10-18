import Hero from './components/Hero';
import BookNow from './components/cards/bookNow';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Hero />
        <BookNow />
      </div>
      <Footer/>
    </>
  );
}

export default App