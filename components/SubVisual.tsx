import { HTMLAttributes } from "react";
import { Colors } from "./Global";
// import { MIN_HEADER_HEIGHT, MAX_HEADER_HEIGHT } from "./Global";

export default (props: HTMLAttributes<HTMLDivElement>) => {
  const { ...rest } = props;
  return (
    <div className="visual" {...rest}>
      <div className="slider">
        {/* <h1>IT Customer Service Expert Group</h1> */}
        <div className="flex-container">
          <div className="mask">
            <div className="text fat reveal-to-left">IT Customer Service</div>
          </div>
          <div className="border-left"></div>
          <div className="mask">
            <div className="text fat reveal-to-right">Expert Group</div>
          </div>
          <div className="mask small full-width">
            <div className="text reveal-to-bottom">CSinnovation</div>
          </div>
        </div>
      </div>
    </div>
  );
};
