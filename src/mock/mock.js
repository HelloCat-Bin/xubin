/**
 * Created by suwt on 2017/3/9.
 */
import Mock from 'mockjs';

export default {
    mockData() {
        Mock.mock('/api/user', {
            "code": "000",
            "datas": {
                "name": "@cname", // 内容：npm安装后 mockjs/src/mock/random/xxx.js
                "area": "@province(true)",
                "identity": "超级管理员"
            }
        });
        Mock.mock('/api/getTable', {
            "code": "000",
            "datas|5-20": [{
                "date": '@date("yyyy-MM-dd")',
                "name": "@cname",
                "address": "@county(true)"
            }]
        });
        Mock.mock('/api/getNewList', { //newslist详情mck数据
            "code": "000",
            "datas|20-40": [{
                "id": "@id",
                "add_time": '@datetime',
                "title": "@ctitle(1,40)",
                "img_url": "https://dgss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2143405360,144866169&fm=30&app=106&f=JPEG?w=312&h=208&s=543202755C1250431631D0C0030070B1",
                'click|1-100': 100
            }]
        });

        Mock.mock('/api/getNewsInfo', { //newsinof数据详情
            "code": "000",
            "message|20-40": {
                "id": "@id",
                "add_time": '@datetime',
                "content": '@cparagraph',
                "title": "@ctitle(1,40)",
                'click|1-100': 100
            }
        });

        Mock.mock('/api/getComments', { //评论数据
            "code": "000",
            "message|20-40": [{
                'user_name': '@cname',
                "content": '@cparagraph',
                "add_time": '@datetime',
            }]
        });
        Mock.mock('/api/getImage', {
            "code": "000",
            "datas|3-5": [{
                "url": '123',
                "img": "https://dgss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2143405360,144866169&fm=30&app=106&f=JPEG?w=312&h=208&s=543202755C1250431631D0C0030070B1",
                "address": "345"
            }]
        });
        Mock.mock('/api/getOptions', {
            "code": "000",
            "datas|5-7": [{
                "label": '广东省',
                "value": "@natural(10, 100)",
                "children|5-8": [{
                    "label": '深圳市',
                    "value": "@natural(10, 100)",
                    "children|5-5": [{
                        "label": '南山区',
                        "value": "@natural(10, 100)"
                    }]
                }]
            }],
            "places|9-18": [{
                "label": '广东省',
                "value": "@natural(10, 100)"
            }]
        });
    }
};