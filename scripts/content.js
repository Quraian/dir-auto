chrome.runtime.onMessage.addListener((obj, sender, response) => {
  document.querySelectorAll("p").forEach((p) => {
    p.setAttribute("dir", "auto");
  });
});
