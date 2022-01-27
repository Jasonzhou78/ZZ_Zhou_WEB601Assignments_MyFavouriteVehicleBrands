2022-1-27
1344 
--Create a folder in Github desktop locally and then published on Github.com
--check the location locally, it is there
--open the folder in VS Code using open folder, the folder shows up in the VS Code 
my working folder. Close other non-relevant folder and files.
1350
--open the terminal, now the directory is under the folder we just created, it's ready for install framework through
npm, such as: npm install jquery, whenever we install a package, it will create a folder called node_modules, and
the package and its dependency will be included in the folder.
--npm -install -g @angular/cli to install angular
1604
--ng, it was display error saying that The file C:\Users\zhouz\AppData\Roaming\npm\ng.ps1 is not digitally  
signed. You cannot run this script on the current system.balabala
--trouble shooting, go to C:\Users\zhouz\AppData\Roaming\npm, delete the file ng.ps1, rerun the command -ng, worked
(note the method is from stackoverflow). Review the commands under ng (angular). Noticed some important commands
such as generate, new, update, version, 
1631
--ng new ng new Z_Zhou_MyFavouriteVehicleBrands
    -- choose no for routing
    --choose scss for styling sheet
    --commit at Github desktop and pushed to Github.com, noticed that node_modules
    was not uploaded (the fold is pretty big, don't upload!!!, default without uploading)
--set the version number of application to 0.0.1 in package.json, commit changes.
1651
--change the app name from Z_Zhou_MyFavouriteVehicleBrands to ZZ_Zhou_MyFavouriteVehicleBrands
