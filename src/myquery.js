(function () {

 var QueryWrapper = function (elems) {

   this.get = function(index) {
     return elems[index];
   };

   this.length = elems.length;

   this.each = function(func) {
     for(var i = 0; i < elems.length; i++) {
       func(elems[i], i);
     }
   };

   this.hide = function(){
    for(var i=0; i<elems.length; i++){
      elems[i].style.display= "none";
    }
   };

   this.show = function(){
    for(var i=0; i<elems.length; i++){
      elems[i].style.display= "block";
    }
    return this;
   };

   this.addClass = function(classN){
    for(var i=0; i<elems.length; i++) {
      newClass= elems[i].className += classN
    }
   };

    this.css = function(object, property) {

     if (typeof object == 'string' || object instanceof String) {
        for(var i=0; i<elems.length; i++) {
          elems[i].style[object] = property;
        }
      } else {
      for(var i = 0; i < elems.length; i++) {
       for (var prop in object) {
       elems[i].style[prop] = object[prop]
     }
      }

    };
  };

 };


 var myQuery = function (selector) {

     if (selector[0] == '#') {
     selector = selector.slice(1)
     elements = [document.getElementById(selector)]
   } else if (selector[0] == '.') {
     class_selector = selector.slice(1)
     elements = document.getElementsByClassName(class_selector)
   } else {
     elements = document.getElementsByTagName(selector)
   }
     return new QueryWrapper(elements)
 };


 window.$ = myQuery;
 myQuery.version ="beta"

  $.each = function(array,func) {
     for(var i = 0; i < array.length; i++) {
       func(array[i]);
     }
   }

})();
