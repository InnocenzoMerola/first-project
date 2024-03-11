const ButtonComponent = function (props) {
  return (
    <div>
      <button className="my-btn" style={{ backgroundColor: props.btnBgColor }}>
        {props.btnText}
      </button>
    </div>
  );
};

export default ButtonComponent;
