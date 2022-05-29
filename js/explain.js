function pascalSimple(numTiers) {

    var triangle = [
      [1]
    ],
    tier;
  
    for (var j = 0; j < numTiers-1; j++) {
      tier = [1];
      for (var k = 1; k < triangle[j].length; k++) {
        tier[k] = triangle[j][k] + triangle[j][k-1];
      }
      tier.push(1);
      triangle.push(tier);
    }
  
    return triangle;
  }
  
   