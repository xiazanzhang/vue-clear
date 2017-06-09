module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "项目名称"
        },
        "version": {
            "type": "string",
            "required": false,
            "message": "版本号",
            "default": "1.0.0"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "项目描述",
            "default": "一个基于Vue+iView的解决方案"
        },
        "author": {
            "type": "string",
            "message": "作者"
        },
        "router": {
            "type": "confirm",
            "message": "是否安装 vue-router?"
        },
        "vuex": {
            "type": "confirm",
            "message": "是否安装 vuex?"
        }
    },
    "completeMessage": "安装完成开始使用:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\n 文档可以在这里找到 https://github.com/xiazanzhang/vue-clear"
};