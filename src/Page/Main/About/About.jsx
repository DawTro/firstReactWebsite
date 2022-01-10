import "./About.css";
import Employees from "../../../component/Employees";

function About() {
  return (
    <div className="about" id="about">
      <div className="spec">
        <h2>Nasi specjaliści</h2>
      </div>
      <Employees />
      <Employees />
    </div>
  );
}

export default About;
