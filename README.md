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

LAB 6

![](/photos/lab6photo.png)


REAL PHOTO : KITCHEN TABLE
![](/photos/IMG_2901.jpeg)

Definitions:
point light : light which extends out to a defined radius, unlike other light sources, it is defined by its circular range. seen as the red circle ontop of the square.
Spotlight : defined by a cone shape which it extends. seen as the blue light to the right of the square.
Directional light : light which is more broad than point light or spotlight. seen as the reflection on the objects in the scene. It is a light which points in a specific direciton, instead of a radius or cone light point light / spotlight.
Area light : light shined in a specific shape. similar to point light & spotlight as it has shape constraints, but the difference is the light only shines from one direction of the shape.

To make the object look like my kitchen table, the most important thing was the glossyness of the table and the color. To do this, I first set the color to be an orangish color, and point a point light facing the object to give it the same reflective shine as seen in the photo. Second, I set the material to have a higher metalic property to give it more shine. For the shader, I used the standard one, as the material glossyness was enough to recreate the object.

The two textured objects I used were assets from the asset store. The first one was a bubble texture which I put on the cylinder. The second one was a roof shingle texture I put on the floor object.

The skybox was called trance, which was found in a texture pack online.

LAB 7

photo 1: ![](/photos/water.png)

photo 2: ![](/photos/hill1.png)

moving water link: https://drive.google.com/file/d/15_BbyvK4kVPR-xeDOmTMosyggjQUDyXx/view?usp=sharing

Last video link: https://drive.google.com/file/d/1XgGerZvd_glMV5G0FOndzG2d0VkuBVYU/view?usp=sharing

--for my last video, I decided to recreate moving water by changing the texture and heightmap based off of a sinusoidal wave. I also had the water plane move up and down to simulate high tide and low tide.

parter:
1) My parter did part 1
2) The most challenging part for them was figuring out what dependencies are required for the lab. They said that while doing part 1, they were incapable of completing it for quite some time because they kept getting an error saying they were missing dependencies.
3)Their favorite part was making moving water, as they haven't done proper moving graphics in unity until this lab.
4)We did not help eachother with this lab.


LAB 8 
city photos--
photo 1: ![](/photos/city1.png)

photo 2: ![](/photos/city2.png)
