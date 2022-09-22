import { atom } from "recoil";
import { Atoms } from "@/recoil/constants";
import { Event } from "@/types/event";

type EventType = {
    [key: string]: Event;
}

export const eventState = atom<EventType>({
    key: Atoms.Events,
    default: {}
});
