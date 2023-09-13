import "./App.css";
import Datas from "./data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="text">devjobs</div>
        <div className="icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="body">
        {Datas &&
          Datas.map((data) => {
            return (
              <div className="box1" key={data.id}>
                <img
                  className="iconedit"
                  src={data.logo}
                  alt=""
                  style={{ backgroundColor: data.logoBackground }}
                />{" "}
                <br />
                <p>
                  {data.postedAt} . {data.contract}
                </p>
                <h3>{data.position}</h3>
                <p>{data.company}</p>
                <p className="loc">{data.location}</p>
              </div>
            );
          })}
      </div>
      <button>Load More</button>
    </div>
  );
}

export default App;
