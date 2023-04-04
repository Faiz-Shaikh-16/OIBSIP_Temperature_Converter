const tempCalculate = () => {
    const numberTemp = document.getElementById('temp').value;

    const tempSelect = document.getElementById('tempdiff');
    const valueTemp = tempdiff.options[tempSelect.selectedIndex].value;

    //Celsius to other temperatures
    const celTofah = (cel) => {
        let Fahrenheit = parseFloat((cel * 9 / 5) + 32).toFixed(2);
        return Fahrenheit;
    }

    const celTokel = (cel) => {
        let Kelvin = parseFloat(parseInt(cel) + 273.15).toFixed(2);
        return Kelvin;
    }

    //Fahrenheit to other temperatures
    const fahTocel = (fah) => {
        let Celsius = parseFloat((fah - 32) * 5 / 9).toFixed(2);
        return Celsius;
    }
    const fahTokel = (fah) => {
        let kelvin = parseFloat(((fah - 32) * 5 / 9) + 273.15).toFixed(2);
        return kelvin;
    }

    //Kelvin to other temperatures
    const kelTocel = (kel) => {
        let Celsius = parseFloat(kel - 273.15).toFixed(2);
        return Celsius;
    }
    const kelTofah = (kel) => {
        let Fahrenheit = parseFloat(9 / 5 * (kel - 273.15) + 32).toFixed(2);
        return Fahrenheit;
    }

    let result1, result2, result3, result4, result5, result6;
    if (valueTemp == 'cel') {
        result1 = celTofah(numberTemp);
        result2 = celTokel(numberTemp);
        document.getElementById('resultcontainer').value = `${result1}°Fahrenheit and ${result2}°Kelvin`;

    }
    else
        if (valueTemp == 'fah') {
            result3 = fahTocel(numberTemp);
            result4 = fahTokel(numberTemp);
            document.getElementById('resultcontainer').value = `${result3}°Celsius and ${result4}°Kelvin`;

        }
        else {
            result5 = kelTocel(numberTemp);
            result6 = kelTofah(numberTemp);
            document.getElementById('resultcontainer').value = `${result5}°Celsius and ${result6}°Fahrenheit`;

        }


}

