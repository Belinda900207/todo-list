

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
// V2: 新增任務所需元素與資料
// ====================
// V2: 取得新增任務相關元素
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

// V2: tasks 陣列（暫存於記憶體）
const tasks = [];

// V2: 新增任務函式
function addTask() {
  // V2: 取得並修剪輸入值
  const title = taskInput.value.trim();

  // V2: 空字串不可新增
  if (title === '') {
    return;
  }

  // V2: 建立任務物件
  const task = { title: title, completed: false };

  // V2: 加入陣列
  tasks.push(task);

  // V2: 清空並回焦
  taskInput.value = '';
  taskInput.focus();

  // V2: 重新渲染畫面
  renderTasks();
}

// V3: 切換任務完成狀態
function toggleTask(index) {
  if (!tasks[index]) {
    return;
  }

  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// V2/V3: renderTasks - 依照 tasks 陣列渲染畫面
function renderTasks() {
  // V2: 先清空列表
  taskList.innerHTML = '';

  // V2/V3: 逐一建立 li.task-item、checkbox 與 span
  tasks.forEach(function (t, index) {
    const li = document.createElement('li');
    li.className = 'task-item'; // V2 要求的 class

    if (t.completed) {
      li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check-btn';
    checkbox.checked = t.completed;

    checkbox.addEventListener('change', function (e) {
      e.stopPropagation();
      toggleTask(index);
    });

    const span = document.createElement('span');
    span.textContent = t.title;

    li.appendChild(checkbox);
    li.appendChild(span);

    li.addEventListener('click', function (e) {
      if (e.target === checkbox) {
        return;
      }

      toggleTask(index);
    });

    taskList.appendChild(li);
  });
}

// V2: 綁定事件 - 點擊按鈕與 Enter 鍵新增
if (addTaskBtn) {
  addTaskBtn.addEventListener('click', function () {
    addTask();
  });
}

if (taskInput) {
  taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
}


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