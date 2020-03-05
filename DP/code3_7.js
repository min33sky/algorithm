/**
 * 이진 트리
 * - 자신과 하위 노드의 합을 구하기
 */

function JNode(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function addChildSum(node) {
  if (!node) return;

  addChildSum(node.left);
  addChildSum(node.right);

  let finalSum = node.value;

  if (node.left !== null) {
    finalSum += node.left.value;
  }

  if (node.right !== null) {
    finalSum += node.right.value;
  }

  node.value = finalSum;
}

function insert(node, leftValue, rightValue) {
  if (leftValue !== null) {
    node.left = new JNode(leftValue);
  }
  if (rightValue !== null) {
    node.right = new JNode(rightValue);
  }
}

function inOrder(node) {
  if (!node) return;
  inOrder(node.left);
  console.log(`${node.value} `);
  inOrder(node.right);
}

const root = new JNode(2);
insert(root, 4, 1);
insert(root.left, 6, 9);
insert(root.right, null, 2);
insert(root.left.right, 3, null);

console.log('중위 순회 탐색으로 출력');
inOrder(root);

addChildSum(root);

console.log('하위 노드의 합으로 갱신된 트리를 중위 순회 탐색으로 출력');
inOrder(root);
