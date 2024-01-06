import {uploadPhoto, createUser} from "./utils";

export default function handleProfileSignup(){
    return new Promise(function(resolver, reject){
        const upload = uploadPhoto();
        const user = createUser();
        if(upload.Promise.resolver && user.Promise.resolver){
            resolver({
                "status":200,
                "body":"sucess",
            });
        }
        else{
            reject(Error("Signup system offline"));
        }
    });
}