let bar = document.getElementById('bar')
let sideBar = document.getElementsByClassName('navBar')[0];
let close  = document.querySelector('#cross')
bar.addEventListener("click",()=>{
    sideBar.classList.add('active');
})
close.addEventListener("click",()=>{
    sideBar.classList.remove('active');
})
let proContainer = document.querySelector('.pro-container')
proContainer.addEventListener('click',(e)=>{

    const index = Array.from(e.target.parentElement.children).indexOf(e.target);
    console.log('Clicked on list item with index:', index);
})
function showProductDetails(name, price, image) {
    // Store product details in sessionStorage
    sessionStorage.setItem('productName', name);
    sessionStorage.setItem('productPrice', price);
    sessionStorage.setItem('productImage', image);
  
    // Redirect to proddetail.html
    window.location.href = 'proddetail.html';
  }
  
