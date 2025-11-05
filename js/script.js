document.querySelector('#btn1').
    addEventListener('click', function() {
    const output1 = document.querySelector('#output1');
    const paragraph = output1.querySelector('p');
    paragraph.style.color = 'red';
});

document.querySelector('#btn2')
    .addEventListener('click', function() {
    const output2 = document.querySelector('#output2');
    const paragraph = output2.querySelector('p');
  
    const span = document.createElement('span');
    span.textContent = 'Hello world';
    
    paragraph.parentNode.insertBefore(span, paragraph.nextSibling);
});

document.querySelector('#btn3')
    .addEventListener('click', function() {
    const output3 = document.querySelector('#output3');
    const paragraph = output3.querySelector('p');
    paragraph.classList.remove('small-text');
});

document.querySelector('#btn4')
    .addEventListener('click', function() {
    const output4 = document.querySelector('#output4');
    const paragraphs = output4.querySelectorAll('p');
  
    paragraphs.forEach(function(paragraph) {
    paragraph.style.color = 'red';
  });
});

document.querySelector('#btn5').addEventListener('click', function() {
    const messageInput = document.querySelector('#message');
    const inputValue = messageInput.value;
    console.log(inputValue);
});
