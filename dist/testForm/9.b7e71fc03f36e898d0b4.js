(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{dBb2:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),a=function(){return function(){}}(),o=t("pMnS"),r=t("Ip0R"),i=t("gIcY"),u=t("dJrM"),s=t("seP3"),c=t("Wf4p"),b=t("Fzqc"),d=t("dWZg"),g=t("wFw1"),m=t("b716"),p=t("/VYK"),f=t("bujt"),h=t("UodH"),_=t("lLAP"),x=function(){return function(){}}(),C=t("0I1l"),M=t("4qth"),O=t("oNRu"),v=t("kWWo"),P=function(){function n(n,l,t,e,a,o,r){this.userService=n,this.collabservice=l,this.conversation=t,this.router=e,this.mem_=a,this.collabSer=o,this.formBuilder=r,this.mess=new Array,this.allMess=new Array,this.OneToOneMess=new Array,this.OneToOneDate=new Array,this.OneToOneDisName=new Array,this.groupmess=new Array,this.alldata=new Array,this.partOf=!1,this.isOwner=!1,this.date=new Date,this.message=new x}return n.prototype.ngOnInit=function(){this.form=this.formBuilder.group({message:[this.message.message,i.s.required]}),this.LoadMyMessages()},n.prototype.getName=function(n){return n.substring(0,2).toUpperCase()},n.prototype.remove_duplicates=function(n){for(var l={},t=[],e=0;e<n.length;e++)l[n[e]]=!0;for(var a in l)t.push(a);return t},n.prototype.showTitle=function(){return null!=this.mem_.mem?this.getName(this.mem_.mem):null!=this.mem_.collabId?this.mem_.Title_:void this.router.navigate(["/home"])},n.prototype.SendMessage=function(){null!=this.mem_.mem?(console.log("sending message to "+this.mem_.mem),this.sendPersonalMessage()):null!=this.mem_.collabId?(console.log("sending message to "+this.mem_.collabId),this.SendGroupMessage()):this.router.navigate(["/home"])},n.prototype.sendPersonalMessage=function(){this.conversation.sendPersonalMessage(this.form.value,this.mem_.mem).subscribe(function(n){return console.log(n)})},n.prototype.SendGroupMessage=function(){this.conversation.sendMessageToCollabGroup(this.form.value,this.mem_.collabId).subscribe(function(n){return console.log(n)})},n.prototype.LoadMyMessages=function(){null!=this.mem_.mem?this.LoadIndividualMessage():null!=this.mem_.collabId?this.LoadGroupMessage():this.router.navigate(["/home"])},n.prototype.LoadIndividualMessage=function(){var n=this;null!=this.mem_.sender&&(this.sender=this.mem_.sender,this.otherUser=this.mem_.mem),console.log(this.sender);for(var l=0;l<4;l++)this.conversation.LoadOtherUserMessage(l,this.otherUser).subscribe(function(l){for(var t=0;t<l.length;t++){n.alldata=l[t],console.log(l);for(var e=0;e<l[t].messages.length;e++)n.OneToOneMess.push(l[t].messages[e]),n.OneToOneMess.reverse()}})},n.prototype.testOne=function(){console.log(this.OneToOneMess)},n.prototype.LoadGroupMessage=function(){var n=this;this.collabID=this.mem_.collabId;for(var l=0;l<4;l++)this.conversation.LoadGroupMessage(l,this.collabID).subscribe(function(l){n.Title_=n.mem_.Title_;for(var t=0;t<l.length;t++)n.groupmess=l[t].messages,n.groupmess.reverse()})},n.prototype.isPartof=function(n,l){for(var t=0;t<l.length;t++)return l[t]==n},n}(),z=t("ZYCi"),y=e.pb({encapsulation:0,styles:[["ol[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;clear:both;padding:20px;border-radius:30px;margin-bottom:2px;font-family:Helvetica,Arial,sans-serif}.him[_ngcontent-%COMP%]{background:#eee;float:left}.me[_ngcontent-%COMP%]{float:right;background:#00f;color:#fff}.him[_ngcontent-%COMP%] + .me[_ngcontent-%COMP%]{border-bottom-right-radius:5px}.me[_ngcontent-%COMP%] + .me[_ngcontent-%COMP%]{border-top-right-radius:5px;border-bottom-right-radius:5px}.me[_ngcontent-%COMP%]:last-of-type{border-bottom-right-radius:30px}.message[_ngcontent-%COMP%]{float:right;color:#fff;border-top-right-radius:5px;border-bottom-right-radius:5px}.message[_ngcontent-%COMP%]:last-of-type{border-bottom-right-radius:30px}.messa[_ngcontent-%COMP%]{z-index:0;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:0;margin-left:80%}.navbar[_ngcontent-%COMP%]{z-index:inherit 0;background-color:#333;position:fixed;bottom:5px;max-width:800px}.messageSender[_ngcontent-%COMP%]{z-index:5;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:5px;margin-left:80%;background-color:#0084ff}.avatar[_ngcontent-%COMP%]{vertical-align:middle;width:50px;height:50px;border-radius:50%}.container-bottom[_ngcontent-%COMP%]{float:right;position:fixed;bottom:0}.container[_ngcontent-%COMP%]{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0}.container2[_ngcontent-%COMP%]{border:4px solid #dedede;background-color:plum;border-radius:5px;padding:10px;margin:10px 0;text-align:center}.darker[_ngcontent-%COMP%]{border-color:#ccc;background-color:#ddd}.container[_ngcontent-%COMP%]::after{content:\"\";clear:both;display:table}.right[_ngcontent-%COMP%]{float:right;margin-left:20px;margin-right:0;font-size:10px}.left[_ngcontent-%COMP%]{float:left;margin-right:20px;margin-left:0;font-size:10px}.time-right[_ngcontent-%COMP%]{float:right;color:#aaa}.time-left[_ngcontent-%COMP%]{float:left;color:#999}.mat-card[_ngcontent-%COMP%]{max-width:800px;margin:auto;padding:0;height:100%;background:rgba(214,212,212,.048);border:.4px solid #3b3b3b;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);font-family:Georgia,'Times New Roman',Times,serif}.mat-card-header[_ngcontent-%COMP%]{font-weight:700;display:inline}.mat-card-title[_ngcontent-%COMP%]{margin-left:-16px;margin-right:-16px;margin-top:0;color:rgba(0,0,0,.836);background:rgba(34,34,34,.13);padding:5px}.mat-card-content[_ngcontent-%COMP%]{margin:0}.mat-card[_ngcontent-%COMP%] > .mat-card-actions[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.mat-card-actions[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .mat-card-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{margin:0 0 0 22px}.mat-expansion-panel[_ngcontent-%COMP%]{background:rgba(255,254,254,.151)}.requirements[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px}.content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:20px;margin-left:30px;margin-right:30px}.content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .duration[_ngcontent-%COMP%], .location[_ngcontent-%COMP%]{margin-left:40px;margin-right:40px}"]],data:{}});function B(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,4,"li",[["class","me"]],null,null,null,null,null)),(n()(),e.Ib(2,null,[" ",""])),(n()(),e.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"span",[["class","right"]],null,null,null,null,null)),(n()(),e.Ib(5,null,[" ",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.message.message),n(l,5,0,l.parent.context.$implicit.dispName)})}function k(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,4,"li",[["class","him"]],null,null,null,null,null)),(n()(),e.Ib(2,null,[" ",""])),(n()(),e.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"span",[["class","left"]],null,null,null,null,null)),(n()(),e.Ib(5,null,[" ",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.message.message),n(l,5,0,l.parent.context.$implicit.dispName)})}function w(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"ol",[],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,B)),e.qb(2,16384,null,0,r.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,k)),e.qb(4,16384,null,0,r.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,l.context.$implicit.sender===t.sender),n(l,4,0,l.context.$implicit.sender!==t.sender)},null)}function I(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,4,"li",[["class","me"]],null,null,null,null,null)),(n()(),e.Ib(2,null,[" ",""])),(n()(),e.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"span",[["class","right"]],null,null,null,null,null)),(n()(),e.Ib(5,null,[" ",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.message.message),n(l,5,0,l.parent.context.$implicit.dispName)})}function q(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,4,"li",[["class","him"]],null,null,null,null,null)),(n()(),e.Ib(2,null,[" ",""])),(n()(),e.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"span",[["class","left"]],null,null,null,null,null)),(n()(),e.Ib(5,null,[" ",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.message.message),n(l,5,0,l.parent.context.$implicit.dispName)})}function F(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"ol",[],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,I)),e.qb(2,16384,null,0,r.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,q)),e.qb(4,16384,null,0,r.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,l.context.$implicit.sender===t.sender),n(l,4,0,l.context.$implicit.sender!==t.sender)},null)}function L(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,25,"form",[["class","navbar"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var a=!0,o=n.component;return"submit"===l&&(a=!1!==e.Bb(n,2).onSubmit(t)&&a),"reset"===l&&(a=!1!==e.Bb(n,2).onReset()&&a),"ngSubmit"===l&&(a=!1!==o.SendMessage()&&a),a},null,null)),e.qb(1,16384,null,0,i.v,[],null,null),e.qb(2,540672,null,0,i.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Fb(2048,null,i.b,null,[i.h]),e.qb(4,16384,null,0,i.n,[[4,i.b]],null,null),(n()(),e.rb(5,0,null,null,20,"mat-form-field",[["class","messa mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,u.b,u.a)),e.qb(6,7520256,null,7,s.c,[e.k,e.h,[2,c.f],[2,b.b],[2,s.a],d.a,e.A,[2,g.a]],null,null),e.Gb(335544320,1,{_control:0}),e.Gb(335544320,2,{_placeholderChild:0}),e.Gb(335544320,3,{_labelChild:0}),e.Gb(603979776,4,{_errorChildren:1}),e.Gb(603979776,5,{_hintChildren:1}),e.Gb(603979776,6,{_prefixChildren:1}),e.Gb(603979776,7,{_suffixChildren:1}),(n()(),e.rb(14,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","message"],["id","message"],["matInput",""],["placeholder","Message"],["type","text"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,t){var a=!0;return"input"===l&&(a=!1!==e.Bb(n,15)._handleInput(t.target.value)&&a),"blur"===l&&(a=!1!==e.Bb(n,15).onTouched()&&a),"compositionstart"===l&&(a=!1!==e.Bb(n,15)._compositionStart()&&a),"compositionend"===l&&(a=!1!==e.Bb(n,15)._compositionEnd(t.target.value)&&a),"blur"===l&&(a=!1!==e.Bb(n,19)._focusChanged(!1)&&a),"focus"===l&&(a=!1!==e.Bb(n,19)._focusChanged(!0)&&a),"input"===l&&(a=!1!==e.Bb(n,19)._onInput()&&a),a},null,null)),e.qb(15,16384,null,0,i.c,[e.F,e.k,[2,i.a]],null,null),e.Fb(1024,null,i.k,function(n){return[n]},[i.c]),e.qb(17,671744,null,0,i.g,[[3,i.b],[8,null],[8,null],[6,i.k],[2,i.x]],{name:[0,"name"]},null),e.Fb(2048,null,i.l,null,[i.g]),e.qb(19,999424,null,0,m.a,[e.k,d.a,[6,i.l],[2,i.o],[2,i.h],c.b,[8,null],p.a,e.A],{id:[0,"id"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e.qb(20,16384,null,0,i.m,[[4,i.l]],null,null),e.Fb(2048,[[1,4]],s.d,null,[m.a]),(n()(),e.rb(22,0,null,1,0,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),e.rb(23,0,null,1,2,"button",[["class","right"],["color","primary"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,f.d,f.b)),e.qb(24,180224,null,0,h.b,[e.k,d.a,_.g,[2,g.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(n()(),e.Ib(-1,0,["send"])),(n()(),e.rb(26,0,null,null,2,"div",[["class","mat-card"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,w)),e.qb(28,278528,null,0,r.j,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.rb(29,0,null,null,2,"div",[["class","mat-card"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,F)),e.qb(31,278528,null,0,r.j,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.form),n(l,17,0,"message"),n(l,19,0,"message","Message","text"),n(l,24,0,!t.form.valid,"primary"),n(l,28,0,t.OneToOneMess),n(l,31,0,t.groupmess)},function(n,l){n(l,0,0,e.Bb(l,4).ngClassUntouched,e.Bb(l,4).ngClassTouched,e.Bb(l,4).ngClassPristine,e.Bb(l,4).ngClassDirty,e.Bb(l,4).ngClassValid,e.Bb(l,4).ngClassInvalid,e.Bb(l,4).ngClassPending),n(l,5,1,["standard"==e.Bb(l,6).appearance,"fill"==e.Bb(l,6).appearance,"outline"==e.Bb(l,6).appearance,"legacy"==e.Bb(l,6).appearance,e.Bb(l,6)._control.errorState,e.Bb(l,6)._canLabelFloat,e.Bb(l,6)._shouldLabelFloat(),e.Bb(l,6)._hasFloatingLabel(),e.Bb(l,6)._hideControlPlaceholder(),e.Bb(l,6)._control.disabled,e.Bb(l,6)._control.autofilled,e.Bb(l,6)._control.focused,"accent"==e.Bb(l,6).color,"warn"==e.Bb(l,6).color,e.Bb(l,6)._shouldForward("untouched"),e.Bb(l,6)._shouldForward("touched"),e.Bb(l,6)._shouldForward("pristine"),e.Bb(l,6)._shouldForward("dirty"),e.Bb(l,6)._shouldForward("valid"),e.Bb(l,6)._shouldForward("invalid"),e.Bb(l,6)._shouldForward("pending"),!e.Bb(l,6)._animationsEnabled]),n(l,14,1,[e.Bb(l,19)._isServer,e.Bb(l,19).id,e.Bb(l,19).placeholder,e.Bb(l,19).disabled,e.Bb(l,19).required,e.Bb(l,19).readonly&&!e.Bb(l,19)._isNativeSelect||null,e.Bb(l,19)._ariaDescribedby||null,e.Bb(l,19).errorState,e.Bb(l,19).required.toString(),e.Bb(l,20).ngClassUntouched,e.Bb(l,20).ngClassTouched,e.Bb(l,20).ngClassPristine,e.Bb(l,20).ngClassDirty,e.Bb(l,20).ngClassValid,e.Bb(l,20).ngClassInvalid,e.Bb(l,20).ngClassPending]),n(l,23,0,e.Bb(l,24).disabled||null,"NoopAnimations"===e.Bb(l,24)._animationMode)})}function N(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"app-collab-messaging",[],null,null,null,L,y)),e.qb(1,114688,null,0,P,[O.a,M.a,C.a,z.k,v.a,M.a,i.d],null,null)],function(n,l){n(l,1,0)},null)}var S=e.nb("app-collab-messaging",P,N,{},{},[]),T=t("6UMx"),A=t("0/Q6"),G=t("Mr+X"),j=t("SMsm"),$=t("lzlj"),K=t("FVSy"),U=function(){function n(n,l,t){this.collab=n,this.userservice=l,this.router=t,this.gropuMess=new Array,this.ContactList=new Array,this.user=null}return n.prototype.ngOnInit=function(){var n=this;this.userservice.getUserdetails().subscribe(function(l){n.user=l.username}),this.collab.myCollabs().subscribe(function(l){for(var t=0;t<l.length-1;t++)if(null!=l[t]._id&&null!=l[t]._id.$oid)n.gropuMess.push(l[t]);else{if(!(0!=l[t].participants.length&&l[t].messages.length>0))return 0;for(var e=0;e<l[t].participants.length;e++)l[t].participants[e]!=n.user&&n.ContactList.push(l[t].participants[e]);n.ContactList=n.remove_duplicates(n.ContactList)}})},n.prototype.remove_duplicates=function(n){for(var l={},t=[],e=0;e<n.length;e++)l[n[e]]=!0;for(var a in l)t.push(a);return t},n.prototype.extractFirstNameAndLastName=function(n){return n.split("@")[0]},n.prototype.PersonalmessagePageLink=function(n){console.log(n),this.mem=n,this.router.navigateByUrl("/conversations")},n}(),Q=e.pb({encapsulation:0,styles:[[".avatar[_ngcontent-%COMP%]{vertical-align:middle;width:50px;height:50px;border-radius:50%}.mat-card-avatar[_ngcontent-%COMP%]{background-image:url(/assets/userPhoto.png);vertical-align:middle;width:50px;height:50px;border-radius:50%}.container-bottom[_ngcontent-%COMP%]{float:right;position:fixed;bottom:0}.container[_ngcontent-%COMP%]{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0}.container2[_ngcontent-%COMP%]{border:4px solid #dedede;background-color:plum;border-radius:5px;padding:10px;margin:10px 0;text-align:center}.darker[_ngcontent-%COMP%]{border-color:#ccc;background-color:#ddd}.container[_ngcontent-%COMP%]::after{content:\"\";clear:both;display:table}.right[_ngcontent-%COMP%]{float:right;margin-left:20px;margin-right:0}.message[_ngcontent-%COMP%]{z-index:5;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:5px;margin-left:80%}.time-right[_ngcontent-%COMP%]{float:right;color:#aaa}.time-left[_ngcontent-%COMP%]{float:left;color:#999}.mat-card[_ngcontent-%COMP%]{max-width:800px;margin:auto;padding:0;height:100%;background:rgba(214,212,212,.048);background-repeat:repeat-y;font-family:Georgia,'Times New Roman',Times,serif}.mat-card2[_ngcontent-%COMP%]{max-width:600px;margin:auto;padding:0;height:100%;background:rgba(214,212,212,.048);border:.4px solid #3b3b3b;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.mat-card-header[_ngcontent-%COMP%]{font-weight:700;display:inline}.mat-card-title[_ngcontent-%COMP%]{margin-left:-16px;margin-right:-16px;margin-top:0;color:rgba(0,0,0,.836);background:rgba(34,34,34,.13);padding:5px}.mat-card-content[_ngcontent-%COMP%]{margin:0}.mat-card[_ngcontent-%COMP%] > .mat-card-actions[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.mat-card-actions[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .mat-card-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{margin:0 0 0 22px}.mat-expansion-panel[_ngcontent-%COMP%]{background:rgba(255,254,254,.151)}.requirements[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px}.content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:20px;margin-left:30px;margin-right:30px}.content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .duration[_ngcontent-%COMP%], .location[_ngcontent-%COMP%]{margin-left:40px;margin-right:40px}.table[_ngcontent-%COMP%]{width:100%;height:100%;overflow-x:auto;overflow-y:auto}.mat-list[_ngcontent-%COMP%]{height:100%}"]],data:{}});function D(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,11,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],null,null,T.c,T.b)),e.qb(1,1228800,null,3,A.c,[e.k,[2,A.f],[2,A.a],e.h],null,null),e.Gb(603979776,1,{_lines:1}),e.Gb(335544320,2,{_avatar:0}),e.Gb(335544320,3,{_icon:0}),(n()(),e.rb(5,0,null,0,4,"mat-icon",[["class","mat-icon notranslate mat-list-icon"],["mat-list-icon",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e.Bb(n,6).onClick()&&a),a},G.b,G.a)),e.qb(6,16384,null,0,z.l,[z.k,z.a,[8,null],e.F,e.k],{routerLink:[0,"routerLink"]},null),e.qb(7,9158656,null,0,j.b,[e.k,j.d,[8,null],[2,j.a]],null,null),e.qb(8,16384,[[3,4]],0,A.b,[],null,null),(n()(),e.Ib(-1,0,["person"])),(n()(),e.rb(10,0,null,2,1,"button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.PersonalmessagePageLink(n.context.$implicit)&&e),e},null,null)),(n()(),e.Ib(11,null,[""," "]))],function(n,l){n(l,6,0,e.tb(1,"/user/",l.context.$implicit,"")),n(l,7,0)},function(n,l){var t=l.component;n(l,0,0,e.Bb(l,1)._avatar||e.Bb(l,1)._icon,e.Bb(l,1)._avatar||e.Bb(l,1)._icon),n(l,5,0,e.Bb(l,7).inline,"primary"!==e.Bb(l,7).color&&"accent"!==e.Bb(l,7).color&&"warn"!==e.Bb(l,7).color),n(l,11,0,t.extractFirstNameAndLastName(l.context.$implicit))})}function R(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,6,"div",[["class","fullpage"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,5,"mat-card",[["class","mat-card"]],null,null,null,$.d,$.a)),e.qb(2,49152,null,0,K.a,[],null,null),(n()(),e.rb(3,0,null,0,3,"mat-list",[["class","mat-list mat-list-base"]],null,null,null,T.d,T.a)),e.qb(4,704512,null,0,A.a,[e.k],null,null),(n()(),e.ib(16777216,null,0,1,null,D)),e.qb(6,278528,null,0,r.j,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,6,0,l.component.ContactList)},null)}function Y(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"app-messenger",[],null,null,null,R,Q)),e.qb(1,114688,null,0,U,[M.a,O.a,z.k],null,null)],function(n,l){n(l,1,0)},null)}var E=e.nb("app-messenger",U,Y,{},{},[]),V=t("t68o"),W=t("zbXB"),X=t("No7X"),Z=t("bIR2"),H=t("M2Lx"),J=t("wmQ5"),nn=t("eDkP"),ln=t("o3x0"),tn=t("jQLj"),en=t("4tE/"),an=t("Tq4R"),on=t("rAFq"),rn=t("4D9t"),un=t("bMPK"),sn=t("UiI2"),cn=function(){return function(){}}(),bn=t("ZYjt"),dn=t("4c35"),gn=t("La40"),mn=t("LC5p"),pn=t("YhbO"),fn=t("jlZm"),hn=t("y4qS"),_n=t("BHnd"),xn=t("qAlS"),Cn=t("/dO6"),Mn=t("r43C"),On=t("Lwpp"),vn=t("jRYl"),Pn=t("KL2N"),zn=t("QX+E"),yn=t("YSh2"),Bn=t("EFU/");t.d(l,"ConversationsModuleNgFactory",function(){return kn});var kn=e.ob(a,[],function(n){return e.yb([e.zb(512,e.j,e.db,[[8,[o.a,S,E,V.a,W.b,W.a,X.a,Z.a]],[3,e.j],e.y]),e.zb(4608,r.m,r.l,[e.v,[2,r.y]]),e.zb(4608,H.c,H.c,[]),e.zb(4608,c.b,c.b,[]),e.zb(5120,J.g,J.a,[[3,J.g]]),e.zb(4608,nn.b,nn.b,[nn.h,nn.d,e.j,nn.g,nn.e,e.r,e.A,r.c,b.b,[2,r.g]]),e.zb(5120,nn.i,nn.j,[nn.b]),e.zb(5120,ln.c,ln.d,[nn.b]),e.zb(135680,ln.e,ln.e,[nn.b,e.r,[2,r.g],[2,ln.b],ln.c,[3,ln.e],nn.d]),e.zb(4608,tn.h,tn.h,[]),e.zb(5120,tn.a,tn.b,[nn.b]),e.zb(4608,c.a,c.u,[[2,c.e],d.a]),e.zb(5120,en.b,en.c,[nn.b]),e.zb(5120,an.b,an.c,[nn.b]),e.zb(4608,an.d,an.d,[nn.b,e.r,[2,r.g],an.b,[2,an.a],[3,an.d],nn.d]),e.zb(4608,on.a,on.a,[]),e.zb(5120,rn.a,rn.b,[nn.b]),e.zb(4608,un.a,sn.a,[[2,un.b],d.a]),e.zb(4608,i.w,i.w,[]),e.zb(4608,i.d,i.d,[]),e.zb(1073742336,r.b,r.b,[]),e.zb(1073742336,z.m,z.m,[[2,z.s],[2,z.k]]),e.zb(1073742336,cn,cn,[]),e.zb(1073742336,b.a,b.a,[]),e.zb(1073742336,c.j,c.j,[[2,c.c],[2,bn.g]]),e.zb(1073742336,dn.g,dn.g,[]),e.zb(1073742336,d.b,d.b,[]),e.zb(1073742336,c.t,c.t,[]),e.zb(1073742336,H.d,H.d,[]),e.zb(1073742336,_.a,_.a,[]),e.zb(1073742336,gn.k,gn.k,[]),e.zb(1073742336,K.g,K.g,[]),e.zb(1073742336,j.c,j.c,[]),e.zb(1073742336,h.c,h.c,[]),e.zb(1073742336,c.k,c.k,[]),e.zb(1073742336,c.r,c.r,[]),e.zb(1073742336,mn.a,mn.a,[]),e.zb(1073742336,A.d,A.d,[]),e.zb(1073742336,pn.c,pn.c,[]),e.zb(1073742336,fn.d,fn.d,[]),e.zb(1073742336,hn.o,hn.o,[]),e.zb(1073742336,_n.a,_n.a,[]),e.zb(1073742336,xn.f,xn.f,[]),e.zb(1073742336,xn.d,xn.d,[]),e.zb(1073742336,Cn.f,Cn.f,[]),e.zb(1073742336,Mn.b,Mn.b,[]),e.zb(1073742336,On.e,On.e,[]),e.zb(1073742336,J.h,J.h,[]),e.zb(1073742336,s.e,s.e,[]),e.zb(1073742336,p.c,p.c,[]),e.zb(1073742336,m.b,m.b,[]),e.zb(1073742336,nn.f,nn.f,[]),e.zb(1073742336,ln.h,ln.h,[]),e.zb(1073742336,tn.i,tn.i,[]),e.zb(1073742336,c.v,c.v,[]),e.zb(1073742336,c.l,c.l,[]),e.zb(1073742336,c.o,c.o,[]),e.zb(1073742336,en.e,en.e,[]),e.zb(1073742336,vn.a,vn.a,[]),e.zb(1073742336,Pn.a,Pn.a,[]),e.zb(1073742336,zn.a,zn.a,[]),e.zb(1073742336,zn.b,zn.b,[]),e.zb(1073742336,i.t,i.t,[]),e.zb(1073742336,i.i,i.i,[]),e.zb(1073742336,i.q,i.q,[]),e.zb(1073742336,a,a,[]),e.zb(1024,z.i,function(){return[[{path:"",component:P},{path:"messenger",component:U},{path:"conversations",component:P}]]},[]),e.zb(256,Cn.a,{separatorKeyCodes:[yn.g]},[]),e.zb(256,c.d,c.g,[]),e.zb(256,Bn.a,zn.c,[])])})}}]);