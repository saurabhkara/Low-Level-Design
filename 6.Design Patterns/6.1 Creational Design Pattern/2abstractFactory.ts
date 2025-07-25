//The Abstract Factory pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.


//Abstract Product interface
interface IButton {
    render(): void
}

interface ICheckbox {
    render(): void
}


//Concrete Product

class LightButton implements IButton {
    render(): void {
        console.log('Light Button')
    }
}

class DarkButton implements IButton {
    render(): void {
        console.log('Dark button')
    }
}


class LightCheckBox implements ICheckbox {
    render(): void {
        console.log("Light Checkbox")
    }
}

class DarkCheckBox implements ICheckbox {
    render(): void {
        console.log("Dark checkbox")
    }
}


// Abstract Factory

interface IUIFactory {
    createButton(): IButton;
    createCheckBox(): ICheckbox
}


class UILightMode implements IUIFactory {

    createButton(): IButton {
        return new LightButton()
    }

    createCheckBox(): ICheckbox {
        return new LightCheckBox()
    }
}


class UIDarkmode implements IUIFactory {
    createButton(): IButton {
        return new DarkButton()
    }

    createCheckBox(): ICheckbox {
        return new DarkCheckBox()
    }
}



//Client Code 

class Application {
    constructor(private factory: IUIFactory) { }

    renderUI() {
        const button = this.factory.createButton()
        const checkbox = this.factory.createCheckBox()
        button.render();
        checkbox.render()
    }
}

const lightMode = new Application(new UILightMode());
lightMode.renderUI()

const darkMode = new Application(new UIDarkmode())
darkMode.renderUI()