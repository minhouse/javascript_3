// タスクの連番を管理するための変数
let taskId = 0;
const tasks = [];

// createTaskItem関数はタスク項目の要素を作成
// 連番をインクリメントしながらタスクのテキストとボタンを含むHTMLを生成し作成した要素を返す
function createTaskItem(text) {
  taskId++;
  const task = {
    id: taskId,
    text: text,
    status: "作業中",
  };
  tasks.push(task);

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.id = `task_${task.id}`;

  const taskText = document.createElement("span");
  taskText.textContent = `${taskId} ${task.text}`; // 連番と入力したテキストを表示
  taskItem.appendChild(taskText);

  const statusButton = document.createElement("input");
  statusButton.type = "button";
  statusButton.value = "作業中";
  taskItem.appendChild(statusButton);

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "削除";
  taskItem.appendChild(deleteButton);

  return taskItem;
}

// タスク項目を追加する処理
function appendResult(item) {
  const resultHolder = document.getElementById("result");
  resultHolder.appendChild(item);
}

// タスクの追加処理
function addTask() {
  const inputTask = document.getElementById("input_task");
  const taskText = inputTask.value;
  inputTask.value = "";

  const taskItem = createTaskItem(taskText);
  appendResult(taskItem);
}

// 追加ボタンのクリックイベントをハンドリング
const addButton = document.getElementById("add_button");
addButton.addEventListener("click", addTask);
