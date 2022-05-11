import { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../components/ui/card/Card";
import Banner from "../components/ui/banner/Banner";
import BackgroundBanner from "../assets/img/background.png";
import "./AllCards.scss";
import dataJson from "../assets/data/data";

const AllCards = () => {
  return (
    <Fragment>
      <Banner
        cover={BackgroundBanner}
        text={"Chez vous, partout et ailleurs"}
      />
      <div className="card-layout">
        {dataJson.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <Card key={item.id} data={item.title} image={item.cover} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default AllCards;
