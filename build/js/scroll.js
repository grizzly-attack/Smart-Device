  'use strict';

 (function () {
  var button = document.querySelector(".main-info__scroll");
  var advantagesBlock = document.querySelector("#advantages");

  function handleButtonClick() {
    advantagesBlock.scrollIntoView({behavior: "smooth"});
 }

 button.addEventListener('click', handleButtonClick);
})();
