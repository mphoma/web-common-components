export function transparent(color : any, percentage: any) {

    if (typeof color !== 'string' || color.length !== 7) {
      return color;
    }
  
    const r = `0x${color[1]}${color[2]}`;
    const g = `0x${color[3]}${color[4]}`;
    const b = `0x${color[5]}${color[6]}`;
  
    if ( isNaN(r) || isNaN(g) || isNaN(b)) {
      return color;
    }
  
    if (typeof percentage !== 'number' || percentage > 1) {
      return `rgba(${+r},${+g},${+b},1)`;
    }
  
    if (percentage < 0) {
      return `rgba(${+r},${+g},${+b},0)`;
    }
  
    return `rgba(${+r},${+g},${+b},${percentage})`;
  }
  
  export class Debounceable {

    timeout = null;
  
    debounce = (
      callback : any,
      wait : any
    ) => {
  
      wait = wait || 750; // Makes the wait argument optional, using our configured default timeout.
  
      return (...args) => {
  
        const context = this;
        this.clear();
        this.timeout = setTimeout(() => callback.apply(context, args), wait);
      };
    };
  
    clear = () => {
      clearTimeout(this.timeout);
    };
  }