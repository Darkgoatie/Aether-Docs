import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Splitter from "./Components/Splitter";
import Title from "./Components/Title";

const Home = () => {
    return ( 
        <div className="home">
            <Title />
            <NavBar />
            <Splitter />
            <About />
        </div>
     );
}

export default Home;
