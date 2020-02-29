!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var i={};var o={createSvgElement:function(e,t,n){var o=e+";"+t+"x"+n;if(void 0===i[o]){var r=document.createElement("div");return fetch(e).then((function(e){return e.text()})).then((function(e){var s=document.createElement("div");s.innerHTML=e;var l=s.querySelector("svg");l.removeAttribute("xmlns:a"),l.setAttribute("width",t+"px"),l.setAttribute("height",n+"px"),r.parentNode.replaceChild(l,r),i[o]=l})),r}return i[o].cloneNode(!0)}};function r(){this.taskbarElement=null,this.windowManager=null}r.prototype.bind=function(e,t){var n;this.taskbarElement=document.querySelector(e),this.taskbarElement.innerHTML="",this.windowManager=t,(n=document.createElement("div")).classList.add("elara-windows"),this.taskbarElement.appendChild(n),(n=document.createElement("div")).classList.add("elara-window-sets"),this.taskbarElement.appendChild(n);var i=this,o=function(){i.update()};this.windowManager.windowSetCollection.events.selectedChanged.subscribe(o),this.windowManager.windowSetCollection.events.added.subscribe((function(e,t){t.events.focusChanged.subscribe(o),t.events.changed.subscribe(o)})),this.windowManager.windowSetCollection.events.removed.subscribe((function(e,t){t.events.focusChanged.unsubscribe(o),t.events.changed.unsubscribe(o)}));for(var r=0;r<this.windowManager.windowSetCollection.count();r++){var s=this.windowManager.windowSetCollection.getAt(r);s.events.focusChanged.subscribe(o),s.events.changed.subscribe(o)}},r.prototype.update=function(){var e=this.taskbarElement.querySelector(".elara-windows");e.innerHTML="";for(var t=this.windowManager.getActiveControllerSet().getOrdered(),n=0;n<t.length;n++){let l=t[n];var i=document.createElement("div"),r=document.createElement("span");i.className="elara-window-button",r.innerText=l.getTitle();var s=o.createSvgElement(l.getIcon(),16,16);i.appendChild(s),i.appendChild(r),e.appendChild(i),l.state.focus&&i.classList.add("window-focus"),i.addEventListener("click",(function(){l.focusFromTaskbar()}))}this.updateSetButton()},r.prototype.updateSetButton=function(){var e=this.taskbarElement.querySelector(".elara-window-sets");e.innerHTML="";for(var t=this.windowManager.windowSetCollection,n=t.count(),i=t.getSelected(),o=0;o<n;o++){let n=t.getAt(o);var r=document.createElement("div");r.classList.add("window-set"),r.innerText=o+1,n===i?r.classList.add("active"):r.addEventListener("click",(function(){t.select(n)})),e.appendChild(r)}};var s=r,l=(n(1),s),a={};var c={createSvgElement:function(e,t,n){var i=e+";"+t+"x"+n;if(void 0===a[i]){var o=document.createElement("div");return fetch(e).then((function(e){return e.text()})).then((function(e){var r=document.createElement("div");r.innerHTML=e;var s=r.querySelector("svg");s.removeAttribute("xmlns:a"),s.setAttribute("width",t+"px"),s.setAttribute("height",n+"px"),o.parentNode.replaceChild(s,o),a[i]=s})),o}return a[i].cloneNode(!0)}};function d(e){this.name=e,this.dataSource=null}d.prototype.getMenus=function(){return null===this.dataSource?[{title:"["+this.name+"]",items:[]}]:this.dataSource()},d.prototype.setDataSource=function(e){this.dataSource=e};var u=d;function h(){this.toolbarElement=null,this.zones=[],this.tray=[]}h.prototype.bind=function(e,t){this.toolbarElement=document.querySelector(e),this.toolbarElement.innerHTML="";var n=document.createElement("div");n.classList.add("elara-toolbar-buttons"),this.toolbarElement.appendChild(n)},h.prototype.addZone=function(e){var t=new u(e);return this.zones.push(t),this.renderMenu(),t},h.prototype.renderMenu=function(){var e=this.toolbarElement.querySelector(".elara-toolbar-buttons");e.innerHTML="";for(var t=!1,n=0;n<this.zones.length;n++){var i=this.zones[n].getMenus();if(null!==i&&i.length>0){t&&e.appendChild(this.constructSeperator()),t=!0;for(var o=0;o<i.length;o++)e.appendChild(this.constructorDropdownButton(i[o]))}}},h.prototype.constructSeperator=function(){var e=document.createElement("div");return e.className="elara-seperator",e},h.prototype.constructorDropdownButton=function(e){var t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div");t.className="elara-dropdown-button",n.className="elara-button",n.innerText=e.title,i.className="elara-dropdown-items";var o=this;return n.addEventListener("click",(function(){o.open(t,e)})),t.appendChild(n),t.appendChild(i),t},h.prototype.constructButton=function(e){var t=document.createElement("div");t.className="elara-menu-button";var n=this;if(t.addEventListener("click",(function(){!0!==e.click()&&n.close()})),void 0!==e.icon){var i=document.createElement("div");i.className="elara-button-icon-container",i.appendChild(c.createSvgElement(e.icon,16,16)),t.appendChild(i)}var o=document.createElement("div");return o.className="elara-menu-button-label",o.innerText=e.title,t.appendChild(o),t},h.prototype.open=function(e,t){if(e.classList.contains("opened"))e.classList.remove("opened");else{this.close(),e.classList.add("opened");for(var n=e.querySelector(".elara-dropdown-items"),i=t.items,o=0;o<i.length;o++){var r=this.constructButton(i[o]);n.appendChild(r)}}},h.prototype.close=function(){for(var e=this.toolbarElement.querySelectorAll(".elara-dropdown-button"),t=0;t<e.length;t++){for(var n=e[t].querySelectorAll(".elara-dropdown-items"),i=0;i<n.length;i++)n[i].innerHTML="";e[t].classList.remove("opened")}},h.prototype.renderTray=function(){};var p=h,w=(n(2),p);function m(e){this.owner=e,this.subscribers=[]}m.prototype.subscribe=function(e){this.subscribers.push(e)},m.prototype.unsubscribe=function(e){var t=this.subscribers.indexOf(e);-1!==t&&this.subscribers.splice(t,1)},m.prototype.invoke=function(e){for(var t=0;t<this.subscribers.length;t++)this.subscribers[t](this.owner,e)};var f=m;function v(e){var t=this;if(t.value=e,t.unit=null,t.number=null,Number.isInteger(e))t.unit="px",t.number=e;else if(Number(e)===e&&e%1!=0)t.unit="px",t.number=Math.floor(e);else if(e.endsWith("px"))t.unit="px",t.number=+e.substring(0,e.length-2);else{if(!e.endsWith("%"))throw"Invalid value";t.unit="%",t.number=+e.substring(0,e.length-1)}t.raw=function(){return t.value},t.getPx=function(){if("px"===t.unit)return t.number;throw"The value does not have the unit: px."},t.cssValue=function(){return t.number+t.unit}}function g(e,t){this.x=e,this.y=t}function y(e,t,n){this.x=e,this.y=t,this.z=n}function b(){this.controllers=[],this.orderedControllers=[],this.focus=null,this.events={changed:new f(this),focusChanged:new f(this)}}b.prototype.add=function(e){this.controllers.push(e),this.orderedControllers.push(e);var t=this;e.events.closed.subscribe((function(){t.remove(e),t.events.changed.invoke()})),e.events.focus.subscribe((function(){t.setFocus(e)})),e.events.lostFocus.subscribe((function(){t.resetFocus()})),this.events.changed.invoke()},b.prototype.get=function(e){e=+e;for(var t=0;t<this.controllers.length;t++)if(this.controllers[t].getId()==e)return this.controllers[t];return null},b.prototype.stash=function(){for(var e=0;e<this.controllers.length;e++)this.controllers[e].stash()},b.prototype.resume=function(){for(var e=0;e<this.controllers.length;e++)this.controllers[e].resume()},b.prototype.remove=function(e){var t=this.controllers.indexOf(e);if(-1===t)throw"Window controller not found.";var n=this.orderedControllers.indexOf(e);if(-1===n)throw"Window controller not found.";this.controllers.splice(t,1),this.orderedControllers.splice(n,1),this.events.changed.invoke()},b.prototype.getOrdered=function(){return this.orderedControllers},b.prototype.getMaximumForPositionZ=function(){for(var e=-1,t=0;t<this.controllers.length;t++){var n=this.controllers[t].position.z;n>e&&(e=n)}return e},b.prototype.setFocus=function(e){this.focus=e,this.controllers.sort((function(t,n){return t==e?1:n==e?-1:t.position.z-n.position.z}));for(var t=0;t<this.controllers.length;t++)this.controllers[t].position.z=new v(t),this.controllers[t].applyDimensions();var n=!1;for(t=0;t<this.controllers.length;t++)this.controllers[t].state.focus&&(this.controllers[t].state.focus=!1,this.controllers[t].applyState(),n=!0);e.state.focus||(e.state.focus=!0,e.applyState(),n=!0),n&&this.events.focusChanged.invoke()},b.prototype.resetFocus=function(e){this.focus=null;for(var t=!1,n=0;n<this.controllers.length;n++)this.controllers[n].state.focus&&(this.controllers[n].state.focus=!1,this.controllers[n].applyState(),t=!0);t&&this.events.focusChanged.invoke()},b.prototype.getCurrentFocus=function(e){return this.focus},b.prototype.cascade=function(){for(var e=0;e<this.controllers.length;e++)this.controllers[e].show(),this.controllers[e].move(100+50*e,100+50*e)},b.prototype.minimizeAll=function(){for(var e=0;e<this.controllers.length;e++)this.controllers[e].minimize()},b.prototype.showAll=function(){for(var e=0;e<this.controllers.length;e++)this.controllers[e].show()},b.prototype.maximizeAll=function(){for(var e=0;e<this.controllers.length;e++)this.controllers[e].show(),this.controllers[e].maximize()},b.prototype.split=function(){for(var e=0;e<this.controllers.length;e++)this.controllers[e].show();var t=this.controllers.length;if(0!==t)if(1===t)this.controllers[0].resize("fullscreen");else if(2===t)this.controllers[0].resize("left"),this.controllers[1].resize("right");else if(3===t)this.controllers[0].resize("top-left"),this.controllers[1].resize("top-right"),this.controllers[2].resize("bottom");else if(t>3){var n=this.controllers.reverse();n[0].resize("top-left"),n[1].resize("top-right"),n[2].resize("bottom-left"),n[3].resize("bottom-right");for(e=4;e<t;e++)n[e].hide()}};var C=b;function z(){this.sets=[],this.selected=null,this.events={selectedChanged:new f(this),added:new f(this),removed:new f(this)}}z.prototype.getSelected=function(){return this.selected},z.prototype.getAt=function(e){return this.sets[e]},z.prototype.add=function(){var e=new C;this.sets.push(e),this.events.added.invoke(e)},z.prototype.select=function(e){if(-1===this.sets.indexOf(e))throw"Set not found";null!==this.selected&&this.selected.stash(),this.selected=e,this.selected.resume(),this.events.selectedChanged.invoke()},z.prototype.selectAt=function(e){null!==this.selected&&this.selected.stash(),this.selected=this.sets[e],this.selected.resume(),this.events.selectedChanged.invoke()},z.prototype.count=function(){return this.sets.length};var E=z;var S=function(){var e=this;e.session=null,e.start=function(t,n){var i={target:t.target,initialPageX:t.pageX,initialPageY:t.pageY,first:!0,transform:n.transform};return n.init(i),e.session=i,window.addEventListener("mousemove",e.moveHandler,!0),window.addEventListener("mouseup",e.moveUpHandler,!1),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,!1},e.hasSession=function(){return null!==e.session},e.moveHandler=function(t){var n=t.pageX-e.session.initialPageX,i=t.pageY-e.session.initialPageY;return e.session.transform(e.session,n,i,t.pageX,t.pageY,e.session.first,!1),e.session.first=!1,t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,!1},e.moveUpHandler=function(t){window.removeEventListener("mousemove",e.moveHandler,!0),window.removeEventListener("mouseup",e.moveUpHandler,!1);var n=t.pageX-e.session.initialPageX,i=t.pageY-e.session.initialPageY;e.session.transform(e.session,n,i,t.pageX,t.pageY,e.session.first,!0),e.session=null}};function x(e){this.windowManager=e,this.engine=new S,this.resizeZoneSize=16}x.prototype.onTitlebarGrab=function(e){var t=this;t.engine.start(e,{init:function(e){e.window=e.target.closest(".elara-window"),e.controller=t.windowManager.getController(e.window.getAttribute("data-controller-id"));var n=t.windowManager.windowContainer.getBoundingClientRect(),i=e.window.getBoundingClientRect();e.initialWindowLeft=i.left-n.left,e.initialWindowTop=i.top-n.top},transform:function(e,n,i,o,r,s,l){s&&(t.windowManager.windowContainer.classList.add("window-dragging-active"),e.controller.state.moving=!0,e.controller.applyState(),e.controller.focus(),e.window.style["z-index"]=2e3);var a=e.initialWindowLeft+n,c=e.initialWindowTop+i;if(e.controller.move(a,c),l){var d=t.windowManager.getSuggestedDocking(o,r);null!=d?e.controller.resize(d):e.controller.move(a,c),t.windowManager.windowContainer.classList.remove("window-dragging-active"),e.controller.state.moving=!1,e.controller.applyState()}else e.controller.state.relative&&e.controller.setRelative(!1),t.windowManager.renderSuggestedDocking(o,r)}})},x.prototype.determineResizeCursor=function(e,t){if("resize"===e&&"resize"==t||"move"===e&&"move"==t)return"nw-resize";if("resize"===e&&"move"==t||"move"===e&&"resize"==t)return"ne-resize";if("none"!==e&&"none"===t)return"e-resize";if("none"===e&&"none"!==t)return"n-resize";throw"invalid input"},x.prototype.determineModes=function(e,t,n,i){var o=this.resizeZoneSize,r="none",s="none";return e<16?r="move":n-e<o&&(r="resize"),t<o?s="move":i-t<o&&(s="resize"),{hmode:r,vmode:s}},x.prototype.onWindowGrab=function(e){var t=this;t.engine.start(e,{init:function(n){n.window=n.target.closest(".elara-window"),n.controller=t.windowManager.getController(n.window.getAttribute("data-controller-id"));var i=t.windowManager.windowContainer.getBoundingClientRect(),o=n.window.getBoundingClientRect();n.initialWindowX=o.left-i.left,n.initialWindowY=o.top-i.top,n.initialWidth=n.controller.size.x.getPx(),n.initialHeight=n.controller.size.y.getPx();var r=e.pageX-o.left,s=e.pageY-o.top,l=t.determineModes(r,s,o.width,o.height);n.hmode=l.hmode,n.vmode=l.vmode,n.window.style.cursor=t.determineResizeCursor(n.hmode,n.vmode)},transform:function(e,n,i,o,r,s,l){s&&(t.windowManager.windowContainer.classList.add("window-resize-active"),e.controller.state.resizing=!0,e.controller.applyState(),e.controller.focus(),e.window.style["z-index"]=2e3);var a=e.initialWindowX,c=e.initialWindowY,d=e.initialWidth,u=e.initialHeight;"resize"===e.hmode?d+=n:"move"===e.hmode&&(a+=n,d-=n),"resize"===e.vmode?u+=i:"move"===e.vmode&&(c+=i,u-=i),d<0&&(d=0),u<0&&(u=0),e.controller.move(a,c),e.controller.resize(d,u),l&&(e.controller.state.resizing=!1,e.controller.applyState(),t.windowManager.windowContainer.classList.remove("window-resize-active"))}})},x.prototype.init=function(){var e=this;document.addEventListener("mousedown",(function(t){if(t.target.classList.contains("elara-title-bar")||t.target.classList.contains("elara-title"))e.onTitlebarGrab(t);else if(t.target.classList.contains("elara-window"))e.onWindowGrab(t);else for(var n=0;n<t.path.length;n++)if(void 0!==t.path[n].classList&&t.path[n].classList.contains("elara-window")){var i=e.windowManager.getController(t.path[n].getAttribute("data-controller-id"));return void(i.state.focus||i.focus())}})),document.addEventListener("mousemove",(function(t){if(void 0!==t.target.classList&&t.target.classList.contains("elara-window")&&!e.engine.hasSession()){var n=t.target,i=n.getBoundingClientRect(),o=t.pageX-i.left,r=t.pageY-i.top,s=e.determineModes(o,r,i.width,i.height);n.style.cursor=e.determineResizeCursor(s.hmode,s.vmode)}}))};var M=x;function L(){}L.prototype.window=function(){var e=this.titleBar(),t=this.content(),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");return n.className="elara-window",i.className="elara-window-visible",o.className="elara-window-overlay",n.appendChild(i),i.appendChild(e),i.appendChild(t),i.appendChild(o),n},L.prototype.titleBar=function(){var e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div");e.className="elara-title-bar",t.className="elara-title",n.className="elara-icon-container";var i=this.controlbox();return e.appendChild(n),e.appendChild(t),e.appendChild(i),e},L.prototype.controlbox=function(){var e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div");return e.className="elara-control-button minimize",t.className="elara-control-button maximize",n.className="elara-control-button close",i.className="elara-control-box",i.appendChild(e),i.appendChild(t),i.appendChild(n),i},L.prototype.content=function(){var e=document.createElement("div");return e.className="elara-window-content",e};var T=L,k={fullscreen:{top:0,left:0,width:"100%",height:"100%"},"top-left":{top:0,left:0,width:"50%",height:"50%"},"top-right":{top:0,left:"50%",width:"50%",height:"50%"},"bottom-left":{top:"50%",left:0,width:"50%",height:"50%"},"bottom-right":{top:"50%",left:"50%",width:"50%",height:"50%"},left:{top:0,left:0,width:"50%",height:"100%"},right:{top:0,left:"50%",width:"50%",height:"100%"},top:{top:0,left:0,width:"100%",height:"50%"},bottom:{top:"50%",left:0,width:"100%",height:"50%"}},D={};var A={createSvgElement:function(e,t,n){var i=e+";"+t+"x"+n;if(void 0===D[i]){var o=document.createElement("div");return fetch(e).then((function(e){return e.text()})).then((function(e){var r=document.createElement("div");r.innerHTML=e;var s=r.querySelector("svg");s.removeAttribute("xmlns:a"),s.setAttribute("width",t+"px"),s.setAttribute("height",n+"px"),o.parentNode.replaceChild(s,o),D[i]=s})),o}return D[i].cloneNode(!0)}};function N(e){this.id=e,this.nonRelativeDimensions=null,this.icon=null,this.title=null,this.position=new y(new v(0),new v(0),new v(0)),this.size=new g(new v(0),new v(0)),this.state={hidden:!1,relative:!1,moving:!1,resizing:!1,focus:!1,stashed:!1,allowMinimize:!0,allowMaximize:!0,allowClose:!0,alwaysOnTop:!1},this.windowElement=null,this.events={closed:new f(this),focus:new f(this),lostFocus:new f(this)}}N.prototype.applyDimensions=function(){null!==this.windowElement&&(this.windowElement.style.left=this.position.x.cssValue(),this.windowElement.style.top=this.position.y.cssValue(),this.windowElement.style["z-index"]=this.position.z.raw(),this.windowElement.style.width=this.size.x.cssValue(),this.windowElement.style.height=this.size.y.cssValue())},N.prototype.applyState=function(){var e=this;function t(t,n,i){e.state[t]!==i?e.windowElement.classList.contains(n)||e.windowElement.classList.add(n):e.windowElement.classList.contains(n)&&e.windowElement.classList.remove(n)}null!==this.windowElement&&(t("hidden","elara-window-hidden",!1),t("relative","elara-window-relative",!1),t("moving","elara-window-moving",!1),t("resizing","elara-window-resizing",!1),t("focus","elara-window-focus",!1),t("stashed","elara-window-stashed",!1),t("allowMinimize","elara-window-disable-minimize",!0),t("allowMaximize","elara-window-disable-maximize",!0),t("allowClose","elara-window-disable-close",!0),t("alwaysOnTop","elara-window-always-on-top",!1))},N.prototype.setRelative=function(e){this.state.relative!=e&&(this.state.relative=e,this.applyState(),e?this.setNonRelativeDimensions(this.position.x.raw(),this.position.y.raw(),this.size.x.raw(),this.size.y.raw()):this.restoreNonRelativeDimensions())},N.prototype.show=function(){this.state.hidden=!1,this.applyState()},N.prototype.minimize=function(){this.state.hidden=!0,this.applyState(),this.hasFocus()&&this.events.lostFocus.invoke()},N.prototype.setTitle=function(e){this.title=e,this.windowElement.querySelector(".elara-title").innerText=e},N.prototype.getTitle=function(){return this.title},N.prototype.getContentContainer=function(){return this.windowElement.querySelector(".elara-window-content")},N.prototype.toggleMaximize=function(){this.state.relative?this.setRelative(!1):this.resize("fullscreen")},N.prototype.getId=function(){return this.id},N.prototype.getWindow=function(){return this.windowElement},N.prototype.bindWindowElement=function(e){var t=this;e.querySelector(".elara-control-button.minimize").addEventListener("click",(function(){t.minimize()})),e.querySelector(".elara-control-button.maximize").addEventListener("click",(function(){t.maximize()})),e.querySelector(".elara-control-button.close").addEventListener("click",(function(){t.close()})),e.querySelector(".elara-title-bar").addEventListener("dblclick",(function(){t.toggleMaximize()})),e.setAttribute("data-controller-id",this.getId()),this.windowElement=e,this.applyDimensions(),this.applyState()},N.prototype.maximize=function(){this.resize("fullscreen")},N.prototype.close=function(){this.windowElement.parentElement.removeChild(this.windowElement),this.events.closed.invoke()},N.prototype.getIcon=function(){return this.icon},N.prototype.setIcon=function(e){if(this.icon!==e){this.icon=e;var t=this.windowElement.querySelector(".elara-icon-container");t.innerHTML="",t.appendChild(A.createSvgElement(this.icon,16,16))}},N.prototype.setNonRelativeDimensions=function(e,t,n,i){this.nonRelativeDimensions=null===e?null:{x:e,y:t,width:n,height:i}},N.prototype.restoreNonRelativeSize=function(){null!==this.nonRelativeDimensions&&(this.resize(this.nonRelativeDimensions.width,this.nonRelativeDimensions.height),this.nonRelativeDimensions=null)},N.prototype.restoreNonRelativePosition=function(){null!==this.nonRelativeDimensions&&(this.move(this.nonRelativeDimensions.x,this.nonRelativeDimensions.y),this.nonRelativeDimensions=null)},N.prototype.restoreNonRelativeDimensions=function(){if(null!==this.nonRelativeDimensions){var e=this.nonRelativeDimensions;this.move(e.x,e.y),this.resize(e.width,e.height),this.nonRelativeDimensions=null}},N.prototype.hasFocus=function(){return this.windowElement.classList.contains("elara-window-focus")},N.prototype.focus=function(){this.events.focus.invoke()},N.prototype.focusFromTaskbar=function(){this.hasFocus()?this.minimize():(this.show(),this.focus())},N.prototype.move=function(e,t){this.position.x=new v(e),this.position.y=new v(t),this.state.hidden=!1,this.applyDimensions(),this.applyState()},N.prototype.resize=function(e,t){if("string"==typeof e){var n=e;this.setRelative(!0);var i=k[n];this.position.x=new v(i.left),this.position.y=new v(i.top),this.size.x=new v(i.width),this.size.y=new v(i.height),this.applyDimensions()}else this.size.x=new v(e),this.size.y=new v(t),this.applyDimensions()},N.prototype.stash=function(){this.state.stashed=!0,this.applyState()},N.prototype.resume=function(){this.state.stashed=!1,this.applyState()},N.prototype.setAllowMinimize=function(e){this.state.allowMinimize!==e&&(this.state.allowMinimize=e,this.applyState())},N.prototype.setAllowMaximize=function(e){this.state.allowMaximize!==e&&(this.state.allowMaximize=e,this.applyState())},N.prototype.setAllowClose=function(e){this.state.allowClose!==e&&(this.state.allowClose=e,this.applyState())},N.prototype.setAlwaysOnTop=function(e){this.state.alwaysOnTop!==e&&(this.state.alwaysOnTop=e,this.applyState())};var R=N,W=[{left:0,right:1,top:0,bottom:1,name:"top-left"},{left:99,right:100,top:0,bottom:1,name:"top-right"},{left:0,right:1,top:99,bottom:100,name:"bottom-left"},{left:99,right:100,top:99,maxY:100,name:"bottom-right"},{left:0,right:100,top:0,bottom:1,name:"fullscreen"},{left:0,right:1,top:0,bottom:100,name:"left"},{left:99,right:100,top:0,bottom:100,name:"right"},{left:0,right:100,top:99,bottom:100,name:"bottom"}];function q(){this.windowContainer=null,this.windowSetCollection=new E,this.windowSetCollection.add(),this.windowSetCollection.selectAt(0),this.dragging=new M(this),this.construct=new T;var e=1;this.getNextId=function(){return e++}}q.prototype.bind=function(e){this.windowContainer=document.querySelector(e);var t=document.createElement("div");t.classList.add("window-drag-overlay"),this.windowContainer.appendChild(t),this.dragging.init()},q.prototype.getController=function(e){for(var t=this.windowSetCollection.count(),n=0;n<t;n++){var i=this.windowSetCollection.getAt(n).get(e);if(null!==i)return i}return null},q.prototype.getActiveControllerSet=function(){return this.windowSetCollection.getSelected()},q.prototype.createIFrameWindow=function(e,t){var n=this.createWindow(t),i=n.getContentContainer(),o=document.createElement("iframe");return o.src=e,i.appendChild(o),o.onload=function(){n.setTitle(o.contentDocument.title)},n.iframe=o,n},q.prototype.createWindow=function(e){var t=new R(this.getNextId()),n={title:"-",size:{width:600,height:400},location:{x:100,y:100},icon:null,allowMinimize:!0,allowMaximize:!0,allowClose:!0,alwaysOnTop:!1};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);var o=this.construct.window();return t.bindWindowElement(o),t.move(n.location.x,n.location.y),t.resize(n.size.width,n.size.height),t.setIcon(n.icon),t.setTitle(n.title),t.setAllowMinimize(n.allowMinimize),t.setAllowMaximize(n.allowMaximize),t.setAllowClose(n.allowClose),t.setAlwaysOnTop(n.alwaysOnTop),this.windowContainer.appendChild(o),this.getActiveControllerSet().add(t),t.focus(),t},q.prototype.getSuggestedDocking=function(e,t){var n=this.windowContainer.getBoundingClientRect(),i=Math.round((e-n.left)/n.width*100),o=Math.round((t-n.top)/n.height*100);i=Math.min(Math.max(i,0),100),o=Math.min(Math.max(o,0),100);for(var r=W,s=0;s<r.length;s++){var l=r[s];if(i>=l.left&&i<=l.right&&o>=l.top&&o<=l.bottom)return l.name}return null},q.prototype.renderSuggestedDocking=function(e,t){var n=this.getSuggestedDocking(e,t),i=this.windowContainer.querySelector(".window-drag-overlay .dock-preview");if(null!==n){null===i&&((i=document.createElement("div")).classList.add("dock-preview"),i.appendChild(document.createElement("div")),this.windowContainer.querySelector(".window-drag-overlay").appendChild(i)),i.style.display="block";var o=k[n];i.style.top=o.top,i.style.left=o.left,i.style.width=o.width,i.style.height=o.height}else null!==i&&(i.style.display="none")};var O=q,P=(n(3),O);function H(e,t){this.parent=e,this.title=t.title,this.image=t.image,this.open=t.open,this.element=null}H.prototype.construct=function(){var e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),i=document.createElement("img");return e.classList.add("tile"),t.classList.add("title"),n.classList.add("image-container"),t.innerText=this.title,i.src=this.image,n.appendChild(i),e.appendChild(n),e.appendChild(t),i.addEventListener("dblclick",this.open),t.addEventListener("dblclick",this.open),this.element=e,e};var B=H;function F(){this.selector=null,this.items=[]}F.prototype.bind=function(e){this.selector=e},F.prototype.update=function(e){this.items=[];for(var t=0;t<e.length;t++)this.items.push(new B(this,e[t]));this.construct()},F.prototype.construct=function(){var e=document.querySelector(this.selector);e.innerHTML="";for(var t=0;t<this.items.length;t++)e.appendChild(this.items[t].construct())};var Y=F,I=(n(4),Y);window.Elara={WindowManager:P,Taskbar:l,Toolbar:w,TileView:I}}]);