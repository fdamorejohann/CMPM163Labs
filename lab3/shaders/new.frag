varying vec3 vUv;

uniform vec3 colorC;
uniform vec3 colorD;
uniform vec3 colorE;
uniform vec3 colorF;

void main() {
  //gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0); //rgba, return blue
   gl_FragColor = vec4(mix(colorC, colorD, vUv.z), 0.5);

}


