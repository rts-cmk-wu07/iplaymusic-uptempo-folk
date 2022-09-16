import AudioPlayer from "react-h5-audio-player";

const MinimizedAudioPlayer = ({ audioFile }) => {
  return (
    <AudioPlayer
      autoPlay
      src={audioFile}
      onPlay={(e) => console.log("onPlay")}

      // other props here
    />
  );
};

export default MinimizedAudioPlayer;
