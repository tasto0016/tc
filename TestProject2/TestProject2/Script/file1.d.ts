export declare class Component {
    protected _wfo: WinForObj;
    static isLabel(component: Component): component is Label;
    getTcName(): string;
    constructor(cmpnt: WinForObj);
    brille(color?: number): void;
    copy(): Component;
    static isVisible(wfo: WinForObj): boolean;
    lire(): string;
    protected size(): number;
    positionX(): number;
    positionY(): number;
    myClass(): string;
}
export declare class Champ extends Component {
    constructor(wfo: WinForObj);
    copy(): Champ;
    brille(): void;
    myClass(): string;
    lire(): string;
    ecrire(s: string): void;
    effacer(): void;
}
export declare class Bouton extends Component {
    constructor(wfo: WinForObj);
    copy(): Bouton;
    brille(): void;
    myClass(): string;
}
export declare class Combobox extends Component {
    constructor(wfo: WinForObj);
    copy(): Combobox;
    brille(): void;
    myClass(): string;
}
export declare class Label extends Component {
    constructor(wfo: WinForObj);
    brille(): void;
    myClass(): string;
    is(s: string): boolean;
}
export declare class Ecran extends Component {
    private _components;
    constructor(wfo: WinForObj);
    getComponents(): Component[];
    myClass(): string;
    private addComponent;
    private parkour;
    brille(): void;
    private rechercheFromLabel;
    rechercheChamp(label: string): Component;
    rechercheCombobox(label: string): Component;
    rechercheBouton(label: string): Bouton;
    getComponentsToString(): string;
}
