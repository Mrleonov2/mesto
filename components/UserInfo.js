import { inputName, inputJob} from "../utils/constants.js";
class UserInfo{
  constructor({profileName,profileJob}){
this._userName = profileName;
this._userJob = profileJob;
  }
  getUserInfo(){
    const userInfo = {
      userName:this._userName.textContent,
      userJob:this._userJob.textContent
    }
    return userInfo

  }
  setUserInfo(){
    this._userName.textContent = inputName.value;
    this._userJob.textContent = inputJob.value;
  }
}
export {UserInfo}