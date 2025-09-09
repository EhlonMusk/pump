const copyCaButton = document.getElementById("copyContainer");
copyCaButton.addEventListener("click", (event) => {
  // getting the text content that we want to copy
  const content = document.getElementById("copyaddress").textContent;
  // loading the content into our clipboard
  navigator.clipboard.writeText(content);
  document.getElementById("btn-copy").src = "images/checkmark.png";
  setTimeout(() => {
    document.getElementById("btn-copy").src = "images/copytoclipboard.png";
  }, 500);
});
