import React, { useState } from "react";
import "./index.scss";
import mainImage from "../../assets/main-image.svg";
import DropZone from "../../components/DropZone";
import Result from "../../components/Result";
import Table from "../../components/Table";
import axios from "axios";

const options = [
  {
    id: "linear",
    name: "Лінійний",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
  {
    id: "logarithmic",
    name: "Логарифмічний",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
  {
    id: "hyperbolic",
    name: "Гіперболічний",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
  {
    id: "smoothing",
    name: "Експоненційне згладжування",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
  {
    id: "without-three-smoothing",
    name: "Згладжування методом ковзного середнього без ваг за трьома точками",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
  {
    id: "without-five-smoothing",
    name: "Згладжування методом ковзного середнього без ваг за п'ятьма точками",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
  {
    id: "with-three-smoothing",
    name: "Згладжування методом ковзного середнього з вагами за трьома точками",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
  {
    id: "with-five-smoothing",
    name: "Згладжування методом ковзного середнього з вагами за п'ятьма точками",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam amet gravida amet tortor eget mauris.",
  },
];

const HomePage = () => {
  const [activeMethod, setActiveMethod] = useState("linear");
  const [serverData, setServerData] = useState({
    data: [
      51.9, 52.1, 52.2, 52.1, 51.7, 51.3, 50.8, 50.4, 49.9, 49.4, 48.9, 48.5,
      48, 47.6, 47.3, 46.9, 46.6, 46.4, 46.1, 46, 45.8, 45.6, 45.5, 45.4, 42.9,
      42.8, 42.6, 42.4, 42.1,
    ],
    linear: [
      52.80344827586203, 52.42881773399011, 52.05418719211819,
      51.67955665024627, 51.30492610837435, 50.93029556650244,
      50.555665024630514, 50.1810344827586, 49.80640394088668,
      49.43177339901476, 49.05714285714284, 48.68251231527093,
      48.307881773399004, 47.93325123152709, 47.558620689655164,
      47.18399014778325, 46.80935960591133, 46.43472906403941,
      46.06009852216749, 45.68546798029557, 45.310837438423654,
      44.93620689655174, 44.561576354679815, 44.1869458128079,
      43.81231527093598, 43.43768472906406, 43.063054187192144,
      42.68842364532023, 42.313793103448305,
    ],
    t: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29,
    ],
    "t*t": [
      1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289,
      324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841,
    ],

    "y*t": [
      51.9, 104.2, 156.6, 208.4, 258.5, 307.8, 355.6, 403.2, 449.1, 494, 537.9,
      582, 624, 666.4, 709.5, 750.4, 792.2, 835.2, 875.9, 920, 961.8, 1003.2,
      1046.5, 1089.6, 1072.5, 1112.8, 1150.2, 1187.2, 1220.9,
    ],
  });
  const [file, setFile] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("linear");

  const handleRadioCheck = (e) => {
    setActiveMethod(e.target.id);
  };

  const handleSelectMethod = () => {
    const fileData = new FormData();
    fileData.append("file", file);
    axios
      .post(`http://127.0.0.1:8000/api/${activeMethod}/`, fileData)
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
            Веб-сервіс для прогнозування на основі вхідних даних
          </h1>
          <p className="homepage__text">
            Простий і загальнодоступний сервіс для аналізу будь-яких даних за
            лічені секунди
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
              {/* <p>{option.text}</p> */}
            </div>
          ))}
          <div className="homepage__button" onClick={handleSelectMethod}>
            Розпочати
          </div>
        </div>
      </div>
      {serverData && (
        <>
          <h1 className="homepage__title">Результати</h1>
          <Result serverData={serverData} selectedMethod={selectedMethod} />
          <Table serverData={serverData} />
        </>
      )}
    </div>
  );
};

export default HomePage;
