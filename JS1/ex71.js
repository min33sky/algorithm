/**
 * 문제71: 깊이 우선 탐색
 */

const graph = {
  E: ['D', 'A'],
  F: ['D'],
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
};

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter(v => !visited.includes(v));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }
  return visited;
}

console.log(dfs(graph, 'E'));
