---
title: "Login"
layout: "base.njk"
templateEngineOverride: njk,md
---

<!-- 0. HTML -->
<form id="form">
    <input id="input" type="email" />
    <button type="submit">Login</button>
</form>
<div id="result">

<!-- 3. Use loginWithMagicLink to authenticate user -->
<script>
const form = document.querySelector("#form")
const input = document.querySelector("#input")
const result = document.querySelector("#result")
form.onsubmit = async (e) => {
    e.preventDefault()
    const email = input.value
    const jwt = await magic.auth.loginWithMagicLink({email})
    result.innerText = jwt
    if (jwt) {
        window.location.replace("http://localhost:8080/profile");
    }
}
</script>
