import { Black, Bold, Green, Magenta, Mix, Reset, Underline, White } from "./mod.ts";

console.log("%cGreen!%c", Green, Reset)
console.log("%cMagenta!%c", Magenta, Reset)
console.log("%cBlack!%c", Black, Reset)
console.log("%cWhite!%c", White, Reset)
console.log("%cGreen with a underline!%c", Mix(Green, Underline), Reset)
console.log("%cBold Green%c", Mix(Green, Bold), Reset)
