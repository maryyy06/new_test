class Button {
    constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
    }
    onСlick() {
    console.log(
    `width: ${this.width}, height: ${this.height}, type: ${this.type}, color: ${this.color}`
    );
    }
    }
    
    const width = 5;
    const height = 5;
    const type = "button";
    const color = "green";
    
    let newButton = new Button(width, height, type, color);
    newButton.onСlick();
    
    function testButton(button) {
    if (
    typeof button.height === "number" &&
    typeof button.width === "number" &&
    button.type === "button" &&
    button.color === "green"
    ) {
    console.log("Your button is correct!");
    return;
    }
    if (typeof button.height !== "number") {
    console.log(
    `Your button has invalid type of height. Correct it to the number`
    );
    }
    if (typeof button.width !== "number") {
    console.log(
    `Your button has invalid type of width. Correct it to the number`
    );
    }
    if (button.type !== "button") {
    console.log(`Your button has invalid type. Correct it to the "button"`);
    }
    if (button.color !== "green") {
    console.log(
    `Your button has invalid type of color. Correct it to the "green"`
    );
    }
    }
    
    testButton(newButton);