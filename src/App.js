import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "reactstrap";
import "./App.css";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Lettuce from "./components/Lettuce";
import Tomato from "./components/Tomato";
import Cheese from "./components/Cheese";
import Onion from "./components/Onion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typed from "react-typed";

function App() {
  const [top, setTop] = useState([1]);
  const [cheese, setCheese] = useState([]);
  const [lettuce, setLettuce] = useState([]);
  const [tomato, setTomato] = useState([]);
  const [onion, setOnion] = useState([]);
  const [bottom, setBottom] = useState([1]);

  return (
    <Container fluid className="mycontainer">
      <ToastContainer />
      <div className="row ">
        <div className="col-lg-6 col-sm-12 text-center">
          <h2 className="title">I Love Burger</h2>
          {top.map((comp, i) => (
            <Top key={i} />
          ))}
          {cheese.map((comp, i) => (
            <Cheese key={i} />
          ))}
          {lettuce.map((comp, i) => (
            <Lettuce key={i} />
          ))}
          {onion.map((comp, i) => (
            <Onion key={i} />
          ))}
          {tomato.map((comp, i) => (
            <Tomato key={i} />
          ))}

          {bottom.map((comp, i) => (
            <Bottom key={i} />
          ))}
        </div>
        <div className="col-lg-6 col-sm-12 text-center buttons">
          <h2>
            <Typed strings={["Make your own burger"]} typeSpeed={40} />
          </h2>
          <Button
            color="warning"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setCheese([...cheese, 1]);
              toast("Added a layer of cheese", { type: "warning" });
            }}
          >
            Add Cheese
          </Button>
          <Button
            color="success"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setLettuce([...lettuce, 1]);
              toast("Added a layer of lettuce", { type: "success" });
            }}
          >
            Add Lettuce
          </Button>
          <Button
            color="primary"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setOnion([...onion, 1]);
              toast("Added a layer of onions", { type: "info" });
            }}
          >
            Add Onion
          </Button>
          <Button
            color="danger"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setTomato([...tomato, 1]);
              toast("Added a layer of tomatos", { type: "error" });
            }}
          >
            Add Tomato
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
