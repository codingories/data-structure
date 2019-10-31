console.log("123");
const createList = value => {
  return createNode(value);
};

const appendList = (list, value) => {
  // 告诉value，和append到谁身上
  const node = createNode(value);
  let x = list;
  while (x.next) {
    x = x.next;
  }
  // x.next === null
  x.next = node;
  return node;
};

const removeFromList = (list, node) => {
  let x = list;
  let p = null;
  while (x !== node) {
    p = x;
    x = x.next;
  }
  p.next = x.next;
  // if (list === node) {
  //   // 如果删除的是第一个节点
  //   // list指向第2个姐弟啊安
  //   list = node.next;
  // } else {
  //   // 如果删除的是第二个节点
  //   // 第1个节点.next = 第2个节点.next
  //   if (list.next === node) {
  //     list.next = node.next;
  //   } else {
  //     // 如果删除的是第三个节点
  //     // 第2个节点.next = 第3个节点.next
  //     if (list.next.next === node) {
  //       list.next.next = node.next;
  //     } else {
  //       // 如果删除的是第四个节点
  //       // 第3个节点.next = 第4个节点.next
  //       if (list.next.next.next === node) {
  //         list.next.next.next = node.next;
  //       }
  //     }
  //   }
  // }
};

const createNode = value => {
  return {
    data: value,
    next: null
  };
};

const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
removeFromList(list, node3);
console.log(list);

// console.log("node");
// console.log(node);
// console.log("list");
// console.log(list);
