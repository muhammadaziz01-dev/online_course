const Index = ({ videoUrl }: { videoUrl: string }) => {
    // YouTube URL-dan video ID sini ajratib olish
    const videoId = new URLSearchParams(new URL(videoUrl).search).get("v");
  
    return (
      <div
        style={{
          width:"100%",
          border: "1px solid #d9d9d9",
          borderRadius: "2px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          width="100%"
          height="150px"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
    );
  };
  
  export default Index;
  