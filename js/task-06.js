const input = document.querySelector("#validation-input");
const min = Number(input.getAttribute('data-length'))

input.addEventListener("blur", func);
function func(evt) {
    console.clear()
    input.classList.add('invalid')
    const num = evt.currentTarget.value.length
    console.log(`you entered ${num} elems`)
    if(num !== min)
    {console.log('error')
     input.classList.replace('valid','invalid')
    }
    else input.classList.replace('invalid','valid')
    

}
