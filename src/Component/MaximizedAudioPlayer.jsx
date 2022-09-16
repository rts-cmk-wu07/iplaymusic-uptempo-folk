import AudioPlayer from "react-h5-audio-player";
//import "../assets/MaximizedAudioPlayer.scss"

const MaximizedAudioPlayer = ({ audioFile }) => {
  return (
    <AudioPlayer
      autoPlay
      src={audioFile}
      onPlay={(e) => console.log("onPlay")}

      // other props here
    />
  );
};

export default MaximizedAudioPlayer;
