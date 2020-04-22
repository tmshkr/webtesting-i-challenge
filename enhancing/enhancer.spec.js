const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", () => {
  describe("repair", () => {
    it("returns a new object", () => {
      const item = { name: "foo", enhancement: 15, durability: 50 };
      const result = enhancer.repair(item);
      expect(result).not.toBe(item);
    });
    it("returns a new object with a durability of 100", () => {
      const item = { name: "foo", enhancement: 15, durability: 50 };
      const result = enhancer.repair(item);
      expect(result.durability).toBe(100);
    });
    it("does not modify properties besides durability", () => {
      const item = { name: "foo", enhancement: 15, durability: 50 };
      const result = enhancer.repair(item);
      expect(result.name).toBe("foo");
      expect(result.enhancement).toBe(15);
    });
  });
});
