import uploadPhoto from "./5-photo-reject";
import signUpUser from "./4-user-promise";

export default function handleProfileSignup(firstName, lastName, fileName){
    const user = {
        "status":"pending",
        "value":'',
    }
    const photo = {
        "status":"pending",
        "value":'',
    }
    try{
        const signup = signUpUser(firstName, lastName);
        user.status = "fulfilled";
        user.value = signup;
    }catch(e){
        user.status='rejected';
        user.value = e.toString();
    }

    try{
        const upload = uploadPhoto(fileName);
        photo.status="fulfilled";
        photo.value=upload;
    }catch(e){
        photo.status='rejected';
        photo.value = e.toString();
    }
    return [user, photo];
}