!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=116)}({116:function(e,t,n){"use strict";(function(e){var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();t.__esModule=!0;var r=n(4),i=n(5),a=n(6),s=n(28),l=n(2),u=function(t){function n(){var o=t.call(this,e)||this;return o.getButton=function(e){return $(s.makeLayerButtonSelector(e))},o.onToolChange=function(e){console.log("tool changed!");var t=e.target;for(var n in s.layerInfo){var r=s.layerInfo[n];if(t.classList.contains(r.toolName)){o.render(s.layerInfo[n]);break}}},o.updateModeIndicator=function(e){var t=document.getElementById(n.selectId);t&&(t.style.display="select"===e?"none":"block")},o.render=function(e){var t=document.getElementById(n.layerId),r=$(t).find("p")[0];t.style.backgroundColor="rgba("+e.bgColors[0]+", "+e.bgColors[1]+", "+e.bgColors[2]+", "+o.getHook().config.backgroundOpacity+")",r.innerHTML=e.bigTxt},o}return o(n,t),n.prototype.createWidget=function(){console.log("Creating widget");var e=document.getElementById("playerzone");if(console.log(e),e){var t=this.getHook().config,o=t.size/9.375+"px",r={height:t.size+"px",padding:o+" "+o+" "+t.size/3.75+"px "+o},u={fontFamily:"Helvetica",fontSize:t.size+"px",lineHeight:"1em",color:"rgba("+t.textFillColor[0]+", "+t.textFillColor[1]+", "+t.textFillColor[2]+", "+t.textFillOpacity+")",textShadow:"2px 2px 0px rgba("+t.textOutlineColor[0]+", "+t.textOutlineColor[1]+", "+t.textOutlineColor[2]+", "+t.textOutlineOpacity+")"},c={opacity:t.globalOpacity,marginBottom:"15px",marginRight:"15px",position:"absolute"};switch(t.corner){case"bottomRight":c.bottom="0",c.right="0";break;case"bottomLeft":c.bottom="0",c.left="0";break;case"topRight":c.top="0",c.right="0";break;case"topLeft":c.top="0",c.left="0";break;default:console.error("Unknown DCL module corner: "+t.corner)}var d=l.DOM.createElement("div",{id:n.rootId,style:c},t.showNotSelecting&&l.DOM.createElement("div",{id:n.selectId,style:a.copy(r,{background:"rgba(255,0,0,"+t.notSelectingOpacity+")"})},l.DOM.createElement("p",{style:u},"Not selecting!")),l.DOM.createElement("div",{id:n.layerId,style:r},l.DOM.createElement("p",{style:u})));e.appendChild(d),this.render(s.layerInfo[i.R20.getCurrentLayer()]),this.updateModeIndicator(i.R20.getCurrentToolName())}},n.prototype.removeWidget=function(){a.findByIdAndRemove(n.rootId)},n.prototype.onSettingChange=function(e,t,n){this.removeWidget(),this.createWidget()},n.prototype.turnOffListener=function(e){e.off("click",this.onToolChange)},n.prototype.setup=function(){var e=this;if(i.R20.isGM()){this.createWidget();var t=function(t){e.turnOffListener(t),t.on("click",e.onToolChange)};for(var n in s.layerInfo){var o=s.layerInfo[n],r=this.getButton(o);t(r)}window.r20es.setModePrologue=this.updateModeIndicator,this.getButton(s.layerInfo[i.R20.CanvasLayer.B20Foreground]).length<=0&&setTimeout(function(){t(e.getButton(s.layerInfo[i.R20.CanvasLayer.B20Foreground])),t(e.getButton(s.layerInfo[i.R20.CanvasLayer.B20Weather])),t(e.getButton(s.layerInfo[i.R20.CanvasLayer.Lighting]))},1e4)}},n.prototype.dispose=function(){for(var e in t.prototype.dispose.call(this),s.layerInfo){var n=s.layerInfo[e];this.turnOffListener(this.getButton(n))}window.r20es.setModePrologue=null,this.removeWidget()},n.selectId="r20es-select",n.layerId="r20es-layer",n.rootId="r20es-drawCurrentLayer-root",n}(r.R20Module.OnAppLoadBase);r.R20Module.canInstall()&&(new u).install()}).call(this,"src/modules/DrawCurrentLayer")},2:function(e,t,n){"use strict";var o,r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};t.__esModule=!0,function(e){e.rerender=function(e,t){var n=e.nextSibling,o=e.parentNode;e.remove();var r=t();return n?o.insertBefore(r,n):o.appendChild(r),r},e.createElement=function(t,n){for(var o,a=[],s=2;s<arguments.length;s++)a[s-2]=arguments[s];var l=null,u="function"==typeof t;u&&t.name&&t.prototype instanceof e.ElementBase?l=new t(n).render():l=u?t(n):document.createElement(t);if(!(l instanceof HTMLElement))return console.error($(i||(i=r(["JSX Render must return a valid element: elem is not an instance of HTMLElement"],["JSX Render must return a valid element: elem is not an instance of HTMLElement"])))),console.table(((o={})['"type" argument']=t,o.Type=typeof l,o.Value=l,o)),console.trace(),null;if(a){var c=document.createDocumentFragment(),d=function(e){for(var t=0,n=e;t<n.length;t++){var o=n[t];if(o instanceof HTMLElement)c.appendChild(o);else if(Array.isArray(o))d(o);else if("number"==typeof o)c.appendChild(document.createTextNode(o.toString()));else if("string"==typeof o)c.appendChild(document.createTextNode(o));else if(null===o||void 0===o||"boolean"==typeof o)console.log("JSX got an unrenderable child value, assuming it's control flow related: type: "+typeof o+" value: "+o+".");else{var r=[];for(var i in o)r.push(o[i]);d(r)}}};d(a),l.appendChild(c)}var f=function(e){return e.startsWith("on")},g=function(e){return e.substring(2).toLowerCase()};for(var p in n)if(n.hasOwnProperty(p)){var h=n[p];if(f(p))l.addEventListener(g(p),h);else if("className"===p)if(h&&Array.isArray(h))for(var m=0,w=h;m<w.length;m++){var v=w[m];!v||v.length<=0||l.classList.add(v)}else"string"==typeof h&&h.length>0&&(l.className=l.className&&l.classList.length>0?l.className+" "+h:h);else"style"===p?"string"==typeof h?l.style.cssText=h:"object"==typeof h?e.apply_style(l,h):void 0!==h&&console.error("Unknown style attribute type: "+typeof h+", "+h):p.startsWith("data")?l.setAttribute(p,h):l[p]=h}return l};var t=function(){return function(){var t=this;this.elementRoot=null,this.render=function(){var e=t.internalRender();return t.setRoot(e),e},this.rerender=function(){return e.rerender(t.getRoot(),function(){return t.render()})},this.setRoot=function(e){return t.elementRoot=e},this.getRoot=function(){return t.elementRoot},this.dispose=function(){t.getRoot().remove()}}}();e.ElementBase=t,e.apply_style=function(e,t){for(var n in t)t.hasOwnProperty(n)&&n&&(e.style[n]=t[n])}}(o||(o={})),t.DOM=o;t.SidebarSeparator=function(e){var t=e&&e.big;return o.createElement("div",null,t&&o.createElement("div",{className:"clear",style:{height:t}}),o.createElement("hr",null),t&&o.createElement("div",{className:"clear",style:{height:t}}))};var i;t.SidebarCategoryTitle=function(e){return o.createElement("h3",{style:{marginBottom:"5px",marginLeft:"5px"}})}},28:function(e,t,n){"use strict";var o;t.__esModule=!0;var r=n(5);t.layerInfo=((o={})[r.R20.CanvasLayer.Map]={bigTxt:"Page Background",txt:"MP",bgColors:[255,255,0],toolName:"choosemap"},o[r.R20.CanvasLayer.PlayerTokens]={bigTxt:"Tokens (Player Visible)",txt:"TK",bgColors:[255,0,0],toolName:"chooseobjects"},o[r.R20.CanvasLayer.GMTokens]={bigTxt:"Game Master Tokens",txt:"GM",bgColors:[0,255,0],toolName:"choosegmlayer"},o[r.R20.CanvasLayer.Lighting]={bigTxt:"Lighting",txt:"LG",bgColors:[0,255,255],toolName:"choosewalls"},o[r.R20.CanvasLayer.B20Foreground]={bigTxt:"Page Foreground",txt:"FG",bgColors:[229,137,25],toolName:"chooseforeground"},o[r.R20.CanvasLayer.B20Weather]={bigTxt:"Weather",txt:"WH",bgColors:[65,24,229],toolName:"chooseweather"},o[r.R20.CanvasLayer.B20Background]={bigTxt:"B20 Background",txt:"BG",bgColors:[208,69,247],toolName:"choosebackground"},o),t.makeLayerButtonSelector=function(e){return"#editinglayer li."+e.toolName}},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e=>{const t=e.replace(/\\/g,"/").split("/");if(t.length<=0)throw new Error("Invalid dirname given.");return t[t.length-1]+".js"})},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.R20Module=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(3));function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}let a={};t.R20Module=a,a.Base=function(){function e(e){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"getAllHooks",e=>window.r20es.hooks),this.filename=(0,o.default)(e),this.isDisposed=!0}var t=e.prototype;return t.installFirstTime=function(){},t.installUpdate=function(){},t.dispose=function(){},t.internalCanInstall=function(){return!!this.getHook().config.enabled&&(!!this.isDisposed||(console.error("Attempted to install module when it's not disposed."),console.table({"Module filename":this.filename}),console.trace(),!1))},t.internalInstallFirstTime=function(){if(this.internalCanInstall()){try{this.installFirstTime()}catch(e){console.error(e)}this.isDisposed=!1}},t.internalInstallUpdate=function(){if(this.internalCanInstall()){try{this.installUpdate()}catch(e){console.error(e)}this.isDisposed=!1}},t.internalDispose=function(){if(console.log(this),this.isDisposed)return console.error("internalDispose called on module that is already disposed!"),console.table({"Module filename":this.filename}),void console.trace();try{this.dispose()}catch(e){console.error(e)}this.isDisposed=!0},t.setConfigValue=function(e,t){const n=this.getHook(),o=this.getHook().config;if(!(e in o))return void console.error(`Tried to set config of key ${e} to value ${t} but key was not found in the config of module id ${n.id}"`);const r=o[e];o[e]=t,n.saveConfig(),o.enabled&&"onSettingChange"in this&&"function"==typeof this.onSettingChange&&this.onSettingChange(e,r,t)},t.getHook=function(){if(!1 in window.r20es)return null;for(const e in window.r20es.hooks){const t=window.r20es.hooks[e];if(t.filename&&t.filename===this.filename)return t}return null},t.toggleEnabledState=function(e){const t=this.getHook(),n=void 0===e||null===e?!t.config.enabled:e;if(t.config.enabled&&n)return;const o=t.config.enabled;t.config.enabled=n,t.saveConfig(),o&&!n?(console.log("disabling"),this.internalDispose()):!o&&n&&(console.log("enabling"),this.internalInstallUpdate())},t.install=function(){if(!("r20esInstalledModuleTable"in window))return;if(!("r20esDisposeTable"in window))return;console.log(`Installing module filename: ${this.filename}`),!(this.filename in window.r20esInstalledModuleTable)?(console.log("First run"),this.internalInstallFirstTime()):(this.filename in window.r20esDisposeTable&&console.error(`DUPLICATE MODULE FOUND: ${this.filename}`),console.log("Calling install update"),this.internalInstallUpdate()),window.r20esDisposeTable[this.filename]=(()=>{this.dispose()}),window.r20esInstalledModuleTable[this.filename]=this,console.log(`DONE! module ID: ${this.filename}`)},e}(),a.SimpleBase=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.installFirstTime=function(){this.setup()},n.installUpdate=function(){this.setup()},n.setup=function(){},t}(a.Base),a.OnAppLoadBase=function(e){function t(t){var n;return(n=e.call(this,t)||this).setup=n.setup.bind(r(r(n))),n}i(t,e);var n=t.prototype;return n.installFirstTime=function(){window.r20es.isLoading?(this.earlySetup(),window.r20es.onAppLoad.addEventListener(this.setup)):(this.earlySetup(),this.setup())},n.earlySetup=function(){},n.setup=function(){},n.installUpdate=function(){this.installFirstTime()},n.dispose=function(){window.r20es.onAppLoad.removeEventListener(this.setup)},t}(a.Base),a.canInstall=(e=>window.r20es&&"canInstallModules"in window.r20es&&window.r20es.canInstallModules),a.getModule=function(e){return"r20esInstalledModuleTable"in window?window.r20esInstalledModuleTable[e]:null},a.getModuleById=function(e){return"r20esInstalledModuleTable"in window?a.getModule(window.r20es.hooks[e].filename):null}},5:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(7);!function(e){var t;function n(){return window.d20.engine.unselect()}function o(e){window.d20.engine.select(e)}function i(){return window.currentPlayer}function a(){return window.currentEditingLayer}function s(){try{var e=window.d20.Campaign.attributes.jukeboxfolder;return JSON.parse(e||"[]")}catch(e){console.error("[getJukeboxFileStructure] failed to get fs due to exception",e)}return[]}function l(e){return window.Jukebox.playlist.get(e)}function u(){return window.d20.Campaign.activePage()}function c(){return window.d20.engine.canvas.getObjects()}function d(t){for(var n=0,o=c();n<o.length;n++){var r=o[n],i=e.try_get_canvas_object_model(r);if(i&&i.get("id")===t)return r}return null}function f(e,t,n){n?($(document).on("mancerroll:"+t,function(e,o){$(document).off("mancerroll:"+t),n(e,o)}),window.d20.textchat.doChatInput(e,"chatbox",t)):window.d20.textchat.doChatInput(e)}function g(e){window.d20.textchat.incoming(!1,{who:"system",type:"system",content:e})}function p(){window.d20.engine.redrawScreenNextTick(!1)}!function(e){e[e.NumericAscending=0]="NumericAscending",e[e.NumericDescending=1]="NumericDescending",e[e.Alphabetical=2]="Alphabetical",e[e.AlphabeticalDescending=3]="AlphabeticalDescending",e[e.Card=4]="Card"}(t=e.InitiativeOrdering||(e.InitiativeOrdering={})),function(e){e.Map="map",e.PlayerTokens="objects",e.GMTokens="gmlayer",e.Lighting="walls",e.B20Foreground="foreground",e.B20Weather="weather",e.B20Background="background"}(e.CanvasLayer||(e.CanvasLayer={})),e.setBackgroundStyle=function(e){window.d20.engine.backgroundColor=e},e.setupImageDropTarget=function(e,t,n){var o={model:{save:t},updateModel:n};window.d20.utils.setupAvatar(e,o)},e.getCanvasMousePos=function(){return window.d20.engine.mousePos.slice()},e.onInitiativeChange=function(t){return new r.EventSubscriber("change:turnorder",t,function(){return e.getInitiativeWindow().model})},e.setCanvasObjectLocation=function(t,n,o){var r=e.try_get_canvas_object_model(t);r&&r.save({top:o,left:n})},e.getBlob=function(e,t,n){return void 0===n&&(n=5e3),new Promise(function(o,r){e._getLatestBlob(t,o),setTimeout(r,n)})},e.getCampaign=function(){return window.Campaign},e.canEditCharacter=function(t){var n=t.attributes.controlledby;return!!e.isGM()||(!!n.includes("all")||!!n.includes(e.getCurrentPlayer().id))},e.getHandout=function(e){return window.Campaign.handouts.get(e)},e.createCharacter=function(e){return window.Campaign.characters.create(e)},e.setCanvasObjectDimensions=function(t,n,o){var r=e.try_get_canvas_object_model(t);r&&r.save({width:n,height:o})},e.getCharacter=function(e){return window.Campaign.characters.get(e)},e.getAllCharacters=function(){return window.Campaign.characters.models},e.getAllPages=function(){return window.Campaign.pages.models},e.createRollableTable=function(e){return window.d20.Campaign.rollabletables.create(e)},e.getRollableTable=function(e){return window.d20.Campaign.rollabletables.get(e)},e.getSelectedTokens=function(){return window.d20.engine.selected()},e.unselectTokens=n,e.addTokenToSelection=o,e.selectToken=function(e){n(),o(e)},e.hideTokenRadialMenu=function(){window.d20.token_editor.removeRadialMenu()},e.hideTokenContextMenu=function(){window.d20.token_editor.closeContextMenu()},e.getCurrentPlayer=i,e.getCanvasZoom=function(){return window.d20.engine.canvasZoom},e.getCanvasWidth=function(){return window.d20.engine.canvas.width},e.getCanvasHeight=function(){return window.d20.engine.canvas.height},e.getCanvasOffsetX=function(){return window.d20.engine.currentCanvasOffset[0]},e.getCanvasOffsetY=function(){return window.d20.engine.currentCanvasOffset[1]},e.getPageById=function(e){return window.Campaign.pages.get(e)},e.isGM=function(){return window.is_gm},e.getCurrentLayer=a,e.generateUUID=function(){return window.generateUUID()},e.getCurrentToolName=function(){return window.d20.engine.mode},e.advanceInitiative=function(){window.d20.Campaign.initiativewindow.nextTurn()},e.addTokenToInitiative=function(e){window.d20.Campaign.initiativewindow.addTokenToList(e)},e.addCustomItemToInitiative=function(e,t){window.d20.Campaign.initiativewindow.addTokenToList("-1",e,t)},e.rerenderMacroBar=function(){window.d20.player_settings.refreshMacroBar()},e.rerenderJournalMacros=function(){window.d20.player_settings.refreshRollsList()},e.orderInitiativeBy=function(e){var n,o=((n={})[t.NumericAscending]=".sortlist_numeric",n[t.NumericDescending]=".sortlist_numericdesc",n[t.Alphabetical]=".sortlist_alpha",n[t.AlphabeticalDescending]=".sortlist_alphadesc",n[t.Card]=".sortlist_card",n);if(e in o){var r=o[e];$("#initiativewindow_settings").dialog({modal:!1,title:"Turn Order Settings",beforeClose:function(){}}),$(r).click()}else console.error("Invalid initiative ordering: "+e)},e.getInitiativeWindow=function(){return window.d20.Campaign.initiativewindow},e.getJukeboxFileStructure=s,e.setJukeboxFileStructure=function(t){e.getCampaign().save({jukeboxfolder:JSON.stringify(t)})},e.createPlaylist=function(e){return window.d20.jukebox.addFolderToFolderStructure(e)},e.addTrackToPlaylist=function(e,t){return window.d20.jukebox.addItemToFolderStructure(e,t)},e.getSongById=l,e.getJukeboxPlaylists=function(){for(var e=[],t=0,n=s();t<n.length;t++){var o=n[t];if("string"!=typeof o){for(var r=o,i={id:r.id,name:r.n,mode:r.s,songs:[]},a=0,u=r.i;a<u.length;a++){var c=u[a],d=l(c);d?i.songs.push(d):console.warn("Tried to get song id "+c+" but the query returned a falsy value. Skipping")}e.push(i)}}return e},e.playAudio=function(e,t){window.Jukebox.soundObjs[e]=window.soundManager.createSound({id:e,url:t})},e.createSong=function(e){return window.Jukebox.playlist.create(e)},e.makePlaylistStructure=function(e,t,n){return{id:window.generateUUID(),n:e,s:t,i:n||[]}},e.getInitiativeData=function(){return window.d20.Campaign.initiativewindow.cleanList()},e.setInitiativeData=function(e){window.d20.Campaign.initiativewindow.model.save({turnorder:JSON.stringify(e)})},e.getCurrentPage=u,e.getCurrentPageTokens=c,e.doesTokenContainMouse=function(e,t){return window.d20.engine.canvas.containsPoint(e,t)},e.getCurrentPageTokenByUUID=d,e.try_get_canvas_object_model=function(e){return e._model?e._model:e.model?e.model:null},e.isUsing5EOGLSheet=function(){try{return window.d20.journal.customSheets.workerScripts[0].includes("5th Edition OGL by Roll20")}catch(e){return!1}},e.moveCameraToTokenByUUID=function(e){if(e){var t=d(e);if(t){var n=$("#editor-wrapper")[0];n.scrollTop=Math.floor(t.top*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasHeight/2)+125*window.d20.engine.canvasZoom,n.scrollLeft=Math.floor(t.left*window.d20.engine.canvasZoom)-Math.floor(window.d20.engine.canvasWidth/2)+125*window.d20.engine.canvasZoom}}},e.primitiveSay=function(e,t){window.d20.textchat.doChatInput(e,t)},e.say=f,e.sayToSelf=function(t,n){var o='/w "'+i().get("displayname")+'" '+t;n?f(o,e.generateUUID(),n):f(o)},e.saySystemRaw=g,e.saySystem=function(e){g('<span style="background: rgba(6,26,45,255);\n    color: whitesmoke;\n    border: none;\n    display: inline-block;\n    padding: 8px;\n    margin: -15px -5px -7px -45px;    \n    "\n>\n'+e+"\n</span>\n        ")},e.ping=function(e,t,n,o,r){n=n||i().id,window.d20.engine.pings[n]={left:e,top:t,radius:-5,player:n,pageid:o||u().id,currentLayer:r||a()},window.d20.engine.pinging={downx:e,downy:t},p()},e.getFabric=function(){return window.exports.fabric},e.renderAll=p,e.setGMLayerOpacity=function(e){window.d20.engine.gm_layer_opacity=e},e.hasBetteR20=function(){return void 0!==window.d20plus},e.wipeObjectStorage=function(e){for(var t=e.length,n=0;n<t;n++){var o=e.length-1;if(0>o)break;var r=e.models[o];if(!r||void 0===r)break;r.destroy()}e.length<0&&console.error("FAILED TO WIPE OBJECT STORAGE!")},e.doBulkRoll=function(t,n,o,r,i){e.unselectTokens();var a=function(t){if(e.selectToken(t),i){var o=i(t);o&&e.say(n,o.id,o.callback)}else e.say(n)},s=function(){if(e.hideTokenRadialMenu(),e.hideTokenContextMenu(),r)for(var n=0,o=t;n<o.length;n++){var i=o[n];e.addTokenToSelection(i)}};if(0===o){for(var l=0,u=t;l<u.length;l++){var c=u[l];a(c)}s()}else for(var d=o,f=function(e){setTimeout(function(){a(t[e]),e+1===t.length&&s()},d),d+=o},g=0;g<t.length;g++)f(g)}}(o||(o={})),t.R20=o},6:function(e,t,n){"use strict";t.__esModule=!0;var o=n(8);t.copy=function(e,t){var n=Object.assign({},e);return t&&(n=Object.assign(n,t)),n};var r=function(e){if("currentTransform"in e)return e.currentTransform;if("getTransform"in e)return e.getTransform();if(e.mozCurrentTransform){var t=e.mozCurrentTransform;return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}};t.getTransform=r,t.nearly_format_file_url=function(e){var t="";try{var n=function(e,t){var n=e.indexOf(t);return n>0?e.substring(0,n):e},o=e.lastIndexOf("/");t=n(t=n(t=n(t=e.substring(o+1),"."),"?"),"#"),t=decodeURIComponent(t)}catch(n){t=e}return t};t.getRotation=function(e){var t=r(e),n=Math.atan2(t.b,t.a);return n<0&&(n+=2*Math.PI),n};t.findByIdAndRemove=function(e){var t=document.getElementById(e);t&&t.remove()};t.mapObj=function(e,t){return Object.keys(e).reduce(function(n,o){var r=t(e[o],o);return void 0!==r&&null!==r&&n.push(r),n},[])};t.safeCall=function(e){try{e()}catch(e){console.error(e)}};t.removeAllChildren=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)};t.replaceAll=function(e,t,n){return e.replace(new RegExp(function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(t),"g"),n)};t.safeParseJson=function(e){try{return JSON.parse(e)}catch(e){alert("File is not a valid JSON file.")}return null};t.readFile=function(e){return new Promise(function(t,n){if(e){var o=new FileReader;o.readAsText(e),o.onload=function(e){t(e.target.result)}}else n("No file given.")})};var i=function(){return chrome||browser};t.getBrowser=i;t.injectScript=function(e){console.log("Injecting "+e);var t=document.createElement("script");t.async=!1,t.src=i().extension.getURL(e),t.onload=function(){t.remove()},document.head.appendChild(t)};t.strIsNullOrEmpty=function(e){return null===e||void 0===e||e.length<=0||e.trim().length<=0};t.createCSSElement=function(e,t){var n=document.createElement("style");return n.innerHTML=e,n.id=t,n};t.getExtUrlFromPage=function(e,t){var n=void 0===t||null===t?1e3:t;return new Promise(function(t,r){try{var i=!1,a=function(){window.removeEventListener("message",l)},s=window.generateUUID(),l=function(e){e.origin===o.Config.appUrl&&e.data.r20esGivesResourceUrl&&e.data.r20esGivesResourceUrl.id===s&&(i=!0,a(),t(e.data.r20esGivesResourceUrl.url))};window.addEventListener("message",l);var u={resource:e,id:s};window.postMessage({r20esWantsResourceUrl:u},o.Config.appUrl),setTimeout(function(){try{i||(a(),r("Timed out after "+n+"ms"))}catch(e){r(e)}},n)}catch(e){r(e)}})}},7:function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(e,t,n){this._isSubscribed=!1,this._name=e,this._callback=t,this._targetGetter=n}return e.subscribe=function(t,n,o){var r=new e(t,n,o);return r.subscribe(),r},e.prototype.subscribe=function(){if(!this._isSubscribed){var e=this._targetGetter();"on"in e?e.on(this._name,this._callback):e.addEventListener(this._name,this._callback),this._isSubscribed=!0}},e.prototype.unsubscribe=function(){if(this._isSubscribed){var e=this._targetGetter();"off"in e?e.off(this._name,this._callback):e.removeEventListener(this._name,this._callback),this._isSubscribed=!1}},e}();t.EventSubscriber=o},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0;let o={};t.Config=o,o.appUrl="https://app.roll20.net",o.websiteFeatureUrlTemplate="https://justas-d.github.io/roll20-enhancement-suite/features#",o.website="https://justas-d.github.io/roll20-enhancement-suite/",o.discordInvite="https://discord.gg/pKxxvuM",o.contributeUrl="https://justas-d.github.io/roll20-enhancement-suite/contribute.html"}});