const Id = (id) => {
    return document.getElementById(id);
}

const textareaEle = Id("textarea");
const totalCounterEle = Id("total-counter");
const remainingCounterEle = Id("remaining-counter");

textareaEle.addEventListener("keyup" , ()=>{
    updateCounter()
})

function updateCounter(){
    totalCounterEle.innerText = textareaEle.value.length;
    remainingCounterEle.innerText = textareaEle.getAttribute("maxlength") - (textareaEle.value.length);
}