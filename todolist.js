// タスクの連番を管理するための変数
let taskId = 0;

// createTaskItem関数はタスク項目の要素を作成
// 連番をインクリメントしながらタスクのテキストとボタンを含むHTMLを生成し作成した要素を返す
function createTaskItem(text) {
  taskId++;
  const taskItem = document.createElement("div");
  // task-itemクラスを持つ要素を作成。このクラスはCSSスタイルシートでタスク項目の見た目を制御
  taskItem.classList.add("task-item");
  // 文字列を使用してタスク項目のHTMLコンテンツを作成。${taskId} はタスクの連番、${text} は入力されたテキストを表示
  // <input>要素が2つあり、それぞれ "作業中" と "削除" のボタン
  // onclick属性はクリックされた時に指定された関数を呼び出す
  // return taskItemによって作成したタスク項目の要素を返す
  taskItem.innerHTML = `${taskId}. ${text}
    <input type="button" value="作業中" onclick="updateTaskStatus(this)">
    <input type="button" value="削除" onclick="deleteTask(this)">`;
  return taskItem;
}

// タスク項目をcontainResults変数に追加
function appendResult(item) {
  const containResults = document.getElementById("result");
  containResults.appendChild(item);
}

// タスクの追加処理
// createTaskItem()を呼び出してタスク項目を作成
// appendResult()を呼び出して結果コンテナに追加
function addTask() {
  // 入力フィールドの要素を取得。input_task変数で要素のID属性を指定し、getElementById()メソッドを使用して要素を取得
  const inputTask = document.getElementById("input_task");
  // 入力フィールドの値を取得。入力フィールドの値は.valueプロパティでアクセス
  const taskText = inputTask.value;
  // 入力フィールドの値をリセット。タスク追加後に入力フィールドがクリアされる
  inputTask.value = "";
  // createTaskItem()関数を呼び出してタスク項目の要素を生成。taskTextは入力フィールドの値を指定、その値をタスク項目に表示する
  const taskItem = createTaskItem(taskText);
  // appendResult()関数で生成したタスク項目の要素を結果コンテナに追加。タスク項目が結果コンテナに追加される
  appendResult(taskItem);
}
