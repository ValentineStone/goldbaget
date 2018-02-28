/*
import ________ from './________.jpg?{width:[800,1920]}'?{ sizes: [960, 1080] }
*/

import IMG_0152 from './IMG_0152.jpg?{width:[800,1920]}'
import IMG_0185 from './IMG_0185-1.jpg?{width:[800,1920]}'
import IMG_0188 from './IMG_0188-1.jpg?{width:[800,1920]}'
import IMG_0190 from './IMG_0190-1.jpg?{width:[800,1920]}'
import IMG_0259 from './IMG_0259-1.jpg?{width:[800,1920]}'
import IMG_0278 from './IMG_0278-1.jpg?{width:[800,1920]}'
import IMG_0280 from './IMG_0280-1.jpg?{width:[800,1920]}'
import IMG_0282 from './IMG_0282-1.jpg?{width:[800,1920]}'

// 2

import hfji2621 from './2/hfji2621k4w.jpg?{width:[800,1920]}'
import IMG_0815 from './2/IMG_0815.JPG?{width:[800,1920]}'
import IMG_0839 from './2/IMG_0839.JPG?{width:[800,1920]}'
import IMG_0972 from './2/IMG_0972.JPG?{width:[800,1920]}'
import IMG_1074 from './2/IMG_1074.JPG?{width:[800,1920]}'
import IMG_1076 from './2/IMG_1076.JPG?{width:[800,1920]}'
import IMG_1079 from './2/IMG_1079.JPG?{width:[800,1920]}'
import IMG_1082 from './2/IMG_1082.JPG?{width:[800,1920]}'
import IMG_1091 from './2/IMG_1091.JPG?{width:[800,1920]}'
import IMG_1103 from './2/IMG_1103.JPG?{width:[800,1920]}'
import IMG_1105 from './2/IMG_1105.JPG?{width:[800,1920]}'
import IMG_1134 from './2/IMG_1134.JPG?{width:[800,1920]}'
import IMG_1152 from './2/IMG_1152.JPG?{width:[800,1920]}'
import IMG_1157 from './2/IMG_1157.JPG?{width:[800,1920]}'
import IMG_1162 from './2/IMG_1162.JPG?{width:[800,1920]}'

export default  {
  name: 'standart',
  initial: 7,
  images: [
    IMG_0152,
    IMG_0185,
    IMG_0188,
    IMG_0190,
    IMG_0259,
    IMG_0278,
    IMG_0280,
    IMG_0282,

    // 2

    hfji2621,
    IMG_0815,
    IMG_0839,
    IMG_0972,
    IMG_1074,
    IMG_1076,
    IMG_1079,
    IMG_1082,
    IMG_1091,
    IMG_1103,
    IMG_1105,
    IMG_1134,
    IMG_1152,
    IMG_1157,
    IMG_1162,

  ].map(v => ({
    small: v[0].url,
    large: v[1].url
  }))
}