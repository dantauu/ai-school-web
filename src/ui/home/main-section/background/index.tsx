export const Background = () => {
  return (
    <>
      <video
        className="absolute top-0 left-0 w-full h-full object-fill"
        autoPlay={true}
        playsInline={true}
        loop={true}
        muted={true}
        src={"video/video.mp4"}
        style={{ zIndex: -3 }}
      ></video>
      <div
        style={{
          backgroundImage: 'url("/static/vector.svg")',
          position: "absolute",
          top: 40,
          left: 0,
          width: "100%",
          height: "90%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <div
        className="
    absolute bottom-0 right-0
    w-[400px] h-[300px]
    less-desctop:w-[1400px] less-desctop:h-[990px]
    bg-cover bg-center
  "
        style={{
          backgroundImage: 'url("/static/women-robot.svg")',
          zIndex: -1,
        }}
      ></div>
    </>
  )
}
