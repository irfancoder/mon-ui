
/**
 * Camelize the passed string arg & return result
 * @param {string} str string arg
 * @returns camelized_string
 */
export const camelize = (str: string) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
    
}