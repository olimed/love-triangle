/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  var first = 0 
  var second = 0
  var count = 0

  for (var i = 0; i < preferences.length; i++)
    {
      first = preferences[i]
      second = preferences[first-1]
      if (i+1 == preferences[second-1])
        count++

    }


  return (count%3) == 0 ? count/3 : (count - count%3) / 3;
};

/**/