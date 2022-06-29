export const fetchData = async (setData) => {
    try {
        const result = await fetch('https://swapi.dev/api/planets/');
        const dataResult = await result.json();
    
        setData(prev => ({
            ...prev,
            tableData: dataResult.results,
        }));
    } catch (err) {
        setData(prev => ({
            ...prev,
            error: 'Error loading data. Please try again later!'
        }));
    }
}

export const getWaterSurfaceArea = (diameter, waterCoverage) => {
    if (waterCoverage.toString() === '0') return 0;

    const planetRadius = diameter / 2;
    const planetSurfaceArea = 4 * Math.PI * planetRadius * planetRadius;
    const areaCoveredByWater = (waterCoverage/100) * planetSurfaceArea;

    return !areaCoveredByWater ? '?' : Math.round(areaCoveredByWater);
}

export const sortByPlanetName = (a, b) => {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();

    if (x < y) return -1;
    if (x > y) return 1;

    return 0;
}

export const arrangeDigits = (figure) => {
    if (figure === 'unknown') return '?';
    if (figure.toString().length <= 3) return figure;

    const figureString = figure.toString();
    const figureLength = figure.toString().length;

    if (figureLength > 3) {
        const remainder = figureLength % 3;

        if (remainder === 0) {
          const result =  separateNumbers(figureString);

          return result;
        } else if (remainder > 0) {
            const leadDigits = figureString.slice(0, remainder);
            const endDigits = separateNumbers(figureString.slice(remainder));

            return `${leadDigits} ${endDigits}`;
        }
    }
} 

export const separateNumbers = (digits) => {
    let separatedDigits = '';

    for (let j = 0; j < digits.length; j++) {
        if ((j+1) % 3 === 0) {
            separatedDigits += separatedDigits ? ' ' + digits.slice(j-2, j+1) : digits.slice(j-2, j+1);
        } 
    }

    return separatedDigits;
}