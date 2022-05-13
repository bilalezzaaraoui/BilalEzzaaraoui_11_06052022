/* eslint-disable jsx-a11y/alt-text */
import { Fragment, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/ui/slider/Slider";
import Tags from "../components/ui/tags/Tags";
import CollapseDetails from "../components/ui/collapseDetails/CollapseDetails";
import CollapseEquipment from "../components/ui/collapseEquipment/CollapseEquipment";
import StarsList from "../components/ui/stars/StarsList";
import dataJson from "../assets/data/data";
import "./CardDetail.scss";

const CardDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  const { id } = params;

  const arrObj = dataJson.find((item) => item.id === id);

  if (!arrObj) {
    return <Navigate to="/error" />;
  }

  return (
    <Fragment>
      <Slider images={arrObj.pictures} />
      <div className="user-layout">
        <div className="info-user">
          <div className="bio">
            <h1>{arrObj.title}</h1>
            <p>{arrObj.location}</p>
          </div>
          <div className="tags-box">
            <ul>
              {arrObj.tags.map((item, index) => (
                <Tags key={index} value={item} />
              ))}
            </ul>
          </div>
        </div>
        <div className="user-rating">
          <div className="image">
            <div className="name-details">
              <p>{arrObj.host.name}</p>
            </div>
            <div className="image-details">
              <img src={arrObj.host.picture} />
            </div>
          </div>
          <div className="stars">
            <ul>
              <StarsList value={arrObj.rating} />
            </ul>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="description-1">
          <CollapseDetails title="Description" text={arrObj.description} />
        </div>
        <div className="description-2">
          <CollapseEquipment title="Équipements" list={arrObj.equipments} />
        </div>
      </div>
    </Fragment>
  );
};

export default CardDetails;
