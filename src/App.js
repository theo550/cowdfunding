import './App.css';
import Hero from './components/hero/Hero';
import ContentPrices from './components/content/ContentPrices';
import ContentHeader from './components/content/ContentHeader';
import ContentAbout from './components/content/ContentAbout';

function App() {
  return (
    <div className="App">
      <Hero/>
      <div className='content'>
        <ContentHeader/>
        <ContentPrices/>
        <ContentAbout/>
      </div>
    </div>
  );
}

export default App;
