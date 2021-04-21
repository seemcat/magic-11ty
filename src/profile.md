---
title: "Profile"
layout: "base.njk"
templateEngineOverride: njk,md
---

<!-- 0. HTML -->
<h3>Welcome 👇🏼</h3><h3 id="email"></h3>
<h3>Public Address 👇🏼</h3><h3 id="publicAddress"></h3>

<!-- 4. Ensure the user’s email is displayed -->
<script>
// Assumes a user is already logged in
const displayUserInfo = async () => {
  let emailToDisplay = document.getElementById('email');
  let publicAddressToDisplay = document.getElementById('publicAddress');
  try {
    const { email, publicAddress } = await magic.user.getMetadata();
    emailToDisplay.innerHTML = email;
    publicAddressToDisplay.innerHTML = publicAddress;
    } catch {
      // Handle errors if required!
      emailToDisplay.innerHTML = "DNE";
      publicAddressToDisplay.innerHTML = "DNE";
      }
      }
      displayUserInfo();
</script>
