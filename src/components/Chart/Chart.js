import "./Chart.css";
import ChartBar from "./ChartBar";

const numberArrayHandler = (datapoint) => {
  return datapoint.value;
};

const Chart = (props) => {
  const monthNumberArray = props.datapoints.map(numberArrayHandler);
  const maxNumber = Math.max(...monthNumberArray);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={maxNumber}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
