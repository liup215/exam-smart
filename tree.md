
## 项目目录

`└── source
    ├── admin
    └── exam                // 考试系统
        ├── cmd             // 应用入口
        ├── conf            // 项目配置
        ├── controller      // (已废弃)
        │   ├── admin
        │   ├── base
        │   └── student
        ├── dao             // 数据库连接层
        ├── lib             // 定制化依赖包(可任意迁移至其他项目)
        │   ├── address     
        │   ├── database    // 数据库连接工具
        │   │   ├── data
        │   │   ├── nosql
        │   │   ├── orm
        │   │   └── redis
        │   ├── job         // 定时任务
        │   ├── mq          // 消息队列
        │   │   └── nsq
        │   ├── net         // 网络层
        │   │   ├── http
        │   │   └── rpc
        │   ├── platform    // 平台接入
        │   │   └── wechat
        │   ├── strings     // 字符串工具包（随机字符串、解密等）
        │   └── utils       // 其他工具
        ├── model           // 项目模型
        ├── router          // 路由配置(已废弃)
        ├── server          // web应用引擎入口
        │   ├── admin       // 后台路由
        │   ├── teacher     // 教师端路由
        │   └── util        // 系统公共api(未来会根据需求将这部分以微服务服务形式单独部署)
        ├── service         // 业务逻辑
        └── static          // 静态文件目录（暂无静态文件）`  
