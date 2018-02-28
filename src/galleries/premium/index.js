/*
import ________ from './________.jpg?{width:[800,1920]}'
*/

import IMG_0164 from './IMG_0164.jpg?{width:[800,1920]}'
import IMG_0225 from './IMG_0225.jpg?{width:[800,1920]}'
import IMG_0360 from './IMG_0360.jpg?{width:[800,1920]}'
import IMG_0361 from './IMG_0361.jpg?{width:[800,1920]}'
import IMG_0373 from './IMG_0373.jpg?{width:[800,1920]}'
import IMG_0437 from './IMG_0437.jpg?{width:[800,1920]}'
import IMG_0532 from './IMG_0532.jpg?{width:[800,1920]}'

// 2

import IMG_0383 from './2/IMG_0383.JPG?{width:[800,1920]}'
import IMG_0386 from './2/IMG_0386.JPG?{width:[800,1920]}'
import IMG_0846 from './2/IMG_0846.JPG?{width:[800,1920]}'
import IMG_0976 from './2/IMG_0976.JPG?{width:[800,1920]}'
import IMG_1077 from './2/IMG_1077.JPG?{width:[800,1920]}'
import IMG_1081 from './2/IMG_1081.JPG?{width:[800,1920]}'
import IMG_1086 from './2/IMG_1086.JPG?{width:[800,1920]}'
import IMG_1101 from './2/IMG_1101.JPG?{width:[800,1920]}'
import IMG_1150 from './2/IMG_1150.JPG?{width:[800,1920]}'
import ypOGqlve from './2/ypOGqlveIx4.jpg?{width:[800,1920]}'

export default {
  name: 'premium',
  images: [
    IMG_0164,
    IMG_0225,
    IMG_0360,
    IMG_0361,
    IMG_0373,
    IMG_0437,
    IMG_0532,

    // 2

    IMG_0383,
    IMG_0386,
    IMG_0846,
    IMG_0976,
    IMG_1077,
    IMG_1081,
    IMG_1086,
    IMG_1101,
    IMG_1150,
    ypOGqlve,

  ].map(v => ({
    small: v[0].url,
    large: v[1].url
  }))
}