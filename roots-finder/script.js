
function findRoots() {
    let root1, root2;

    let a = Number(document.getElementById("x-squared").value) || 1;
    let b = Number(document.getElementById("x").value) || 1;
    let c = Number(document.getElementById("constant").value) || 0;

    const resultEl = document.getElementById("roots")

    // calculate discriminant
    let discriminant = b * b - 4 * a * c;

    // condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // result
        resultEl.innerText = `The roots of quadratic equation are ${root1} and ${root2}`
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        // result
        resultEl.innerText = `The roots of quadratic equation are ${root1} and ${root2}`
    }

    // if roots are not real
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        // result
        resultEl.innerText =  `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
    }
}

