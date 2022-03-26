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
  popupEditAvatarBtn,
  popupAvatar,
  deletePopup,
} from "../utils/constants.js";
import "./index.css";

let userId;
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
    profileInfo.setUserInfo(userData.name, userData.about, userData.avatar);
    userId = userData._id;
    cardsList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
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
        api
          .deleteCard(id)
          .then(() => {
            newCard.removeCard();
            confirmDeletePopup.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    (id) => {
      if (newCard.isLiked()) {
        api
          .deleteLike(id)
          .then((res) => {
            newCard.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .addLike(id)
          .then((res) => {
            newCard.setLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    cardTemplate
  );
  const cardElement = newCard.generateCard();
  cardsList.addItem(cardElement);
};
const cardsList = new Section(
  {
    renderer: (data) => {
      createCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        ownerId: data.owner._id,
        userId: userId,
      });
    },
  },
  cardsContainer
);
const formCardPopup = new PopupWithForm({
  popup: popupAdd,
  handleFormSubmit: (formData) => {
    formCardPopup.renderLoading(true);
    api
      .addCard(formData.name, formData.link)
      .then((res) => {
        createCard({
          name: res.name,
          link: res.link,
          likes: res.likes,
          id: res._id,
          ownerId: res.owner._id,
          userId: userId,
        });

        formCardPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        formCardPopup.renderLoading(false, "Создать");
      });
  },
});
const formUserPopup = new PopupWithForm({
  popup: popupEdit,
  handleFormSubmit: (inputData) => {
    formUserPopup.renderLoading(true);
    api
      .editProfile(inputData.name, inputData.about)
      .then((res) => {
        profileInfo.setUserInfo(res.name, res.about, res.avatar);

        formUserPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        formUserPopup.renderLoading(false, "Сохранить");
      });
  },
});
const imagePopup = new PopupWithImage(popupImage);
const editAvatarPopup = new PopupWithForm({
  popup: popupAvatar,
  handleFormSubmit: (inputValue) => {
    editAvatarPopup.renderLoading(true);
    api
      .updateAvatar(inputValue.avatar)
      .then((res) => {
        profileInfo.setUserInfo(res.name, res.about, res.avatar);

        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editAvatarPopup.renderLoading(false, "Сохранить");
      });
  },
});

const confirmDeletePopup = new PopupWithForm({
  popup: deletePopup,
  handleFormSubmit: () => {},
});

popupEditAvatarBtn.addEventListener("click", () => {
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
