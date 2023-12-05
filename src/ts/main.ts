import './../scss/style.scss'

function myFirstTypeScript() {
  if (confirm ("Are you sure?") === true) {
    alert("You pressed OK!");
  } else {
    alert("You canceled!");
  }
}
myFirstTypeScript();
