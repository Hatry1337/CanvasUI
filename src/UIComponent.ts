import { CanvasRenderingContext2D } from "canvas";
import UIContainer from "./UIContainer";

export interface IUIComponentPosition{
    x: number;
    y: number;
}

export interface IUIComponentSize{
    width: number;
    height: number;
}

export default class UIComponent {
    private visibleState: boolean = true;

    constructor(private x: number, private y: number, private width: number, private height: number, private parent?: UIContainer) {
        
    }

    public center(){
        if(!this.parent) return;
        let psize = this.parent.getSize();
        let csize = this.getSize();
        let x = 0, y = 0;

        x = Math.floor((psize.width / 2) - (csize.width / 2));
        y = Math.floor((psize.height / 2) - (csize.height / 2));

        this.setPos(x, y);
        console.log(this);
    }

    public setPos(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public getPos(): IUIComponentPosition{
        return { x: this.x, y: this.y };
    }

    public setSize(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public getSize(): IUIComponentSize{
        return { width: this.width, height: this.height };
    }

    public setParent(container: UIContainer | undefined){
        this.parent = container;
    }

    public getParent(){
        return this.parent;
    }

    public setVisible(visible: boolean){
        this.visibleState = visible;
    }

    public isVisible(){
        return this.visibleState;
    }

    public draw(x: number, y: number, ctx: CanvasRenderingContext2D){

    }
}