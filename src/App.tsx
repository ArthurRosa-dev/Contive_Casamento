import Background from "./components/Background";
import Body from "./components/Body";
import Entrance from "./components/Entrance";
import Music from "./components/Music";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div className="main">
      <Entrance />
      <Background />
      <Body />
      <Music />
      <Scroll />
    </div>
  );
}

export default App;
