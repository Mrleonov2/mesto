class UserInfo {
  constructor({ profileName, profileJob, profileAvatar }) {
    this._name = profileName;
    this._job = profileJob;
    this._avatar = profileAvatar;
  }
  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return userData;
  }
  setUserInfo(name, about, avatar) {
    this._name.textContent = name;
    this._job.textContent = about;
    this._avatar.src = avatar;
  }
}
export { UserInfo };
