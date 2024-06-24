import YouTube from 'react-youtube';
import YoutubeVideo from './YoutubeVideo';

export const VideoCard = ({item}:any) => {
  return (
    <div
    className="
    overflow-hidden rounded-md border-2
    "
    >
      <div
      className="
      #aspect-video overflow-hidden rounded-md w-full #h-full #bg-blue-50
      h-fit
      "
      >
        <YoutubeVideo videoId={item.videoId}/>
      </div>
    </div>
  )
}
