type TVideo = {
  src: string;
  width: number;
  height: number;
  thumbnail: string;
  track?: {
    src: string;
    kind: string;
    srcLang: string;
    label: string;
  };
};

const Video = ({ src, width, height, track, thumbnail }: TVideo) => {
  const thumbnailResized = thumbnail.replace("fullsize", "smaller");

  return (
    <video
      width={`${width}`}
      height={`${height}`}
      controls
      preload="metadata"
      poster={thumbnailResized}
    >
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
  );
};
export default Video;
