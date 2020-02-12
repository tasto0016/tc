import { Component } from './component';
import { Bouton } from './bouton';
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
