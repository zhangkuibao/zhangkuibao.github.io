## Promise的内部属性
- `[[PromiseState]]`
    表示 `Promise` 的状态，包括：`pending`，`fulfilled` 和 `rejected`，控制 `Promise` 对其 `then` 方法的传入调用做何反应

- `[[PromiseResult]]`
    表示 `Promise` 的状态是否转为已完成。只有在` [[PromiseState]]` 不是 `pending` 时才有意义

- `[[PromiseFulfillReactions]]`
    `Promise` 的状态从 `padding` 转变为 `fulfilled`

- `[[PromiseRejectReactions]]`
    `Promise` 的状态从 `padding` 转变为 `rejected`

- `[[PromiseIsHandled]]`
    一个布尔值，表示 `Promise` 是否曾经有一个履行或拒绝处理程序；用于未处理的拒绝跟踪。

```ts
export const PledgeSymbol = Object.freeze({
    state: Symbol("PledgeState"),
    result: Symbol("PledgeResult"),
    isHandled: Symbol("PledgeIsHandled"),
    fulfillReactions: Symbol("PledgeFulfillReactions"),
    rejectReactions: Symbol("PledgeRejectReactions")
});

export class Pledge {
    constructor(executor) {

        if (typeof executor === "undefined") {
            throw new TypeError("Executor missing.");
        }

        if (typeof argument !== "function") {
            throw new TypeError("Executor must be a function.");
        }

        // initialize properties
        this[PledgeSymbol.state] = "pending";
        this[PledgeSymbol.result] = undefined;
        this[PledgeSymbol.isHandled] = false;
        this[PledgeSymbol.fulfillReactions] = [];
        this[PledgeSymbol.rejectReactions] = [];

        const { resolve, reject } = createResolvingFunctions(this);

        /*
         * The executor is executed immediately. If it throws an error, then
         * that is a rejection. The error should not be allowed to bubble
         * out of this function.
         */
        try {
            executor(resolve, reject);
        } catch(error) {
            reject(error);
        }

    }
}

export function createResolvingFunctions(pledge) {

    // this "record" is used to track whether a Pledge is already resolved
    const alreadyResolved = { value: false };

    const resolve = resolution => {
        // TODO
    };

    // attach the record of resolution and the original pledge
    resolve.alreadyResolved = alreadyResolved;
    resolve.pledge = pledge;    // 规范要求但不必须

    const reject = reason => {
        // TODO
    };

    // attach the record of resolution and the original pledge
    reject.alreadyResolved = alreadyResolved;
    reject.pledge = pledge;    // 规范要求但不必须

    return {
        resolve,
        reject
    };
}
```