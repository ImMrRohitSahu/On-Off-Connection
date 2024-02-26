import img from "/src/assets/offline.png"

const CheckConnection = () => {
  return (
    <div className="offline">
      <h3>Oopss!!! No Internet Connection</h3>
      <img src={img} />
    </div>
  );
};

export default CheckConnection;
