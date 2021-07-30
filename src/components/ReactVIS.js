import { RadialChart } from "react-vis";
import "./reactVIS.css";

const ReactVIS = () => {
  const myData = [
    {
      angle: 21.1,
      color: "#800000",
      label: "Archive",
    },
    { angle: 7.5, color: "#2ecc71", label: "Labels" },
    { angle: 5.3, color: "#63c5da", label: "Drafts" },
    { angle: 11.3, color: "#A020F0", label: "Trash" },
    { angle: 4.5, color: "#f1c40f", label: "Span" },
    { angle: 50.4, color: "#009dff", label: "Inbox" },
  ];
  return (
    <div className="container">
      <RadialChart
        data={myData}
        width={400}
        showLabels="true"
        labelsAboveChildren="true"
        height={400}
        innerRadius={130}
        radius={180}
        // getAngle={d => d.theta}
        padAngle={0.02}
      />
    </div>
  );
};

export default ReactVIS;
