import React from 'react';

const VideoDetail = ({ detail }) => {
  if (!detail) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${detail.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{detail.snippet.title}</h4>
        <p>{detail.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
