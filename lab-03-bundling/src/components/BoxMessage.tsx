import * as React from "react";
import reactIcon from "../assets/react-icon.svg";

interface Props {
  message: string;
}

export const BoxMessage = (props: Props) => {
  return (
    <div className="box-message">
      <img className="box-message__image" src={reactIcon} alt="React Logo" />
      <div className="box-message__body">
        <p>
          <strong>{props.message}</strong>
        </p>
        <p>
          You are in <a href={process.env.API_URL}>{process.env.API_NAME}</a>
        </p>
      </div>
    </div>
  );
};
