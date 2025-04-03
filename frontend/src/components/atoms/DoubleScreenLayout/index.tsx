import React from "react";
import "./DoubleScreenLayout.scss";

type DoubleScreenLayoutType = {
  children: React.ReactNode;
};

const DoubleScreenLayout: React.FC<DoubleScreenLayoutType> = ({ children }) => {
  if (!children || React.Children.count(children) < 2) {
    return <div>Invalid layout: Expected two children</div>;
  }

  const childArray = React.Children.toArray(children);

  return (
    <div className="double-screen-layout">
      <section className="left-column-view">{childArray[0]}</section>
      <section className="right-column-view">{childArray[1]}</section>
    </div>
  );
};

export default DoubleScreenLayout;
