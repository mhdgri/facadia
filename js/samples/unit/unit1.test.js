import { sayHello } from "./unit1";

describe('SayHello Unit Test Suites', () => {
  it('should return "hello, world"', () => {
    expect(sayHello()).toBe("Hello, World")
  })
  it('should return "Hello, Thomas"',() => {
    expect(sayHello("Thomas")).toBe("Hello, Thomas")
  })
})