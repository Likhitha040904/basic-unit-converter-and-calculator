function unitconvertion() {
    // Get input value and selected units
    const input = Number(document.getElementById("value").value);
    const fromUnit = document.getElementById("from unit").value;
    const toUnit = document.getElementById(" to unit").value;
    let output;

    if (isNaN(input)) {
        document.getElementById("output").innerText = "Please enter a valid number.";
        return;
    }

    // Define base units: meters (length), grams (weight), liters (volume)
    const lengthFactors = {
        meters: 1,
        kilometers: 1000,
        miles: 1609.34,
        feet: 0.3048,
        inches: 0.0254,
        centimeters: 0.01,
        yards: 0.9144
    };

    const weightFactors = {
        grams: 1,
        kilograms: 1000,
        pounds: 453.592,
        ounces: 28.3495
    };

    const volumeFactors = {
        liters: 1,
        milliliters: 0.001,
        gallons: 3.78541,
        quarts: 0.946353
    };

    // Determine category
    let category = null;
    if (fromUnit in lengthFactors && toUnit in lengthFactors) {
        category = 'length';
    } else if (fromUnit in weightFactors && toUnit in weightFactors) {
        category = 'weight';
    } else if (fromUnit in volumeFactors && toUnit in volumeFactors) {
        category = 'volume';
    } else if (fromUnit === toUnit) {
        output = input;
    } else {
        output = "Conversion not supported";
    }

    // Perform conversion
    if (category === 'length') {
        // Convert from source to meters, then meters to target
        output = input * lengthFactors[fromUnit] / lengthFactors[toUnit];
    } else if (category === 'weight') {
        output = input * weightFactors[fromUnit] / weightFactors[toUnit];
    } else if (category === 'volume') {
        output = input * volumeFactors[fromUnit] / volumeFactors[toUnit];
    }

    // Show result
    document.getElementById("output").innerText = `Converted value: ${output}`;
}

function calculate() {
    const expression = document.getElementById("numbers").value;
    const resultElement = document.getElementById("result");
    try {
        // Evaluate the expression safely
        // WARNING: eval() can be dangerous if not used carefully!
        // For production, use a math parser library like math.js
        const result = eval(expression);
        resultElement.innerText = `Result: ${result}`;
    } catch {
        resultElement.innerText = "Invalid expression.";
    }
}