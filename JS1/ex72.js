/**
 * 문제 72: 너비 우선 탐색
 */

const graph = {
  E: ['D', 'A'],
  F: ['D'],
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
};

function bfs(graph, start) {
  const visited = [];
  const queue = [start];

  while (queue.length) {
    const n = queue.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      const sub = graph[n].filter(v => !visited.includes(v));
      for (let i of sub) {
        queue.push(i);
      }
    }
  }

  return visited;
}

console.log(bfs(graph, 'E'));
