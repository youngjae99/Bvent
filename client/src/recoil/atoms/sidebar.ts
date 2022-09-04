import { atom } from "recoil";
import { Atoms } from "@/recoil/constants";

export const sidebarShowState = atom({
    key: Atoms.Sidebar,
    default: false
});
