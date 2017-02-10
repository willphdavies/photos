# Photo Album Organizer 
## Powered by Angular2 and Material Design

See a working example at http://photos.willphdavies.net/

## General

Angular2 is still not fully mature and still has quite a few bugs and required workarounds.
Most problems occur with Webpack integration.

* The production build is broken - build does not work.  As a workaround I added a Grunt minification and treeshake task.
    The bug appears to be as a result of a bad Node SASS compile
* I attempted to bring in redux (https://github.com/angular-redux/store) in order to reduce the number of REST Api requests 
    but could not compile it successfully 
* I didn't spend much time on unit testing due to time constraints but there seems to be another compile issue here  

  Angular2 is also pretty heavy 1.5Mb in 

## Components

* App
    Pulls together Material Design and Album viewer Modules
* Album
    Paginated Album view with an Auto Complete search filter
* Photo
    Individual photo view - the back button here needs to go back to the Album that you were on previously
* Pagination 
    Borrowed from https://github.com/michaelbromley/ng2-pagination with some style changes and Material Design Additions

## Services
    
* AlbumService - this also contains the call functions for the photo API, should probably be separated, but Photos
    and albums seem tightly coupled anyway
* I would like to add some form of data caching to reduce the number of REST API calls    
* It would also be nice to add in some better transitions for data updates
    
    