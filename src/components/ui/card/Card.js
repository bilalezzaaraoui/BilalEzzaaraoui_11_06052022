import "./Card.scss";

const Card = (props) => {
  return (
    <div
      className="card-details"
      style={{
        background: `linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ), url(${props.image})`,
      }}
    >
      <p>{props.data}</p>
    </div>
  );
};

export default Card;
