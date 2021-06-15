## Promise 使用方式

### 给 resolve 传入非对象

```js
new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve(true);
  } else {
    reject(false);
  }
});
```

### 给 resolve 传一个对象

如果对象中有 `then` 属性且值为函数

```js
new Promise((resolve) => {
  console.log("promise");
  resolve({
    then: (res, rej) => {
      if (true) {
        res(true);
      } else {
        rej(false);
      }
    },
  });
});
```

## Promise 工作原理解析

### 内部属性

在 `Promise` 内部有一些属性，这些属性对外不可见，用于跟踪记录 `Promise` 的状态

- `[[PromiseState]]`
  表示 `Promise` 的状态，包括：`pending`，`fulfilled` 和 `rejected`，控制 `Promise` 对其 `then` 方法的传入调用做何反应

- `[[PromiseResult]]`
  表示 `Promise` 的状态是否转为已完成。只有在` [[PromiseState]]` 不是 `pending` 时才有意义

- `[[PromiseFulfillReactions]]`
  `Promise` 的状态从 `padding` 转变为 `fulfilled` 的记录，数据类型为数组

- `[[PromiseRejectReactions]]`
  `Promise` 的状态从 `padding` 转变为 `rejected` 的记录，数据类型为数组

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
    // ...
    this[PledgeSymbol.state] = "pending";
    this[PledgeSymbol.result] = undefined;
    this[PledgeSymbol.isHandled] = false;
    this[PledgeSymbol.fulfillReactions] = [];
    this[PledgeSymbol.rejectReactions] = [];
    // ...
}
```

### reject 函数
reject 函数接收一个参数，并将承诺改为 rejected 状态，reject 之后可以用 then 的第二个参数或 catch 捕获

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

### resolve 函数
resolve 函数接收一个参数，并将承诺改为 fulfilled 状态，resolve 之后可以用 then 的第一个参数

resolve 处理不同类型值的方式：
    1. 参数为本身 promise 则抛出错误。
    2. 参数为其他 promise 则等待 promise 完成，使用另一个承诺调用 resolve 意味着在第二个承诺被解决之前，第一个承诺不能被解决。
    3. 参数为非对象则使用该值。
    4. 参数为具有 then 属性的对象：
        1. 如果该 then 属性不是方法，则使用该对象。
        2. 如果该 then 属性是方法，则该 then 方法接收两个参数，用于将 promise 的状态修改为 fulfilled 或 rejected。
### 构造函数

`Promise` 在创建时立即执行

`Promise` 的构造函数接收一个函数作为参数，该函数有两个参数，这两个参数被通常被命名为 `resolve` 和 `reject`，用于修改 `Promise` 的状态；这两个函数都可以接收一个参数传递给 `Promise` 的 `then` 或 `catch` 函数

`resolve` 将 `Promise` 的状态从 `padding` 转变为 `fulfilled`

`reject` 将 `Promise` 的状态从 `padding` 转变为 `rejected`

### then 方法
then() 方法接收两个参数，分别为 promise 执行 resolve() 的处理程序和 执行 reject() 的处理程序，该函数被调用以响应 promise 内部状态的变化。这两个参数都可以设置为 undefined 表示不需要某个执行程序。

then 方法调用时采取的步骤取决于承诺的状态：
    - 如果 promise 的状态为 pending（promise 未解决），then() 只需存储稍后调用的处理程序。
    - 如果承诺的状态已完成，则then()立即将作业排队以执行完成处理程序。
    - 如果承诺的状态被拒绝，则then()立即将作业排队以执行拒绝处理程序。

then() 始终返回另一个 promise
### 静态方法