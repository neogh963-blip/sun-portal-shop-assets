import*as e from"three"
const t=new Uint8Array(512)
!function(){let e=1337
const n=[...Array(256).keys()]
for(let t=255;t>0;t--){e=16807*e%2147483647
const a=e%(t+1);[n[t],n[a]]=[n[a],n[t]]}for(let e=0;e<512;e++)t[e]=n[255&e]}()
const n=e=>e*e*(3-2*e)
function a(e,n,a){return t[t[t[255&e]+n&255]+a&255]/255}function o(e,t,o){const s=Math.floor(e),c=Math.floor(t),i=Math.floor(o),r=n(e-s),l=n(t-c),f=n(o-i),d=a(s,c,i),b=a(s+1,c,i),p=a(s,c+1,i),h=a(s+1,c+1,i),m=a(s,c,i+1),u=a(s+1,c,i+1),w=a(s,c+1,i+1),g=d+(b-d)*r,v=m+(u-m)*r,M=g+(p+(h-p)*r-g)*l
return M+(v+(w+(a(s+1,c+1,i+1)-w)*r-v)*l-M)*f}function s(e,t,n,a=4){let s=.5,c=0,i=0
for(let r=0;r<a;r++){c+=s*o(e,t,n)
i+=s
e=2.03*e+17.1
t=2.03*t+3.7
n=2.03*n+9.3
s*=.5}return c/i}const c=e=>{const t=parseInt(e.slice(1),16)
return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]},i=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],r=(e,t,n)=>{const a=Math.min(1,Math.max(0,(n-e)/(t-e)))
return a*a*(3-2*a)},l=e=>Math.min(1,Math.max(0,e)),f=new Map,d=new Map,b=new Map
function p(t=1){const n=t%5
if(b.has(n))return b.get(n)
const a=new e.SphereGeometry(1,72,52),o=a.attributes.position,c=new e.Vector3
for(let e=0;e<o.count;e++){c.fromBufferAttribute(o,e)
const t=.92+.16*s(1.1*c.x+3.1*n,1.1*c.y,1.1*c.z+n,3)
c.multiplyScalar(t)
c.x*=1.16+.03*n
c.y*=.8+.03*n
c.z*=.95
o.setXYZ(e,c.x,c.y,c.z)}!function(e){e.computeVertexNormals()
const t=e.attributes.position,n=e.attributes.normal,a=new Map
for(let e=0;e<t.count;e++){const n=t.getX(e).toFixed(4)+","+t.getY(e).toFixed(4)+","+t.getZ(e).toFixed(4),o=a.get(n)
o?o.push(e):a.set(n,[e])}for(const e of a.values()){if(e.length<2)continue
let t=0,a=0,o=0
for(const s of e){t+=n.getX(s)
a+=n.getY(s)
o+=n.getZ(s)}const s=Math.hypot(t,a,o)||1
for(const c of e)n.setXYZ(c,t/s,a/s,o/s)}n.needsUpdate=!0}(a)
b.set(n,a)
return a}new e.SphereGeometry(1,40,28)
const h="clear-quartz|clear|point|f4f8ff|dfe8ff|ffffff\nselenite|fibrous|wand|f3f1ea|dcd8cf|ffffff\namethyst|zoned|point|7d3fc4|c9a2ff|4b1d86\nmoonstone|moon|pebble|e9e6f2|bcd4ff|fff8f0\nfluorite|zoned|pebble|8b5fd6|5fd3a8|c7b6ff\nlapis-lazuli|lapis|pebble|1f3fa8|12266e|e8c35a\ncelestite|mottled|cluster|b9d6f5|e3efff|8fb6e6\nangelite|mottled|pebble|9fbbe0|c9d9f0|7f9bc9\nlabradorite|flash|pebble|4a5258|2e3438|3fb6ff\nsodalite|veined|pebble|1d3e9c|f1f3fb|0f2266\nturquoise|veined|pebble|3cc4bf|5b4630|7fe0d6\nblue-kyanite|fibrous|blade|3a6fd0|8fb0ee|1e3f99\namazonite|veined|pebble|4fc9b0|e6fff8|2c9c88\naquamarine|clear|pebble|9fe3f0|c9f3ff|6fd0e6\nrose-quartz|mottled|pebble|f5b6c8|ffd9e3|e892ad\ngreen-aventurine|sparkle|pebble|2f9a5b|5cc985|d8ffe8\njade|mottled|pebble|3f9e6a|7fd09d|1f6b44\nprehnite|mottled|pebble|b7e08a|dff5b8|8fc06a\nmalachite|banded|pebble|118a55|47d18e|06402a\ncitrine|clear|point|f7c53d|ffe08a|e8941c\ntigers-eye|chatoyant|pebble|a8691e|f0b44a|4a2a0c\namber|clear|pebble|e08a1c|ffc35a|a8520c\nsunstone|sparkle|pebble|e8743a|ffb070|fff0c8\nyellow-obsidian|clear|pebble|ffd21f|fff07a|e8a800\ncarnelian|mottled|pebble|e5562a|ff8a4a|b8341a\norange-calcite|mottled|pebble|ffa246|ffc98a|e8822a\norange-citrine|clear|pebble|ff9a2e|ffc46a|d8641a\ngoldstone|sparkle|pebble|7a3416|a54a22|ffcf8a\npyrite|metal|cube|c9a95a|e8d08a|8a7034\nred-jasper|mottled|pebble|a8301f|cf4a2e|6e1c12\nbloodstone|spots|pebble|1e4a34|c42a1e|2f6b4c\nblack-onyx|black|pebble|0d0d12|22222c|3a3a48\nred-tigers-eye|chatoyant|pebble|7e2418|d0563a|3a0e08\nblack-tourmaline|black|prism|111116|2a2a33|55556a\nsmoky-quartz|clear|point|8a6a52|b89a80|4a3628\nobsidian|black|pebble|050507|1a1a22|2a2a3a\nhematite|metal|pebble|5a5e66|9aa0aa|2e3036\nlepidolite|sparkle|pebble|9a7fc0|c4ade0|f2e8ff\nblue-lace-agate|banded|pebble|a9c6ec|f2f6ff|7f9fd0\nhowlite|veined|pebble|f1efea|6d6a66|d8d4cc\nrhodonite|veined|pebble|e2799a|1e1618|c25476\nrhodochrosite|banded|pebble|f07c98|ffd0dc|c44a6a\ngarnet|clear|pebble|9e0f24|d8304a|5a0612".split("\n").map(e=>{const[t,n,a,o,s,c]=e.split("|")
return{id:t,kind:n,shape:a,c1:"#"+o,c2:"#"+s,c3:"#"+c}}),m=Object.fromEntries(h.map(e=>[e.id,e]))
let u,w,g,v,M=[],y=0,k=performance.now()
function C(t,n){const a=function(t,n=0){const a=function(t){if(d.has(t.id))return d.get(t.id)
const{map:n,emap:a}=function(t,n=512,a=256){if(f.has(t.id))return f.get(t.id)
const d=c(t.c1),b=c(t.c2),p=c(t.c3),h=document.createElement("canvas")
h.width=n
h.height=a
const m=h.getContext("2d"),u=m.createImageData(n,a),w=u.data,g=["sparkle","flash","moon","lapis"].includes(t.kind)
let v,M,y
if(g){v=document.createElement("canvas")
v.width=n
v.height=a
M=v.getContext("2d").createImageData(n,a)
y=M.data}let k=0
for(const e of t.id)k=(31*k+e.charCodeAt(0))%997
const C=.37*k,x=.71*k,S=.13*k
for(let e=0;e<a;e++){const c=(e+.5)/a*Math.PI,f=Math.sin(c),h=Math.cos(c)
for(let a=0;a<n;a++){const c=(a+.5)/n*Math.PI*2,m=f*Math.cos(c),u=h,v=f*Math.sin(c),M=m+C,k=u+x,z=v+S
let G=d,I=0
switch(t.kind){case"clear":{const e=s(2*M,2*k,2*z,3)
G=i(d,b,.8*e)
const t=Math.pow(1-Math.abs(2*s(3*M+5,3*k,3*z,3)-1),10)
G=i(G,[1,1,1],.5*t)
break}case"zoned":{const e=s(1.6*M,1.6*k,1.6*z,4),t=.5*Math.sin(3.1*(2.6*u+2.4*e))+.5
G=i(p,d,r(0,.6,t))
G=i(G,b,.8*r(.7,1,t))
break}case"mottled":{const e=s(2.4*M,2.4*k,2.4*z,5),t=s(7*M+3,7*k,7*z,3)
G=i(p,d,r(.25,.6,e))
G=i(G,b,.7*r(.55,.85,t))
break}case"veined":{const e=s(1.5*M,1.5*k,1.5*z,3),t=s(2.2*M,2.2*k,2.2*z,4)
G=i(p,d,r(.3,.65,t))
const n=Math.pow(1-Math.abs(2*s(2.6*M+2*e,2.6*k+e,2.6*z,5)-1),9),a=Math.pow(1-Math.abs(2*s(5*M+9,5*k,5*z+e,4)-1),14)
G=i(G,b,l(1.1*n+.6*a))
break}case"lapis":{const e=s(2.5*M,2.5*k,2.5*z,5)
G=i(b,d,r(.3,.7,e))
const t=Math.pow(1-Math.abs(2*s(3*M+4,3*k,3*z,4)-1),12)
G=i(G,[.75,.78,.85],.45*t)
const n=o(70*M,70*k,70*z)
if(n>.83){const e=r(.83,.92,n)
G=i(G,p,e)
I=e}break}case"banded":{const e=.55*s(1.8*M,1.8*k,1.8*z,4),t=m-.3,n=v+.2,a=Math.sqrt(t*t+.6*u*(.6*u)+n*n)+e,o=.5*Math.sin(42*a)+.5
G=i(p,d,r(.2,.7,.5*Math.sin(13*a)+.5))
G=i(G,b,.85*r(.75,.95,o))
G=i(G,p,.6*r(.92,1,1-o))
break}case"spots":{const e=s(2.6*M,2.6*k,2.6*z,4)
G=i(d,p,.8*e)
const t=s(9*M+2,9*k,9*z,3)
t>.64&&(G=i(G,b,r(.64,.72,t)))
break}case"sparkle":{const e=s(2.3*M,2.3*k,2.3*z,4)
G=i(d,b,r(.3,.75,e))
const t=o(95*M,95*k,95*z)
if(t>.86){const e=r(.86,.95,t)
G=i(G,p,.9*e)
I=e}break}case"chatoyant":{const e=s(1.2*M,5*k,1.2*z,4),t=.5*Math.sin(9*(2.2*u+1.6*e))+.5,n=.5*Math.sin(23*(3*u+2.5*e))+.5
G=i(p,d,r(.15,.6,t))
G=i(G,b,r(.6,1,t)*r(.3,1,n))
break}case"flash":{const e=s(2.6*M,2.6*k,2.6*z,5)
G=i(b,d,e)
const t=s(1.7*M+8,1.7*k,1.7*z,4),n=s(3*M+1,3*k,3*z,3),a=r(.5,.66,t)
G=i(G,n<.45?p:n<.58?[.2,.7,.5]:[.9,.65,.2],.7*a)
I=a
const c=Math.pow(1-Math.abs(2*o(2*M,30*k,2*z)-1),20)
G=i(G,[0,0,0],.3*c)
break}case"moon":{const e=s(2*M,2*k,2*z,4)
G=i(d,p,e)
const t=s(1.4*M+6,1.4*k,1.4*z,3)
I=r(.5,.7,t)
G=i(G,b,.5*I)
break}case"black":{const e=s(3*M,3*k,3*z,3)
G=i(d,b,.35*e)
if("prism"===t.shape){const e=o(60*m,1.5*u,60*v)
G=i(G,p,.6*r(.6,.9,e))}break}case"metal":{const e=s(4*M,4*k,4*z,4)
G=i(p,b,e)
break}case"fibrous":{const e=o(80*m+C,2*u,80*v+S),t=s(2*M,2*k,2*z,3)
G=i(d,b,.8*e)
G=i(G,p,.5*r(.6,.9,t))
break}}const j=4*(e*n+a)
w[j]=255*G[0]
w[j+1]=255*G[1]
w[j+2]=255*G[2]
w[j+3]=255
if(g){y[j]=y[j+1]=y[j+2]=255*I
y[j+3]=255}}}m.putImageData(u,0,0)
const z=new e.CanvasTexture(h)
z.colorSpace=e.SRGBColorSpace
z.anisotropy=4
let G=null
if(g){v.getContext("2d").putImageData(M,0,0)
G=new e.CanvasTexture(v)
G.colorSpace=e.SRGBColorSpace}const I={map:z,emap:G,thumb:h}
f.set(t.id,I)
return I}(t),b=new e.MeshPhysicalMaterial({map:n,roughness:.25,metalness:0,clearcoat:.55,clearcoatRoughness:.14,envMapIntensity:.75})
b.emissive=new e.Color(t.c1).multiplyScalar(.05)
const p={"rose-quartz":".4",prehnite:".35",carnelian:".3",celestite:".25",angelite:".12",jade:".15","orange-calcite":".2"}
switch(t.kind){case"clear":Object.assign(b,{transmission:.96,thickness:1.4,roughness:.03,ior:1.55,clearcoat:1})
b.attenuationColor=new e.Color(t.c1)
b.attenuationDistance="clear-quartz"===t.id?8:1.6
b.emissive=new e.Color(t.c1).multiplyScalar(.1)
b.envMapIntensity=1.3
if("clear-quartz"===t.id){b.transmission=.7
b.roughness=.07
b.emissive=new e.Color("#d6dcff").multiplyScalar(.2)}break
case"zoned":Object.assign(b,{transmission:.72,thickness:1.4,roughness:.05,ior:1.55,clearcoat:1})
b.attenuationColor=new e.Color(t.c1)
b.attenuationDistance=1.4
b.emissive=new e.Color(t.c1).multiplyScalar(.12)
break
case"mottled":Object.assign(b,{roughness:.22,transmission:p[t.id]||0,thickness:1.2,ior:1.54})
if(p[t.id]){b.attenuationColor=new e.Color(t.c1)
b.attenuationDistance=1.2}break
case"sparkle":Object.assign(b,{roughness:.2,emissiveMap:a,emissiveIntensity:1.6})
b.emissive=new e.Color(t.c3)
break
case"lapis":Object.assign(b,{roughness:.2,emissiveMap:a,emissiveIntensity:1.2})
b.emissive=new e.Color("#ffd27a")
break
case"chatoyant":Object.assign(b,{roughness:.18,sheen:1,sheenRoughness:.25,anisotropy:.9})
b.sheenColor=new e.Color(t.c2)
break
case"flash":Object.assign(b,{roughness:.3,iridescence:.35,iridescenceIOR:1.7,emissiveMap:a,emissiveIntensity:.75,clearcoat:.4,envMapIntensity:.55})
b.emissive=new e.Color("#6fc8ff")
break
case"moon":Object.assign(b,{roughness:.12,transmission:.35,thickness:1,ior:1.52,emissiveMap:a,emissiveIntensity:.9,iridescence:.35,sheen:.6})
b.emissive=new e.Color("#9fc4ff")
b.sheenColor=new e.Color("#cfe0ff")
break
case"black":Object.assign(b,{roughness:"prism"===t.shape?.32:.14,clearcoat:1,clearcoatRoughness:.12})
b.emissive=new e.Color("#1a1a40").multiplyScalar(.25)
break
case"metal":Object.assign(b,{metalness:1,roughness:.24,clearcoat:0})
b.emissive=new e.Color(0)
break
case"fibrous":Object.assign(b,{roughness:.3,sheen:1,sheenRoughness:.3,transmission:"selenite"===t.id?.3:.12,thickness:.8})
b.sheenColor=new e.Color("#ffffff")
"selenite"===t.id&&(b.emissive=new e.Color("#ffffff").multiplyScalar(.12))}["point","prism","cube","blade","wand"].includes(t.shape)&&(b.flatShading=!0)
d.set(t.id,b)
return b}(t),b=new e.Group
let h
switch(t.shape){case"point":{const t=new e.Mesh(new e.CylinderGeometry(.62,.66,1.5,6,1),a),n=new e.Mesh(new e.ConeGeometry(.62,1,6,1),a)
n.position.y=1.25
b.add(t,n)
t.position.y=-.3
n.position.y=.95
b.rotation.z=.25
break}case"wand":{const t=new e.Mesh(new e.CylinderGeometry(.3,.32,2.25,6,1),a)
b.add(t)
b.rotation.z=.7
break}case"blade":{const t=new e.Mesh(new e.BoxGeometry(.58,1.95,.15,1,1,1),a)
b.add(t)
b.rotation.z=-.5
break}case"prism":{const t=new e.Mesh(new e.CylinderGeometry(.46,.48,1.75,9,1),a)
b.add(t)
b.rotation.z=.35
break}case"cube":{const t=new e.Mesh(new e.BoxGeometry(1.15,1.15,1.15),a)
t.rotation.set(.4,.6,.1)
const n=new e.Mesh(new e.BoxGeometry(.7,.7,.7),a)
n.position.set(.62,.45,.2)
n.rotation.set(.9,.2,.5)
const o=new e.Mesh(new e.BoxGeometry(.55,.55,.55),a)
o.position.set(-.55,-.45,.35)
o.rotation.set(.2,1,.3)
b.add(t,n,o)
break}case"cluster":{const t=new e.Mesh(p(n),a)
t.scale.set(1,.7,.9)
b.add(t)
const o=a
for(let t=0;t<7;t++){const n=t/7*Math.PI*2,a=new e.Group,s=new e.Mesh(new e.CylinderGeometry(.16,.18,.6,6),o),c=new e.Mesh(new e.ConeGeometry(.16,.3,6),o)
c.position.y=.45
a.add(s,c)
a.position.set(.45*Math.cos(n),.45,.35*Math.sin(n))
a.rotation.set(.5*Math.sin(n),0,.5*-Math.cos(n))
a.scale.setScalar(.8+37*t%10/20)
b.add(a)}break}default:h=new e.Mesh(p(n+t.id.length),a)
b.add(h)}return b}(t,2),b=new e.Group
b.add(a)
b.scale.setScalar(["point","wand","blade","prism"].includes(t.shape)?.8:1.12)
return{h:b,o:a,ph:.9*n}}function x(){y=0
const e=(performance.now()-k)/1e3,t=matchMedia("(prefers-reduced-motion: reduce)").matches
let n=0
for(const a of M){if(!a.vis||t&&!a.dirty)continue
n=1
const o=a.cv.width
u.domElement.width!==o&&u.setSize(o,o,!1)
a.o.rotation.set(.18+.08*Math.sin(.6*e+a.ph),(t?.7:.55*e)+a.ph,0)
w.add(a.h)
u.render(w,g)
w.remove(a.h)
a.ctx.clearRect(0,0,o,o)
a.ctx.drawImage(u.domElement,0,0)
a.dirty=0}t&&!M.some(e=>e.dirty)||(y=requestAnimationFrame(x))}export function mountStones3D(t=document){u||function(){u=new e.WebGLRenderer({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})
u.setPixelRatio(1)
u.toneMapping=e.ACESFilmicToneMapping
u.toneMappingExposure=1.1
u.outputColorSpace=e.SRGBColorSpace
w=new e.Scene
w.environment=new e.PMREMGenerator(u).fromScene(function(){const t=new e.Scene,n=new e.ShaderMaterial({side:e.BackSide,depthWrite:!1,vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 vP; void main(){ vec3 n=normalize(vP); float y=n.y;\n      vec3 col=mix(vec3(.015,.02,.07),vec3(.16,.15,.42),smoothstep(-.4,.7,y));\n      col+=vec3(1.,.94,.84)*pow(max(0.,dot(n,normalize(vec3(.45,.75,.55)))),28.)*7.;\n      col+=vec3(1.,.97,.92)*pow(max(0.,dot(n,normalize(vec3(.45,.75,.55)))),4.)*.35;\n      col+=vec3(.62,.45,1.)*pow(max(0.,dot(n,normalize(vec3(-.75,.25,-.6)))),10.)*1.8;\n      col+=vec3(.45,.75,1.)*pow(max(0.,dot(n,normalize(vec3(-.7,-.05,.7)))),16.)*1.3;\n      col+=vec3(1.,.8,.55)*pow(max(0.,dot(n,normalize(vec3(.8,-.3,-.4)))),14.)*.9;\n      gl_FragColor=vec4(col,1.); }"})
t.add(new e.Mesh(new e.SphereGeometry(50,64,32),n))
return t}(),.02).texture
const t=new e.DirectionalLight("#fff6e8",1.8)
t.position.set(4,6,6)
w.add(t)
const n=new e.PointLight("#a070ff",40,40,1.5)
n.position.set(-3,2,-4)
w.add(n)
g=new e.PerspectiveCamera(30,1,.1,100)
g.position.set(0,0,6.1)
v=new IntersectionObserver(e=>e.forEach(e=>{const t=M.find(t=>t.el===e.target)
if(t){t.vis=e.isIntersecting
t.dirty=1}}),{rootMargin:"80px"})}()
t.querySelectorAll("[data-stone3d]").forEach((e,t)=>{if(e.__sp3d)return
const n=m[e.dataset.stone3d]
if(!n)return
const a=Math.round(Math.min(e.clientWidth||84,520)*Math.min(devicePixelRatio||1,2)),o=document.createElement("canvas")
o.width=o.height=a
o.className="sp3d-canvas"
o.style.cssText="width:100%;height:100%;display:block"
e.replaceChildren(o)
e.__sp3d=1
const s={el:e,cv:o,ctx:o.getContext("2d"),vis:!0,dirty:1,...C(n,M.length)}
M.push(s)
v.observe(e)})
M=M.filter(e=>{if(e.el.isConnected)return!0
v.unobserve(e.el)
return!1})
y||(y=requestAnimationFrame(x))}