const items = [
  "apple",
  "ape",
  "apricot",
  "banana",
  "banyan",
  "pear",
  "peach",
  "guava",
  "goal",
  "cherry",
  "orange",
  "orangotan",
  "pineapple",
  "pink",
  "mango",
  "man",
  "grapes",
  "gum",
  "blueberry",
  "raspberry",
  "melon",
  "muskmelon",
  "blackberry",
  "plum",
  "pluck",
  "kiwi",
  "knife",
  "peach",
  "strawberry",
  "avocado",
  "armadillo",
];

const root = new makeNode("\0");
for (const item of items) add(item, 0, root);

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

function handler(e) {
  const str = e.target.value;
  const predictions = search(str, 0, root);

  console.log(predictions);

  list.innerHTML = "";
  for (const prediction of predictions)
    list.innerHTML += `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${str}</b>${prediction.substring(
      str.length
    )}</li>`;
}

function handleClick(e) {
  text_box.value = e.innerText;
}

handler({ target: { value: "" } });

text_box.addEventListener("keyup", handler);
