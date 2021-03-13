const icon = document.querySelector('#icon');
const name1 = document.querySelector('#name');
const content = document.querySelector('#content');
const ol = document.querySelector('ol');
icon.addEventListener('click',
    (e) => {
        if (name1.value && content.value) {
            const todo = document.createElement('li');
            todo.innerText = name1.value + ':' + content.value;
            todo.innerHTML += '<i class="fa fa-trash delete" aria-hidden="true" id="trash"></i>';
            ol.appendChild(todo);
        }
        else {
            window.alert("Vous n'avez rien saisi");
        }
    }
)
document.querySelector('body').addEventListener('dblclick',
    (e) => 
    {
    if(e.target.classList.contains('delete'))
    {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
    }
)
