export const ColorfulMessage = (props) => {
  //console.log(props); ->{color: 'blue', message: 'お元気ですかぁ？'}
  //オブジェクトの分割だいにゅウ
  const { color, children } = props;

  const contentStyleA = {
    color: color,
    fontSize: "20px",
  };

  return <p style={contentStyleA}>{children}</p>;
};
