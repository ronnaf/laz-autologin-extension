console.log("Is lazada! Attempting to automatically log in...");

if (location.hostname === "www.lazada.com.ph") {
  // A sufficient amount of timeout to let the script load
  setTimeout(() => {
    redirectToLoginPage();
  }, 250);
}
if (location.hostname === "member.lazada.com.ph") {
  // A sufficient amount of timeout to let the script load
  setTimeout(() => {
    login();
  }, 1250);
}

function redirectToLoginPage() {
  const loginDiv = document.getElementById("anonLogin");
  if (loginDiv) {
    loginDiv.children[0].click();
  }
}

function login() {
  chrome.storage.sync.get("loginWith", ({ loginWith }) => {
    const buttonListDiv = document.getElementsByClassName("mod-third-party-login-bd")[0];
    if (buttonListDiv) {
      const facebook = buttonListDiv.children[0];
      const google = buttonListDiv.children[1];
      if (loginWith === "facebook") {
        facebook.click();
      } else if (loginWith === "google") {
        google.click();
      }
    }
  });
}
