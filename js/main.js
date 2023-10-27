function generateGradient() {
    //получим цвета и смещение
    let fColor = document.getElementById('fColor').value;
    let fOffset = document.getElementById('fOffset').value;

    let sColor = document.getElementById('sColor').value;
    let sOffset = document.getElementById('sOffset').value;

    //получим направление
    let dir = document.querySelector('input[name="orientation"]:checked').value;
   

    //чтобы не было градиента без перехода
    if (Number(fOffset) == Number(sOffset)) {
      sOffset = Number(sOffset) + 1;
    }

    //генерируем css код
    let str = `${dir}, ${fColor} ${fOffset}%, ${sColor} ${sOffset}%)`;

    if (Number(fOffset)>Number(sOffset)) {
      str = `${dir}, ${sColor} ${sOffset}%, ${fColor} ${fOffset}%)`;
    }

    //установим стиль и запишем в поле
    document.querySelector('body').style.background = str;

    let textarea = document.getElementById('cssCode');
    textarea.value = 'background: ' + str;
  }

  for (let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateGradient);
  }
  generateGradient();

  cssCode.onfocus = function() { 
    cssCode.selectionStart = 0;
    cssCode.selectionEnd = cssCode.value.length;
 }