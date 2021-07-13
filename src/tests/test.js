const { fetchDataAction } = require("../features/slicer/redditSlice");

test("shoould return a collection of '/r/Home' reddit posts in an array", () => {
  const res = fetchDataAction("/r/Home/.json");
});
