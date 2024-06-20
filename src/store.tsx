import { create } from "zustand";

interface ModelType {
  type: string;
  set: (value: string) => void;
}

export const useModelType = create<ModelType>((set) => ({
  type: "ifc",
  set: (value) => set((state) => ({ type: value })),
}));
