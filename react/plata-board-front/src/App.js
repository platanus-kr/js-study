import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/page/HomePage";
import BoardPage from "./component/page/BoardPage";

function App() {
  return (
	<BrowserRouter>
	  <HomePage />
      <Routes>
        {/*<Route path="/*" element={<HomePage />} />*/}
        <Route path="/board" element={<BoardPage />} />
        <Route path="/board/:asdf" element={<BoardPage />} />
      </Routes>
	</BrowserRouter>
  );
}

export default App;