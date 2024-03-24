export function removeUndefinedFields(obj: Record<string, any>): Record<string, any> {
    const newObj: Record<string, any> = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] !== undefined) {
          newObj[key] = obj[key];
        }
      }
    }
  
    return newObj;
  }
