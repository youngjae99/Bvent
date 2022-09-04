import { atom } from "recoil";
import { Atoms } from "@/recoil/constants";


export const locationState = atom({
    key: Atoms.Timezone,
    default: "Korea",
});

export const timezoneState = atom({
    key: Atoms.Timezone,
    default: "KST",
});