type TVideo = {
  src: string;
  thumbnail: string;
  track?: {
    src: string;
    kind: string;
    srcLang: string;
    label: string;
  };
};

const Video = ({ src, track, thumbnail }: TVideo) => {
  const thumbnailResized = thumbnail.replace("fullsize", "smaller");

  return (
    <div className="rounded-[20px] overflow-hidden shadow-video ">
      <video controls preload="metadata" poster={thumbnailResized}>
        <source src={src} type="video/mp4" />
        {track && (
          <track
            src={track.src}
            kind={track.kind}
            srcLang={track.srcLang}
            label={track.label}
          />
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default Video;
