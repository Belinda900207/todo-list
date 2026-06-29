

// ====================
// 取得 HTML 元素
// ====================

// 首頁 section
const homePage =
document.querySelector(
  "#homePage"
);

// 任務頁 section
const taskPage =
document.querySelector(
  "#taskPage"
);

// 返回首頁按鈕
const backHomeBtn =
document.querySelector(
  "#backHomeBtn"
);

// 所有本卡片
const notebookCards =
document.querySelectorAll(
  ".notebook-card"
);

// 日期按鈕
const datePickerBtn =
document.querySelector(
  "#datePickerBtn"
);


// ====================
// 點本卡片
// ====================

// querySelectorAll 會回傳很多元素
// 所以用 forEach 一個一個處理

notebookCards.forEach(

  function(card){

    // 幫每張卡片加事件

    card.addEventListener(

      "click",

      function(){

        // ====================
        // 隱藏首頁
        // ====================

        homePage.classList.add(
          "hidden"
        );

        // 執行後

        // 原本
        // <section id="homePage">

        // 變成
        // <section id="homePage" class="hidden">


        // ====================
        // 顯示任務頁
        // ====================

        taskPage.classList.remove(
          "hidden"
        );

        // 原本
        // <section id="taskPage" class="hidden">

        // 變成
        // <section id="taskPage">

      }

    );

  }

);


// ====================
// 返回首頁
// ====================

backHomeBtn.addEventListener(

  "click",

  function(){

    // ====================
    // 顯示首頁
    // ====================

    homePage.classList.remove(
      "hidden"
    );

    // ====================
    // 隱藏任務頁
    // ====================

    taskPage.classList.add(
      "hidden"
    );

  }

);


// ====================
// 日期按鈕
// ====================

datePickerBtn.addEventListener(

  "click",

  function(){

    // 目前先測試

    alert(
      "未來這裡會開啟日期選擇器"
    );

  }

);