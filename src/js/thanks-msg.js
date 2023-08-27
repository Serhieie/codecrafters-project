
(() => {
const btnOpn = document.querySelector(".open-button")
const clsBtn = document.querySelector(".close-button-msg")
const thanksMsg = document.querySelector(".thanks-container")
const backdrop = document.querySelector(".backdrop")

const openThanks= () => {
    thanksMsg.classList.add("is-open");
    document.body.classList.add("no-scroll","thx-no-scroll");
    backdrop.classList.remove("is-hidden");
}

const closeThanks= () => {
    thanksMsg.classList.remove("is-open");
    document.body.classList.remove("no-scroll","thx-no-scroll");
    backdrop.classList.add("is-hidden")
}

btnOpn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

btnOpn.addEventListener("click", openThanks);
clsBtn.addEventListener("click", closeThanks);
})();