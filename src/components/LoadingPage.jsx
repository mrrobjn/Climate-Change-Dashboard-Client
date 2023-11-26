import ReactLoading from "react-loading";

const LoadingPage = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactLoading type="spin" color="#ccc" width={100} />
      </div>
    </>
  );
};

export default LoadingPage;
