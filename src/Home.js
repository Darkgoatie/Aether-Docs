import Intro from "./Comps/Intro";
import Sidebar from "./Comps/Sidebar";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <h1>Aether Web Documentation</h1>
      <hr />
      <Intro />
    </div>
  );
};

export default Home;
