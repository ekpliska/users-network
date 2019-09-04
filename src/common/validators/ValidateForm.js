
export const requiredField = (value) => {
    if (value) return undefined;
    return 'Поле обязательно для заполнения';
}

export const maxLength = (max) => (value) => {
    if (value && value.length > max) return `Количество символов не должно превышать ${max} `;
    return undefined;
}