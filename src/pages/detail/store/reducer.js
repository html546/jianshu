import { fromJS } from 'immutable';
import * as contants from './contants'
const defaultState = fromJS({
    title: '李克富 || 笑了，只是因为笑点低吗？',
    content: '<img src="//upload.jianshu.io/admin_banners/web_images/4504/8f6fbad5108d79f95a0af380416da37da8263251.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" /><p><b>就我24日涂鸦“幽默”时说到的讲笑话</b>，有位研修生提了个问题：“一个人的笑点高低由什么决定的呢？”我自知回答这个问题的难度和价值都和回答“一个人的身高由什么决定的”差不多，当然不会接茬，就采用了一贯的模式反问</p><p>就我24日涂鸦“幽默”时说到的讲笑话，有位研修生提了个问题：“一个人的笑点高低由什么决定的呢？”我自知回答这个问题的难度和价值都和回答“一个人的身高由什么决定的”差不多，当然不会接茬，就采用了一贯的模式反问</p><p>就我24日涂鸦“幽默”时说到的讲笑话，有位研修生提了个问题：“一个人的笑点高低由什么决定的呢？”我自知回答这个问题的难度和价值都和回答“一个人的身高由什么决定的”差不多，当然不会接茬，就采用了一贯的模式反问</p><p>就我24日涂鸦“幽默”时说到的讲笑话，有位研修生提了个问题：“一个人的笑点高低由什么决定的呢？”我自知回答这个问题的难度和价值都和回答“一个人的身高由什么决定的”差不多，当然不会接茬，就采用了一贯的模式反问</p>'
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}