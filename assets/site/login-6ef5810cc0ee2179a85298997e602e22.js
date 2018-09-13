/*

    新logo不使用js
    cricy

*/
// KISSY.add('ux/logo', function(S) {
//     /**
//      * <a href="/" class=".dim">
//      *   <span class="lighten">LOGO</span>
//      * </a>
//      *
//      * .dim 背景图为阴暗状态，.lighten 则是点亮
//      */
//     function light(e) {
//         var a = S.Node(e.currentTarget),
//             span = a.one('.lighten');
//         if (span.isRunning()) {
//             span.stop();
//         }
//         span.animate({opacity: 1}, .1);
//     }
//     function dim(e) {
//         var span = S.Node(e.currentTarget).one('.lighten');
//         if (span.isRunning()) {
//             span.stop();
//         }
//         span.fadeOut(.5, function() {
//             span.css({opacity: 0, display: 'block'});
//         });
//     }
//     function bind() {
//         S.all('.ux-logo').each(function(logo) {
//             if (logo.data('tesla-bound')) {
//                 return;
//             }
//             var a = logo.one('a'),
//                 span = a.one('.lighten');
//             span.css({opacity: 0}).show();
//             a.on('mouseenter', light);
//             a.on('mouseleave', dim);
//             a = span = null;
//         });
//     }
//     bind();
//     return {
//         bind: bind
//     };
// });
KISSY.use("sizzle",function(a){KISSY.IO.setupConfig({headers:{"X-CSRF-Token":a.all('meta[name="csrf-token"]').attr("content")}})}),KISSY.add("ux/warn",function(a){function b(){function d(){var a=this,d=c(a.target),e,f='<div class="med-tip med-tip-ie"><p class="noclose estate"><i class="iconfont"></i><span class="label"></span>';"</p></div>",d.attr("data-medtip-id")?e=c(d.attr("data-medtip-id")):e=b(f).appendTo(d.parent());if(e){a.panel=e,a.panelheight=e.css("height"),a.estate=e.one(".estate"),a.iconfont=e.one(".iconfont"),a.label=e.one(".label");if(!a.estate||!a.label)return;e.hide()}}function e(a,b,c){var d=this.panel,e=this.label,f=this.estate,g=this.iconfont,h="ok noborder nobackground nocontent",i="&#126",j="error",k="&#223";a===3?d.hide():a===1?(f.removeClass(j),f.addClass(h),g.html(i),e.html(""),d.show()):(f.addClass(j),f.removeClass(h),g.html(k),e.html(b),d.show())}var b=a.Node,c=b.all;return{init:d,showMessage:e,style:{med:{event:"blur keyup"}}}}return b},{requires:["template"]}),KISSY.add("uf/validator",function(a,b,c){b.Warn.extend("ux/warn",c);var d=a.one("#J_loginForm"),e=new b(d[0],{warn:"ux/warn",style:"med"});d.on("submit",function(a){e.isValid()||(a.preventDefault(),alert("有地方没填对，请检查一下哦"))})},{requires:["validation","ux/warn"]}),KISSY.use("uf/validator");