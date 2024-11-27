import { create } from "zustand";

const useAuthStore = create((set) => ({
  // state
  email: "",
  password: "",
  confirmPassword: "",
  fullName: "",
  phoneNumber: "",
  address: "",

  // action
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  setFullName: (fullName) => set({ fullName }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setAddress: (address) => set({ address }),
}));

export default useAuthStore;
