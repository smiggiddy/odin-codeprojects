export default function SoundEffects({ soundOn }) {
  return (
    <>
      {soundOn ? (
        <>
          <audio src="/collect-5930.mp3" className="audio-right"></audio>
          <audio src="/incorrect.mp3" className="audio-wrong"></audio>
        </>
      ) : null}
    </>
  );
}
