import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Component/Main/Main";

const App = () => {

  useEffect(() => {
    let docTitle = document.title;

    const onBlur = () => {
      document.title = "Come Back";
    };

    const onFocus = () => {
      document.title = docTitle;
    };

    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
