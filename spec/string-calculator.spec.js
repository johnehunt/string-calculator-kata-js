const StringCalculator = require("../string-calculator.js");

describe("A suite of tests for string calculator", () => {
  it("should return 0 for an empty string", () => {
    calculator = new StringCalculator();
    result = calculator.add("");
    expect(result).toEqual(0); //check that the result = 0
  });

  it('should return 1 for an string with "1" in it', () => {
    calculator = new StringCalculator();
    result = calculator.add("1");
    expect(result).toEqual(1);
  });

  it("should add together two comma separated values (1,2)", () => {
    calculator = new StringCalculator();
    result = calculator.add("1,2");
    expect(result).toEqual(3);
  });

  it("should add together three comma separated values (1,2,3)", () => {
    calculator = new StringCalculator();
    result = calculator.add("1,2,3");
    expect(result).toEqual(6);
  });

  it("should add together two semicolon separated values (1;2)", () => {
    calculator = new StringCalculator();
    result = calculator.add("1;2");
    expect(result).toEqual(3);
  });

  it("should add together two newline separated values (1\n2)", () => {
    calculator = new StringCalculator();
    result = calculator.add("1\n2");
    expect(result).toEqual(3);
  });

  it("should add together two mixed separated values (1\n2,3)", () => {
    calculator = new StringCalculator();
    result = calculator.add("1\n2,3");
    expect(result).toEqual(6);
  });

  it("should add together three mixed separated values (1\n2,3;4)", () => {
    calculator = new StringCalculator();
    result = calculator.add("1\n2,3;4");
    expect(result).toEqual(10);
  });

  it("should fail if the string is terminated by a separator (1,)", () => {
    calculator = new StringCalculator();
    expect(function () {
      calculator.add("1,");
    }).toThrow(new Error("Invalid Terminator Expression"));
  });

  it("should fail if the string contains a negative number (1,-1)", () => {
    calculator = new StringCalculator();
    expect(function () {
      calculator.add("1,-1");
    }).toThrow(new Error("Negative Number Error"));
  });

  it("should ignore numbers over one thousand (1001,2)", () => {
    calculator = new StringCalculator();
    result = calculator.add("1001,2");
    expect(result).toEqual(2);
  });

  it("should handle any number of values (1, 2, 3, 4, 5, 6)", () => {
    calculator = new StringCalculator();
    result = calculator.add("1, 2, 3, 4, 5, 6");
    expect(result).toEqual(21);
  });
});
