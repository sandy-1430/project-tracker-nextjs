export const setLSData = (key:string, value:any) =>{
    typeof value === "object" 
        ? localStorage?.setItem(key, JSON.stringify(value))
        : localStorage?.setItem(key, value)
}

export const getLSData = (key: string) =>{
    try {
        return localStorage?.getItem(key);
    } catch {
        return null
    }
}

export const removeLSData = (key: string) =>{
    return localStorage.removeItem(key)
}