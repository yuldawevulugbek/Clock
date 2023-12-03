// const array = [2, 23, 12, 32, 4, 8, 16, 18, 37];
// let arrSumm = array.reduce((prev, current) => prev + current);
// let arrMap = array.map((el) => el * 2);
// let arrFilter = array.filter((val) => val % 2 == 1);

const sek = document.querySelector(".s"),
  min = document.querySelector(".m"),
  hours = document.querySelector(".h"),
  hourNum = document.querySelector(".hours"),
  minNum = document.querySelector(".minutes");

//   new Date() - bu Global object kompyuterimizdagi vaqtni olib beradi
//   getSecond() - sekundni olib beradi
//   getMinutes()   - minutni olib beradi
//   getHours()   -soatni olib beradi

function clock() {
  let time = new Date(),
    second = time.getSeconds() * 6,
    minut = time.getMinutes() * 6,
    hour = time.getHours() * 30;
  sek.style = `transform:rotate(${second}deg)`;
  min.style = `transform:rotate(${minut}deg)`;
  hours.style = `transform:rotate(${hour}deg)`;
  setTimeout(() => {
    clock();
  }, 1000);

  hourNum.innerHTML =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  minNum.innerHTML =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
}
clock();


const tabsItem = document.querySelectorAll(".tabsItem"),
  tabs = document.querySelectorAll(".tabsContentItem");
for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener("click", () => {
    for (let k = 0; k < tabsItem.length; k++) {
      tabsItem[k].classList.remove("active");
      tabs[k].classList.remove("active");
    }
    tabsItem[i].classList.add("active");
    tabs[i].classList.add("active");
  });
}
