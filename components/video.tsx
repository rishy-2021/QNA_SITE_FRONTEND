import React from "react";
import video from "";

const Video = () => {
  return (
    <div className="md:w-[70%] xl:w-[79%]">
      {/* <video controls width="100%">
        {/* <source src="/video-example.webm" type="video/webm" /> */}
      <source src="../video/v1.mp4" type="video/mp4" />
      Sorry, your browser doesn't support videos.
      {/* </video>  */}
      <video width="350" height="200" controls>
        <source src="../video/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
