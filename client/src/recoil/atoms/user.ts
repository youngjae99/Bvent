import { atom } from "recoil";
import { Atoms } from "@/recoil/constants";

export const userState = atom({
    key: Atoms.User,
    default: {
        username: "TEST_USERNAME",
        profilePic: "",
        walletAddress: "0x123456789",
        location: "SEOUL",
        coin: 0,
    },
});