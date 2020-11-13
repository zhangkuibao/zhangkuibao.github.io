// var ws = new WebSocket('ws://localhost:3000');
// ws.onmessage = (msg) => {
//     if(msg.data.code == 100) {
//         chatVue.userList.push(chatVue.userMsg.userName);
//     }else {
//         chatVue.chatList.unshift(JSON.parse(msg.data));
//     }
// }

const chatVue = new Vue({
    el: '#wrapper',
    data: {
        userMsg: {
            userName: no$.getCookie('userName')
        },
        chatList: [],
        userList: []
    },
    methods: {
        send() {
            ws.send(JSON.stringify({name:this.userMsg.userName,txt: $('.sendTxt').text()}))
            $('.sendTxt').text('')
        }
    }
})
