(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/eleanor.85c88304.jpg"},function(e,t,a){e.exports=a.p+"static/media/chidi.50b0039a.jpg"},function(e,t,a){e.exports=a.p+"static/media/tahani.0dd80174.jpg"},function(e,t,a){e.exports=a.p+"static/media/jason.5a6c70ee.jpg"},function(e,t,a){e.exports=a.p+"static/media/michael.9b39574f.jpg"},function(e,t,a){e.exports=a.p+"static/media/shawn.f2785f2a.jpg"},function(e,t,a){e.exports=a.p+"static/media/mindy-st-claire.11dfcb12.jpg"},function(e,t,a){e.exports=a.p+"static/media/disco_janet.662caab4.png"},function(e,t,a){e.exports=a.p+"static/media/neutral_janet.6800c033.png"},function(e,t,a){e.exports=a.p+"static/media/bad_janet.625eb76a.jpg"},function(e,t,a){e.exports=a.p+"static/media/good_janet.d3f36ab8.jpg"},function(e,t,a){e.exports=a.p+"static/media/the_judge.b6915e09.png"},,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),r=a.n(s),i=a(4),o=a(5),l=a(19),u=a(6),h=a(1),p=a(20),d=(a(26),function(e){return c.a.createElement("div",{className:"navbar "},c.a.createElement("div",null,"Clicky Game"),c.a.createElement("div",{className:e.navMsgColor},e.navMessage),c.a.createElement("div",null,"Score: ",e.score," ",c.a.createElement("span",{className:"pipe"},"|")," High Score: ",e.highScore))}),f=(a(27),a(28),function(e){return c.a.createElement("div",{className:"card col-3",onClick:function(t){return e.clickEvent(t.target.src)}},c.a.createElement("img",{className:"card-img-top card-height",src:e.name,alt:""}))}),m=function(e){return c.a.createElement("div",{className:e.shake?"container d-flex flex-wrap justify-content-center shake":"container d-flex flex-wrap justify-content-center"}," "," ",e.characters.map((function(t,a){return c.a.createElement(f,{name:t,key:a,clickEvent:e.clickEvent})}))," "," "," ")},g=a(7),v=a.n(g),k=a(8),C=a.n(k),j=a(9),E=a.n(j),b=a(10),x=a.n(b),y=a(11),M=a.n(y),w=a(12),S=a.n(w),N=a(13),O=a.n(N),_=a(14),A=a.n(_),G=a(15),I=a.n(G),J=a(16),B=a.n(J),H=a(17),T=a.n(H),Y=a(18),q=a.n(Y),z=[v.a,C.a,E.a,x.a,M.a,S.a,O.a,A.a,I.a,B.a,T.a,q.a],D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,highScore:0,navMsgColor:"",navMessage:"Click an image to begin!",allCharacters:a.shuffleArray(),wasClicked:[],shake:!1},a.clickEvent=a.checkClicked.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"shuffleArray",value:function(){for(var e=z.slice(),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t}},{key:"checkClicked",value:function(e){var t=this,a=this.state.wasClicked.slice(),n=this.shuffleArray(),c=this.state.score,s=this.state.highScore;if(this.state.wasClicked.includes(e)||(c===s?(c++,s++):c++,a.push(e)),this.state.wasClicked.includes(e)){return this.setState({score:0,highScore:s,navMsgColor:"incorrect",navMessage:"Incorrect guess!",allCharacters:n,wasClicked:[],shake:!0})}return this.setState({score:c,highScore:s,navMsgColor:"correct",navMessage:"You Guessed Correctly!",allCharacters:n,wasClicked:a,shake:!1}),setTimeout((function(){return t.setState({navMsgColor:""})}),500)}},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,c.a.createElement(d,{score:e.score,highScore:e.highScore,navMessage:e.navMessage,navMsgColor:e.navMsgColor})," "," ",c.a.createElement("div",{className:"row"},c.a.createElement(m,{shake:e.shake,characters:e.allCharacters,clickEvent:this.clickEvent})," ")," "," ")}}]),t}(n.Component);a(29);r.a.render(c.a.createElement(D,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.e8e63f6f.chunk.js.map