import "./RestView.scss";

type RestViewType = {
  timer: number;
};
const RestView = ({ timer }: RestViewType) => {
  return (
    <div>
      <p>RestView</p>
      <p>{timer} seconds</p>
    </div>
  );
};

export default RestView;
