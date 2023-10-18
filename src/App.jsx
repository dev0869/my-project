import Hero from './components/Hero';
import BookNow from './components/cards/bookNow';
import Footer from './components/Footer';
import Hero from "./components/Hero";
import BookNow from "./components/cards/bookNow";
import Services from "./components/homepage/services";
const App = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Hero />
        <BookNow />
      </div>
      <Services />
      <Footer/>
    </>
  );
};

export default App;
