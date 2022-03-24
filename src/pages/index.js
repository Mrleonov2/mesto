import { api } from "../components/Api.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import {
  config,
  cardTemplate,
  cardsContainer,
  formEdit,
  formAddCard,
  inputLink,
  inputPlace,
  formAddSubmit,
  popupImage,
  popupAdd,
  popupEdit,
  popupEditOpenBtn,
  popupAddOpenBtn,
  inputName,
  inputJob,
  nameElement,
  jobElement,
  avatarElement,
  PopupEditAvatarBtn,
  popupAvatar,
  inputAvatar,
  deletePopup,
} from "../utils/constants.js";


import "./index.css";

let userId

api.getInitialCards().then((cards) => {
  cards.forEach((res)=>{createCard({
    name: res.name,
    link: res.link,
    likes: res.likes,
    id: res._id,     
    owner: res.owner._id
    
  })})
});

console.log(userId)
api.getProfile().then((res) => {
  profileInfo.setUserInfo(res.name, res.about, res.avatar);
  userId = res._id;
});
const profileInfo = new UserInfo({
  profileName: nameElement,
  profileJob: jobElement,
  profileAvatar: avatarElement,
});
popupAddOpenBtn.addEventListener("click", () => {
  validAdd.resetValidatiton();
  formCardPopup.open();
});
popupEditOpenBtn.addEventListener("click", () => {
  validEdit.resetValidatiton();
  formUserPopup.open();
  const { name, job } = profileInfo.getUserInfo();
  inputName.value = name;
  inputJob.value = job;
});

const createCard = (data) => {
  const newCard = new Card(
    data,
    (evt) => {
      imagePopup.open(evt);
    },
    (id) => {
      
      confirmDeletePopup.open();
      confirmDeletePopup.changeSubmitHandler(() => {
        api.deleteCard(id).then((res) => {
          newCard.removeCard();
          confirmDeletePopup.close();
        });
      });
    },
    (id)=>{ if(newCard.isLiked()) {
      api.deleteLike(id)
      .then(res => {
        newCard.setLikes(res.likes)
      })
    } else {
      api.addLike(id)
      .then(res => {
        newCard.setLikes(res.likes)
      })
    }}
    ,

    cardTemplate
  );
  const cardElement = newCard.generateCard();
  cardsList.addItem(cardElement);
};

const cardsList = new Section(
  {
    renderer: (data) => {
      createCard(data);
    },
  },
  cardsContainer
);

const formCardPopup = new PopupWithForm({
  popup: popupAdd,
  handleFormSubmit: (formData) => {
    api.addCard(formData.name, formData.link).then((res) => {
      createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        owner: res.owner._id,
        userId:userId
      });
    });
    formAddSubmit.classList.add("popup__submit_disabled");
    formAddSubmit.disabled = true;
    formCardPopup.close();
  },
});
const formUserPopup = new PopupWithForm({
  popup: popupEdit,
  handleFormSubmit: () => {
    api.editProfile(inputName.value, inputJob.value).then(() => {
      profileInfo.setUserInfo(
        inputName.value,
        inputJob.value,
        avatarElement.src
      );
      formUserPopup.close();
    });
  },
});
const imagePopup = new PopupWithImage(popupImage);



const editAvatarPopup = new PopupWithForm({
  popup: popupAvatar,
  handleFormSubmit: () => {
    api.updateAvatar(inputAvatar.value).then(() => {
      profileInfo.setUserInfo(
        nameElement.textContent,
        jobElement.textContent,
        inputAvatar.value
      );
      editAvatarPopup.close();
    });
  },
});

const confirmDeletePopup = new PopupWithForm({
  popup: deletePopup,
  handleFormSubmit: () => {
    api.deleteCard(id);
  },
});

PopupEditAvatarBtn.addEventListener("click", () => {
  validAvatar.resetValidatiton();
  editAvatarPopup.open();
});
editAvatarPopup.setEventListeners();
formCardPopup.setEventListeners();
formUserPopup.setEventListeners();
imagePopup.setEventListeners();
confirmDeletePopup.setEventListeners();
const validEdit = new FormValidator(config, ".popup__form_type_edit");
const validAvatar = new FormValidator(config, ".popup__form_type_avatar");
const validAdd = new FormValidator(config, ".popup__form_type_new-card");
validEdit.enableValidation();
validAvatar.enableValidation();

validAdd.enableValidation();
export { popupImage };
