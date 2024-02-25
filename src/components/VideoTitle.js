
const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-scrren aspect-video pt-[20%] px-24 absolute text-black bg-grad from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>

        <div className="">
            <button className="bg-white rounded-lg hover:bg-opacity-50 text-black p-4 px-12 text-lg"> ▶ Play</button>
            <button className="mx-2 hover:bg-opacity-50 bg-white rounded-lg text-black p-4 px-12 text-lg"> ℹ More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle