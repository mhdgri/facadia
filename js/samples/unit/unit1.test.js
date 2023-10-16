import { sayHello } from './unit1'

describe('Hello test', () => {
    it('should return "Hello, World"', () => {
        expect(sayHello()).toBe("Hello, World")
    })

    it('should return "Bonjour, Alexandra"', () => {
      expect(sayHello("alexandra")).toBe("Bonjour, Alexandra")
    })
    
    it('should be "Hello, Thomas"', () => {
        expect(sayHello("Thomas")).toBe("Hello, Thomas")
    })
})
