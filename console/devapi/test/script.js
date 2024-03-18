import { DevBase } from "../dev.js";
const devbase = new DevBase("admin@bestdeveloper.com", "DEVBASE_4321");

console.log(devbase.version());

const create = document.querySelector(".create");
create.addEventListener("click", () => {
    var result = devbase.createDevBase("devJS");
    console.log(result);
});