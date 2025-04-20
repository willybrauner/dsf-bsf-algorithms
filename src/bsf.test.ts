import { describe, it, expect } from "vitest"
import { bsf } from "./bsf"

describe("bsf", () => {
  it("sums all cells in a 2x2 grid starting from (0,0)", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ]
    expect(bsf(grid, [0, 0])).toBe(10)
  })

  it("sums all cells in a 3x3 grid starting from (1,1)", () => {
    const grid = [
      [1, 1, 1],
      [1, 2, 1],
      [1, 1, 1],
    ]
    expect(bsf(grid, [1, 1])).toBe(10)
  })

  it("returns the value of the only cell in a 1x1 grid", () => {
    const grid = [[42]]
    expect(bsf(grid, [0, 0])).toBe(42)
  })

  it("sums all cells in a very large 1000x1000 grid", () => {
    const size = 1000
    const grid = Array.from({ length: size }, (_, i) =>
      Array.from({ length: size }, (_, j) => 1)
    )
    expect(bsf(grid, [0, 0])).toBe(size * size)
  })
})
