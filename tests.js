
// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});

// *****UNIT TEST FOR sayHello FUNCTION ******
describe("sayHello", function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function (){
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when input is 'Jane'", function (){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    })
    it("should return the string 'Hello, Alex!' when input is 'Alex'", function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello, Pat!' when input is 'Pat'", function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return the string 'Hello, World!' when input is undefined.", function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when boolean is true.", function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
});