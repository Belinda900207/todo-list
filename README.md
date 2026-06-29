# Notebook Todo

Notebook Todo 是一個以「筆記本」為概念設計的 Todo List 網頁專案。
目前作為前端學習作品，透過版本迭代逐步練習 HTML、CSS、JavaScript、DOM 操作、事件處理、資料管理與 RWD 版面設計。

---

## 目前版本：V2

### V1：首頁與任務頁切版

已完成：

* 首頁顯示 Notebook 清單
* 點擊 Notebook Card 進入任務頁
* 任務頁可以返回首頁
* 完成基本頁面切換
* 建立基礎 RWD 版面

### V2：新增任務功能

已完成：

* 使用者可以輸入新的待辦事項
* 點擊「＋ 新增任務」可以新增任務
* 按下 Enter 也可以新增任務
* 空白內容不會被新增
* 新增後輸入框會自動清空並重新 focus
* 任務會即時渲染到畫面上

目前 V2 僅支援新增任務，尚未支援完成任務、刪除任務、日期切換與 localStorage 資料儲存。

---

## 使用技術

* HTML
* CSS
* JavaScript
* DOM
* Git / GitHub

---

## 技術實作重點

* 使用 HTML 建立首頁與任務頁結構
* 使用 CSS 完成基本版面、卡片設計與 RWD
* 使用 JavaScript 控制首頁與任務頁切換
* 使用 DOM API 取得元素並動態渲染任務
* 使用事件監聽處理點擊與 Enter 新增任務
* 使用陣列暫存任務資料
* 使用 Git branch / commit / merge / push 管理版本

---

## 專案結構

```txt
notebook-todo/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 版本規劃

* V1：首頁與任務頁切版
* V2：新增任務功能
* V3：完成任務功能
* V4：刪除任務功能
* V5：日期切換
* V6：localStorage 資料儲存
* V7：RWD 精修
* V8：作品集級 UI polish 與部署
