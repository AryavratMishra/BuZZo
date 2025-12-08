// src/layout/MainLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopNav from "./Navbar";
import Chatbot from "../Chatbot/Chatbot";

const MainLayout = () => {
  const location = useLocation();
  const hideChatbotPages = ["/payment"];
  const showChatbot = !hideChatbotPages.includes(location.pathname);

  return (
    <>
      <TopNav />
      <div className="container mt-4">
        <Outlet />
      </div>
<<<<<<< HEAD
      <Chatbot />
=======
      {showChatbot && <Chatbot />}
>>>>>>> 7bc76bd2469061c8e92f14f048253ed5dd14c2ee
    </>
  );
};

export default MainLayout;
