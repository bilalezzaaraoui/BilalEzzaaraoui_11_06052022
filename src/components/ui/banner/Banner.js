import "./Banner.scss";

const Banner = (props) => {
  return (
    <div
      className="banner-title"
      style={{
        backgroundImage: `url(${props.cover}`,
        backgroundColor: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      }}
    >
      <div className="overlay">
        <div className="overlay-title">
          <h1>{props.text}</h1>
        </div>
      </div>
    </div>
  );
};
export default Banner;
