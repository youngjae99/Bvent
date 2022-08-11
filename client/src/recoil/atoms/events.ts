import { atom } from "recoil";
import { Atoms } from "@recoil/constants";

type EventType = {
    [key: string]: any;
}

export const eventState = atom<EventType>({
    key: Atoms.Events,
    default: {}
});
