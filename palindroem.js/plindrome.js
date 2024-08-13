

const paragraph = document.querySelector('p');
const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click',() => {
    if (!input.value) alert('input is empty')
else{
    const inputVal = input.value.toLowerCase();
    const reversedVal = input.value.split('').reverse().join('').toLowerCase();
    if (reversedVal == inputVal) {
       paragraph.innerHTML = '<p><span></span> is a Plindrome</p>' 
    } 
    else{
        paragraph.innerHTML = '<p><span></span> is not a Plindrome</p>' 
    }
}
}) 
 
