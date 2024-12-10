export const ColorfulMessage = (props) => {
  //console.log(props); ->{color: 'blue', message: 'お元気ですかぁ？'}
  const contentStyleA = {
    color: props.color,
    fontSize: "20px",
  };

  return <p style={contentStyleA}>{props.message}</p>;
};
