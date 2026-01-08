let maximumPopulation = function (logs) {
    const delta = new Array(101).fill(0);

    for (const [b, d] of logs) {
        delta[b - 1950]++; delta[d - 1950]--;
    }

    let living = 0, maxL = 0, ans = 1950;

    for (let i = 0; i < 101; i++) {
        living += delta[i];
        if (living > maxL) {
            maxL = living; ans = 1950 + i;
        }
    }

    return ans;
}