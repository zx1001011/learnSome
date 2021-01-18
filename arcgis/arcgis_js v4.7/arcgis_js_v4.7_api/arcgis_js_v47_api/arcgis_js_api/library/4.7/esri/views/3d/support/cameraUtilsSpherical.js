// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../geometry/Extent ../../../geometry/SpatialReference ../../../geometry/support/webMercatorUtils ../lib/glMatrix ./cameraUtilsInternal ./earthUtils ./mathUtils".split(" "),function(J,k,F,w,G,b,H,B,l){function C(d,c,e){var m=b.vec3d.create(),a=b.vec3d.create();b.vec3d.cross(d,D,q);0===b.vec3d.dot(q,q)&&b.vec3d.cross(d,E,q);b.mat4d.identity(p);b.mat4d.rotate(p,-l.deg2rad(c),d);b.mat4d.rotate(p,-l.deg2rad(e),q);b.vec3d.cross(q,d,a);b.vec3d.normalize(a);b.mat4d.multiplyVec3(p,
a);b.vec3d.normalize(d,m);b.mat4d.multiplyVec3(p,b.vec3d.negate(m));return{direction:m,up:a}}function z(d){var c=d[1];d[1]=-d[2];d[2]=c}function A(d,c){c=C(c,d.heading,d.tilt);d.up=c.up;return d}Object.defineProperty(k,"__esModule",{value:!0});var D=b.vec3d.createFrom(0,0,1),E=b.vec3d.normalize(b.vec3d.createFrom(1,1,1)),I=new l.Cyclical(-180,180),p=b.mat4d.create(),q=b.vec3d.create(),n=b.vec3d.create();k.headingTiltToDirectionUp=C;k.directionToHeadingTilt=function(d,c,e,m){var a=q;b.vec3d.normalize(d,
a);b.vec3d.cross(a,D,n);0===b.vec3d.dot(n,n)&&b.vec3d.cross(a,E,n);b.vec3d.cross(n,a,n);return H.directionToHeadingTilt(c,e,m,a,n)};k.eyeForCenterWithHeadingTilt=function(d,c,e,m){var a={eye:b.vec3d.create(),up:null,tilt:m,heading:e},g=q;g[0]=d[0];g[1]=d[2];g[2]=-d[1];e=l.deg2rad(e);var f=l.deg2rad(m);m=Math.sin(e);e=Math.cos(e);var h=Math.sin(f),x=Math.cos(f),u=b.vec3d.length(g);if(1E-8>Math.abs(f))f=c+u;else var v=u/h,k=l.asin(c/v),f=v*Math.sin(Math.PI-f-k);var v=h*c,x=x*c,k=e*v,n=f-x,p=n*n,y=c*
c*h*h,h=e*e*y,y=m*m*y,r=g[1]*n,t=h*(h+p-g[1]*g[1]);if(0>t)return b.vec3d.scale(g,f/u,a.eye),a.tilt=0,a;var w=Math.sqrt(t),t=h+p,r=0<e?-w+r:w+r;if(1E-8>Math.abs(t))return 1E-8>u?(a.eye[0]=0,a.eye[1]=0,a.eye[2]=c):b.vec3d.scale(g,f/u,a.eye),a.tilt=0,z(a.eye),A(a,d);a.eye[1]=r/t;t=a.eye[1]*a.eye[1];c=1-t;r=Math.sqrt(c);k=h*t+y-2*k*a.eye[1]*r*n+c*p;if(1E-8>Math.abs(k))return b.vec3d.scale(g,f/u,a.eye),a.tilt=0,z(a.eye),A(a,d);a.eye[0]=(c*(f*g[0]-x*g[0])-v*r*(g[0]*a.eye[1]*e+g[2]*m))/k;a.eye[2]=(c*(f*
g[2]-x*g[2])-v*r*(g[2]*a.eye[1]*e-g[0]*m))/k;b.vec3d.scale(a.eye,f);z(a.eye);return A(a,d)};k.lookAtTiltToEyeTilt=function(d,c,e){d=b.vec3d.length(d);c=l.asin(c/(Math.sqrt(c*c+d*d-2*c*d*Math.cos(Math.PI-e))/Math.sin(e)));return l.rad2deg(e-c)};k.eyeTiltToLookAtTilt=function(d,c,e){e=l.deg2rad(e);d=b.vec3d.length(d);return l.asin(c/(d/Math.sin(e)))+e};k.toExtent=function(d,c,e,b,a){function g(a){var b=Math.PI/2;a=l.cyclical2PI.normalize(a,-b);a>b&&(a=Math.PI-a);return a}var f;f=c.latitude;c=c.longitude;
var h=B.getLonDeltaForDistance(c,f,e)/2;e=c-h;c+=h;f=l.deg2rad(f);h=B.earthRadius;f=(1+Math.sin(f))/(1-Math.sin(f));var k=(f+1)*Math.tan(b/h/2);f=1.5*Math.PI-2*Math.atan(.5*(k+Math.sqrt(4*f+k*k)));b=f+b/h;f=g(f);b=g(b);b<f&&(h=b,b=f,f=h);f=Math.max(l.rad2deg(f),-90);b=Math.min(l.rad2deg(b),90);c=I.monotonic(e,c);180<c-e&&(h=(c-e-180)/2,e+=h,c-=h);a?(a.xmin=e,a.ymin=f,a.xmax=c,a.ymax=b,a.spatialReference=w.WGS84):a=new F(e,f,c,b,w.WGS84);d.spatialReference&&d.spatialReference.isWebMercator&&G.geographicToWebMercator(a,
!1,a);return a}});