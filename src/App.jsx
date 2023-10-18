import Hero from './components/Hero';
import BookNow from './components/cards/bookNow';

const App = () => {
  return (
    <div className="flex items-center justify-center">
      <Hero />
      <BookNow />
    </div>
  );
}

export default App