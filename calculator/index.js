let dis = document.getElementById('display');

let btn = Array.from(document.getElementsByClassName('button'));

btn.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                dis.innerText = '';
                break;
            case '=':
                try{
                    dis.innerText = eval(dis.innerText);
                } catch {
                    dis.innerText = "Error"
                }
                break;
            case '←':
                if (dis.innerText){
                   dis.innerText = dis.innerText.slice(0, -1);
                }
                break;
            default:
                dis.innerText += e.target.innerText;
        }
    });
});