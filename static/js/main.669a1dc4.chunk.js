(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),r=a.n(n),s=a(31),i=a.n(s),c=a(17),l=a.n(c),o=a(55),u=a(56),p=a(60),d=a(57),h=a(61),m=a(1),f=(a(110),function(e){var t=e.id,a=e.go,n=e.fetchedUser,s=e.user;return r.a.createElement(m.Panel,{id:t},r.a.createElement(m.PanelHeader,null,"\u041a\u043e\u043d\u043a\u0443\u0440\u0441 \u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),n&&r.a.createElement(m.Group,{title:"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},r.a.createElement(m.ListItem,{before:n.photo_200?r.a.createElement(m.Avatar,{src:n.photo_200,size:80}):null,description:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u043a\u043e\u043d\u043a\u0443\u0440\u0441\u0430"},"".concat(s.user_id," ").concat(n.last_name))),r.a.createElement(m.Group,{title:"Navigation Example"},r.a.createElement(m.Div,null,r.a.createElement(m.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))}),E=a(58),b=a.n(E),v=(a(111),a(59)),g=a.n(v),k=a(32),P=a.n(k),w=Object(m.platform)(),_=function(e){return r.a.createElement(m.Panel,{id:e.id},r.a.createElement(m.PanelHeader,{left:r.a.createElement(m.HeaderButton,{onClick:e.go,"data-to":"home"},w===m.IOS?r.a.createElement(g.a,null):r.a.createElement(P.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,http_web_site:"http://pso31.ru/active_pso/vkapp",authSign:!1,spinnerSign:!0,userData:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),fetch(e.state.http_web_site+"/api/method/users.Get.php?user_id="+e.state.fetchedUser.id).then(function(e){return e.json()}).then(function(t){return e.setState({userData:t.response})});break;default:console.log(t.detail.type)}}),l.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(m.View,{activePanel:this.state.activePanel},r.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,user:this.state.userData}),r.a.createElement(_,{id:"persik",go:this.go}))}}]),t}(r.a.Component);l.a.send("VKWebAppInit",{}),i.a.render(r.a.createElement(U,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(112)}},[[62,1,2]]]);
//# sourceMappingURL=main.669a1dc4.chunk.js.map