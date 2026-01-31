export class VectorOps {

  sum(vector) {
    let total = 0;

    for (const n of vector) {
      total += n;
    }

    return total;
  }

  sumOdds(vector) {
    let total = 0;

    for (const n of vector) {
      if (n % 2 !== 0) {
        total += n;
      }
    }

    return total;
  }

  product(vector) {
    let total = 1;

    for (const n of vector) {
      total *= n;
    }

    return total;
  }
}