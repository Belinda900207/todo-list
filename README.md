# Notebook Todo

Notebook Todo 是一個以「筆記本」為概念設計的 Todo List 網頁專案。

這個專案目前作為我的前端學習作品，目標是透過版本迭代，逐步練習 HTML、CSS、JavaScript、DOM 操作、事件處理、資料結構、LocalStorage，以及後續的前端架構與網頁安全概念。

---

## 目前版本 : V1

### V1：首頁與任務頁切版

目前完成的功能：

- 首頁顯示 Notebook 清單
- 點擊 Notebook Card 後進入任務頁
- 任務頁可以返回首頁
- 完成基本頁面切換
- 建立 HTML / CSS / JavaScript 三個檔案結構
- 完成基礎 RWD 版面調整

---

## 使用技術

- HTML
- CSS
- JavaScript
- DOM
- Git / GitHub

---

## 專案結構

```txt
notebook-todo/
│
├── index.html
├── style.css
├── scripts.js
└── README.md

## Version 2：新增任務功能

### 版本目標

V2 的目標是完成 Todo App 的「新增任務」功能，讓使用者可以在任務頁輸入新的待辦事項，並即時顯示在畫面上。

本版本專注於 JavaScript DOM 操作、事件監聽、陣列資料管理與畫面重新渲染，不包含完成任務、刪除任務、日期切換或 localStorage 儲存功能。

---

### 新增功能

* 新增任務輸入框 `#taskInput`
* 新增任務按鈕 `#addTaskBtn`
* 新增任務列表容器 `#taskList`
* 使用者可以輸入任務文字
* 點擊「＋ 新增任務」可以新增任務
* 按下 Enter 也可以新增任務
* 空白內容不會被新增
* 新增後輸入框會自動清空
* 新增後游標會重新 focus 回輸入框
* 新增的任務會顯示為 `li.task-item`
* 每個任務文字會放在 `span` 元素中

---

### 技術重點

本版本使用 JavaScript 完成以下操作：

* 使用 `document.querySelector()` 取得 HTML 元素
* 使用 `addEventListener()` 綁定事件
* 使用 `click` 事件處理按鈕新增
* 使用 `keydown` 事件處理 Enter 新增
* 使用 `event.key === "Enter"` 判斷使用者是否按下 Enter
* 使用 `input.value` 取得輸入框內容
* 使用 `trim()` 移除前後空白
* 使用陣列 `tasks` 暫存任務資料
* 使用物件 `{ title, completed: false }` 表示單一任務
* 使用 `tasks.push()` 將任務加入陣列
* 使用 `renderTasks()` 重新渲染任務列表
* 使用 `document.createElement()` 動態建立 HTML 元素
* 使用 `appendChild()` 將元素加入畫面
* 使用 `textContent` 顯示任務文字

---

### 任務資料結構

V2 中，每一個任務會被建立成一個物件：

```javascript
{
  title: "JavaScript",
  completed: false
}
```

目前 `completed` 屬性先保留給 V3 使用。
V2 只負責新增任務，不處理完成狀態。

---

### 版本限制

V2 尚未包含以下功能：

* 尚未支援完成任務
* 尚未支援刪除任務
* 尚未支援日期切換
* 尚未支援 localStorage 儲存
* 重新整理頁面後，新增的任務會消失

這些功能會在後續版本逐步加入。

---

### Git 版本紀錄

* Branch：`v2-add-task`
* Commit：`notebook todo v2`
* Main branch 已合併 V2
* GitHub `origin/main` 已更新至 V2

---

### V2 完成狀態

* [x] 建立新增任務輸入框
* [x] 建立新增任務按鈕
* [x] 建立任務列表容器
* [x] 點擊按鈕可以新增任務
* [x] 按 Enter 可以新增任務
* [x] 空白內容不會新增
* [x] 新增後清空輸入框
* [x] 新增後 focus 回輸入框
* [x] 任務會顯示在畫面上
* [x] V2 已 commit
* [x] V2 已 merge 回 main
* [x] V2 已 push 到 GitHub
