import { inputName, inputJob} from "../utils/constants.js";
class UserInfo{
  constructor({profileName,profileJob}){
this._name = profileName;
this._job = profileJob;
  }
  getUserInfo(){
    const userData = {
      Name:this._name.textContent,
      Job:this._job.textContent
    }
    return userData

  }
  setUserInfo(){
    this._name.textContent = inputName.value;
    this._job.textContent = inputJob.value;
  }
}
export {UserInfo}