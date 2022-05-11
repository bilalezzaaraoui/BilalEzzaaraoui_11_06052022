import { useState } from "react";
import ChevronUp from "../../../assets/img/chevronUp.png";
import ChevronDown from "../../../assets/img/chevronDown.png";
import "./CollapseEquipment.scss";

const CollapseEquipment = (props) => {
  const [state, setState] = useState(false);

  // if (!state) {
  // }
  return (
    <div className="collapse-layout">
      <div className="collapse" onClick={() => setState(!state)}>
        <p>{props.title}</p>
        <div className="icon-collapse">
          <img src={state ? ChevronUp : ChevronDown} alt="chevron" />
        </div>
      </div>
      {state && (
        <div className="content">
          <ul>
            {props.list.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CollapseEquipment;
