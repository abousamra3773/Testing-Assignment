function sumOfArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array.");
    }

    return arr.reduce((total, num) => {
    if (typeof num !== "number" || isNaN(num)) {
        throw new TypeError("All array values must be numbers");
    }
    return total + num;
    }, 0);
}

document.getElementById("calculateBtn").addEventListener("click", () => {
    const input = document.getElementById("pricesInput").value;

    try {
    const prices = input.split(",").map(num => Number(num.trim()));
    const total = sumOfArray(prices);

    document.getElementById("result").textContent = "Total: $" + total;

    } catch (error) {
    document.getElementById("result").textContent = error.message;
    }
});

