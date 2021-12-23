---
title: "Profile"
layout: "base.njk"
templateEngineOverride: njk,md
---

<!-- 0. HTML -->
<dl>
    <dt>Email 👇</dt>
    <dd id="email"></dd>
    <dt>Public Address 👇</dt>
    <dd id="publicAddress"></dd>
</dl>

<!-- 1. Ensure the user’s info is displayed -->
<script>
// Assumes a user is already logged in
const displayUserInfo = async () => {
  let emailElement = document.getElementById('email');
  let publicAddressElement = document.getElementById('publicAddress');
  try {
    const { email, publicAddress } = await magic.user.getMetadata();
    emailElement.innerHTML = email;
    publicAddressElement.innerHTML = publicAddress;
    } catch {
      // Handle errors if required!
      emailElement.innerHTML = "DNE";
      publicAddressElement.innerHTML = "DNE";
      }
      }
      displayUserInfo();
</script>
