import { createContext } from "react";

export const OnNavigateContext = createContext<() => void>(() => {});
