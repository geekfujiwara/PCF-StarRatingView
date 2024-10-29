import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class StarRatingControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _container: HTMLDivElement;
    private _rating: number;
    private _color: number;
    private _styleColor: string;

    constructor() {}

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
        this._container = container;
        this._rating = context.parameters.Rating.raw || 0;
        this._color = context.parameters.Color.raw || 0;
        this._styleColor = this.getColor(this._color);
        this.renderStars(this._styleColor);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this._color = context.parameters.Color.raw || 0;
        this._rating = context.parameters.Rating.raw || 0;
        this._styleColor = this.getColor(this._color);
        this.renderStars(this._styleColor);
    }

    private getColor(ColorValue: number | null) {
        if (ColorValue === null) {
            ColorValue = 1; // デフォルトの色を設定（ここではGold）
        }
        switch (ColorValue) {
            case 1:
                return "#FFD700"; // Gold
            case 2:
                return "#2dc925"; // Lime Green
            case 3:
                return "#0078D6"; // True Blue
            case 4:
                return "#C6095D"; // Royal Red
            case 5:
                return "#FD7E21"; // Princeton Orange
            case 6:
                return "#0F7926"; // La Salle Green
            case 7:
                return "#790053"; // French Plum
            case 8:
                return "#510060"; // Deep Violet
            case 9:
                return "#ADC653"; // Middle Green Yellow
            case 10:
                return "#D1E069"; // Chinese Green   
            case 11:
                return "#082139"; // Maastricht Blue 
            case 12:
                return "#003366"; // Dark Midnight Blue   
            default:
                return "#FFD700"; // Default to Gold
        }
    }

    private renderStars(ColoredStar : string): void {
        this._container.innerHTML = "";
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.textContent = i <= this._rating ? "★" : "★";
            star.className = "star";
            star.style.color = i <= this._rating ? ColoredStar : "gray";

            this._container.appendChild(star);
        }
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {}
}
