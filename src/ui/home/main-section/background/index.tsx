export const Background = () => {
  return (
    <div className="overflow-hidden inset-0">
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
          absolute top-20 right-41
          w-[550px] h-[550px]
          less-desctop:w-[1400px] less-desctop:h-[990px] less-desctop:right-150
          less-desctop:bottom-0
          translate-x-1/3
          bg-[url('/static/women-robot.svg')]
          bg-cover bg-center
          pointer-events-none
        "
        style={{ zIndex: -1 }}
      />
    </div>
  )
}
