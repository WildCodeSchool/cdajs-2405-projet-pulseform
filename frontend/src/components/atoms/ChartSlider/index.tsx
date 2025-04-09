import { useState } from "react";

import "./ChartSlider.scss";
import { BackIcon, NextIcon } from "@utils/icon-list/iconList";
import type { ChartSliderProps } from "./ChartSlider.type";

function ChartSlider({ charts, title, names }: ChartSliderProps) {
  const [index, setIndex] = useState(0);
  const CurrentChart = charts[index];

  const prev = () => setIndex((i) => (i === 0 ? charts.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % charts.length);

  return (
    <div className="chart-slider">
      {title && <h2 className="chart-slider__title">{title}</h2>}
      {names && <p className="chart-slider__name">{names[index]}</p>}

      <div className="chart-slider__container">
        <button
          className="chart-slider__container__arrow-button"
          type="button"
          onClick={prev}
        >
          <BackIcon fontSize="1rem" />
        </button>
        <div className="chart-slider__container__content">
          <div key={index} className="chart-slider__content__fade-in">
            {CurrentChart}
          </div>
        </div>
        <button
          className="chart-slider__container__arrow-button"
          type="button"
          onClick={next}
        >
          <NextIcon fontSize="1rem" />
        </button>
      </div>
    </div>
  );
}

export default ChartSlider;
