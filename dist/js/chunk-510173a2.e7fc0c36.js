(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-510173a2"],{"0823":function(t,e,a){"use strict";a.r(e);a("a4d3"),a("e01a");var c=a("7a23"),n=Object(c["F"])("data-v-b33460ba");Object(c["s"])("data-v-b33460ba");var l={class:"container m-auto position-relative"},o={class:"table"},i=Object(c["g"])("thead",null,[Object(c["g"])("th",null,"分類"),Object(c["g"])("th",null,"產品名稱"),Object(c["g"])("th",null,"原價"),Object(c["g"])("th",null,"售價"),Object(c["g"])("th",null,"是否啟用"),Object(c["g"])("th",null,"編輯"),Object(c["g"])("th",null,"刪除")],-1),r={class:"modal-bg modal-close",ref:"ModalDOM"},d={class:"container mt-5 m-auto bg-white"},u={class:"p-4"},s={class:"d-flex"},b=Object(c["g"])("h5",{class:"flex-grow-1",id:"exampleModalLabel"},"商品建立 / 編輯",-1),p={class:"d-flex"},g={class:"img-block me-3"},m=Object(c["g"])("label",{for:"",class:""},[Object(c["f"])("下面的選擇檔案 "),Object(c["g"])("br"),Object(c["f"])(),Object(c["g"])("br"),Object(c["f"])(" 輸入網址上傳未實作")],-1),O={class:"input-block"},j=Object(c["g"])("label",{for:"title",class:"form-label"},"商品名稱",-1),f=Object(c["g"])("label",{for:"category",class:"form-label"},"商品種類",-1),v=Object(c["g"])("label",{for:"origin_price",class:"form-label"},"打折前價格",-1),h=Object(c["g"])("label",{for:"price",class:"form-label"},"打折後價格",-1),y=Object(c["g"])("label",{for:"unit",class:"form-label"},"單位",-1),P=Object(c["g"])("label",{for:"description",class:"form-label"},"商品簡介",-1),T=Object(c["g"])("label",{for:"content",class:"form-label"},"商品細節",-1),A=Object(c["g"])("label",{for:"is_enabled",class:"form-label"},"是否啟用",-1),U={class:""};Object(c["q"])();var x=n((function(t,e,a,n,x,D){var C=Object(c["w"])("pagenation");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",l,[Object(c["g"])("table",o,[i,Object(c["g"])("tbody",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(n.AdminProductList.data,(function(t){return Object(c["p"])(),Object(c["d"])("tr",{key:t.id,class:""},[Object(c["g"])("td",null,Object(c["y"])(t.category),1),Object(c["g"])("td",null,Object(c["y"])(t.title),1),Object(c["g"])("td",null,Object(c["y"])(t.origin_price),1),Object(c["g"])("td",null,Object(c["y"])(t.price),1),Object(c["g"])("td",null,Object(c["y"])(t.is_enabled?"已啟用":"未啟用"),1),Object(c["g"])("td",null,[Object(c["g"])("button",{type:"button",class:"btn btn-primary",onClick:Object(c["E"])((function(e){return n.ModalOpen(!1,t)}),["prevent"])},"編輯",8,["onClick"])]),Object(c["g"])("td",null,[Object(c["g"])("button",{type:"button",class:"btn btn-danger",onClick:Object(c["E"])((function(e){return n.AdminDelProduct(t.id)}),["prevent"])},"刪除",8,["onClick"])])])})),128))])]),Object(c["g"])(C,{PageData:n.AdminPagination,onOut_getdata:n.AdminGetProductList},null,8,["PageData","onOut_getdata"])]),Object(c["g"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=Object(c["E"])((function(t){return n.ModalOpen(!0)}),["prevent"]))}," 建立商品 "),Object(c["g"])("div",r,[Object(c["g"])("div",d,[Object(c["g"])("div",u,[Object(c["g"])("div",s,[b,Object(c["g"])("button",{type:"button",class:"btn-close ","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[2]||(e[2]=Object(c["E"])((function(){return n.ModalClose&&n.ModalClose.apply(n,arguments)}),["prevent"]))})]),Object(c["g"])("div",p,[Object(c["g"])("div",g,[m,Object(c["g"])("input",{ref:"file",type:"file",id:"file",class:"",onChange:e[3]||(e[3]=function(){return n.UploadImg&&n.UploadImg.apply(n,arguments)})},null,544),Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return n.TempProduct.data.imageUrl=t}),class:""},null,512),[[c["A"],n.TempProduct.data.imageUrl]]),Object(c["g"])("img",{src:n.TempProduct.data.imageUrl,alt:""},null,8,["src"])]),Object(c["g"])("div",O,[j,Object(c["D"])(Object(c["g"])("input",{type:"text",id:"title",class:"form-control",placeholder:"請輸入商品名稱","onUpdate:modelValue":e[5]||(e[5]=function(t){return n.TempProduct.data.title=t})},null,512),[[c["A"],n.TempProduct.data.title]]),f,Object(c["D"])(Object(c["g"])("input",{type:"text",id:"category",class:"form-control",placeholder:"請輸入商品種類","onUpdate:modelValue":e[6]||(e[6]=function(t){return n.TempProduct.data.category=t})},null,512),[[c["A"],n.TempProduct.data.category]]),v,Object(c["D"])(Object(c["g"])("input",{type:"number",id:"origin_price",class:"form-control",placeholder:"請輸入原價",min:"0","onUpdate:modelValue":e[7]||(e[7]=function(t){return n.TempProduct.data.origin_price=t})},null,512),[[c["A"],n.TempProduct.data.origin_price,void 0,{number:!0}]]),h,Object(c["D"])(Object(c["g"])("input",{type:"number",id:"price",class:"form-control",placeholder:"請輸入售價",min:"0","onUpdate:modelValue":e[8]||(e[8]=function(t){return n.TempProduct.data.price=t})},null,512),[[c["A"],n.TempProduct.data.price,void 0,{number:!0}]]),y,Object(c["D"])(Object(c["g"])("input",{type:"text",id:"unit",class:"form-control",placeholder:"請輸入商品單位","onUpdate:modelValue":e[9]||(e[9]=function(t){return n.TempProduct.data.unit=t})},null,512),[[c["A"],n.TempProduct.data.unit]]),P,Object(c["D"])(Object(c["g"])("input",{type:"text",id:"description",class:"form-control",placeholder:"請輸入商品簡介","onUpdate:modelValue":e[10]||(e[10]=function(t){return n.TempProduct.data.description=t})},null,512),[[c["A"],n.TempProduct.data.description]]),T,Object(c["D"])(Object(c["g"])("input",{type:"text",id:"content",class:"form-control",placeholder:"請輸入商品詳細資訊","onUpdate:modelValue":e[11]||(e[11]=function(t){return n.TempProduct.data.content=t})},null,512),[[c["A"],n.TempProduct.data.content]]),A,Object(c["D"])(Object(c["g"])("input",{type:"text",id:"is_enabled",class:"form-control",placeholder:"是否啟用","onUpdate:modelValue":e[12]||(e[12]=function(t){return n.TempProduct.data.is_enabled=t})},null,512),[[c["A"],n.TempProduct.data.is_enabled]])])]),Object(c["g"])("div",U,[Object(c["g"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",onClick:e[13]||(e[13]=Object(c["E"])((function(){return n.ModalClose&&n.ModalClose.apply(n,arguments)}),["prevent"]))},"取消"),Object(c["g"])("button",{type:"button",class:"btn btn-primary",onClick:e[14]||(e[14]=Object(c["E"])((function(){return n.BtnSubmit&&n.BtnSubmit.apply(n,arguments)}),["prevent"]))},"確定")])])])],512)],64)})),D=a("5530"),C=(a("99af"),a("bc3a")),k=a.n(C),_=a("a1e9"),w=a("5c40"),M=a("062e"),S={components:{pagenation:M["a"]},setup:function(){var t=Object(_["j"])(null),e=Object(_["j"])(null),a=Object(_["j"])(!1),c=Object(_["i"])({data:[]}),n=Object(_["i"])({data:{}}),l=Object(_["i"])({data:{}}),o=function(e,c){e?(a.value=e,l.data={}):(a.value=e,l.data=Object(D["a"])({},c)),t.value.classList.add("modal-show")},i=function(){t.value.classList.remove("modal-show")},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;k.a.get("".concat("https://vue3-course-api.hexschool.io/api/vue-live","/admin/products?page=").concat(t)).then((function(t){t.data.success?(c.data=t.data.products,n.data=t.data.pagination):alert(t.data.message)})).catch((function(t){alert(t.message)}))},d=function(){k.a.post("".concat("https://vue3-course-api.hexschool.io/api/vue-live","/admin/product"),l).then((function(t){t.data.success?(alert(t.data.message),r(),i()):alert(t.data.message)})).catch((function(t){alert(t.message)}))},u=function(){k.a.put("".concat("https://vue3-course-api.hexschool.io/api/vue-live","/admin/product/").concat(l.data.id),l).then((function(t){t.data.success?(alert(t.data.message),r(),i()):alert(t.data.message)})).catch((function(t){alert(t.message)}))},s=function(t){k.a.delete("".concat("https://vue3-course-api.hexschool.io/api/vue-live","/admin/product/").concat(t)).then((function(t){t.data.success?(alert(t.data.message),r()):alert(t.data.message)})).catch((function(t){alert(t.message)}))},b=function(){var t=e.value.files[0],a=new FormData;a.append("file-to-upload",t),k.a.post("".concat("https://vue3-course-api.hexschool.io/api/vue-live","/admin/upload"),a).then((function(t){l.data.imageUrl=t.data.imageUrl}))},p=function(){a.value?d():u()};return Object(w["u"])((function(){r()})),{AdminGetProductList:r,AdminDelProduct:s,AdminProductList:c,AdminPagination:n,UploadImg:b,BtnSubmit:p,TempProduct:l,ModalDOM:t,file:e,ModalOpen:o,ModalClose:i}}};a("2f86");S.render=x,S.__scopeId="data-v-b33460ba";e["default"]=S},"2f86":function(t,e,a){"use strict";a("382e")},"382e":function(t,e,a){},e01a:function(t,e,a){"use strict";var c=a("23e7"),n=a("83ab"),l=a("da84"),o=a("5135"),i=a("861d"),r=a("9bf2").f,d=a("e893"),u=l.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var s={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new u(t):void 0===t?u():u(t);return""===t&&(s[e]=!0),e};d(b,u);var p=b.prototype=u.prototype;p.constructor=b;var g=p.toString,m="Symbol(test)"==String(u("test")),O=/^Symbol\((.*)\)[^)]+$/;r(p,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=g.call(t);if(o(s,t))return"";var a=m?e.slice(7,-1):e.replace(O,"$1");return""===a?void 0:a}}),c({global:!0,forced:!0},{Symbol:b})}}}]);
//# sourceMappingURL=chunk-510173a2.e7fc0c36.js.map