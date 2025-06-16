import React from 'react';

const LiveSessions = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Live Sessions / Recordings</h3>
      <p className="text-sm text-gray-500 mb-2">Access session replays here.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <iframe
          className="w-full aspect-video rounded-lg shadow"
          src="https://www.youtube.com/embed/UNLISTED_VIDEO_ID_1"
          title="Week 1 - Cybersecurity Basics"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full aspect-video rounded-lg shadow"
          src="https://www.youtube.com/embed/UNLISTED_VIDEO_ID_2"
          title="Week 2 - Threats & Scanning"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LiveSessions;