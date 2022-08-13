import { atom } from "recoil";

const testState = atom({
	key: "testState",
	default: {
		isTest: false,
		strTest: "asdf",
	},
});

//export testState;
//export testState2;

export default testState;
