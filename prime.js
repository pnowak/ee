function checkPrime(a) {
    let i = a.length;

    while (i--) {
        let item = a[i];

        if (item < 2) {
            return false;
        }

        for (let j = 2; j <= item; j += 1) {
            let modulo = item % j;

            if (modulo == 0 && item != j) {
                return false;
            }
        }
    }

    return true;
}