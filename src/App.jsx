import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// componentNameは最初は大文字にする(大文字のパスカルケースにしないと読み込まない)
export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    //setNum(num + 1);  //レンダリング後に上から関数を再度読み込むのでuseState(0)が評価され左の(num+1)を複数用意しても増減しない
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
