import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Components/blogScreen/blog';
import Screen from './Components/Screens/Screen';
import Footer from './Components/footer/footer';
import PopularNews from './Components/Popular-news/PopularNews';
import WorldScreen from './Components/world_news/world_screen';
import BlogScreen4 from './Components/blogSection4/blogScreen4';
import HowLong from './Components/howLong/HowLong';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <Screen/>
        <Blog/>
        <BlogScreen4/>
        <WorldScreen/>
        <PopularNews />
        <Footer/>
        <HowLong/>
      </div>
      
    </div>
  );
}

export default App;
