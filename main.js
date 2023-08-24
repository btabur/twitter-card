const editableInput = document.querySelector('.editable');
const placeHolder = document.querySelector('.placeholder');
const counter = document.querySelector('.counter');
const tweetButton = document.querySelector('.button');
const readOnly = document.querySelector('.read-only')

editableInput.onfocus=()=> {
    placeHolder.style.color='#c5ccd3';
}
editableInput.onblur=()=> { //onfocus dan çıkıldığında çalışır
    placeHolder.style.color='#98A5B1';
}

/* editableInput.addEventListener('blur',()=>{
    placeHolder.style.color='#98A5B1';
}) */ 

editableInput.onkeypress=(e)=> {
    placeHolder.style.display='none';
    validateTweet(e.target)
}

editableInput.onkeyup=(e)=> {
    validateTweet(e.target)

}

const validateTweet=(element)=>{

    let tweetLength = element.innerText.length;
    let limit = 50;
    let text;

    if(tweetLength<=0) {
        placeHolder.style.display='block';
        counter.style.display= 'none'
        tweetButton.classList.remove('active');

    }else {
        placeHolder.style.display='none';
        counter.style.display='block'
        tweetButton.classList.add('active');
    }

    counter.innerText = limit - tweetLength;


    if(tweetLength>limit) {
        let overTweet = element.innerText.substr(limit);
        overTweet = `<span class="over-span">${overTweet}</span>`;
        text = element.innerText.substr(0,limit) + overTweet;
        readOnly.style.zIndex = '1';
        counter.style.color= 'red';
        tweetButton.classList.remove('active')
    }else {
        counter.style.color= '#333';
    }

    readOnly.innerHTML = text;
}