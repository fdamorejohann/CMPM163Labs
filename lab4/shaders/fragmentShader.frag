uniform sampler2D texture1;
varying vec2 vUv;

void main() {
    // sample from the texture based on the uv coordinates
gl_FragColor = texture2D(texture1, vUv);
}


/*varying vec3 vUv;

uniform vec3 colorA;
uniform vec3 colorB;

void main() {
  //gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0); //rgba, return blue
   gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);

}
*/


