const sidebar = document.querySelector(".sidebar");
const breakpointLg = 976;

function toggle() {
    // console.log("hello")
  const w = window.innerWidth;
  if (w < breakpointLg) {
    showModal();
  }
  else {
    if(sidebar.classList.contains("hidden") ) {
      sidebar.classList.remove("hidden");
    }
    else {
      sidebar.classList.add("hidden");
    }
  }
}
function showModal() {
    document
      .querySelector(".overlaycontainer")
      .classList.replace(`opacity-0`, `opacity-1`);
    document
      .querySelector(".overlaycontainer")
      .classList.replace(`-z-50`, `z-50`);
    document
      .querySelector(".overlaysignupform")
      .classList.replace("-top-[150%]", "top-[0%]");
      document.body.style.overflowY="hidden";
  }
  function closeModal(){
    document.querySelector('.overlaycontainer').classList.replace(`opacity-1`,`opacity-0`)
    document.querySelector('.overlaycontainer').classList.replace(`z-50`,`-z-50`)
    document.querySelector('.overlaysignupform').classList.replace('top-[0%]','-top-[150%]')
    document.body.style.overflowY="scroll";		
}
