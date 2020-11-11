const button = document.querySelector("button");

button.addEventListener("click", function() {
  const values = document.querySelectorAll('input');

})

btn.onclick = function () {
           const rbs = document.querySelectorAll('input[name="choice"]');
           let selectedValue;
           for (const rb of rbs) {
               if (rb.checked) {
                   selectedValue = rb.value;
                   break;
               }
           }
           alert(selectedValue);
       };
