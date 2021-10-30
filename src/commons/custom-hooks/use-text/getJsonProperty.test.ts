import { getJsonProperty } from "./useText";

const data = {
  home: {
    bedroom: {
      bed: "bed",
      table: "table",
    },
  },
  kitchen: {
    fridge: "fridge",
  },
};

describe("Testing getJsonProperty Function", () => {
  it("should return all data", () => {
    expect(getJsonProperty("", data)).toEqual({
      home: {
        bedroom: {
          bed: "bed",
          table: "table",
        },
      },
      kitchen: {
        fridge: "fridge",
      },
    });
  });

  it("should return just kitchen data", () => {
    expect(getJsonProperty("kitchen", data)).toEqual({
      fridge: "fridge",
    });
  });

  it("should get bed", () => {
    expect(getJsonProperty("home.bedroom.bed", data)).toEqual("bed");
  });
});
