"use strict";(self.webpackChunkDRAGON_Serious_Game=self.webpackChunkDRAGON_Serious_Game||[]).push([[805],{1482:(O,u,a)=>{a.d(u,{O:()=>E});var t=a(5879),h=a(6814),p=a(4170),_=a(2032),C=a(6223),d=a(8034),r=a(8261),f=a(4196);function x(o,M){if(1&o&&t._UZ(0,"app-ui-kaas-heading",6),2&o){const l=t.oxw();t.Q6J("label",l.label)}}function v(o,M){if(1&o&&t._UZ(0,"app-ui-kaas-hint",6),2&o){const l=t.oxw();t.Q6J("label",l.hint)}}let E=(()=>{class o{constructor(){this.label="",this.hint="",this.valueChange=new t.vpe,this.changeDate=new t.vpe}ngOnInit(){}change(l){this.valueChange.emit(this.value),this.changeDate.emit()}static#t=this.\u0275fac=function(m){return new(m||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-datepicker"]],inputs:{label:"label",hint:"hint",value:"value"},outputs:{valueChange:"valueChange",changeDate:"changeDate"},decls:8,vars:5,consts:[[1,"w-full","calendare-style"],[3,"label",4,"ngIf"],[1,"w-full"],["matInput","","readonly","",3,"matDatepicker","ngModel","ngModelChange","dateChange","input"],["matIconSuffix","",3,"for"],["picker",""],[3,"label"]],template:function(m,e){if(1&m){const c=t.EpF();t.TgZ(0,"div",0),t.YNc(1,x,1,1,"app-ui-kaas-heading",1),t.TgZ(2,"mat-form-field",2)(3,"input",3),t.NdJ("ngModelChange",function(s){return e.value=s})("dateChange",function(s){return e.change(s)})("input",function(){t.CHM(c);const s=t.MAs(6);return t.KtG(s.close())}),t.qZA(),t._UZ(4,"mat-datepicker-toggle",4)(5,"mat-datepicker",null,5),t.qZA(),t.YNc(7,v,1,1,"app-ui-kaas-hint",1),t.qZA()}if(2&m){const c=t.MAs(6);t.xp6(1),t.Q6J("ngIf",""!=e.label),t.xp6(2),t.Q6J("matDatepicker",c)("ngModel",e.value),t.xp6(1),t.Q6J("for",c),t.xp6(3),t.Q6J("ngIf",""!=e.hint)}},dependencies:[h.O5,p.KE,p.R9,_.Nt,C.Fj,C.JJ,d.Mq,d.hl,d.nW,C.On,r.R,f.u],styles:[".calendare-style[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper{border:1px solid var(--border)!important;border-radius:6px;color:#000;background-color:#fff!important}.calendare-style[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{display:none}.calendare-style[_ngcontent-%COMP%]     .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple:before{border-color:transparent!important}.calendare-style[_ngcontent-%COMP%]     .mdc-line-ripple{border:none!important;display:none}.calendare-style[_ngcontent-%COMP%]     .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{height:38.19px!important}.calendare-style[_ngcontent-%COMP%]     .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:8px!important;padding-bottom:8px!important}.calendare-style[_ngcontent-%COMP%]     .mat-mdc-form-field-icon-prefix, .calendare-style[_ngcontent-%COMP%]     .mat-mdc-form-field-icon-suffix{align-self:flex-start!important;padding-top:0!important;padding-bottom:0!important}.calendare-style[_ngcontent-%COMP%]     .mat-mdc-icon-button.mat-mdc-button-base{height:38.19px!important;padding-top:0!important;padding-bottom:0!important}.calendare-style[_ngcontent-%COMP%]     .mat-mdc-icon-button .mat-mdc-button-touch-target{height:38.19px!important}"]})}return o})()},6863:(O,u,a)=>{a.d(u,{_:()=>E});var t=a(5879),h=a(6814),p=a(6223),_=a(7466),C=a(8261),d=a(4196),r=a(9515);function f(o,M){if(1&o&&t._UZ(0,"app-ui-kaas-heading",3),2&o){const l=t.oxw();t.Q6J("label",l.label)}}function x(o,M){if(1&o&&(t.TgZ(0,"mat-radio-button",4),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const l=M.$implicit;t.Q6J("value",l.value),t.xp6(1),t.hij(" ",t.lcZ(2,2,l.label)," ")}}function v(o,M){if(1&o&&t._UZ(0,"app-ui-kaas-hint",3),2&o){const l=t.oxw();t.Q6J("label",l.hint)}}let E=(()=>{class o{constructor(){this.label="",this.hint="",this.options=[],this.classIn="my-2 pt-2 pb-1",this.valueChange=new t.vpe}ngOnInit(){}onValueChange(l){this.value=l,this.valueChange.emit(l)}static#t=this.\u0275fac=function(m){return new(m||o)};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-radio-button"]],inputs:{label:"label",hint:"hint",options:"options",value:"value",classIn:"classIn"},outputs:{valueChange:"valueChange"},decls:5,vars:6,consts:[[3,"label",4,"ngIf"],[3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"label"],[3,"value"]],template:function(m,e){1&m&&(t.YNc(0,f,1,1,"app-ui-kaas-heading",0),t.TgZ(1,"div")(2,"mat-radio-group",1),t.NdJ("ngModelChange",function(n){return e.value=n})("change",function(n){return e.onValueChange(n.value)}),t.YNc(3,x,3,4,"mat-radio-button",2),t.qZA()(),t.YNc(4,v,1,1,"app-ui-kaas-hint",0)),2&m&&(t.Q6J("ngIf",""!=e.label),t.xp6(1),t.Tol(e.classIn),t.xp6(1),t.Q6J("ngModel",e.value),t.xp6(1),t.Q6J("ngForOf",e.options),t.xp6(1),t.Q6J("ngIf",""!=e.hint))},dependencies:[h.sg,h.O5,p.JJ,_.VQ,_.U0,p.On,C.R,d.u,r.X$],styles:[".mat-mdc-radio-button:first-of-type .mdc-radio{padding-left:5px!important}  .mat-mdc-radio-button .mdc-radio{padding-right:5px!important}  .mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#3b82f6!important}  .mdc-radio__inner-circle{border-color:#3b82f6!important}  .mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:#bfdbfe!important}  .mdc-form-field{margin-right:10px}"]})}return o})()},8261:(O,u,a)=>{a.d(u,{R:()=>p});var t=a(5879),h=a(9515);let p=(()=>{class _{constructor(){this.label=""}ngOnInit(){}static#t=this.\u0275fac=function(r){return new(r||_)};static#n=this.\u0275cmp=t.Xpm({type:_,selectors:[["app-ui-kaas-heading"]],inputs:{label:"label"},decls:4,vars:3,consts:[[1,"ui-kaas-style-heading"]],template:function(r,f){1&r&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&r&&(t.xp6(2),t.Oqu(t.lcZ(3,1,f.label)))},dependencies:[h.X$],styles:[".ui-kaas-style-heading[_ngcontent-%COMP%]{margin-bottom:6px}.ui-kaas-style-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#333;font-weight:700;line-height:1.4;font-size:1.125rem}@media (max-width: 1024px){.ui-kaas-style-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}}"]})}return _})()},4196:(O,u,a)=>{a.d(u,{u:()=>p});var t=a(5879),h=a(9515);let p=(()=>{class _{constructor(){this.label=""}ngOnInit(){}static#t=this.\u0275fac=function(r){return new(r||_)};static#n=this.\u0275cmp=t.Xpm({type:_,selectors:[["app-ui-kaas-hint"]],inputs:{label:"label"},decls:4,vars:3,consts:[[1,"ui-kaas-style-hint"]],template:function(r,f){1&r&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&r&&(t.xp6(2),t.Oqu(t.lcZ(3,1,f.label)))},dependencies:[h.X$],styles:[".ui-kaas-style-hint[_ngcontent-%COMP%]{margin-top:6px}.ui-kaas-style-hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400;line-height:1.4;color:#8a869f;margin-top:6px}"]})}return _})()},9265:(O,u,a)=>{a.d(u,{o:()=>m});var t=a(5879),h=a(9515),p=a(6814),_=a(6223),C=a(8261),d=a(4196);function r(e,c){if(1&e&&t._UZ(0,"app-ui-kaas-heading",5),2&e){const n=t.oxw();t.Q6J("label",n.label)}}const f=function(e){return{"bi bi-lock-fill":e}};function x(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"i",9),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.clickIcon())}),t.qZA()}if(2&e){const n=t.oxw(2);t.Gre("",n.icono," cursor-pointer absolute top-0 right-0 mr-2 text-lg"),t.Q6J("ngClass",t.VKq(4,f,n.readOnly))}}const v=function(e,c,n){return{"pr-5":e,"ui-readonly-input":c,"ui-kaas-input-text":n}};function E(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",6)(2,"input",7),t.NdJ("ngModelChange",function(i){t.CHM(n);const g=t.oxw();return t.KtG(g.value=i)})("keypress",function(i){t.CHM(n);const g=t.oxw();return t.KtG(g.blockEvent(i))})("input",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.onInputChange())}),t.qZA(),t.YNc(3,x,1,6,"i",8),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("readonly",n.readOnly)("placeholder",n.placeholder)("ngClass",t.kEZ(6,v,""!=n.icono||n.readOnly,n.readOnly,!n.readOnly))("ngModel",n.value)("type",n.type),t.xp6(1),t.Q6J("ngIf",""!=n.icono||n.readOnly)}}const o=function(e,c){return{"bi-eye-fill":e,"bi-eye-slash-fill":c}};function M(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",6)(1,"input",10),t.NdJ("ngModelChange",function(i){t.CHM(n);const g=t.oxw();return t.KtG(g.value=i)})("keypress",function(i){t.CHM(n);const g=t.oxw();return t.KtG(g.blockEvent(i))})("input",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.onInputChange())}),t.qZA(),t.TgZ(2,"i",11),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.mostrar_password=!i.mostrar_password)}),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("placeholder",n.placeholder)("ngModel",n.value)("type",n.mostrar_password?"text":n.type),t.xp6(1),t.Q6J("ngClass",t.WLB(4,o,n.mostrar_password,!n.mostrar_password))}}function l(e,c){if(1&e&&t._UZ(0,"app-ui-kaas-hint",5),2&e){const n=t.oxw();t.Q6J("label",n.hint)}}let m=(()=>{class e{constructor(n){this._translateService=n,this.characterFilter="all",this.label="",this.hint="",this.placeholder="",this.value="",this.icono="",this.readOnly=!1,this.type="text",this.selectType=!1,this.valueChange=new t.vpe,this.iconClick=new t.vpe,this.mostrar_password=!1}ngOnInit(){this.selectType&&(this.value=this._translateService.instant(this.value))}blockEvent(n){if("all"!=this.characterFilter){const i={num:"/[0-9]/",letra:"AAAAA",all:"*****"}[this.characterFilter]||this.characterFilter,g=String.fromCharCode(n.charCode);i.test(g)||n.preventDefault()}}onInputChange(){this.valueChange.emit(this.value)}clickIcon(){this.iconClick.emit()}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(h.sK))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-ui-kaas-input"]],inputs:{characterFilter:"characterFilter",label:"label",hint:"hint",placeholder:"placeholder",value:"value",icono:"icono",readOnly:"readOnly",type:"type",selectType:"selectType"},outputs:{valueChange:"valueChange",iconClick:"iconClick"},decls:7,vars:4,consts:[[1,"ui-kaas-styles-general"],[1,"w-full"],[3,"label",4,"ngIf"],[4,"ngIf","ngIfElse"],["inputPassword",""],[3,"label"],[1,"w-full","ui-kaas-mt-20px","relative"],[1,"w-full","border-box",3,"readonly","placeholder","ngClass","ngModel","type","ngModelChange","keypress","input"],["style","transform: translateY(50%);",3,"ngClass","class","click",4,"ngIf"],[2,"transform","translateY(50%)",3,"ngClass","click"],[1,"w-full","border-box","pr-5","ui-kaas-input-text",3,"placeholder","ngModel","type","ngModelChange","keypress","input"],[1,"bi","cursor-pointer","absolute","top-0","right-0","mr-2","text-lg",2,"transform","translateY(50%)",3,"ngClass","click"]],template:function(s,i){if(1&s&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,r,1,1,"app-ui-kaas-heading",2),t.YNc(3,E,4,10,"ng-container",3),t.YNc(4,M,3,7,"ng-template",null,4,t.W1O),t.YNc(6,l,1,1,"app-ui-kaas-hint",2),t.qZA()()),2&s){const g=t.MAs(5);t.xp6(2),t.Q6J("ngIf",""!=i.label),t.xp6(1),t.Q6J("ngIf","password"!=i.type)("ngIfElse",g),t.xp6(3),t.Q6J("ngIf",""!=i.hint)}},dependencies:[p.mk,p.O5,_.Fj,_.JJ,_.On,C.R,d.u],styles:[".my-component-input[_ngcontent-%COMP%]{display:flex}.ui-kaas-input-text[_ngcontent-%COMP%]:hover{border-color:#3b82f6}.ui-kaas-input-text[_ngcontent-%COMP%]:focus{outline:0 none;outline-offset:0;box-shadow:0 0 0 .2rem #bfdbfe;border-color:#3b82f6}.ui-readonly-input[_ngcontent-%COMP%]{background-color:#f3f3f5;font-size:1rem;color:#000;padding:.5rem;border:2px solid #ced4da;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s;appearance:none;border-radius:6px}.ui-readonly-input[_ngcontent-%COMP%]:focus{outline:0 none;outline-offset:0}[_ngcontent-%COMP%]::placeholder{color:#adadad}"]})}return e})()},553:(O,u,a)=>{a.d(u,{N:()=>t});const t={production:!0,apiUrl:"https://franklinparrales.es/Grupo3_Backend"}}}]);