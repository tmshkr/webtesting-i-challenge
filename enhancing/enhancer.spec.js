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

  describe("succeed", () => {
    it("returns a new object", () => {
      const item = { name: "foo", enhancement: 15, durability: 50 };
      const result = enhancer.succeed(item);
      expect(result).not.toBe(item);
    });
    it("returns a new object with an enhancement increased by 1", () => {
      const item = { name: "foo", enhancement: 15, durability: 50 };
      const result = enhancer.succeed(item);
      expect(result.enhancement).toBe(16);
    });
    it("does not increase the enhancement to be greater than 20", () => {
      const item = { name: "foo", enhancement: 20, durability: 50 };
      const result = enhancer.succeed(item);
      expect(result.enhancement).toBe(20);
    });
    it("does not modify properties besides enhancement", () => {
      const item = { name: "foo", enhancement: 15, durability: 50 };
      const result = enhancer.succeed(item);
      expect(result.name).toBe("foo");
      expect(result.durability).toBe(50);
    });
  });

  describe("fail", () => {
    it("returns a new object", () => {
      const item = { name: "foo", enhancement: 15, durability: 50 };
      const result = enhancer.fail(item);
      expect(result).not.toBe(item);
    });
    it("decreases the durability by 5 when enhancement is less that 15", () => {
      const item = { name: "foo", enhancement: 14, durability: 50 };
      const result = enhancer.fail(item);
      expect(result.durability).toBe(45);
    });
    it("decreases the durability by 10 when enhancement >= 15", () => {
      const item = { name: "foo", enhancement: 15, durability: 50 };
      const result = enhancer.fail(item);
      expect(result.durability).toBe(40);
    });
    it("decreases the enhancement by 1 when enhancement > 16", () => {
      const item = { name: "foo", enhancement: 17, durability: 50 };
      const result = enhancer.fail(item);
      expect(result.enhancement).toBe(16);
    });
  });

  describe("get", () => {
    it("returns a new object", () => {
      const item = { name: "Iron Sword", enhancement: 7, durability: 50 };
      const result = enhancer.get(item);
      expect(result).not.toBe(item);
    });
    it("modifies the name correctly", () => {
      const item = { name: "Iron Sword", enhancement: 7, durability: 50 };
      const result = enhancer.get(item);
      expect(result.name).toBe("[+7] Iron Sword");
    });
    it("does not modify properties besides name", () => {
      const item = { name: "Iron Sword", enhancement: 7, durability: 50 };
      const result = enhancer.get(item);
      expect(result.enhancement).toBe(7);
      expect(result.durability).toBe(50);
    });
  });
});
