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
    loginViaFacebook();
  }, 1250);
}

function redirectToLoginPage() {
  const loginDiv = document.getElementById("anonLogin");
  if (loginDiv) {
    loginDiv.children[0].click();
  }
}

function loginViaFacebook() {
  const buttonListDiv = document.getElementsByClassName("mod-third-party-login-bd")[0];
  if (buttonListDiv) {
    for (let i = 0; i < buttonListDiv.children.length; i++) {
      const element = buttonListDiv.children[i];
      if (element.innerHTML === "Facebook") {
        element.click();
      }
    }
  }
}
