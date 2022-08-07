import { atom } from "recoil";
import { Atoms } from "@recoil/constants";


export const eventState = atom({
    key: Atoms.Events,
    default: [{
        id: 1,
        title: "Event 1",
        description: "This is event 1",
    }, {
        id: 2,
        title: "Event 2",
        description: "This is event 2",
    }],
});
