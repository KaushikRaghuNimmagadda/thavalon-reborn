(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/left-trees.fa90b519.svg"},23:function(e,t,a){e.exports=a.p+"static/media/right-trees.7e1fbb66.svg"},26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(21),r=a.n(c),l=(a(31),a(2)),s=a(3),i=a(5),m=a(4),u=a(6),p=a(22),d=a.n(p),h=a(23),f=a.n(h),v=a(10),b=a(11),E=(a(32),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).validateInputField=function(e){console.log(e.target.value);var t=e.target.value,n=/^([\w\d]+)\s+([\w\d]+)\s+([\w\d]+)\s+([\w\d]+)\s+([\w\d]+)\s*([\w\d]+)?\s*([\w\d]+)?\s*([\w\d]+)?\s*([\w\d]+)?\s*$/.exec(t);if(console.log(t),n){console.log("here"),n.shift();var o=n.filter(function(e){return"string"===typeof e});if([5,7,8,10].includes(o.length)&&new Set(o).size===o.length)return void a.setState({valid:!0,names:o})}a.setState({valid:!1})},a.sendGamePost=function(){fetch(w+"/names",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({names:a.state.names})}).then(function(e){return e.json()}).then(function(e){if(e.hasOwnProperty("error"))a.setState({error:e.error});else{var t=o.a.createElement(b.a,{to:{pathname:"/"+e.id}});a.setState({redirect:t})}}).catch(function(e){console.log(e)})},a.state={valid:!1,names:[],redirect:null,error:"",customView:!1},console.log(w+"url"),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.valid?"valid":"invalid",t=this.state.valid?"button-large":"button-large invalid-button";return o.a.createElement("div",{className:"NewGame"},this.state.redirect,o.a.createElement("button",{className:"back-button",onClick:this.props.back},o.a.createElement("i",{className:"material-icons"},"arrow_back ")),o.a.createElement("div",{className:"home-buttons"},o.a.createElement("div",{className:"input-wrapper"},o.a.createElement("input",{id:"new-game-input",className:e,placeholder:"Enter player names",type:"text",onChange:this.validateInputField}),this.state.valid?o.a.createElement("i",{className:"material-icons validate-icon valid-icon"},"done_alt"):o.a.createElement("i",{className:"material-icons validate-icon invalid-icon"},"clear_alt")),o.a.createElement("button",{className:t,onClick:this.sendGamePost},"Start Game")))}}]),t}(o.a.Component)),g=(a(14),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={gameIds:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(w+"/currentgames",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({numGames:5})}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({gameIds:t})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=0;return o.a.createElement("div",{className:"RecentGames"},o.a.createElement("h2",null,"Recent Games"),o.a.createElement("ul",{className:"recent-games-list"},this.state.gameIds.map(function(t){e++;var a="/"+t;return o.a.createElement("li",{className:"block"},o.a.createElement(v.b,{key:e,className:"game-link",to:{pathname:a}},"Game ",t))})))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).validateInputField=function(e){var t=e.target.value;4===t.length?fetch(w+"/isGame/"+t,{method:"GET"}).then(function(e){return e.json()}).then(function(e){e?a.setState({valid:!0}):a.setState({valid:!1})}):a.setState({valid:!1})},a.state={valid:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.valid?"valid":"invalid",t=this.state.valid?"button-large":"button-large invalid-button";return o.a.createElement("div",{className:"JoinGame"},o.a.createElement("div",{className:"home-buttons"},o.a.createElement("button",{className:"back-button",onClick:this.props.back},o.a.createElement("i",{className:"material-icons"},"arrow_back ")),o.a.createElement("div",{className:"input-wrapper"},o.a.createElement("input",{id:"join-game-input",className:e,placeholder:"Enter Game ID",type:"text",onChange:this.validateInputField}),this.state.valid?o.a.createElement("i",{className:"material-icons validate-icon valid-icon"},"done_alt"):o.a.createElement("i",{className:"material-icons validate-icon invalid-icon"},"clear_alt")),o.a.createElement("button",{className:t},"Join Game")),o.a.createElement(g,null))}}]),t}(o.a.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).goHome=function(){return a.setState({currComponent:a.base})},a.newGame=function(){return a.setState({currComponent:o.a.createElement(E,{back:a.goHome})})},a.joinGame=function(){return a.setState({currComponent:o.a.createElement(N,{back:a.goHome})})},a.base=o.a.createElement("div",{className:"home-buttons"},o.a.createElement("button",{className:"button-large",onClick:a.newGame}," New Game"),o.a.createElement("button",{className:"button-large",onClick:a.joinGame},"Join Game")),a.state={currComponent:a.base},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Home"},o.a.createElement("h1",null,"thavalon"),this.state.currComponent)}}]),t}(o.a.Component),O=(a(37),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).constructInfo=function(e){console.log(e);var t=(e=JSON.parse(e)).alerts;t=(t=t.concat(e.rolePresent,e.perfect,e.seen,e.pairSeen)).map(function(e){return e.replace("You see","")}),a.setState({parsed:t})},a.state={parsed:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.constructInfo(this.props.location.state.info.information)}},{key:"render",value:function(){console.log(this.props.location.state);var e=this.props.location.state.info,t="Good"===e.allegiance?"green":"red",a=e.description;return a=(a=(a=(a=a.replace(/You are on the good team/,"")).replace(/You are a member of the Evil council/,"")).split("\n")).map(function(e){return console.log(typeof e),e.includes("Ability")?o.a.createElement("span",{className:"bold"}," ",e," "):o.a.createElement("p",null,e)}),console.log(this.state.parsed),a=o.a.createElement("div",{className:"des"}," ",a," "),o.a.createElement("div",{className:"Player"},o.a.createElement("h1",null,e.name),o.a.createElement("div",{className:"block role"},"You are ",o.a.createElement("span",{className:t+" role-text"}," ",e.role," ")),o.a.createElement("div",{className:"block info"},"You are on the ",o.a.createElement("span",{className:t+" role-text"}," ",e.allegiance," "),"Team",o.a.createElement("div",{className:"description"},a),o.a.createElement("div",{className:"seen"},0!==this.state.parsed.length?o.a.createElement("div",null," You see:",o.a.createElement("ul",null,this.state.parsed.map(function(e){return o.a.createElement("li",null," ",e," ")}))):null)))}}]),t}(o.a.Component)),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={info:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.state.info.map(function(e){var t=e.information,a=(t=JSON.parse(t)).alerts;a=a.concat(t.rolePresent,t.perfect,t.seen,t.pairSeen);var n="Good"===e.allegiance?"green":"red";return{name:e.name,role:o.a.createElement("div",{className:"bold "+n}," ",e.role," "),info:a}});this.setState({info:e})}},{key:"render",value:function(){return console.log(this.props.location.state.info),o.a.createElement("div",{className:"DoNotOpen"},o.a.createElement("h1",null,"Do Not Open"),o.a.createElement("h2",null,"Game ",this.props.match.params.id," "),this.state.info.map(function(e){return o.a.createElement("div",{className:"block do-not-open-block"},o.a.createElement("span",{className:"bold"},e.name)," ",e.role,e.info)}))}}]),t}(o.a.Component),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={game:[],start:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch(w+"/game/info/"+t,{method:"GET"}).then(function(e){return e.json()}).then(function(t){if(0===t.length)window.location.href="/";else{console.log(t);var a=t.map(function(e){return e.name});e.setState({game:t,start:t[0].name,players:a})}}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Game"},o.a.createElement("h1",null," Game ",this.props.match.params.id," "),o.a.createElement("div",{className:"start block"},o.a.createElement("span",{className:"game-indent"}," Starting Player: ",o.a.createElement("span",{className:"bold"}," ",this.state.start," "))," "),o.a.createElement("div",{className:"players"},o.a.createElement("ul",{className:"player-list"},this.state.game.map(function(t){return o.a.createElement("li",{className:"block"},o.a.createElement(v.b,{to:{pathname:e.props.location.pathname+"/"+t.name,state:{info:t,players:e.state.players}}},t.name))}),o.a.createElement("li",{className:"do-not-open block red"},o.a.createElement(v.b,{to:{pathname:this.props.location.pathname+"/donotopen",state:{info:this.state.game}}},o.a.createElement("span",{className:"red"}," Do Not Open "))))))}}]),t}(o.a.Component),w="https://thavalon-api-qa.herokuapp.com",S=function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a,{className:"App"},o.a.createElement(b.d,null,o.a.createElement(b.b,{exact:!0,path:"/",component:j}),o.a.createElement(b.b,{exact:!0,path:"/:id",component:y}),o.a.createElement(b.b,{exact:!0,path:"/:id/donotopen",component:k}),o.a.createElement(b.b,{exact:!0,path:"/:id/:player",component:O})),o.a.createElement("img",{src:d.a,className:"background-img",id:"background-left",alt:"Some trees"}),o.a.createElement("img",{src:f.a,className:"background-img",id:"background-right",alt:"Some trees"}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.638063fe.chunk.js.map