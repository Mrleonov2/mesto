class Api {
  constructor(baseUrl,headers) {
    this._baseUrl = baseUrl;
    this._tocken = headers.authorization;
  }
  getUserData(){
    return fetch(`${this._baseUrl}/me`, {
      headers: {
        authorization: "ded2d1e6-c328-4460-ae09-846e4621c709",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: "ded2d1e6-c328-4460-ae09-846e4621c709",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  // другие методы работы с API
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
  headers: {
    authorization: "ded2d1e6-c328-4460-ae09-846e4621c709",
    "Content-Type": "application/json",
  },
});
