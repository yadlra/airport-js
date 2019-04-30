describe('Fizzbuzz', function() {
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {
  it('is divisible by 3', function ()  {
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
   });

  it('is divisible by 5', function () {
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });

  it('is divisible by 15', function () {
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
   });
  });

  describe('knows when a number is Not', function() {
  it('is divisible by 3', function ()  {
    expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
   });

  it('is divisible by 5', function () {
    expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
  });

  it('is divisible by 15', function () {
    expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
  });
 });

  describe('when playing, says', function () {
    it('"Fizzbuzz" when a number is by 15', function () {
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
    });
    it('"Fizz" when a number is divisible by 3', function () {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
   it('"buzz" when a number is divisible by 5', function () {
     expect(fizzbuzz.says(5)).toEqual("buzz");
   });

  });
});
