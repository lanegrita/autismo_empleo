import { create } from "zustand";
import { persist } from "zustand/middleware";

const userTypeStore = create(
  persist(
    (set) => ({
      userType: "",
    }),
    {
      name: "user-type", // unique name
      getStorage: () => localStorage, // define the storage type
    }
  )
);

export { userTypeStore };
