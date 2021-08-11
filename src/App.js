import Navbar1 from './Components/Navbar/Navbar1'
import Blog from './Components/blogScreen/Blog'
import Screen from './Components/Screens/Screen'
import Footer from './Components/footer/footer'
import PopularNews from './Components/Popular-news/PopularNews'
import WorldScreen from './Components/world_news/world_screen'
import BlogScreen4 from './Components/blogSection4/BlogScreen4'
import './App.scss'
import { Container } from 'reactstrap'

function App() {
    return (
        <div className='App'>
            <Navbar1 />
            <Container>
                <div className='App-body'>
                    <Screen />
                    <Blog />
                    <BlogScreen4 />
                    <WorldScreen />
                    <PopularNews />
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default App
