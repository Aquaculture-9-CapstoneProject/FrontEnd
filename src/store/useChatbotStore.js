import { create } from "zustand";
import apiClient from "../services/apiClient";

const useChatStore = create((set) => ({
    messages: [],
    isLoading: false,
  
    addMessage: (message) =>
      set((state) => ({
        messages: [...state.messages, message],
      })),
  
      sendMessage: async (userInput) => {
        console.log("User Input:", userInput); // Debugging 1
        set({ isLoading: true }); // Set loading to true
        try {  
          const response = await apiClient.post("/chats", { user_input: userInput });
          console.log("API Response:", response.data); // Debugging 2
      
          // Ekstraksi data sesuai struktur API Response
          const aiResponse = response.data.message.AiRespon || "Balasan kosong dari AI";
          console.log("AI Response Extracted:", aiResponse); // Debugging 3
      
          // Update messages jika AI response tidak kosong
          set((state) => ({
            messages: [
              ...state.messages,
              { sender: "user", text: userInput },
              { sender: "ai", text: aiResponse },
            ],
            isLoading: false,
          }));
        } catch (error) {
          console.error("Error in sendMessage:", error);
          set({ isLoading: false });
        }
      },            
  }));
  
  export default useChatStore;
  