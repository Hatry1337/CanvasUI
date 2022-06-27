import { CanvasRenderingContext2D } from "canvas";
import UIComponent from "./UIComponent";

export interface IUIContainerOptions {
    outline?: number;
    background?: string | CanvasGradient | CanvasPattern;
}

export default class UIContainer extends UIComponent {
    private childs: UIComponent[] = [];

    constructor(x: number, y: number, width: number, height: number, private options?: IUIContainerOptions, parent?: UIContainer) {
        super(x, y, width, height, parent);
    }

    public addChild(component: UIComponent){
        component.setParent(this);
        this.childs.push(component);
    }

    public getChilds(){
        return this.childs.slice();
    }

    public removeChild(index: number){
        this.childs.splice(index, 1);
    }

    public drawChilds(x: number, y: number, ctx: CanvasRenderingContext2D){
        for(let c of this.childs){
            c.draw(x + c.getPos().x, y + c.getPos().y, ctx);
        }
    }

    public draw(x: number, y: number, ctx: CanvasRenderingContext2D): void {
        if(this.options?.background){
            ctx.fillStyle = this.options.background;
            ctx.fillRect(x, y, this.getSize().width, this.getSize().height);
        }
        if(this.options?.outline && this.options?.outline > 0){
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = this.options?.outline;
            ctx.strokeRect(x, y, this.getSize().width, this.getSize().height);
        }
        this.drawChilds(x, y, ctx);
    }
}