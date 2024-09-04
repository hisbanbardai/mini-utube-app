import "./App.css";
import Header from "../src/components/Header/Header";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const Video = React.lazy(() => import("./pages/Video/Video"));
const Home = React.lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"Loading..."}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/video/:categoryId:videoId"
          element={
            <Suspense fallback={"Loading..."}>
              {" "}
              <Video />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
