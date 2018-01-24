const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let bodyEvent = document.querySelector('body');

  bodyEvent.addEventListener('keydown', function(e){
    let index = 0;

    console.log(e.which);

    if (parseInt(e.which || e.detail) === code[index]) {
      index++;
      if (index === code.length) {
        alert('Good for you!!')

        index = 0;
      } else {
        index = 0;
      }
    }
  })

}

