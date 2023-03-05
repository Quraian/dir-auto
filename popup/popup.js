document.getElementById("auto-dir").addEventListener("click", async () => {
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true,
  });

  chrome.tabs.sendMessage(tabs[0].id, {});
});
