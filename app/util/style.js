/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-11 05:19:51
 * @modify date 2017-05-11 05:19:51
 * @desc [description]
*/
'use strict'
import React from 'react';
import { Dimensions, PixelRatio } from 'react-native';

const style = {
    pixel: 1 / PixelRatio.get(),
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
}

module.exports = style;