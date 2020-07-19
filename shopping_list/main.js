// 엘리님 영상을 보면서 수정하면 좋겠다고 생각한 내용
// 1. UI 생성 함수를 별도로 만들어서 사용하기(기존에는 하나의 함수에 모든 기능이 다 들어가 있었음)
// 2. 아이템을 추가하고 나서 인풋에 포커스 주기
// 3. 새로 추가된 아이템 위치로 스크롤되기

// 추가하면 좋을 기능들
// 1. 수정기능
// 2. 드래그앤드랍
// 3. 체크박스
// 4. localstorage에 넣어서 값유지하게 하기

const body = document.querySelector(".phone_body");
let id = 0;

const add_item_enter = () => {
  if (event.keyCode == 13) {
    add_item();
  }
};

// 아이템 추가함수
const add_item = () => {
  console.group("add_item");
  console.log(`id: ${id}`);

  //  입력값
  const item_name = document.querySelector(".input").value;

  //   값이 없다면 리턴한다.
  if (
    !item_name ||
    item_name === " " ||
    item_name === "  " ||
    item_name === "   "
  ) {
    return;
  }

  // 아이템 전체 랩퍼
  const item = document.createElement("li");
  className: item.className = "item";
  item.setAttribute("id", id);

  // 아이템 텍스트 부분
  const content__content = document.createElement("span");
  className: content__content.className = "item_name";

  content__content.innerHTML = item_name;

  // 아이템 삭제버튼
  const content__delete = document.createElement("button");
  //   className: content__delete.className = "item_name";
  // onclick:

  content__delete.onclick = () => {
    delete_item(item);
  };

  // 아이템 삭제버튼 이미지
  const content__delete_img = document.createElement("img");
  alt: content__delete_img.alt = "delete";
  src: content__delete_img.src = "img/delete.png";

  //   붙이기
  content__delete.appendChild(content__delete_img);
  item.appendChild(content__content);
  item.appendChild(content__delete);

  body.appendChild(item);

  //   입력창 초기화
  document.querySelector(".input").value = "";

  //   id 변수 업데이트
  id++;

  console.groupEnd();
};
// 아이템 삭제함수
const delete_item = (select_item) => {
  console.group("delete_item");
  const id = select_item.getAttribute("id");
  //   console.log(`id: ${id}`);

  if (confirm("정말 삭제하시겠습니까?") == true) {
    body.removeChild(select_item);
  } else {
    return;
  }

  //   console.log("select_item: ", select_item);

  console.groupEnd();
};

(async () => {})();
