import { atom } from "recoil";
import { Atoms } from "@recoil/constants";


export const timezoneState = atom({
    key: Atoms.Timezone,
    default: "0",
});
