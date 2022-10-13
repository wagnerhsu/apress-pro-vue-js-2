function required(name: string) {
    return {
        validator: (value: string) => value != "" && value !== undefined && value !== null,
        message: `A value is required for ${name}`
    }
}
function minLength(name: string, minlength: number) {
    return {
        validator: (value: string) => String(value).length >= minlength,
        message: `At least ${minlength} characters are required for ${name}`
    }
}
function alpha(name: string) {
    return {
        validator: (value: string) => /^[a-zA-Z]*$/.test(value),
        message: `${name} can only contain letters`
    }
}
function numeric(name: string) {
    return {
        validator: (value: string) => /^[0-9]*$/.test(value),
        message: `${name} can only contain digits`
    }
}
function range(name: string, min: number, max: number) {
    return {
        validator: (value: number) => value >= min && value <= max,
        message: `${name} must be between ${min} and ${max}`
    }
}
export default {
    name: [minLength("Name", 3)],
    category: [required("Category"), alpha("Category")],
    price: [numeric("Price"), range("Price", 1, 1000)]
}
