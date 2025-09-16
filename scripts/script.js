let profile = document.querySelector(".profile");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let profileInfo = document.querySelector(".popup__form");
let profileButttonEdit = document.querySelector(".profile__button");
let nameInput = document.querySelector(".popup__input-name");
let aboutInput = document.querySelector(".popup__input-about");
let popup = document.querySelector(".popup");
let popupOverlay = document.querySelector(".popup-overlay");
let addInfo = document.querySelector(".popup__input");
let popupCloseButton = document.querySelector(".popup__close");
let popupSaveButton = document.querySelector(".popup__save");
let postButtons = document.querySelectorAll(".post__button");
let postButtonsHeart = document.querySelector(".post__button-heart");

//funcion para cmabiar los valores de mi perfil
function editProfile(event) {
  event.preventDefault();
  if (nameInput.value != "" && aboutInput.value != "") {
    profileName.textContent = nameInput.value;
    profileDescription.textContent = aboutInput.value;
  } else {
    alert("datos incorrectos");
  }
}
profileInfo.addEventListener("submit", editProfile);

//funcion para abrir popup
function openPopup() {
  popupOverlay.classList.add("popup-open");
}
profileButttonEdit.addEventListener("click", openPopup);

//funcion para cerrar popup
function closePopup() {
  popupOverlay.classList.remove("popup-open");
}
popupCloseButton.addEventListener("click", closePopup);

//funcion para mi boton save
function checkInputs() {
  if (nameInput.value === "" && aboutInput.value === "") {
    popupSaveButton.classList.add("popup__save_desabled");
    popupSaveButton.classList.remove("popup__save_active");
  } else {
    popupSaveButton.classList.remove("popup__save_desabled");
    popupSaveButton.classList.add("popup__save_active");
  }
}

nameInput.addEventListener("input", checkInputs);
aboutInput.addEventListener("input", checkInputs);

//funcion para boton de like
postButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("post__button_active");
  });
});
