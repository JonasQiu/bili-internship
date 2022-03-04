// 播放器首页

const HomePage = function (props: any) {
  console.log(props);

  return (
    <div>
      <video
        src=""
        style={{
          width: "65vw",
          height: "50vh",
          backgroundColor:'#000'
        }}
        controls
      ></video>
    </div>
  );
};
export default HomePage;
