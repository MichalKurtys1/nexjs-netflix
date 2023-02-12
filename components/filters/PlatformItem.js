import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store";
import style from "./PlatformItem.module.css";

const PlatformItem = (props) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    if (isClicked) {
      dispatch(filterActions.removePlatform(props.name));
      setIsClicked(false);
    } else {
      dispatch(filterActions.addPlatform(props.name));
      setIsClicked(true);
    }
  };

  return (
    <div
      className={style.container}
      onClick={clickHandler}
      style={isClicked ? { backgroundColor: "#007ACC" } : {}}
    >
      <p>{props.name}</p>
    </div>
  );
};

export default PlatformItem;
