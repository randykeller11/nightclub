import create from "zustand";
interface storeState {
  color: number;
  setColor: (newColor: number) => void;
}

let useColorStore = create<storeState>((set) => ({
  color: 0,

  setColor: (newColor: number) =>
    set((state) => ({
      color: newColor,
    })),
}));

export default useColorStore;
