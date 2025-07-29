import classNames from "classnames";
import React from "react";
import "./DoubleScreenLayout.scss";

type DoubleScreenLayoutType = {
  children: React.ReactNode;
  noPadding?: boolean;
  noFullDvh?: boolean;
};

const DoubleScreenLayout: React.FC<DoubleScreenLayoutType> = ({
  children,
  noPadding = false,
  noFullDvh = false,
}) => {
  if (!children || React.Children.count(children) < 2) {
    return <div>Invalid layout: Expected two children</div>;
  }

  const childArray = React.Children.toArray(children);

  const rightColumnClasses = classNames("right-column-view", {
    "right-column-view--no-padding": noPadding,
    "right-column-view--no-full-dvh": noFullDvh,
  });

  const leftColumnClasses = classNames("left-column-view", {
    "left-column-view--no-full-dvh": noFullDvh,
  });

  return (
    <div className="double-screen-layout">
      <section className={leftColumnClasses}>{childArray[0]}</section>
      <section className={rightColumnClasses}>{childArray[1]}</section>
    </div>
  );
};

export default DoubleScreenLayout;
