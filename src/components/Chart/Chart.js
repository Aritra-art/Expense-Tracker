import "./Chart.css";
import ChartBar from "./ChartBar";

const datapointsHandler = (datapoint) => {
  return (
    <ChartBar
      key={datapoint.label}
      value={datapoint.value}
      maxValue={null}
      label={datapoint.label}
    />
  );
};

const Chart = (props) => {
  return <div className="chart">{props.datapoints.map(datapointsHandler)}</div>;
};

export default Chart;
