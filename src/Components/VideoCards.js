const VideoCards = ({ item }) => {
  const { snippet, statistics } = item;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-60 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold y-2 text-scroll">
          {title.length > 30 ? title.slice(0, 60) : title}
        </li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCards;


