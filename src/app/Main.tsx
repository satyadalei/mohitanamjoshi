"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux-store/store";
import Navbar from "@/components/Navbar";

const Main = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="bg-black text-white" >
      <Provider store={store}>
        <Navbar />
        {children}
      </Provider>
    </div>
  );
};

export default Main;
