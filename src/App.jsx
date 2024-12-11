import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// componentNameは最初は大文字にする(大文字のパスカルケースにしないと読み込まない)
export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(111);
  };

  const contentStyleB = {
    color: "blue",
    fontSize: "18px",
  };

  return (
    // <React.Fragment>
    <>
      <h1 style={{ color: "red" }}>こん^^</h1>
      <ColorfulMessage color="blue">お元気ですかぁ？</ColorfulMessage>
      <ColorfulMessage color="green">はい、元気です</ColorfulMessage>
      {/* <ColorfulMessage color="green" message="はい、元気です" /> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
