webpackJsonp([0],{0:function(t,e,n){"use strict";var s=n(14),r=n(125),a=n(342),i=n(363),o=n(425),u=n(428);s.enableProdMode(),r.bootstrap(i.AppComponent,[a.HTTP_PROVIDERS,o.APP_ROUTER_PROVIDERS,u.NETWORKTABLES_SERVICE_PROVIDER])["catch"](function(t){return console.error(t)})},363:function(t,e,n){"use strict";var s=n(14),r=n(364),a=n(417);n(419);var i=function(){function t(t){this.api=t,this.url="https://github.com/preboot/angular2-webpack"}return t=__decorate([s.Component({selector:"my-app",providers:[a.ApiService],directives:r.ROUTER_DIRECTIVES.slice(),template:n(423),styles:[n(424)]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.ApiService&&a.ApiService)&&e||Object])],t);var e}();e.AppComponent=i},417:function(t,e,n){"use strict";function s(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}s(n(418))},418:function(t,e,n){"use strict";var s=n(14),r=function(){function t(){this.title="Zodiac 的视觉中枢"}return t.prototype.getCamera=function(t){switch(t){case 0:return"/stream.mjpg";case 1:return"http://"+window.location.hostname+":5805/?action=stream"}},t=__decorate([s.Injectable(),__metadata("design:paramtypes",[])],t)}();e.ApiService=r},419:944,423:function(t,e){t.exports='<header>\r\n  <nav class="navbar navbar-light">\r\n    <a class="navbar-brand">{{ api.title }}</a>\r\n  </nav>\r\n</header>\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n'},424:function(t,e){t.exports=":host{display:block}\n"},425:function(t,e,n){"use strict";var s=n(364),r=n(426);e.routes=[{path:"",component:r.HomeComponent}],e.APP_ROUTER_PROVIDERS=[s.provideRouter(e.routes)]},426:function(t,e,n){"use strict";function s(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}s(n(427))},427:function(t,e,n){"use strict";var s=n(14),r=n(428),a=n(418),i=function(){function t(t,e){this.ntService=t,this.api=e,this.statuses=[],this.statusList=["auto_enabled","manual_exposure","target_count","target_angle","robotdrive_status"],this.statusName={auto_enabled:"自动瞄准",manual_exposure:"手动曝光",target_count:"目标",target_angle:"角度",robotdrive_status:"底盘"},this._statuses={},this.camera_path=e.getCamera(0),this.camera_status=0}return t.prototype.ngOnInit=function(){var t=this;this.listener=this.ntService.globalListener.subscribe(function(e){var n=e.k,s=e.v,r=(e.isNew,n.split("/"));r.shift(),"vision"==r[0]&&(t._statuses[r[1]]=s),t.__update_status()})},t.prototype.__update_status=function(){this.statuses=[];for(var t=0,e=this.statusList;t<e.length;t++){var n=e[t];if(n in this._statuses){var s={status:this._statuses[n],title:this.statusName[n],info:""};switch(this._statuses[n]){case 0:s.info="已启用";break;case 1:s.info="正在调整";break;case 2:s.info="未启用"}"target_count"==n&&(s.info="发现"+this._statuses.target_count_number+"个目标"),"target_angle"==n&&(s.info="距离"+this._statuses.target_angle_number+"°"),this.statuses.push(s)}}"camera_id"in this._statuses&&(this.camera_status=this._statuses.camera_id,this.camera_path=this.api.getCamera(this._statuses.camera_id))},t.prototype.ngOnDestroy=function(){this.listener.unsubscribe()},t=__decorate([s.Component({selector:"my-home",template:n(430),styles:[n(431)],providers:[r.NETWORKTABLES_SERVICE_PROVIDER,a.ApiService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.NetworkTablesService&&r.NetworkTablesService)&&e||Object,"function"==typeof(i="undefined"!=typeof a.ApiService&&a.ApiService)&&i||Object])],t);var e,i}();e.HomeComponent=i},428:function(t,e,n){"use strict";var s=n(14),r=n(47);n(429);var a=function(){function t(){var t=this;this.ntService=new window.NetworkTables("ws://"+window.location.hostname+":5802/networktables/ws"),this._globalListener=r.Observable.fromEventPattern(function(e){return t.ntService.addGlobalListener(e,!0)},function(e){return t.ntService.removeGlobalListener(e)}),this._wsListener=r.Observable.fromEventPattern(function(e){return t.ntService.addWsConnectionListener(e,!0)},function(e){return t.ntService.removeWsConnectionListener(e)}),this._robotListener=r.Observable.fromEventPattern(function(e){return t.ntService.addRobotConnectionListener(e,!0)},function(e){return t.ntService.removeRobotConnectionListener(e)}),this._robotListener.subscribe(function(e){return t._robotStatus=e}),this._wsListener.subscribe(function(e){return t._wsStatus=e})}return t.getInstance=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.getValue=function(t,e){return this.ntService.getValue(t,e)},t.prototype.putValue=function(t,e){return this.ntService.putValue(t,e)},Object.defineProperty(t.prototype,"globalListener",{get:function(){return this._globalListener},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wsListener",{get:function(){return this._wsListener},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"robotListener",{get:function(){return this._robotListener},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"robotStatus",{get:function(){return this._robotStatus},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wsStatus",{get:function(){return this._wsStatus},enumerable:!0,configurable:!0}),t.instance=null,t=__decorate([s.Injectable(),__metadata("design:paramtypes",[])],t)}();e.NetworkTablesService=a,e.NETWORKTABLES_SERVICE_PROVIDER=s.provide(a,{useFactory:function(){return a.getInstance()}})},430:function(t,e){t.exports='<div class="conatiner-fluid m-t-2 m-x-1">\r\n  <div class="row">\r\n    <div class="col-md-6">\r\n      <div class="card st-card-status">\r\n        <div class="card-header">\r\n          摄像头\r\n        </div>\r\n        <img class="st-camera" [src]="camera_path">\r\n        <div class="card-footer" [ngClass]="{\'bg-success\': camera_status == 0, \'bg-info\': camera_status == 1}">\r\n          已绑定 -\r\n          <span *ngIf="camera_status == 0">前置</span>\r\n          <span *ngIf="camera_status == 1">后置</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="col-md-6">\r\n      <div class="card st-card-status">\r\n        <div class="card-header"\r\n          [ngClass]="{\'bg-warning\': !ntService.robotStatus && ntService.wsStatus, \'bg-info\': !ntService.wsStatus}">\r\n          <span *ngIf="!ntService.wsStatus">未连接 - </span>\r\n          <span *ngIf="!ntService.robotStatus && ntService.wsStatus">未连接到机器人 - </span>\r\n          <span *ngIf="ntService.robotStatus">已连接 - </span>\r\n          视觉处理中心 (前部)\r\n        </div>\r\n        <ul class="list-group list-group-flush">\r\n          <li class="list-group-item"\r\n              [ngClass]="{\'bg-success\': status.status == 0, \'bg-warning\': status.status == 2, \'bg-info\': status.status == 1}"\r\n              *ngFor="let status of statuses">\r\n            <i class="fa fa-check fa-fw" *ngIf="status.status == 0"></i>\r\n            <i class="fa fa-circle-o-notch fa-spin fa-fw" *ngIf="status.status == 1"></i>\r\n            <i class="fa fa-exclamation fa-fw" *ngIf="status.status == 2"></i>\r\n            <span>{{ status.title }}</span>\r\n            <strong>{{ status.info }}</strong>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},431:function(t,e){t.exports=".st-camera{width:100%;height:auto}.st-card-status .list-group-item{border-bottom-width:0 !important;border-top-width:0 !important}\n"}});
//# sourceMappingURL=app.690defcfb469ea90d4af.js.map