function formatResultQuery(dataBuffer) {
    const extractResults = dataBuffer.filter((el) => el !== '>');

    const result = extractResults.map((el) => el.replace(/\r\n/g, ''));
    
    const columnNames = result[0].split(',');
    
    let values = result.slice(1);
    
    values = values.map((element) => {
        return element.replace(/,\b/g, '|');
    }).map((element) => {
        return element.replace(/,\|/g, '||');
    }).map((element) => {
        return element.replace(/,\(/g, '|(')
    })
    
    const arrObje = [];
    
    values.forEach(el => {
        const obj = {};
    
        for (let i = 0; i < columnNames.length; i++) {
            obj[columnNames[i]] = el.split('|')[i]
        }
    
        arrObje.push(obj)
    })

    return arrObje;
}

module.exports = {
    formatResultQuery
}