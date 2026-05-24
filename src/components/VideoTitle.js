const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg mt-4 w-1/2">{overview}</p>
      <div className="mt-6">
        <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 ">
         ▶︎ Play
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 ml-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
