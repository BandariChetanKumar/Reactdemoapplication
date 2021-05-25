import React from "react";
import "./App.css";
import Headlines from "./components/headlines/Headlines";

export default function App() {
  return (
    <div className="container-fluid my-5">
      <h1 className="text-center mb-5">
        <b>News Headlines</b>
      </h1>
      <Headlines />
    </div>
  );
}
