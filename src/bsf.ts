export const bsf = (grid: number[][], start: [number, number]): number => {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  const queue: [number, number][] = [start]
  const visited = new Set<string>()
  visited.add(`${start[0]},${start[1]}`)
  let result = 0
  while (queue.length) {
    const [y, x] = queue.shift()!
    result += grid[y][x]
    for (const [dy, dx] of directions) {
      const [ny, nx] = [y + dy, x + dx]
      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < grid.length &&
        nx < grid[0].length &&
        !visited.has(`${ny},${nx}`)
      ) {
        queue.push([ny, nx])
        visited.add(`${ny},${nx}`)
      }
    }
  }
  return result
}
