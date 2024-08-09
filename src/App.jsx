import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import QuickInfo from "./components/QuickInfo";
import Main from "./components/Main";
import Contact from "./components/Contact";

export default function App() {
  const [render, setRender] = React.useState(true);
  const [renderMain, setRenderMain] = React.useState(true);
  return (
    <>
      <Nav render={renderMain} setRenderMain={setRenderMain} />
      {renderMain ? (
        render ? (
          <QuickInfo setRender={setRender} render={render} />
        ) : (
          <Main />
        )
      ) : (
        <Contact />
      )}
    </>
  );
}
