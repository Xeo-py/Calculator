let ver1='', op='', ver2='';
let opEntered=false;
function add(a,b){return a+b};
function sub(a,b){return a-b};
function mul(a,b){return a*b};
function div(a,b){return a/b};
function operate(ver1,op,ver2){
    if(op==='+'){
        return add(ver1, ver2);
    }
    else if(op==='-'){
        return sub(ver1, ver2);
    }
    else if(op==='x'){
        return mul(ver1,ver2);
    }
    else if(op==='/'){
        return div(ver1,ver2);
    }
    else{
        return 'Error';
    }
}
const display = document.querySelector('.disp p');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === '=' ) {
            try {
                ver1 = parseFloat(ver1);
                ver2 = parseFloat(ver2);
                const result = operate(ver1, op, ver2);
                display.textContent = result;
                ver1 = result;
                ver2 = '';
                op = '';
                opEntered = false;
            } catch {
                display.textContent = 'Error';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            op = value;
            opEntered = true;
            display.textContent += value;
        }
        else if (value === 'CLEAR') {
            ver1 = '';
            ver2 = '';
            op = '';
            opEntered = false;
            display.textContent = '';
        }
        else if (value === 'BACK') {
            if (opEntered) {
                ver2 = ver2.slice(0, -1);
            } else {
                ver1 = ver1.toString().slice(0, -1);
            }
                display.textContent = display.textContent.slice(0, -1);
        }
        else {
            if (opEntered) {
                ver2 += value;
            } else {
                ver1 += value;
            }
            display.textContent += value;
        }
    });
});