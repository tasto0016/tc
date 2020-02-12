"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Component {
    constructor(cmpnt) {
        this._wfo = cmpnt;
    }
    static isLabel(component) {
        return component instanceof Label;
    }
    getTcName() {
        return this._wfo.Name;
    }
    brille(color) {
        if (color == null)
            color = 0x0000FF;
        Sys.HighlightObject(this._wfo, 5, color);
    }
    copy() {
        return new Component(this._wfo);
    }
    static isVisible(wfo) {
        return (wfo.Visible && wfo.VisibleOnScreen);
    }
    lire() {
        return this._wfo.WndCaption;
    }
    size() {
        return this._wfo.Width * this._wfo.Height;
    }
    positionX() {
        return this._wfo.ScreenLeft;
    }
    positionY() {
        return this._wfo.ScreenTop;
    }
    myClass() {
        return "Component";
    }
}
exports.Component = Component;
class Champ extends Component {
    constructor(wfo) {
        super(wfo);
    }
    copy() {
        return new Champ(this._wfo);
    }
    brille() {
        super.brille(0xFF0000);
    }
    myClass() {
        return "Champ";
    }
    lire() {
        return this._wfo.wText;
    }
    ecrire(s) {
        this._wfo.Keys(s);
    }
    effacer() {
        this._wfo.SetText("");
    }
}
exports.Champ = Champ;
class Bouton extends Component {
    constructor(wfo) {
        super(wfo);
    }
    copy() {
        return new Bouton(this._wfo);
    }
    brille() {
        super.brille(0x00FF00);
    }
    myClass() {
        return "Bouton";
    }
}
exports.Bouton = Bouton;
class Combobox extends Component {
    constructor(wfo) {
        super(wfo);
    }
    copy() {
        return new Combobox(this._wfo);
    }
    brille() {
        super.brille(0x00FFFF);
    }
    myClass() {
        return "Combobox";
    }
}
exports.Combobox = Combobox;
class Label extends Component {
    constructor(wfo) {
        super(wfo);
    }
    brille() {
        super.brille(0xA4A0A0);
    }
    myClass() {
        return "Label";
    }
    is(s) {
        return this.lire().includes(s);
    }
}
exports.Label = Label;
class Ecran extends Component {
    constructor(wfo) {
        super(wfo);
        this._components = [];
        this.parkour(wfo);
    }
    getComponents() {
        return this._components;
    }
    myClass() {
        return "Ecran";
    }
    addComponent(wfo) {
        let wclass = wfo.WndClass;
        if (wclass.includes("STATIC"))
            this._components.push(new Label(wfo));
        else if (wclass.includes("EDIT"))
            this._components.push(new Champ(wfo));
        else if (wclass.includes("BUTTON"))
            this._components.push(new Bouton(wfo));
        else if (wclass.includes("COMBOBOX"))
            this._components.push(new Combobox(wfo));
        else
            this._components.push(new Component(wfo));
    }
    parkour(wfo) {
        if (Component.isVisible(wfo)) {
            let nChild = wfo.ChildCount;
            if (nChild == 0)
                this.addComponent(wfo);
            else
                for (let i = 0; i < nChild; i++)
                    this.parkour(wfo.Child(i));
        }
    }
    brille() {
        this._components.forEach(cpmnt => {
            cpmnt.brille();
        });
    }
    rechercheFromLabel(nameClass, label) {
        let y;
        let foundL = false;
        for (const component of this._components) {
            if (Component.isLabel(component) && component.is(label)) {
                y = component.positionY();
                foundL = true;
            }
        }
        if (!foundL)
            throw "Pas trouvé de label : " + label;
        let found = false;
        var aRetourner;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == nameClass)
                if (cmpnt.positionY() == y) {
                    found = true;
                    aRetourner = cmpnt;
                }
            ;
        }
        ;
        if (!found)
            throw "pas trouvé de champ associé au label : " + label + "\n" + y;
        return aRetourner;
    }
    rechercheChamp(label) {
        return this.rechercheFromLabel("Champ", label);
    }
    rechercheCombobox(label) {
        return this.rechercheFromLabel("Combobox", label);
    }
    rechercheBouton(label) {
        let found = false;
        var aRetourner;
        for (const cmpnt of this._components) {
            if (cmpnt.myClass() == "Bouton")
                if (cmpnt.lire() == label) {
                    found = true;
                    aRetourner = cmpnt;
                }
        }
        ;
        if (!found)
            throw ("Pas trouvé de bouton au label : " + label);
        return aRetourner;
    }
    getComponentsToString() {
        let s = "Ce que j'ai : " + this._components.length;
        this._components.forEach((element) => {
            s += "\n" + element.myClass() + " -> " + element.lire();
        });
        return s;
    }
}
exports.Ecran = Ecran;
//# sourceMappingURL=file1.js.map