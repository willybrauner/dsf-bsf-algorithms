export const dsf = (grid: number[][], start: [number, number]): number => {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  const stack: [number, number][] = [start]
  const visited = new Set<string>()
  visited.add(`${start[0]},${start[1]}`)
  let result = 0
  while (stack.length) {
    const [y, x] = stack.pop()!
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
        stack.push([ny, nx])
        visited.add(`${ny},${nx}`)
      }
    }
  }
  return result
}
