# coding notes

for element 5 i set up 2 different scenes, with different sizes, shapes, textures and lighting. with GUI buttons to allow the user to switch between scenes at will.

to change the sizes of the shapes all i had to do was use a function to create the mesh and then "let" the mesh have my preffered "height" and "diameter", so by changing those varibles i had near full control of the size of the mesh's

i sourced the textures from the lecturer of the course, using a github repository that he made public i was able to source the textures i needed. i applied these textures to the main (biggest) object in the first scene, as well as the 2 smaller shapes (cyllinder and cube) in the second.

for the lights i set up a hemispheric light in each scene, i wanted to make them different so in the first scene i made it have a red/pink lighting with green reflections, with a lower intensity and for the second scene i chose to use a noticeably more intense light and made it green.

    for this i created a function in the createstartscene for both scenes named "createhemisphericlight", in this function i created a new light for the scene and tweaked the lighting values, to do this i changed the light.diffuse, light.specular and light.groundColor, to make the first scene a pinkish colour i set 
        light.diffuse = (1, 0, 0);
        light.specular = (0, 1, 0);
        light.groundColor =(0, 1, 0);

    and for the second scene to make it green i set 
        light.diffuse = new Color3(0, 1, 0);
        light.specular = new Color3(0, 1, 0);
        light.groundColor = new Color3(0, 0, 1);

    this gave me the lighting i wanted for these scenes and helped very clearly differentiate them


once i had the scenes set up all i had to do was add a GUI so the player could switch between them, to do this i created a seperate file just for GUI (the arcrotatecamera is also created with this file)

    i created a multiple functions in this file 
        one of them was to export (menuscene) which allows the function to be used from different files

        another being (createscenebutton) which allowed for the scenes to call a premade button design to the scene and then be edited to do whatever its purpose is.

    both of the scenes call those functions to allow the player to move between the multi scene easily.
    

