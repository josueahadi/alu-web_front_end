function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  // Set up spooky mode
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");

  // Set up dark mode
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");

  // Set up scream mode
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  // Add a paragraph to the body
  const paragraph = document.createElement("p");
  paragraph.textContent = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  // Add buttons to the body of the document
  const spookyModeButton = createButton("Spooky", spooky);
  const darkModeButton = createButton("Dark mode", darkMode);
  const screamModeButton = createButton("Scream mode", screamMode);

  document.body.appendChild(spookyModeButton);
  document.body.appendChild(darkModeButton);
  document.body.appendChild(screamModeButton);
}

// Function to create a button with a click event handler
function createButton(text, clickHandler) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", clickHandler);

  return button;
}

main();
