(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,n,e){t.exports=e("zUnb")},zUnb:function(t,n,e){"use strict";e.r(n);var o=e("jhN1"),i=e("fXoL"),c=e("tyNb"),r=e("R0Ic"),a=Object(r.i)("fadeAnimation",[Object(r.h)(":enter",[Object(r.g)({opacity:0}),Object(r.e)(".3s",Object(r.g)({opacity:1}))])]),s=e("wHSu"),b=e("6NWb"),g=function(){function t(){this.faPaperPlane=s.e}return t.prototype.ngOnInit=function(){},t.prototype.sendEmail=function(){window.open("mailto:rajsaha@outlook.com")},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-portfolio"]],hostVars:1,hostBindings:function(t,n){2&t&&i.lc("@fadeAnimation",void 0)},decls:35,vars:1,consts:[[1,"introduction-container"],[1,"introduction"],[1,"section"],[1,"custom-button",3,"click"],[3,"icon"]],template:function(t,n){1&t&&(i.Nb(0,"div",0),i.Nb(1,"div",1),i.Nb(2,"h3"),i.nc(3,"Hello there! I'm Raj."),i.Mb(),i.Nb(4,"h2"),i.nc(5,"I'm a software developer."),i.Mb(),i.Nb(6,"h3"),i.nc(7,"I'm also a musician on the side."),i.Mb(),i.Nb(8,"h3"),i.nc(9,"This is my personal corner on the Internet."),i.Mb(),i.Mb(),i.Mb(),i.Nb(10,"div",2),i.Nb(11,"h2"),i.nc(12,"Tech Stack"),i.Mb(),i.Nb(13,"p"),i.nc(14,"I work with "),i.Nb(15,"b"),i.nc(16,"Angular"),i.Mb(),i.nc(17," and "),i.Nb(18,"b"),i.nc(19,"Node"),i.Mb(),i.nc(20," primarily. "),i.Lb(21,"br"),i.nc(22," Mongo is my goto DB solution for personal projects but at work I use MSSQL."),i.Lb(23,"br"),i.Lb(24,"br"),i.nc(25," I also have a little bit of experience with React."),i.Mb(),i.Mb(),i.Nb(26,"div",2),i.Nb(27,"h2"),i.nc(28,"Contact Me"),i.Mb(),i.Nb(29,"p"),i.nc(30,"Send me an email at rajsaha@outlook.com"),i.Mb(),i.Nb(31,"div",3),i.Ub("click",function(){return n.sendEmail()}),i.Nb(32,"span"),i.nc(33,"Send Email"),i.Mb(),i.Lb(34,"fa-icon",4),i.Mb(),i.Mb()),2&t&&(i.Ab(34),i.bc("icon",n.faPaperPlane))},directives:[b.a],styles:[".introduction-container[_ngcontent-%COMP%]{display:grid;min-height:100vh}.introduction-container[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]{z-index:1;align-self:center}.introduction-container[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:100;margin-bottom:15px}.introduction-container[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:700;font-size:4rem;margin-bottom:15px}.introduction-container[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:15px}.section[_ngcontent-%COMP%]{z-index:1;margin-bottom:45px}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;margin-bottom:15px;text-transform:uppercase}.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:100;margin-bottom:15px;line-height:25px}.section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;border:1px solid var(--table-border-color);color:var(--text-color);padding:5px 10px;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:3px}"],data:{animation:[a]}}),t}(),l=e("mrSG"),p=e("8tEE"),u=e("twK/"),h=function(){function t(){}return t.prototype.get=function(t){return localStorage?localStorage.getItem(t):null},t.prototype.set=function(t,n){localStorage&&localStorage.setItem(t,n)},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac=function(n){return new(n||t)}}),t}(),d=e("2Vo4"),m=e("l7P3"),f=Object(m.c)("[App Theme] Set Theme",Object(m.f)()),M=function(t){return t[t.DARK=0]="DARK",t[t.LIGHT=1]="LIGHT",t}({}),O=function(){function t(t,n){this.storage=t,this.store=n,this.THEME_KEY="THEME",this.DARK_THEME_VALUE="DARK",this.LIGHT_THEME_VALUE="LIGHT",this.DARK_THEME_CLASS_NAME="theme-dark",this.darkThemeSelected=!1,this.theme$=new d.a(M.LIGHT)}return t.prototype.setThemeOnStart=function(){this.isDarkThemeSelected()?this.setDarkTheme():this.setLightTheme()},t.prototype.isDarkThemeSelected=function(){return this.darkThemeSelected=this.storage.get(this.THEME_KEY)===this.DARK_THEME_VALUE,this.darkThemeSelected},t.prototype.getCurrentTheme=function(){return(this.storage.get(this.THEME_KEY)?this.storage.get(this.THEME_KEY):"DARK").toLowerCase()},t.prototype.setLightTheme=function(){this.store.dispatch(f({theme:"light"})),this.storage.set(this.THEME_KEY,this.LIGHT_THEME_VALUE),document.body.classList.remove(this.DARK_THEME_CLASS_NAME),this.darkThemeSelected=!1,this.theme$.next(M.LIGHT)},t.prototype.setDarkTheme=function(){this.store.dispatch(f({theme:"dark"})),this.storage.set(this.THEME_KEY,this.DARK_THEME_VALUE),document.body.classList.add(this.DARK_THEME_CLASS_NAME),this.darkThemeSelected=!0,this.theme$.next(M.DARK)},t.\u0275fac=function(n){return new(n||t)(i.Rb(h),i.Rb(m.a))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),_=function(){return{exact:!0}},C=function(){function t(t,n){this.router=t,this.customColorSchemeService=n,this.checked=!1,this.faGithub=p.a,this.faInstagram=p.b,this.faLinkedin=p.c,this.faYoutube=p.f,this.farLightbulb=u.a,this.fasLightbulb=s.d,this.localStorageTheme=this.customColorSchemeService.getCurrentTheme(),"dark"===this.localStorageTheme?(this.checked=!0,this.customColorSchemeService.setDarkTheme()):(this.checked=!1,this.customColorSchemeService.setLightTheme())}return t.prototype.ngOnInit=function(){this.currentUrl=this.router.url},t.prototype.goHome=function(){return Object(l.a)(this,void 0,void 0,function(){return Object(l.b)(this,function(t){switch(t.label){case 0:return[4,this.router.navigate(["home"])];case 1:return t.sent(),[2]}})})},t.prototype.goTo=function(t){window.open(t,"_blank")},t.prototype.onToggleChange=function(t){t?this.customColorSchemeService.setDarkTheme():this.customColorSchemeService.setLightTheme()},t.\u0275fac=function(n){return new(n||t)(i.Kb(c.b),i.Kb(O))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-navigation"]],decls:29,vars:7,consts:[[1,"navigation"],[1,"logo-container",3,"click"],["xmlns","http://www.w3.org/2000/svg","height","136.724","width","326.631","viewBox","0 0 306.218 128.178",1,"logo"],["d","M249.018 34.875c-8.065 0-14.233 2.283-18.502 6.848-4.365 4.565-8.92 12.783-13.664 24.653-4.839 11.87-9.898 26.571-14.547 33.495-12.715 18.87-29.841 28.306-51.38 28.306-11.197 0-21.16-2.511-29.89-7.533-8.824-5.098-15.703-12.365-20.638-21.8-4.934-9.511-7.086-25.467-7.086-37.261 0-11.87 2.704-22.447 8.113-31.73 5.313-9.283 12.856-16.474 22.63-21.572C133.827 3.107 144.93.52 157.36.52v34.24c-9.488 0-16.842 2.398-22.06 7.191-5.314 4.794-8.6 16.326-8.6 25 0 8.37 2.23 14.876 6.689 19.517 4.365 4.642 10.152 6.963 17.364 6.963 6.737 0 12.383-2.701 16.937-8.104 4.554-5.478 8.824-13.506 12.81-24.083 7.305-19.479 16.997-38.468 27.814-47.37C219.129 4.97 232.603.518 248.734.518c7.605 0 54.934-.353 57.427 1.38-.579 19.466-.029 39.794.073 58.884 0 12.783-2.894 24.425-8.682 34.926-5.883 10.5-13.9 18.528-24.053 24.083-10.153 5.479-21.919 8.218-35.298 8.218V93.655c22.868 0 34.301-10.957 34.301-32.871 0-8.142-2.04-14.495-6.12-19.061-4.175-4.565-9.963-6.848-17.364-6.848z"],["d","M157.26.63l80.93 92.991v34.375l-80.764-93.274z","fill-opacity",".174","fill-rule","evenodd"],["d","M279.91.54h26.228v58.661H279.91z"],["d","M92.93 37.08q-5.25-2.457-10.499-3.574-5.138-1.229-10.388-1.229-15.414 0-23.791 9.941-8.265 9.83-8.265 28.259v57.634H0V3.011h39.987v20.552q7.707-12.286 17.648-17.871Q67.687-.004 81.649-.004q2.01 0 4.356.223 2.345.112 6.813.67l.112 36.19z"],["id","nav-table"],[3,"click"],[3,"icon"],["routerLink","/my-music","routerLinkActive","active"],["routerLink","/projects","routerLinkActive","active"],["routerLink","/home","routerLinkActive","active",3,"routerLinkActiveOptions"],[1,"theme-toggle",3,"click"]],template:function(t,n){1&t&&(i.Nb(0,"div",0),i.Nb(1,"div",1),i.Ub("click",function(){return n.goHome()}),i.Xb(),i.Nb(2,"svg",2),i.Lb(3,"path",3),i.Lb(4,"path",4),i.Lb(5,"path",5),i.Nb(6,"g"),i.Lb(7,"path",6),i.Mb(),i.Mb(),i.Mb(),i.Wb(),i.Nb(8,"table",7),i.Nb(9,"tr"),i.Nb(10,"td",8),i.Ub("click",function(){return n.goTo("https://www.youtube.com/channel/UCmO2-0zBQhcXXjPcLEfk-Iw")}),i.Lb(11,"fa-icon",9),i.Mb(),i.Nb(12,"td",8),i.Ub("click",function(){return n.goTo("https://www.instagram.com/rajplaystheguitar/")}),i.Lb(13,"fa-icon",9),i.Mb(),i.Nb(14,"td",8),i.Ub("click",function(){return n.goTo("https://www.linkedin.com/in/raj-saha/")}),i.Lb(15,"fa-icon",9),i.Mb(),i.Nb(16,"td",8),i.Ub("click",function(){return n.goTo("https://github.com/rajsaha")}),i.Lb(17,"fa-icon",9),i.Mb(),i.Nb(18,"td",10),i.Nb(19,"a"),i.nc(20,"Music"),i.Mb(),i.Mb(),i.Nb(21,"td",11),i.Nb(22,"a"),i.nc(23,"Projects"),i.Mb(),i.Mb(),i.Nb(24,"td",12),i.Nb(25,"a"),i.nc(26,"Home"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(27,"div",13),i.Ub("click",function(){return n.checked=!n.checked,n.onToggleChange(n.checked)}),i.Lb(28,"fa-icon",9),i.Mb(),i.Mb()),2&t&&(i.Ab(11),i.bc("icon",n.faYoutube),i.Ab(2),i.bc("icon",n.faInstagram),i.Ab(2),i.bc("icon",n.faLinkedin),i.Ab(2),i.bc("icon",n.faGithub),i.Ab(7),i.bc("routerLinkActiveOptions",i.cc(6,_)),i.Ab(4),i.bc("icon",n.fasLightbulb))},directives:[b.a,c.c,c.d],styles:[".navigation[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;height:100%;max-height:100vh;border-right:1px solid var(--table-border-color)}.navigation[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{cursor:pointer;transform:rotate(-90deg) translate(-15px,2px)}.navigation[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:50px;height:50px;fill:var(--logo-fill)}.navigation[_ngcontent-%COMP%]   #nav-table[_ngcontent-%COMP%]{table-layout:fixed;transform:rotate(-90deg) translate(-250px,-222px);transform-origin:top}.navigation[_ngcontent-%COMP%]   #nav-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-spacing:10px;border-collapse:separate}.navigation[_ngcontent-%COMP%]   #nav-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:50px;padding:0 15px;border-right:1px solid var(--table-border-color);transition:background-color .2s ease-in-out;cursor:pointer;color:var(--text-color);line-height:50px;outline:none}.navigation[_ngcontent-%COMP%]   #nav-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;text-transform:uppercase}.navigation[_ngcontent-%COMP%]   #nav-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover{background-color:var(--nav-hover-bg-color)}.navigation[_ngcontent-%COMP%]   #nav-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   #nav-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{color:var(--nav-hover-text-color)}.navigation[_ngcontent-%COMP%]   .theme-toggle[_ngcontent-%COMP%]{position:absolute;bottom:15px;left:0;color:var(--text-color);width:100%;text-align:center}.active[_ngcontent-%COMP%]{background-color:var(--nav-active-bg-color)}.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--nav-active-a-color)}.active[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#000}"]}),t}(),P=function(){function t(){this.faCopyright=s.b,this.date=new Date,this.currentYear=this.date.getFullYear()}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-footer"]],decls:4,vars:2,consts:[[1,"footer"],[3,"icon"]],template:function(t,n){1&t&&(i.Nb(0,"div",0),i.Lb(1,"fa-icon",1),i.Nb(2,"span"),i.nc(3),i.Mb(),i.Mb()),2&t&&(i.Ab(1),i.bc("icon",n.faCopyright),i.Ab(2),i.pc("",n.currentYear,", Raj Saha"))},directives:[b.a],styles:[".footer[_ngcontent-%COMP%]{border-top:1px solid var(--table-border-color);color:var(--text-color);padding:15px 0 15px 25px}.footer[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:5px}"]}),t}(),v=function(){function t(t){this.router=t}return t.prototype.ngOnInit=function(){"/"===this.router.url&&this.router.navigate(["home"]),this.onResize()},t.prototype.onResize=function(t){this.innerHeight=window.innerHeight},t.\u0275fac=function(n){return new(n||t)(i.Kb(c.b))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-main"]],hostBindings:function(t,n){1&t&&i.Ub("resize",function(t){return n.onResize(t)},!1,i.fc)},decls:7,vars:0,consts:[[1,"main"],[1,"main-content"],[1,"router"]],template:function(t,n){1&t&&(i.Nb(0,"div",0),i.Lb(1,"app-navigation"),i.Nb(2,"div",1),i.Nb(3,"div",2),i.Nb(4,"main"),i.Lb(5,"router-outlet"),i.Mb(),i.Mb(),i.Lb(6,"app-footer"),i.Mb(),i.Mb())},directives:[C,c.f,P],styles:[".main[_ngcontent-%COMP%]{background-color:var(--main-background-color);display:grid;grid-template-columns:50px 1fr}.main[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .router[_ngcontent-%COMP%]{z-index:1;position:relative;margin-left:auto;margin-right:auto;padding:25px 25px 0;min-height:100vh;overflow-x:hidden}"]}),t}(),k=function(){function t(){this.data=[{id:"ch",image:"https://i1.sndcdn.com/avatars-000582864471-vb016p-t500x500.jpg",title:"Changing Homes",subtitle:"Band",description:"I'm in this band! We make all kinds of weird shit regardless of genre.<br /><br />We are releasing our next EP sometime this year.",links:{spotify:"https://open.spotify.com/artist/5M1zRN28GLSDh7B4aJzNLg?si=0myo5Eq7QpKLQ-EBnkJHig",soundcloud:"https://soundcloud.com/changing-homes",youtube:"https://www.youtube.com/channel/UCRQygYIe8vP9qZmHwr_YtVA"},type:"band"},{id:"happydays",image:"https://i.imgur.com/JECusiO.jpg",title:"Happy Days",subtitle:"Single",description:"Happy Days is an instrumental, atmospheric song about a moment of reprieve, about daydreaming in the middle of work.   <br /><br /> The beautiful album art was again done by my amazing wife.",links:{spotify:null,soundcloud:null,youtube:"https://www.youtube.com/watch?v=ysqB6j-mgDA"},type:"track"},{id:"igtba",image:"https://i.imgur.com/mrvshGX.png",title:"It's going to be alright",subtitle:"Single",description:"This song is all about perseverance. Things are pretty bad right now around the world as I write this. 2020 is a year of tragedy and yet we go on no matter what in the hopes that tomorrow will be a better day. So really, hold on to hope. Hold on to your friends. It's not over yet. It's going to be alright!   <br /><br /> Amazing album art done by my wife.",links:{spotify:null,soundcloud:null,youtube:"https://www.youtube.com/watch?v=OzpzyVS3t90"},type:"track"},{id:"drive",image:"https://i1.sndcdn.com/artworks-MyF33mqrsnokNxCT-x4TyOw-t500x500.jpg",title:"Drive",subtitle:"Single",description:"This is my first solo track. <br /><br />Drive came out of me messing around with an app called Bandlab (which is really good, by the way, for making music on the go). It's a bluesy, hip-hoppy track that you'll want to play while you're driving alone at night, hence the title.",links:{spotify:null,soundcloud:"https://soundcloud.com/raj-wraith/drive",youtube:"https://www.youtube.com/watch?v=N7BcEcDcTlo"},type:"track"},{id:"dissonance",image:"https://i1.sndcdn.com/artworks-HuVDmCzKBz8yQtEU-KSfh9w-t500x500.jpg",title:"Dissonance",subtitle:"Single",description:"The first track I mixed and mastered myself with lots of invaluable advice from friends. Bit off more than I could chew to be honest but hey, man's gotta try! <br /><br /> Amazing album art done by my wife.",links:{spotify:null,soundcloud:"https://soundcloud.com/raj-wraith/dissonance",youtube:"https://www.youtube.com/watch?v=OxxGp1-lnyo"},type:"track"}]}return t.prototype.getData=function(){return this.data},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac=function(n){return new(n||t)},providedIn:"root"}),t}(),y=e("ofXK");function w(t,n){if(1&t&&(i.Nb(0,"a",6),i.Nb(1,"div"),i.Lb(2,"fa-icon",7),i.Nb(3,"p"),i.nc(4,"Spotify"),i.Mb(),i.Mb(),i.Mb()),2&t){var e=i.Yb();i.bc("href",e.data.links.spotify,i.jc),i.Ab(2),i.bc("icon",e.faSpotify)}}function x(t,n){if(1&t&&(i.Nb(0,"a",6),i.Nb(1,"div"),i.Lb(2,"fa-icon",7),i.Nb(3,"p"),i.nc(4,"Soundcloud"),i.Mb(),i.Mb(),i.Mb()),2&t){var e=i.Yb();i.bc("href",e.data.links.soundcloud,i.jc),i.Ab(2),i.bc("icon",e.faSoundcloud)}}function N(t,n){if(1&t&&(i.Nb(0,"a",6),i.Nb(1,"div"),i.Lb(2,"fa-icon",7),i.Nb(3,"p"),i.nc(4,"YouTube"),i.Mb(),i.Mb(),i.Mb()),2&t){var e=i.Yb();i.bc("href",e.data.links.youtube,i.jc),i.Ab(2),i.bc("icon",e.faYoutube)}}function L(t,n){if(1&t){var e=i.Ob();i.Nb(0,"div",8),i.Ub("click",function(){i.gc(e);var t=i.Yb();return t.goToTrack(t.data.id)}),i.Nb(1,"span"),i.nc(2,"View Track"),i.Mb(),i.Lb(3,"fa-icon",7),i.Mb()}if(2&t){var o=i.Yb();i.Ab(3),i.bc("icon",o.faArrowRight)}}var T=function(t,n){return{"two-columns":t,"three-columns":n}},j=function(){function t(t,n){this.router=t,this.route=n,this.faArrowRight=s.a,this.faSpotify=p.e,this.faYoutube=p.f,this.faSoundcloud=p.d}return t.prototype.ngOnInit=function(){this.numLinks=Object.keys(this.data.links).length},t.prototype.goToTrack=function(t){this.router.navigate(["track",t])},t.\u0275fac=function(n){return new(n||t)(i.Kb(c.b),i.Kb(c.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-music"]],inputs:{data:"data"},decls:12,vars:11,consts:[[1,"music"],[1,"right"],[1,"description",3,"innerHTML"],[1,"links",3,"ngClass"],["class","link","target","_blank",3,"href",4,"ngIf"],["class","custom-button",3,"click",4,"ngIf"],["target","_blank",1,"link",3,"href"],[3,"icon"],[1,"custom-button",3,"click"]],template:function(t,n){1&t&&(i.Nb(0,"div",0),i.Nb(1,"div",1),i.Nb(2,"h1"),i.nc(3),i.Mb(),i.Nb(4,"h3"),i.nc(5),i.Mb(),i.Lb(6,"p",2),i.Nb(7,"div",3),i.mc(8,w,5,2,"a",4),i.mc(9,x,5,2,"a",4),i.mc(10,N,5,2,"a",4),i.Mb(),i.mc(11,L,4,1,"div",5),i.Mb(),i.Mb()),2&t&&(i.Ab(3),i.oc(n.data.title),i.Ab(2),i.oc(n.data.subtitle),i.Ab(1),i.bc("innerHTML",n.data.description,i.hc),i.Ab(1),i.bc("ngClass",i.dc(8,T,2===n.numLinks,3===n.numLinks)),i.Ab(1),i.bc("ngIf",n.data.links.spotify),i.Ab(1),i.bc("ngIf",n.data.links.soundcloud),i.Ab(1),i.bc("ngIf",n.data.links.youtube),i.Ab(1),i.bc("ngIf","track"===n.data.type))},directives:[y.h,y.j,b.a],styles:[".music[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto;grid-gap:15px;margin-bottom:30px}.music[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{margin-bottom:15px}.music[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;max-width:400px}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--text-color);font-weight:700;font-size:25px;margin-bottom:7.5px}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:uppercase}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-color);margin-bottom:15px}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:100;line-height:25px}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:30px;margin-bottom:15px}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:inherit;border-radius:3px;padding:4px 0;text-decoration:none;transition:background-color .2s ease-in-out}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:var(--text-color);text-align:center}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:0}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin-bottom:0;display:none}@media (min-width:768px){.music[_ngcontent-%COMP%]{grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr;grid-gap:30px}.music[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%]{max-width:500px}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:5px}.music[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block}}"]}),t}();function A(t,n){1&t&&i.Lb(0,"app-music",1),2&t&&i.bc("data",n.$implicit)}var E=function(){function t(t){this.demoDataService=t,this.data=this.demoDataService.getData()}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)(i.Kb(k))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-my-music"]],hostVars:1,hostBindings:function(t,n){2&t&&i.lc("@fadeAnimation",void 0)},decls:1,vars:1,consts:[[3,"data",4,"ngFor","ngForOf"],[3,"data"]],template:function(t,n){1&t&&i.mc(0,A,1,1,"app-music",0),2&t&&i.bc("ngForOf",n.data)},directives:[y.i,j],styles:[""],data:{animation:[a]}}),t}(),S=e("Phsq");function I(t,n){if(1&t&&(i.Nb(0,"a",7),i.Nb(1,"div"),i.Lb(2,"fa-icon",8),i.Nb(3,"p"),i.nc(4,"Spotify"),i.Mb(),i.Mb(),i.Mb()),2&t){var e=i.Yb();i.bc("href",e.trackData.links.spotify,i.jc),i.Ab(2),i.bc("icon",e.faSpotify)}}function D(t,n){if(1&t&&(i.Nb(0,"a",7),i.Nb(1,"div"),i.Lb(2,"fa-icon",8),i.Nb(3,"p"),i.nc(4,"Soundcloud"),i.Mb(),i.Mb(),i.Mb()),2&t){var e=i.Yb();i.bc("href",e.trackData.links.soundcloud,i.jc),i.Ab(2),i.bc("icon",e.faSoundcloud)}}function H(t,n){if(1&t&&(i.Nb(0,"a",7),i.Nb(1,"div"),i.Lb(2,"fa-icon",8),i.Nb(3,"p"),i.nc(4,"YouTube"),i.Mb(),i.Mb(),i.Mb()),2&t){var e=i.Yb();i.bc("href",e.trackData.links.youtube,i.jc),i.Ab(2),i.bc("icon",e.faYoutube)}}var z=function(t,n){return{"two-columns":t,"three-columns":n}},R=function(){function t(t,n,e,o,i){this.router=t,this.route=n,this.demoDataService=e,this.sanitizer=o,this.meta=i,this.faArrowRight=s.a,this.faSpotify=p.e,this.faYoutube=p.f,this.faSoundcloud=p.d}return t.prototype.ngOnInit=function(){var t=this;this.data=this.demoDataService.getData(),this.route.params.subscribe(function(n){t.setTrack(n.track)})},t.prototype.setTrack=function(t){switch(t){case"happydays":this.setEmbedVideoUrl(1),this.setMeta();break;case"igtba":this.setEmbedVideoUrl(2),this.setMeta();break;case"drive":this.setEmbedVideoUrl(3),this.setMeta();break;case"dissonance":this.setEmbedVideoUrl(4),this.setMeta();break;default:this.router.navigate(["my-music"])}},t.prototype.setEmbedVideoUrl=function(t){this.trackData=this.data[t];var n="https://www.youtube.com/embed/"+this.extractYoutubeVideoId(this.trackData.links.youtube);this.embedVideoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(n),this.numLinks=Object.keys(this.trackData.links).length},t.prototype.setMeta=function(){this.meta.setTitle(""+this.trackData.title),this.meta.setTag("og:description",""+this.trackData.description),this.meta.setTag("og:image",this.trackData.image)},t.prototype.extractYoutubeVideoId=function(t){var n=t.split("v=")[1],e=n.indexOf("&");return-1!=e&&(n=n.substring(0,e)),n},t.\u0275fac=function(n){return new(n||t)(i.Kb(c.b),i.Kb(c.a),i.Kb(k),i.Kb(o.b),i.Kb(S.d))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-track"]],decls:13,vars:11,consts:[[1,"track"],[1,"top"],["height","400","frameborder","0","allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"],[1,"bottom"],[1,"description",3,"innerHTML"],[1,"links",3,"ngClass"],["class","link","target","_blank",3,"href",4,"ngIf"],["target","_blank",1,"link",3,"href"],[3,"icon"]],template:function(t,n){1&t&&(i.Nb(0,"div",0),i.Nb(1,"div",1),i.Lb(2,"iframe",2),i.Mb(),i.Nb(3,"div",3),i.Nb(4,"h1"),i.nc(5),i.Mb(),i.Nb(6,"h3"),i.nc(7),i.Mb(),i.Lb(8,"p",4),i.Nb(9,"div",5),i.mc(10,I,5,2,"a",6),i.mc(11,D,5,2,"a",6),i.mc(12,H,5,2,"a",6),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.Ab(2),i.bc("src",n.embedVideoUrl,i.ic),i.Ab(3),i.oc(n.trackData.title),i.Ab(2),i.oc(n.trackData.subtitle),i.Ab(1),i.bc("innerHTML",n.trackData.description,i.hc),i.Ab(1),i.bc("ngClass",i.dc(8,z,2===n.numLinks,3===n.numLinks)),i.Ab(1),i.bc("ngIf",n.trackData.links.spotify),i.Ab(1),i.bc("ngIf",n.trackData.links.soundcloud),i.Ab(1),i.bc("ngIf",n.trackData.links.youtube))},directives:[y.h,y.j,b.a],styles:[".track[_ngcontent-%COMP%]{margin-bottom:30px}.track[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{margin-bottom:15px;margin-left:auto;margin-right:auto}.track[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--text-color);font-weight:700;font-size:25px;margin-bottom:7.5px}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:uppercase}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-color);margin-bottom:15px}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:100;line-height:25px}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:30px;margin-bottom:15px}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:inherit;border-radius:3px;padding:4px 0;text-decoration:none;transition:background-color .2s ease-in-out}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:var(--text-color);text-align:center}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:0}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin-bottom:0;display:none}@media (min-width:768px){.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:5px}.track[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block}}"]}),t}(),K=[{path:"",component:v,canActivateChild:[S.a],children:[{path:"home",component:g,data:{meta:{title:"Home",description:"This is my personal space on the net"}}},{path:"my-music",component:E,data:{meta:{title:"Music",description:"All my musical projects"}}},{path:"projects",component:function(){function t(){this.faExternalLinkAlt=s.c,this.everestLink="https://tryeverest.app/",this.lazywalletLink="https://github.com/rajsaha/lazywallet"}return t.prototype.ngOnInit=function(){},t.prototype.goTo=function(t){window.open(t,"_blank")},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-projects"]],decls:43,vars:2,consts:[[1,"projects"],[1,"project"],[1,"left"],[1,"project-title"],[1,"tag","live"],[1,"project-description"],["href","https://github.com/rajsaha/ng_everest","target","_blank"],[1,"custom-button",3,"click"],[3,"icon"],[1,"tag","in-development"]],template:function(t,n){1&t&&(i.Nb(0,"div",0),i.Nb(1,"h2"),i.nc(2,"My Projects"),i.Mb(),i.Nb(3,"div",1),i.Nb(4,"div",2),i.Nb(5,"div",3),i.Nb(6,"h3"),i.nc(7," Everest "),i.Mb(),i.Nb(8,"p",4),i.nc(9,"Live"),i.Mb(),i.Mb(),i.Nb(10,"div",5),i.Nb(11,"p"),i.nc(12," Everest is a social network that's focused on sharing and collecting stuff you find on the Internet."),i.Lb(13,"br"),i.Lb(14,"br"),i.nc(15," It's not a replacement for traditional social media. Rather, its focus is on keeping a library of resources and sharing them with your friends, should you choose to do so."),i.Lb(16,"br"),i.Lb(17,"br"),i.nc(18," The project is open-source and features are being added whenever time allows. If you're reading this and want to contribute or fork the project, "),i.Nb(19,"a",6),i.nc(20,"click here"),i.Mb(),i.nc(21,". Have fun! "),i.Mb(),i.Mb(),i.Nb(22,"div",7),i.Ub("click",function(){return n.goTo(n.everestLink)}),i.Nb(23,"span"),i.nc(24,"View Project"),i.Mb(),i.Lb(25,"fa-icon",8),i.Mb(),i.Mb(),i.Mb(),i.Nb(26,"div",1),i.Nb(27,"div",2),i.Nb(28,"div",3),i.Nb(29,"h3"),i.nc(30," Lazywallet "),i.Mb(),i.Nb(31,"p",9),i.nc(32,"In development"),i.Mb(),i.Mb(),i.Nb(33,"div",5),i.Nb(34,"p"),i.nc(35," Lazywallet is an expense manager app made using React. Most expense manager apps I've come across on the play store are badly designed or have way too many features."),i.Lb(36,"br"),i.Lb(37,"br"),i.nc(38," I want to make something that hits the sweet spot, something that's powerful yet extremely easy to use. "),i.Mb(),i.Mb(),i.Nb(39,"div",7),i.Ub("click",function(){return n.goTo(n.lazywalletLink)}),i.Nb(40,"span"),i.nc(41,"View Github"),i.Mb(),i.Lb(42,"fa-icon",8),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.Ab(25),i.bc("icon",n.faExternalLinkAlt),i.Ab(17),i.bc("icon",n.faExternalLinkAlt))},directives:[b.a],styles:[".projects[_ngcontent-%COMP%]{z-index:1;margin-bottom:15px}.projects[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;margin-bottom:15px;text-transform:uppercase}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:1fr;grid-gap:15px}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:25px}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]{margin-bottom:15px}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:uppercase;margin-bottom:5px}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:12px}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]{margin-bottom:15px}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:100;line-height:25px}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-color)}.tag[_ngcontent-%COMP%]{padding:3px 5px;text-transform:uppercase;font-size:10px;display:inline-block;border-radius:3px;letter-spacing:2px}.in-development[_ngcontent-%COMP%]{background-color:var(--in-development)}.live[_ngcontent-%COMP%]{background-color:#80e27e;color:#000}@media (min-width:768px){.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}"]}),t}(),data:{meta:{title:"Projects",description:"All my software projects"}}},{path:"track/:track",component:R}]},{path:"**",redirectTo:"home",pathMatch:"full"}],U=function(){function t(){}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(n){return new(n||t)},imports:[[c.e.forRoot(K,{relativeLinkResolution:"legacy"})],c.e]}),t}(),Y=e("R1ws"),V=Object(m.d)("light",Object(m.e)(f,function(t,n){return n.theme}));function G(t,n){return V(t,n)}var B=function(){function t(){this.title="ng-portfolio"}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(t,n){1&t&&i.Lb(0,"router-outlet")},directives:[c.f],styles:[""]}),t}();function q(){return new S.e({pageTitlePositioning:S.f.PrependPageTitle,pageTitleSeparator:" - ",applicationName:"Raj Saha",defaults:{title:"Raj Saha's Portfolio",description:"This is my personal space on the net","og:image":"https://i.imgur.com/lcZys3p.png"}})}var F=function(){function t(){}return t.\u0275mod=i.Ib({type:t,bootstrap:[B]}),t.\u0275inj=i.Hb({factory:function(n){return new(n||t)},providers:[h],imports:[[o.a,Y.a,U,S.c.forRoot({provide:S.b,useFactory:q}),b.b,m.b.forRoot({appThemeState:G})]]}),t}();Object(i.U)(),o.e().bootstrapModule(F).catch(function(t){return console.error(t)})},zn8P:function(t,n){function e(t){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="zn8P"}},[[0,0,5]]]);