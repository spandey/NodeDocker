// A Mathematics tutoring web application for kids has a button that highlights all even numbers (in span), 
// using 'yellow' as the background color. Clicking the button again removes the background.
//  All further clicks add or remove the 'yellow' background alternately.

// Currently, the button doesn't work as expected. For the given HTML markup and JavaScript function, 
// select all options that will identify and fix the bugs in the JavaScript function:

<div id='numbers'>
 <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
 <button id='btn' onclick='toggleEvenColor()'>Toggle even number highlighting</button>
</div>
function toggleEvenColor() {
  let spanElements = document.querySelectorAll('#numbers span');
   spanElements.forEach(function() {
    item.style.backgroundColor = 'transparent';
  });
 }

//  (Select all acceptable answers.)



// At line number 2, use let spanElements = document.querySelector('#numbers span:nth-child(2n)');


// At line number 2, use let spanElements = document.querySelectorAll('#numbers span:nth-child(2n)'); ---- YES


// At line number 2, use let spanElements = document.getElementsByTagName('span');


// At line number 3, define item as a parameter for the anonymous function passed in forEach. ---- YES


// At line number 3, define event as a parameter for the anonymous function passed in forEach.


// At line number 4, use item.style.background = 'yellow';


// At line number 4, use item.style.backgroundColor = item.val() / 2 === 0 ? 'yellow' : 'transparent';


// At line number 4, use item.style.backgroundColor = item.style.backgroundColor !== 'yellow' ? 'yellow' : 'transparent'; ---- YES