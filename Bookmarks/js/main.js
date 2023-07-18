var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var visitBtn = document.getElementById("visitBtn");
var popUp = document.getElementById("popUp");
var bookmarksBody = document.getElementById("bookmarksBody");
var bookmarks=[];

try{
  bookmarks = JSON.parse(localStorage.getItem('bookmarksList'));
  displayBookmarks()
}catch{
  bookmarks=[]
}
  

function checkWebsiteName(){

  if (siteName.value.length > 2) {
      siteName.classList.add("is-valid")
      siteName.classList.remove("idle-input")
      siteName.classList.remove("is-invalid")
    } else {
      siteName.classList.add("is-invalid")
      siteName.classList.remove("idle-input")
      siteName.classList.remove("is-valid")
    }
}


function checkWebsiteURL(){
  var websiteURL = siteURL.value;
  var dotIndex = websiteURL.lastIndexOf(".");
  
  if (dotIndex > 0 && websiteURL.length - dotIndex > 2 
      && websiteURL[dotIndex-1] != "w"){
    siteURL.classList.add("is-valid")
    siteURL.classList.remove("idle-input")
    siteURL.classList.remove("is-invalid")
  }
  else{
    siteURL.classList.add("is-invalid")
    siteURL.classList.remove("idle-input")
    siteURL.classList.remove("is-valid")
  }
}


function initAddBookmark(){
  addBookmark()
  displayBookmarks();
  setLocalStorage();
  idleInput()
}


function addBookmark(){
  var websiteName= siteName.classList.contains("is-valid")?siteName.value:false;
  var websiteURL= siteURL.classList.contains("is-valid")?siteURL.value:false;

  var bookMark={
    "websiteName":websiteName,
    "websiteURL":websiteURL
  }

  if (websiteName && websiteURL){
    bookmarks.push(bookMark);
    siteName.value="";
    siteURL.value="";
  }else{
    popUp.showModal();
  }

}


function displayBookmarks(){
  bookmarksTable=""
  for(var bookmark=1 ; bookmark<=bookmarks.length ;bookmark++ ){
    bookmarksTable+=`
    <tr class="">
      <td scope="row">${bookmark}</td>
      <td>${bookmarks[bookmark-1].websiteName}</td>
      <td><button class="btn visit-btn" id="visitBtn" onclick="redirect(this)" data-url="${bookmarks[bookmark-1].websiteURL}"  data-index="1"><i class="fa-solid fa-eye me-2"></i>Visit</button></td>
    <td><button class="btn btn-danger" id="deleteBtn" onclick="initDeleteRow(this)" data-index="${bookmark}"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
    </tr>
    `
  }
  bookmarksBody.innerHTML = bookmarksTable;
}


function redirect(button){
  
  var url = button.getAttribute("data-url");
  window.open(url, '_blank');

}


function deleteRow(button){
  var index = button.getAttribute("data-index");
  bookmarks.splice(index - 1 , 1)
  displayBookmarks()
}


function initDeleteRow(button){
  deleteRow(button);
  displayBookmarks();
  setLocalStorage()
}


function setLocalStorage(){
  localStorage.setItem('bookmarksList' , JSON.stringify(bookmarks));
}


function idleInput(){
  siteName.classList.add("idle-input");
  siteName.classList.remove("is-valid");
  siteName.classList.remove("is-invalid");
  
  siteURL.classList.add("idle-input");
  siteURL.classList.remove("is-valid");
  siteURL.classList.remove("is-invalid");
}


function closePopUp(){
  popUp.close();
}