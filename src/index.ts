import { Canvas } from "canvas";
import UIContainer from "./UIContainer";
import fs from "fs";

let mainview = new UIContainer(0, 0, 1000, 1000, { outline: 1 });
let canvas = new Canvas(mainview.getSize().width, mainview.getSize().height);
let ctx = canvas.getContext("2d");

let cont = new UIContainer(100, 100, 400, 300, { outline: 1, background: "rgba(0,0,0,0.2);" });
mainview.addChild(cont);

let cont1 = new UIContainer(10, 10, 50, 50, { outline: 1 });
cont.addChild(cont1);
cont1.center();

mainview.draw(0, 0, ctx);

fs.writeFileSync(new Date().getTime().toString() + ".png", canvas.toBuffer("image/png"));