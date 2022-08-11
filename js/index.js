const CLIENT_ID = 'vajbl979MnHEbTTVVTTo';
const CLIENT_SECRET = '7WxhFcv3w8';
const URL = 'https://openapi.naver.com/v1/papago/n2mt';
let query = "발표하여 회사의 총 가치가.";
let data = {form: {'source':'ko', 'target':'en', 'text':query}};
// let options = {
//     url: URL,
//     form: {'source':'ko', 'target':'en', 'text':query},
//     headers: {'X-Naver-Client-Id':CLIENT_ID, 'X-Naver-Client-Secret': CLIENT_SECRET}
// };

// fetch(URL, {
//     method: "POST",
//     headers: {
//         'X-Naver-Client-Id':CLIENT_ID,
//         'X-Naver-Client-Secret': CLIENT_SECRET,
//         'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     },
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     body: JSON.stringify(data),
// })
// .then(response => response.json(data))
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

const templates = {
    "startup_desc_1": {
        "en": "The companyIndustry company companyName announced a companyFunding companyStage, reaching a total valuation of companyInvestmentTotal. The company specializes in companyTechnology and plans to use the new funding to companyPlan",
        "kr": "companyIndustry 회사 companyName은(는) companyFunding companyStage를 발표하여 회사의 총 가치가 companyInvestmentTotal에 도달했습니다. 이 회사는 companyTechnology}를 전문으로 하며 companyPlan에 새 자금을 사용할 계획입니다."
    },
    "startup_desc_2": "companyName, a innovative company providing companyTechnology in the companyIndustry ndustry, rasied companyFunding in a companyStage. The company currently values at companyInvestmentTotal and plans to use the new funding to companyPlan",
    "guest_visit_1": "companyContactName, from companyName in contactCountry, visited the Born2Global Centre on eventDate. A meeting was held on revitalizing startup partnerships and create a startup ecosystem between the two countries.",
};

const selectTemplate = document.querySelector("#templates");
const textAreaEN = document.querySelector("#newsletter-en");
const textAreaKR = document.querySelector("#newsletter-kr");
const textArea = document.querySelector(".text-newsletter");

function addTemplate() {

    selectTemplate.addEventListener("change", () => {
        for (const [key, lang] of Object.entries(templates)) {
            if (selectTemplate.value === key) {
                selectTemplateValueKr = lang["kr"];
                selectTemplateValueEn = lang["en"];
                textAreaKR.textContent = selectTemplateValueKr;
                textAreaEN.textContent = selectTemplateValueEn;

                getTemplateInfo();

            }
        }
    });
}

const addInfoButton = document.querySelector("#add-info-button");
const inputValue = document.querySelectorAll('.input-box');
const valueObject = {};

function getTemplateInfo() {
    addInfoButton.addEventListener("click", () => {
        const inputList = [...inputValue].map(input => input.value);
        valueObject["companyName"] = inputList[0];
        valueObject["companyIndustry"] = inputList[1];
        valueObject["companyTechnology"] = inputList[2];
        valueObject["companyContactName"] = inputList[3];
        valueObject["companyInvestmentTotal"] = inputList[4];
        valueObject["companyFunding"] = inputList[5];
        valueObject["companyStage"] = inputList[6];
        valueObject["companyPlan"] = inputList[7];
        console.log(valueObject);

        replaceTemplateInfo();

        return valueObject;
    }); 
}


function replaceTemplateInfo() {

    let re = new RegExp(Object.keys(valueObject).join("|"),"gi");
    let text = textAreaEN.value;
    console.log(re)
    // console.log(textAreaEN.value);
    // let matches = regExp.exec(textAreaEN.value);
    // console.log(matches[0].replace(valueObject["companyIndustry"]));

    textAreaEN.textContent = text.replace(re, function(matched){
        // console.log(valueObject[matched]);
        return valueObject[matched];
    });

    
}

addTemplate();





// when creating new article/newsletter with [+], hide previous article 





