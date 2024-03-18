// © 2024 - BestDeveloper - BestMat - All rights reserved.
const devbase_name = document.querySelector(".devbase-name");
const devbase_description = document.querySelector(".devbase-description");
const devbase_api = document.querySelector(".devbase-api");
const devbase_generate = document.querySelector(".devbase-generate");
const devbase_create = document.querySelector(".devbase-create");

devbase_generate.addEventListener("click", function(){
    var api_key = generateAPI();
    devbase_api.value = api_key;
});
function generateAPI(){
    return `DEVBASE_${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}@`;
}