import { qs } from "./utils";
import { TCanvas } from "./webgl/TCanvas";

const canvas = new TCanvas(qs<HTMLDivElement>(".canvas-container"));

localStorage.setItem("theme", "dark");

window.addEventListener("beforeunload", () => {
  canvas.dispose();
});
