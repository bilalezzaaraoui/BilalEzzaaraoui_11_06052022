import "./Stars.scss";

const Stars = (props) => {
  return (
    <li>
      <img src={props.image} alt="étoile" />
    </li>
  );
};

export default Stars;
