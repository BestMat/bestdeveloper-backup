// ©2024 - BestDeveloepr - BestMat - All rights reserved
console.log('%c This application is made with BestDeveloper. ', 'background: navy; color: orange');

class DevBase {
    constructor(email, api_key){
        this.email = email;
        this.api_key = api_key;
    }

    createDevBase (name){
        name = String(name);
        fetch(`http://localhost:3001/createDevBase?email=${this.email}&api_key=${this.api_key}&devbase_name=${name}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify({})
            })
            .then((response) => response.json())
            .then((data) => console.log("Success:", data))
            .catch((error) => console.error("Error:", error));

        return {
            status: "SUCCESS",
            devbase_info: {
                email: this.email,
                api_key: this.api_key,
                devbase_name: name
            },
            callback: function(){
                console.log("No callback provided in DevBase.")
            }
        };
    }

    version() {
        return "DevBase v1";
    }
}

export { DevBase };