// Spanish is in the markup, so without JS the page still reads; any other browser language gets English.
if (!/^es\b/i.test(navigator.language || "")) {
  document.documentElement.lang = "en";
  for (const el of document.querySelectorAll("[data-en]")) el.textContent = el.dataset.en;
}
