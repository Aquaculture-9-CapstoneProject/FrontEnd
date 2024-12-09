import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showToast = (message) => {
  Toastify({
    text: message,
    duration: 1000,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "#106E9E",
      color: "#FAFAFA",
      borderRadius: "16px",
      padding: "16px 16px",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
  }).showToast();
};
