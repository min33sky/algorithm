/**
 * 문제 73: 최단 경로 찾기
 */

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

function solution(start, dest) {
  let queue = [start];
  let visited = [start];
  let count = -1;

  while (queue.length) {
    count++;
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.splice(0, 1);
      if (node === dest) {
        return count;
      }

      for (let nextNode in graph[node]) {
        if (!visited.includes(graph[node][nextNode])) {
          visited.push(graph[node][nextNode]);
          queue.push(graph[node][nextNode]);
        }
      }
    }
  }

  return count;
}

console.log(solution('A', 'F'));
