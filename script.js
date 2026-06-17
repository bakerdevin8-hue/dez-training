const form = document.querySelector(".contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "Request noted";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    form.reset();
  }, 1800);
});
