var body = {
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  },
  setColor:function (color){
    document.querySelector('body').style.color = color;
  }
}
function linksSetColor(color){
  var alist = document.querySelectorAll('a');
  var x = 0;
  while(x < alist.length){
    alist[x].style.color = color;
    x = x + 1
  }
}
function dark_mode(self){
  var target = document.querySelector('body');
  if(self.value ===  'dark'){
    body.setBackgroundColor('black');
    body.setColor('white')
    self.value = 'light';

    linksSetColor('white');
  } else {
    body.setBackgroundColor('white');
    body.setColor('black')
    self.value = 'dark';

    linksSetColor('black');
    }
}
