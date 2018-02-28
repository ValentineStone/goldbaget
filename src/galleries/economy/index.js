/*
import ________ from './________.jpg?{width:[800,1920]}'
*/

import IMG_0255 from './IMG_0255.jpg?{width:[800,1920]}'
import IMG_0265 from './IMG_0265.jpg?{width:[800,1920]}'
import IMG_0271 from './IMG_0271.jpg?{width:[800,1920]}' 
import IMG_0287 from './IMG_0287.jpg?{width:[800,1920]}'
import IMG_0298 from './IMG_0298.jpg?{width:[800,1920]}'
import IMG_0303 from './IMG_0303.jpg?{width:[800,1920]}'

// 2

import eboTzUtQ from './2/ebte0oTzUtQ.jpg?{width:[800,1920]}'
import IMG_0341 from './2/IMG_0341.JPG?{width:[800,1920]}'
import IMG_0831 from './2/IMG_0831.JPG?{width:[800,1920]}'
import IMG_0836 from './2/IMG_0836.JPG?{width:[800,1920]}'
import IMG_0944 from './2/IMG_0944.JPG?{width:[800,1920]}'
import IMG_1065 from './2/IMG_1065.JPG?{width:[800,1920]}'
import IMG_1088 from './2/IMG_1088.JPG?{width:[800,1920]}'
import IMG_1093 from './2/IMG_1093.JPG?{width:[800,1920]}'
import IMG_1096 from './2/IMG_1096.JPG?{width:[800,1920]}'
import IMG_1098 from './2/IMG_1098.JPG?{width:[800,1920]}'
import IMG_1099 from './2/IMG_1099.JPG?{width:[800,1920]}'
import IMG_1108 from './2/IMG_1108.JPG?{width:[800,1920]}'
import MxnLZ6ro from './2/Mx-V6nLZ6ro.jpg?{width:[800,1920]}'

export default {
  name: 'economy',
  images: [
    IMG_0255,
    IMG_0265,
    IMG_0271,
    IMG_0287,
    IMG_0298,
    IMG_0303,


    // 2

    eboTzUtQ,
    IMG_0341,
    IMG_0831,
    IMG_0836,
    IMG_0944,
    IMG_1065,
    IMG_1088,
    IMG_1093,
    IMG_1096,
    IMG_1098,
    IMG_1099,
    IMG_1108,
    MxnLZ6ro,

  ].map(v => ({
    small: v[0].url,
    large: v[1].url
  }))
}