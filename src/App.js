import React, { useRef, useState } from "react";
// adding components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
// yarn add node-sass
import "./styles/app.scss";

// adding music
import data from "./data";

function App() {
  // day and night toogle
  const [isDarkMode, setDarkMode] = useState(false);

  const styles = {
    background: isDarkMode ? "yellow" : "#fff",
  };

  // ref
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: null,
  });

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };

  return (
    <div
      style={styles}
      id="app"
      className={`App ${libraryStatus ? "library-active" : ""}`}
    >
      <span>
        <i
          onClick={() => setDarkMode(!isDarkMode)}
          className="fa-regular fa-lightbulb"
        ></i>
      </span>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        timeUpdateHandler={timeUpdateHandler}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}
export default App;
