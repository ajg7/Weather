export const getFromLocalStorage = key => localStorage.getItem(key) ? localStorage.getItem(key) : null;

export const setInLocalStorage = (key, value) => {
    if (!getFromLocalStorage(key) || getFromLocalStorage(key) !== value) {
        localStorage.setItem(key, value);
    } 
};

export const removeFromLocalStorage = key => localStorage.remove(key);