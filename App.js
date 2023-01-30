//name of the tag   
//{} - for tag attribute or arguments/props
//what you put inside the tag/multiple children pass as array

const heading1= React.createElement("h1",{id:"title"},"namaste everyone");
const heading2= React.createElement("h2",{id:"title"},"hello everyone");
const container = React.createElement("div",{id:"container"},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
//render takes in a react element and modifies the DOM.
root.render(container);