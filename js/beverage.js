// 메뉴탭 소메뉴 나타내기
// tab 키로 포커스 이동했을 때, 소메뉴 탭이 나오지 않는다.
function navMouseOver() {
  const menu = document.querySelector('.js_hoverMenu');
  const menuSub = document.getElementsByClassName('list_nav_sub');
  menu.addEventListener('mouseover', () => {
    menuSub[0].style.display = 'block';
  })
}
navMouseOver();

function navMouseOut() {
  const menu = document.querySelector('.js_hoverMenu');
  const menuSub = document.getElementsByClassName('list_nav_sub');
  menu.addEventListener('mouseout', () => {
    menuSub[0].style.display = 'none';
  })
}
navMouseOut();

function hideGroup() {
  const btn = document.querySelector('.btn_pop');
  btn.addEventListener('click', () => {
    btn.classList.toggle('on');
  })
}
hideGroup();

function changeTheme() {
  const btn = document.getElementsByClassName('btn_group');
  console.log(btn);
  const theme = document.getElementsByClassName('artic_category');
  console.log(theme);
  const three = document.querySelector('#btn_cate');
  console.log(three);
  const four = document.querySelectorAll('.btn_group');
  console.log(four);
  const five = document.querySelectorAll('.list_group input[checked]');
  console.log(five);
  const six = document.querySelectorAll('input[name="group"]');
  console.log(six);

  three.addEventListener('change', () => {
    theme[0].classList.toggle('on');
  })
}
changeTheme();

// function coffee() {
//   const check = document.querySelector('.btn_coldbrew');
//   console.log(check);
//   const coldBrew = document.querySelector('.artic_coldbrew');
//   console.log(coldBrew);
//   check.addEventListener('change', () => {
//     coldBrew.classList.toggle('on');
//   })
// }
// coffee();