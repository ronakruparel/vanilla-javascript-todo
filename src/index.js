const addNewItem = () => {
   let ul = document.querySelector("ul");
   let text = document.getElementById("todotext");
   let span = document.createElement("span");
   if (!ul) {
      let ul = document.createElement("ul");
      document.body.appendChild(ul);
      if (!!text.value) {
         let list = document.createElement("li");
         ul.appendChild(list).append(text.value, span);
      }
   } else {
      if (text.value) {
         let list = document.createElement("li");
         ul.appendChild(list).append(text.value);
      }
   }
   text.value = "";
};
