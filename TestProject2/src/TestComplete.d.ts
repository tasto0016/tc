
declare abstract class WinForObj {
    //Component call
    public Name: string;
    public ScreenLeft: number;
    public ScreenTop: number;
    public Visible: boolean;
    public VisibleOnScreen: boolean;
    public WndCaption: string;
    public Width: number;
    public Height: number;

    //Champ call
    public wText: string;
    public Keys(s: string): void;
    public SetText(s: string): void;

    //Bouton Call


    //Ecran call
    public WndClass: string;
    public ChildCount: number;
    public Child(n: number): WinForObj;
    public GetType(): any;

    //Combobox
    public ClickItem(valeur: string) : void ;
}

declare class Sys {
    public static HighlightObject(object: WinForObj, time: number, color: number): void;
}

declare class Log{
    public static Message(s : string) : void ;
}