export const ColorfulMessage = (props) => {
  //console.log(props); ->{color: 'blue', message: 'お元気ですかぁ？'}
  //オブジェクトの分割代入
  const { color, children } = props;
  console.log("--- ColorFUllMessage ---"); //親再レンダリングされるとこちらもレンダリングされる
  const contentStyleA = {
    color: color,
    fontSize: "20px",
  };

  return <p style={contentStyleA}>{children}</p>;
};
