let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
    postToApi();
  }
};

var obj = {
  "expenseAmount" : input,
  "Description" : input2
}

function postToApi(obj){

axios.post("https://crudcrud.com/api/1e869b3129d5486e8cf350f8d7977f9f/expense", obj)
.then( (msg) => {
  console.log(msg.data);
})
.catch( (err) => {
  console.error(err);
})
}

let data = {};

let acceptData = () => {
  data["text"] = "Amount:"+"  "+ input.value + " Decription: "   +input1.value + "  Categorie: "+" "+ input2.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
