export const testModule = (() => {
    let value = 0;

    const increaseCounter = () => {
        return value += 1;
    }

    const getValue = () => {
        console.log(increaseCounter());
    }

    const init = () => {
        getValue();
    }

    return {
        init,
    }
})();