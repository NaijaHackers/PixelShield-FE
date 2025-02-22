import { create } from 'zustand'

export interface IStore {
    bears: number;
}

export interface IStoreActions {
    increasePopulation: () => void;
    removeAllBears: () => void;
    updateBears: (newBears: number) => void;
}

const useStore = create<IStore & IStoreActions>((set) => ({
    bears: 0,

    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),

    removeAllBears: () => set({ bears: 0 }),

    updateBears: (newBears: number) => set({ bears: newBears }),
}));

export default useStore;