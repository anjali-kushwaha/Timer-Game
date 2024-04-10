import Player from "./components/Player";
import Timerchanllenge from "./components/TimeChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timerchanllenge title="Easy" targetTime={1} />
        <Timerchanllenge title="Not easy" targetTime={5} />
        <Timerchanllenge title="Getting tough" targetTime={10} />
        <Timerchanllenge title="Pros onsly" targetTime={15} />      
      </div>
    </>
  );
}

export default App;
