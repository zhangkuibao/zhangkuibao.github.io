console.log('is new js',r)
self.addEventListener('message',(e) => {
    console.log('child',e)
})
// self.postMessage('myLoad');