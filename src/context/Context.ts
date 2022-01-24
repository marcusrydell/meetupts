import { createContext, useContext } from "react";

export type GlobalContent = {
    showModal: boolean;
    setShowModal: (e: boolean) => void;
};

export const modalCtx = createContext<GlobalContent>({
    showModal: false,
    setShowModal: () => {},
});

export const useGlobalContext = () => useContext(modalCtx);
