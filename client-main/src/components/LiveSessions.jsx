import React from 'react';

const userVideosMap = {
  'lucretiahenry@rocketmail.com': [
    { src: "https://www.youtube.com/embed/I09YA-9puVI", title: "Data Science" },
    { src: "https://www.youtube.com/embed/jtJ943buPRM", title: "Data Science" },
    { src: "https://www.youtube.com/embed/7RywFWtOoCE", title: "Data Science" },
    { src: "https://www.youtube.com/embed/WWvN5XPW2us", title: "Data Science" },
    { src: "https://www.youtube.com/embed/OBGsdbNTLlg", title: "Data Science" },
    { src: "https://www.youtube.com/embed/d_DKtEUlNIw", title: "Data Science" },
    { src: "https://www.youtube.com/embed/qmPTb9c559Y", title: "Data Science" },
    { src: "https://www.youtube.com/embed/xDTJtW0WXSw", title: "Data Science" },
    { src: "https://www.youtube.com/embed/Xz529PeSV_o", title: "Data Science" },
    { src: "https://www.youtube.com/embed/jAk3URuAW80", title: "Data Science" },
    { src: "https://www.youtube.com/embed/unxso7YdrXQ", title: "Data Science" },
    { src: "https://www.youtube.com/embed/fhIfqScgqD4", title: "Data Science" },
     { src: "https://www.youtube.com/embed/9JkgX8_d7zI", title: "Data Science" },
    
  ],
  'veemal16@gmail.com': [
    { src: "https://www.youtube.com/embed/HDoDuVMqyTY", title: "Data Science" },
    { src: "https://www.youtube.com/embed/qmPTb9c559Y", title: "Data Science" },
    { src: "https://www.youtube.com/embed/xDTJtW0WXSw", title: "Data Science" },
    { src: "https://www.youtube.com/embed/Xz529PeSV_o", title: "Data Science" },
    { src: "https://www.youtube.com/embed/jAk3URuAW80", title: "Data Science" },
    { src: "https://www.youtube.com/embed/unxso7YdrXQ", title: "Data Science" },
    { src: "https://www.youtube.com/embed/fhIfqScgqD4", title: "Data Science" },
    { src: "https://www.youtube.com/embed/ROAeVEIFxjk", title: "Data Science Session" },
    { src: "https://www.youtube.com/embed/YDrHYjCM37Y", title: "Data Science Session" },
    { src: "https://www.youtube.com/embed/9JkgX8_d7zI", title: "Data Science" },
  ],
  'archana.katangur@gmail.com': [
    { src: "https://www.youtube.com/embed/emvxiMdmwMw", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/h7bjapYHBq8", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/7Mm1Icd3eSc", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/nywmb-sC3nw", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/zY05oAvl-Fs", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/xp7vEgIu4Ic", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/tn9g1TqgSSQ", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/IbvZKlVbKxI", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/vEepQqojGXg", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/MlO8Jl-k_MA", title: "V-EDU" },
    { src: "https://www.youtube.com/embed/HlFTGqz20Zw", title: "V-EDU" },
  ],
  'roccosegreti@yahoo.com': [
    { src: "https://www.youtube.com/embed/qIAQeodpgw4", title: "Rocco Cybersecurity Session" },
    { src: "https://www.youtube.com/embed/sx6hgnC6YNY", title: "Rocco Cybersecurity Session" },
  ],
  'mushfiqrhmn1@gmail.com': [
    { src: "https://www.youtube.com/embed/_mC7gdoqOf4", title: "Data Science Session" },
    { src: "https://www.youtube.com/embed/bt-sfIpT8F0", title: "Data Science Session" },
    { src: "https://www.youtube.com/embed/0gI5VkxUpa0", title: "Data Science Session" },
     { src: "https://www.youtube.com/embed/9JkgX8_d7zI", title: "Data Science" },
  ],
  'conuwa.a@gmail.com': [
    { src: "https://www.youtube.com/embed/gm90rJEBIMU", title: "Data Science Session" },
    { src: "https://www.youtube.com/embed/cqqQoT3h4Q4", title: "Data Science Session" },
    { src: "https://www.youtube.com/embed/ukz8sb7QNsQ", title: "Data Science Session" },
    { src: "https://www.youtube.com/embed/_JfrUvqS3d0", title: "Data Science Session" },
     { src: "https://www.youtube.com/embed/9JkgX8_d7zI", title: "Data Science" },
    
  ],
  'russellmbaker@gmail.com': [
    { src: "https://www.youtube.com/embed/cqqQoT3h4Q4", title: "Data Science Session" },
    { src: "https://www.youtube.com/embed/ukz8sb7QNsQ", title: "Data Science Session" },
    { src: "https://www.youtube.com/embed/_JfrUvqS3d0", title: "Data Science Session" },
     { src: "https://www.youtube.com/embed/9JkgX8_d7zI", title: "Data Science" },
  ],
  'albertq2000@yahoo.com': [
    { src: "https://www.youtube.com/embed/emvxiMdmwMw", title: "Cybersecurity" },
    { src: "https://www.youtube.com/embed/0b15zhtSZio", title: "Cybersecurity" },
  ],
  'andinihamid1111@gmail.com': [
    { src: "https://www.youtube.com/embed/Rw8FztPQNMc", title: "V-edu" },
   
  ],
};

const defaultVideos = [
  { src: "https://www.youtube.com/embed/YJ7BZG4yZQ0", title: "1" },
  { src: "https://www.youtube.com/embed/emvxiMdmwMw", title: "2" },
  { src: "https://www.youtube.com/embed/yRlVNEvxhf8", title: "3" },
  { src: "https://www.youtube.com/embed/7Mm1Icd3eSc", title: "V-EDU" },
  { src: "https://www.youtube.com/embed/nywmb-sC3nw", title: "V-EDU" },
  { src: "https://www.youtube.com/embed/zY05oAvl-Fs", title: "V-EDU" },
  { src: "https://www.youtube.com/embed/xp7vEgIu4Ic", title: "V-EDU" },
  { src: "https://www.youtube.com/embed/tn9g1TqgSSQ", title: "V-EDU" },
  { src: "https://www.youtube.com/embed/IbvZKlVbKxI", title: "V-EDU" },
  { src: "https://www.youtube.com/embed/vEepQqojGXg", title: "V-EDU" },
  { src: "https://www.youtube.com/embed/MlO8Jl-k_MA", title: "V-EDU" },
  { src: "https://www.youtube.com/embed/HlFTGqz20Zw", title: "V-EDU" },
];

const LiveSessions = ({ videos: propVideos }) => {
  const userEmail = sessionStorage.getItem('authUserEmail');
  const videos = propVideos || userVideosMap[userEmail] || defaultVideos;

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Live Sessions / Recordings</h3>
      <p className="text-sm text-gray-500 mb-2">Access session replays here.</p>
      {(!videos || videos.length === 0) ? (
        <div className="text-center text-gray-500 py-10">
          No live sessions available at this time.
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default LiveSessions;