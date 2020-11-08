import React from "react";
import "./Container.css";
import Posts from "./Posts";

interface ContainerProps {
  name: string;
}

const Container: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <Posts />
    </div>
  );
};

export default Container;
