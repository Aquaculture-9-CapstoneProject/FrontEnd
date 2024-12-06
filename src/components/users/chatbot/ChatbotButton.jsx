import React, { useState } from "react";
import ChatPopup from "./ChatPopup";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Button */}
      <button
        onClick={togglePopup}
        className="btn bg-secondary-9 text-neutral-5 px-3 py-3 rounded-xl shadow-lg flex items-center gap-2 border-none"
      >
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.0001 12.2933C26.0001 4.97333 20.3201 0 14.0001 0C7.74675 0 2.00008 4.86667 2.00008 12.3733C1.20008 12.8267 0.666748 13.68 0.666748 14.6667V17.3333C0.666748 18.8 1.86675 20 3.33341 20C4.06675 20 4.66675 19.4 4.66675 18.6667V12.2533C4.66675 7.14667 8.60008 2.68 13.7067 2.53333C18.9867 2.37333 23.3334 6.61333 23.3334 11.8667V21.3333H14.0001C13.2667 21.3333 12.6667 21.9333 12.6667 22.6667C12.6667 23.4 13.2667 24 14.0001 24H23.3334C24.8001 24 26.0001 22.8 26.0001 21.3333V19.7067C26.7867 19.2933 27.3334 18.48 27.3334 17.52V14.4533C27.3334 13.52 26.7867 12.7067 26.0001 12.2933Z"
            fill="#FAFAFA"
          />
        </svg>
      </button>

      {/* Popup */}
      {isOpen && <ChatPopup onClose={togglePopup} />}
    </div>
  );
}
