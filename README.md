

# Project Summary

A design was given with specifications similar to what a developer would recive on the job. I was to use the specifications to build an the desired app. 

The sehlfie app has b=multiple bins and each bin has a shelf where the user can store data. 

# Color Palette & Font

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/colors.png" />

<b><a href="https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans">Google Font - Open Sans</a></b>

# Application Design

## Homepage

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/home.png" />

## Shelf - Bin List

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/shelf.png" />

## Bin - Inventory Details / Edit Bin

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/bin.png" />

<br />

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/edit.png" />

## Add to Bin

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/create.png" />

# Technical Requirements - Front-end

## Homepage
* User can select Shelf A - D.
* When a user selects a shelf they should be navigated to a view that displays the bins in that shelf.

## Shelf - Bin List

* The header at the top should act as a breadcrumb. Clicking on the `div` that contains the company's logo should navigate the user back to the homepage.
* The front-end should call the back-end for the `bins`'s data.
* All five bins should be listed.
  * If a bin is empty it should display `+ Add inventory`.
    * A user should be able to click on this `div` and be navigated to the `Add to Bin` view.
  * If a bin is not empty empty it should display `Bin #` with `#` being the number of the bin.
    * A user should be able to click on this `div` and be navigated to the `Bin - Inventory Details` view.


## Bin - Inventory Details / Edit Bin 
* The header at the top should act as a breadcrumb.
  * The `div` for the company logo should navigate to the homepage.
  * The `div` for the `Shelf` should navigate back to the `Bin List` for that shelf.
    * Example: `Shelf A` should navigate to the `Bin List` for shelf A.
* The input fields should not be editable on load of the view.
* A user should be able to click on the `EDIT` button.
  * The input fields should become editable.
  * The edit button should become a save button.
* A user should be able to click on the `SAVE` button to save changes made to the inventory.
  * The input fields should become un-editable.
  * The save button should become an edit button.
  * This should update the inventory for that bin in the database.
* A user should be able to click on the `DELETE` button to delete inventory from a bin.
  * This should remove the inventory from the bin in the database.
  * This should navigate the user back to the `Bin List` for the shelf. 

## Add to Bin

* A user should be able to add a name and price for the inventory.
* If you want to use custom images, add a field to add an image.
  * However, you can use this website to generate placeholder images: `http://lorempixel.com/200/200/business/`
* A user should be able to click on `+ Add Inventory`.
  * This should add inventory to the bin in the database.
  * This should navigate the user back to the `Bin List` for the shelf.

# Technical Requirements - Back-end

* The back-end should be created using express. 
* Massive should be used to establish a connection to your database.
* Express.static should be used to server your front-end files.
  * HINT: Use `npm build` to get production ready front-end files.

## Endpoints

* Shelves
  * GET - `/api/shelf/:id` - Returns an array of bin objects. If there is no bin, returns `null`.
    * Example: `[ {}, {}, null, null, {} ]`.
    * `:id` is the shelf id. Which can be 'A', 'B', 'C', or 'D'.
* Bins
  * GET - `/api/bin/:id` - Returns a bin object. If there is no bin, returns `null`.
    * `:id` is the shelf and bin id combined. Examples: 'A2', 'C4', 'B2'.
  * PUT - `/api/bin/:id` - Updates and returns a bin object. 
    * This endpoint should only be accessible if there is a bin object.
    * `:id` is the shelf and bin id combined. Examples: 'A5', 'B1', 'C3'.
  * DELETE - `/api/bin/:id` - Deletes a bin object. Returns nothing.
    * `:id` is the shelf and bin id combined. Examples: 'A2', 'C4', 'B2'.
  * POST `/api/bin/:id` - Creates a new bin object. Returns nothing.
    * This endpoint should only be accessible if there is not a bin object already. 
    * `:id` is the shelf and bin id combined. Examples: 'A2', 'C4', 'B2'.
