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
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          backgroundImage: 'url("/static/women-robot.svg")',
          position: "absolute",
          right: 200,
          bottom: 0,
          width: "1400px",
          height: "980px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
    </>
  )
}
