CMPM163Labs

Labs for cmpm163

LAB 2

video: https://drive.google.com/file/d/1ktFG4mhy3Dd3v1rUiDd-qN5SfAm3p90p/view?usp=sharing Screen Shot 2020-04-11 at 12 46 56 PM

LAB 3 video : https://drive.google.com/file/d/1BrGujPFxiRj46hGwcJgeC-D3KeTa2V9a/view?usp=sharing explanation: *note : cubes were put ontop of eachother for creative purposes. For explanation, cube 1 is the top one, with the 3rd one being the bottom, and the 4th cube is the wire one rotating around the other 3.

cube1: cube 1's material was a shader material using a vertex and fragment shader. It was made with colors 0x0ff000 and 0x000ff0.
cube2: cube 2's material was a MeshPhong material, whose color was set to 0xdddddd
cube3: cube 3's material was a shader material using a vertex and fragment shader. It was made with colors 0xACB6E5 and 0x74EBD5.
cube4: cube 4's material was also a MeshPhong materiall, however within it's mesh the bool wireframe was set to true, causing it to 
LAB 4

video : https://drive.google.com/file/d/1C3mJfFjWUcMY-03EqBXIUdywoKx_omCc/view?usp=sharing

                            question 24:
A) x coordinate = floor ( u * 7)

B) y coordinate = floor (7 - (v * 7))

C) x coordinate(u = .375) = floor ( .375 * 7) = floor (2.625) = 2
y coordinate(v = .25) = floor ( 7 - (.25 * 7)) = floor (5.25) = 5
thus color of (2,5) is : Gray

cube1: cube 1 was created using a texture .jpg, this texture was loaded into the map for the material.Notice how the flashing light makes the object look flat.
cube2: to remedy this, cube 2 used the same texture, but also incorporated a normalmap, one which gives our shape more depth when the light flashes on it. To do this, I incorporated the normal map when declaring the material for the cube.
cube 3: Similar to cube 2, except I traded out the texture and normal map for different ones. This time however, the normal map chosen was for a different texture, giving the cube a flashing pattern that was incongruent with the texture underneath. This was purely a cosmetic choice.
Cube 4: cube 4 used vertex shaders and fragment shaders to load a texture onto a cube. These textures were scanned pixel by pixel for their color by the vertex shader. In the decleration of the material, I set it to equal a shader material which used the vertex and fragment shader, along with a variable uniforms which held the texture.jpg.
Cube5 : cube 5 was made using fragment and vertex shaders as well, except this time, the task was to tile the texture multiple times onto the cube. The way I did this was to first multiple the coordinate read off of the texture and multiply it by two. This would mean that each pixel sampled would be one 2x distance, shrinking the square into the corner of the screen. Then, I moded the value of the vector by 1, meaning that when the vertex shader had finished sampling the texture, it would be able to start again and sample the texture for another square .5 units away. This was able to imprint the square in a texture pattern. 
LAB 5

link : https://drive.google.com/file/d/12J8TY3WO3rL143VMJG7Pf-flQvNE86LH/view?usp=sharing

The modifications I made were to the materials of the tracks and the particle effect to give a specific feeling. I wanted the track to be water themed, with the particle effect to look like splashing water. To match the blue track feeling, I added giant blue gummy bears to make the track more fun.
