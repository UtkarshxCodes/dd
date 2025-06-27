import React from 'react';

const LiveSessions = () => {
  // Get the logged-in user's email from sessionStorage
  const userEmail = sessionStorage.getItem('authUserEmail');

  // Define video links for each user
  const cyberVideos = [
    {
      src: "https://www.youtube.com/embed/YJ7BZG4yZQ0",
      title: "1",
    },
    {
      src: "https://www.youtube.com/embed/emvxiMdmwMw",
      title: "2",
    },
    {
      src: "https://www.youtube.com/embed/yRlVNEvxhf8",
      title: "3",
    },
  ];

  const archanaCyberVideos = [
    {
      src: "https://www.youtube.com/embed/emvxiMdmwMw",
      title: "2",
    },
    {
      src: "https://www.youtube.com/embed/Z-7LzulpuJE",
      title: "archana",
    },
  ];

  const dataScienceVideos = [
    {
      src: "https://www.youtube.com/embed/I09YA-9puVI",
      title: "Week 1 - Introduction to Data Science",
    },
    {
      src: "https://www.youtube.com/embed/UNLISTED_DS_VIDEO_ID_2",
      title: "Week 2 - Python for Data Science",
    },
  ];

  const isDataScienceUser = userEmail === 'lucretiahenry@rocketmail.com';
  const isArchana = userEmail === 'archana.katangur@gmail.com';

  let videos;
  if (isDataScienceUser) {
    videos = dataScienceVideos;
  } else if (isArchana) {
    videos = archanaCyberVideos;
  } else {
    videos = cyberVideos;
  }

  return (
    <div> 
      <h3 className="text-lg font-bold mb-4">Live Sessions / Recordings</h3>
      <p className="text-sm text-gray-500 mb-2">Access session replays here.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {videos.map((video, idx) => (
          <iframe
            key={idx}
            className="w-full aspect-video rounded-lg shadow"
            src={video.src}
            title={video.title}
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default LiveSessions;