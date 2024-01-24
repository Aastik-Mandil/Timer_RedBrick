import React from "react";
import CustomTimer from "./CustomTimer";
import { useRandomNumber } from "../Utils/utils";
import "./MainPage.css";

const Content: React.FC<{
  open: any;
}> = (props) => {
  // START - DO NOT EDIT
  const randomNumber = useRandomNumber();
  // END - DO NOT EDIT

  if (!props.open.value) {
    return null;
  }
  return <div>Your random number is: {randomNumber}</div>;
};

const MainPage: React.FC = () => {
  const [open, setOpen] = React.useState({ value: false });

  return (
    <div className="mainPageContiner">
      <CustomTimer />

      <button
        onClick={() =>
          setOpen((prev) => ({ value: !prev.value }))
        }
        className="mainPageContinerButton"
      >
        Generate random number
      </button>

      <Content open={open} />
    </div>
  );
};

export default MainPage;
