function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event, element) {
    event.dataTransfer.setData("text", element);
  }
  
  function drop(event) {
    event.preventDefault();
    const element = event.dataTransfer.getData("text");
    const formPreview = document.getElementById("preview-form");
  
    if (element === "Layout") {
      const layoutDiv = document.createElement("div");
      layoutDiv.className = "layout";
      formPreview.appendChild(layoutDiv);
      const section1 = document.createElement("div");
      section1.className = "layout-section";
      layoutDiv.appendChild(section1);
      const section2 = document.createElement("div");
      section2.className = "layout-section";
      layoutDiv.appendChild(section2);
    } else if (element === "Label") {
      const label = document.createElement("label");
      label.innerText = "Label Text:";
      const input = document.createElement("input");
      input.type = "text";
      formPreview.appendChild(label);
      formPreview.appendChild(input);
    } else if (element === "Text Box") {
      const textBox = document.createElement("input");
      textBox.type = "text";
      formPreview.appendChild(textBox);
    } else if (element === "Button") {
      const button = document.createElement("button");
      button.innerText = "Button";
      formPreview.appendChild(button);
    } else if (element === "Check Box") {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      formPreview.appendChild(checkbox);
      const label = document.createElement("label");
      label.innerText = "Check Box Label";
      formPreview.appendChild(label);
    } else if (element === "Radio Button") {
      const radio = document.createElement("input");
      radio.type = "radio";
      formPreview.appendChild(radio);
      const label = document.createElement("label");
      label.innerText = "Radio Button Label";
      formPreview.appendChild(label);
    } else if (element === "Table") {
    } else if (element === "Navigation") {
      const link = document.createElement("a");
      link.href = "#";
      link.innerText = "Navigation Link";
      formPreview.appendChild(link);
    } else if (element === "Image") {
      const image = document.createElement("img");
      image.src = "path_to_your_image.jpg";
      formPreview.appendChild(image);
    }
  }
  function reloadPage() {
    window.location.reload();
  }
  function saveData() {
    dataToSave = document.getElementById("data").innerHTML;
    localStorage.setItem("savedData", dataToSave);
    alert("Data has been saved to local storage.");
}
  