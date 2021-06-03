## Promise 使用方式

### 普普通通
```js
new Promise((resolve, reject) => {
    if(Math.random() > 0.5) {
        resolve(true);
    }else {
        reject(false);
    }
})
```

### 给resolve传一个对象
如果对象中有 `then` 属性且值为函数
```js
new Promise(resolve => {
    console.log('promise')
    reject({
        then: (res, rej) => {
            if(Math.random() > 0.5) {
                res(true);
            }else {
                rej(false);
            }
        }
    })
})
```
## Promise 工作原理解析
### 内部属性
在 `Promise` 内部有一些属性，这些属性对外不可见，用于跟踪记录 `Promise` 的状态

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
```

### 构造函数
`Promise` 在创建时立即执行

`Promise` 的构造函数接收一个函数作为参数，该函数有两个参数，这两个参数被通常被命名为 `resolve` 和 `reject`，用于修改 `Promise` 的状态；这两个函数都可以接收一个参数传递给 `Promise` 的 `then` 或 `catch` 函数
 
`resolve` 将 `Promise` 的状态从 `padding` 转变为 `fulfilled`

`reject` 将 `Promise` 的状态从 `padding` 转变为 `rejected`

#### 模拟实现
```ts
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
```

### 解析函数
解析函数用于创建 `resolve` 函数和 `reject` 函数
```js
export function createResolvingFunctions(pledge) {

    // this "record" is used to track whether a Pledge is already resolved
    const alreadyResolved = { value: false };   // 确保resolve和reject只执行一次

    const resolve = resolution => {
        // TODO
    };

    // attach the record of resolution and the original pledge
    resolve.alreadyResolved = alreadyResolved;
    resolve.pledge = pledge;    // 规范要求

    const reject = reason => {
        if (alreadyResolved.value) {
            return;
        }

        alreadyResolved.value = true;

        return rejectPledge(pledge, reason);
    };
    

    // attach the record of resolution and the original pledge
    reject.alreadyResolved = alreadyResolved;
    reject.pledge = pledge;    // 规范要求

    return {
        resolve,
        reject
    };
}
```

#### rejectPledge 函数
当调用 `reject` 时修改 `Promise` 内部属性

```js
export function rejectPledge(pledge, reason) {

    if (pledge[PledgeSymbol.state] !== "pending") {
        throw new Error("Pledge is already settled.");
    }

    const reactions = pledge[PledgeSymbol.rejectReactions];

    pledge[PledgeSymbol.result] = reason;
    pledge[PledgeSymbol.fulfillReactions] = undefined;
    pledge[PledgeSymbol.rejectReactions] = undefined;
    pledge[PledgeSymbol.state] = "rejected";

    if (!pledge[PledgeSymbol.isHandled]) {
        // TODO: perform HostPromiseRejectionTracker(promise, "reject").
    }

    // TODO: Return `TriggerPromiseReactions(reactions, reason)`.
}
```


