import {Component} from 'angular2/core';
import {Config} from './config.service'
import {Video} from './video'
import {PlaylistComponent} from './playlist.component'
import { hasConstructor } from 'angular2/src/facade/lang';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]

})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>

   constructor() {
       this.videos = [
           new Video(1, "The Best Theories About Marvel Villains COMPILATION", "KwFYqrn_rUA", "Just theories"),
           new Video(2, "Gordon Ramsay most funny moments", "WD3eDqljMgA", "Funny Moments")
       ]
   }

}
