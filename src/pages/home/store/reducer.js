import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }, {
        id: 2,
        title: '手绘',
        imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }],
    articleList: [{
        id: 1,
        title: '学了这么多年的马哲，你知道吗？辩证法其实是一种低级的思维方式！',
        desc: '从高中到大学，作为伟大的社会主义国家的一名公民，无论如何挣扎我们都躲不过一门课程—马克思主义哲学。马克思主义告诉我们，这个世界是物质的，我们要用...',
        imgUrl: '//upload-images.jianshu.io/upload_images/12961313-a38dd397f651b120.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }, {
        id: 2,
        title: '学了这么多年的马哲，你知道吗？辩证法其实是一种低级的思维方式！',
        desc: '从高中到大学，作为伟大的社会主义国家的一名公民，无论如何挣扎我们都躲不过一门课程—马克思主义哲学。马克思主义告诉我们，这个世界是物质的，我们要用...',
        imgUrl: '//upload-images.jianshu.io/upload_images/12961313-a38dd397f651b120.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }, {
        id: 3,
        title: '学了这么多年的马哲，你知道吗？辩证法其实是一种低级的思维方式！',
        desc: '从高中到大学，作为伟大的社会主义国家的一名公民，无论如何挣扎我们都躲不过一门课程—马克思主义哲学。马克思主义告诉我们，这个世界是物质的，我们要用...',
        imgUrl: '//upload-images.jianshu.io/upload_images/12961313-a38dd397f651b120.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }, {
        id: 4,
        title: '学了这么多年的马哲，你知道吗？辩证法其实是一种低级的思维方式！',
        desc: '从高中到大学，作为伟大的社会主义国家的一名公民，无论如何挣扎我们都躲不过一门课程—马克思主义哲学。马克思主义告诉我们，这个世界是物质的，我们要用...',
        imgUrl: '//upload-images.jianshu.io/upload_images/12961313-a38dd397f651b120.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }],
    recommendList:[{
        id:1,
        imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },{
        id:2,
        imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}