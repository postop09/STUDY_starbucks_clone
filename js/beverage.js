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

function changeGroup() {
  const cate = document.getElementsByClassName('artic_category');
  const btn = document.querySelector('#btn_cate');
  const theme = document.getElementsByClassName('artic_theme');
  const btnTwo = document.querySelector('#btn_theme');

  btn.addEventListener('change', () => {
    cate[0].classList.toggle('on');
  })
  btn.addEventListener('change', () => {
    theme[0].classList.toggle('on');
  })
  btnTwo.addEventListener('change', () => {
    cate[0].classList.toggle('on');
  })
  btnTwo.addEventListener('change', () => {
    theme[0].classList.toggle('on');
  })
}
changeGroup();

function coffee() {
  const check = document.querySelector('.btn_coldbrew');
  console.log(check);
  const coldBrew = document.querySelector('.artic_coldbrew');
  console.log(coldBrew);
  check.addEventListener('change', () => {
    coldBrew.classList.toggle('on');
  })
}
coffee();

