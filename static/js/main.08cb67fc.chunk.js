(this.webpackJsonp5_task=this.webpackJsonp5_task||[]).push([[0],[,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var r=c(0),n=c(1),s=c(3),o=c.n(s),a=(c(13),c(4)),i=c(5),l=c(7),u=c(6),d=(c(14),c(15),function(t){return Object(r.jsx)("div",{className:"circle ".concat(t.color," ").concat(t.active?" active":""),onClick:t.click})}),h=(c(16),function(t){return Object(r.jsx)("div",{className:"overlay",children:Object(r.jsxs)("div",{className:"gameover-box",children:[Object(r.jsx)("h2",{children:"Game Over"}),Object(r.jsxs)("p",{children:["Your score was: ",t.score]}),Object(r.jsx)("button",{onClick:t.closeHandler,children:"Close"})]})})}),j=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},p=function(t){Object(l.a)(c,t);var e=Object(u.a)(c);function c(){var t;Object(a.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={score:0,current:0,rounds:0,counter:0,showGameOver:!1,gameHasStarted:!1,circles:[{id:1,color:"green"},{id:2,color:"blue"},{id:3,color:"red"},{id:4,color:"yellow"}]},t.pace=1500,t.timer=void 0,t.pickedButtons=[],t.hitButtons=[],t.clickHandler=function(e){t.hitButtons.push(e),t.hitButtons[t.state.counter]===t.pickedButtons[t.state.counter]?t.setState({score:t.state.score+1,counter:t.state.counter+1,rounds:0}):t.stopHandler()},t.nextCircle=function(){if(t.state.rounds>=10)t.stopHandler();else{var e=void 0;do{e=j(1,4)}while(e===t.state.current);t.pickedButtons.push(e),t.setState({current:e,rounds:t.state.rounds+1}),t.pace*=.97,t.timer=setTimeout(t.nextCircle,t.pace),console.log("Active circle is: ",t.state.current)}},t.startHandler=function(){t.state.gameHasStarted||(t.setState({gameHasStarted:!0}),t.nextCircle())},t.stopHandler=function(){clearTimeout(t.timer),t.setState({showGameOver:!0})},t.closeHandler=function(){window.location.reload()},t}return Object(i.a)(c,[{key:"render",value:function(){var t=this,e=this.state.circles.map((function(e){return Object(r.jsx)(d,{color:e.color,click:function(){return t.clickHandler(e.id)},active:t.state.current===e.id},e.id)}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Speedgame"}),Object(r.jsxs)("p",{children:["You score is: ",this.state.score]}),Object(r.jsx)("div",{children:e}),Object(r.jsx)("button",{onClick:this.startHandler,children:"Start"}),Object(r.jsx)("button",{onClick:this.stopHandler,children:"Stop"}),this.state.showGameOver&&Object(r.jsx)(h,{score:this.state.score,closeHandler:this.closeHandler})]})}}]),c}(n.Component);o.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.08cb67fc.chunk.js.map