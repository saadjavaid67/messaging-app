(this["webpackJsonpmessaging-app"]=this["webpackJsonpmessaging-app"]||[]).push([[0],{15:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),c=n(16),r=n.n(c),i=(n(23),n(15),n(9)),o=n(10),u=n.n(o),d=n(14),p=n(4),l="https://saadjavaid67-messaging-app.herokuapp.com",m=function(e){var t=Object(s.useState)([]),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(0),o=Object(i.a)(r,2),m=o[0],j=o[1],b=function(){var t=Object(d.a)(u.a.mark((function t(n,s){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=s.value,s.value="",j(m+1),console.log(m),t.next=7,fetch(l+"/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person:"saad",text:a,visible:"true",sentby:e.user.displayName,name:e.user})}).then((function(e){return e.json()}));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l+"/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person:"saad"})}).then((function(e){return e.json()})).then((function(e){return c(e)}));case 2:document.getElementById("_chat")&&((t=document.getElementById("_chat")).scrollTop=t.scrollHeight);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,m]),console.log(a),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"chat-box",children:[Object(p.jsx)(h.signOut,{}),Object(p.jsx)("div",{id:"_chat",className:"chat",children:a.map((function(t,n){return Object(p.jsx)("div",{className:t.sentby===e.user.displayName?"sender-message-wrapper":"reciever-message-wrapper",children:Object(p.jsxs)("div",{className:t.sentby===e.user.displayName?"sender message-container":"reciever message-container",children:[Object(p.jsx)("div",{className:"name",children:t.sentby}),Object(p.jsx)("div",{className:"message",children:t.text}),Object(p.jsx)("div",{className:"time",children:t.time.split(".")[0]})]})},n)}))}),Object(p.jsx)("div",{className:"sendmessage",children:Object(p.jsxs)("form",{onSubmit:function(){return!1},children:[Object(p.jsx)("input",{className:"message-input",autoComplete:"off",type:"text",id:"text-input",placeholder:"Enter a Message"}),Object(p.jsx)("input",{className:"send-message",id:"sendButton",type:"submit",onClick:function(e){return b(e,document.getElementById("text-input"))},value:"Send"})]})})]})})},j=n(11),b=(n(31),n(26),n(32),n(18));n(29);j.a.initializeApp({apiKey:"AIzaSyCyB2Or8Dxmwd8m_iptGEFcqN579BN1dzk",authDomain:"message-app-b2d31.firebaseapp.com",projectId:"message-app-b2d31",storageBucket:"message-app-b2d31.appspot.com",messagingSenderId:"939057848458",appId:"1:939057848458:web:9efb13d3cf5d74bd9d4d73",measurementId:"G-B21M3PZ13F"});var g=j.a.auth();var h={Login:function(){j.a.firestore();var e,t=Object(b.a)(g),n=Object(i.a)(t,1)[0];try{n.displayName&&(e=n)}catch(s){console.log(s)}return e?Object(p.jsx)(m,{user:e}):Object(p.jsx)("button",{id:"login",onClick:function(){var e=new j.a.auth.GoogleAuthProvider;g.signInWithPopup(e)},children:"Login"})},signOut:function(){return g.currentUser&&Object(p.jsx)("button",{onClick:function(){return g.signOut()},children:"SignOut"})}};var f=function(){return Object(p.jsx)(h.Login,{})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.22746e1a.chunk.js.map