import React from "react";

export default function ChatPopup({ onClose }) {
  return (
    <div className="fixed bottom-20 right-6 max-w-[600px] h-[400px] bg-neutral-5 rounded-lg shadow-lg p-6 border border-neutral-3 z-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b pb-3">
        <h3 className="text-base font-semibold text-neutral-1 text-center flex-grow">
          BlueBay Chatbot Assistant
        </h3>
        <button onClick={onClose} className="text-neutral-1">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3501 1.32081C14.8951 0.865812 14.1601 0.865812 13.7051 1.32081L8.00009 7.01415L2.29509 1.30915C1.84009 0.854146 1.10509 0.854146 0.650088 1.30915C0.195088 1.76415 0.195088 2.49915 0.650088 2.95415L6.35509 8.65915L0.650088 14.3641C0.195088 14.8191 0.195088 15.5541 0.650088 16.0091C1.10509 16.4641 1.84009 16.4641 2.29509 16.0091L8.00009 10.3041L13.7051 16.0091C14.1601 16.4641 14.8951 16.4641 15.3501 16.0091C15.8051 15.5541 15.8051 14.8191 15.3501 14.3641L9.64509 8.65915L15.3501 2.95415C15.7934 2.51081 15.7934 1.76415 15.3501 1.32081Z"
              fill="black"
            />
          </svg>
        </button>
      </div>

      {/* Chat Content */}
      <div className="flex-grow overflow-y-auto">
        <div className="chat chat-start">
          <div className="chat-bubble bg-primary-4 text-neutral-5 font-normal text-sm">
            Hai! Selamat datang di BlueBay. Saya siap membantu Anda.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble bg-secondary-5 text-neutral-5 font-normal text-sm">
            Hai! Selamat datang di BlueBay. Saya siap membantu Anda.
          </div>
        </div>
      </div>

      {/* Input Field */}
      <div className="mt-4 relative">
        <input
          type="text"
          placeholder="Masukkan pertanyaan"
          className="w-full input input-bordered border-neutral-3 rounded-lg pr-10"
        />
        <button className="absolute top-1/2 right-3 transform -translate-y-1/2">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.67124 17.0591L19.1212 9.57911C19.9312 9.2291 19.9312 8.08911 19.1212 7.73911L1.67124 0.259105C1.01124 -0.030895 0.28124 0.459105 0.28124 1.16911L0.27124 5.77911C0.27124 6.27911 0.64124 6.70911 1.14124 6.7691L15.2712 8.65911L1.14124 10.5391C0.64124 10.6091 0.27124 11.0391 0.27124 11.5391L0.28124 16.1491C0.28124 16.8591 1.01124 17.3491 1.67124 17.0591Z"
              fill="#A3A3A3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
