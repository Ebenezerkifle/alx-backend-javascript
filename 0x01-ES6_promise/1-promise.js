export default function getFullResponseFromAPI(sucess){
    return new Promise(
        function(resolved, reject){
            if(sucess){
                resolved(
                    {
                        "status":200,
                        "body":"sucess"
                    }
                )
            }
            else{
                reject(Error("The fake Api is not working currently"));
            }
        }
    );
}