const select = document.getElementById("login-with");

chrome.storage.sync.get("loginWith", ({ loginWith }) => {
  select.value = loginWith;
});

select.addEventListener("change", (e) => {
  chrome.storage.sync.set({ loginWith: e.target.value });
});
