import React, { useState } from "react";
import "./index.scss";
import mainImage from "../../assets/main-image.svg";
import DropZone from "../../components/DropZone";
import Result from "../../components/Result";
import axios from "axios";

const options = [
  {
    id: "linear",
    name: "Linear",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
  {
    id: "logarithmic",
    name: "Logarithmic",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
  {
    id: "hyperbolic",
    name: "Hyperbolic",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
];

const HomePage = () => {
  const [activeMethod, setActiveMethod] = useState("linear");
  const [serverData, setServerData] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleRadioCheck = (e) => {
    setActiveMethod(e.target.id);
  };

  const handleSelectMethod = () => {
    const fileData = new FormData();
    fileData.append("file", file);
    axios
      .post(`http://127.0.0.1:8000/api/${activeMethod}-trend/`, fileData)
      .then((response) => {
        if (response.data.error) return console.log(response.data.error);
        return response.data;
      })
      .then((data) => {
        setSelectedMethod(activeMethod);
        setServerData(data);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="homepage">
      <div className="homepage__main">
        <img className="homepage__main-image" src={mainImage} alt="main" />
        <div className="homepage__title-wrapper">
          <h1 className="homepage__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="homepage__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            amet gravida amet tortor eget mauris egestas.
          </p>
        </div>
      </div>
      <div className="homepage__main" style={{ padding: "0 100px 0 37px" }}>
        <DropZone setFile={setFile} file={file} />
        <div className="homepage__options">
          <span>Оберіть метод:</span>
          {options.map((option) => (
            <div key={option.id} className="homepage__option">
              <input
                type="radio"
                name="method"
                id={option.id}
                checked={activeMethod === option.id}
                onChange={handleRadioCheck}
              />
              <label htmlFor="linear">{option.name}</label>
              <p>{option.text}</p>
            </div>
          ))}
          <div className="homepage__button" onClick={handleSelectMethod}>
            Розпочати
          </div>
        </div>
      </div>
      {serverData && <Result serverData={serverData} selectedMethod={selectedMethod} />}
    </div>
  );
};

export default HomePage;
