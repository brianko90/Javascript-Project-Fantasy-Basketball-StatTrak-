export class Button {
  
  // addEventButton(){
  //   const sidebar = document.getElementById('mySidebar');
  //   if(sidebar.classList.contains("open")) {
  //     this.closeSidebar();
  //     sidebar.classList.toggle("open")
  //   } else {
  //     this.openSidebar();
  //   }
  // }
  
  openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}