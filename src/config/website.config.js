// 网站配置文件
export const websiteConfig = {
  // 网站基本信息
  site: {
    title: "WanWanCraft",
    description: "欢迎来到WanWanCraft，探索无限可能的方块世界！",
    keywords: "Minecraft,我的世界,Java版,基岩版,生存,互通,生电",
    author: "WanWanCraft",
    language: "zh-CN"
  },

  // 导航栏配置
  navigation: {
    items: [
      {
        name: "主页",
        path: "/",
        icon: "home-24-filled",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效） //请填写完整的URL，例如：https://mc.wanfory.top,必须带协议头
        // 页面标题配置
        pageTitle: {
          // 主标题配置（支持打字机效果）
          mainTitle: {
            texts: ["欢迎来到 WanWanCraft！", "Welcome to WanWanCraft！"], // 多语言标题数组
            typewriter: {
              enabled: true, // 是否启用打字机效果
              speed: 100,    // 打字速度（毫秒）
              delay: 1000,   // 切换延迟（毫秒）
              loop: true     // 是否循环播放
            }
          },
          // 副标题配置
          subtitle: "一个功能丰富的Cerber粉丝群组旗下Minecraft生电服务器"
        }
      },
      {
        name: "相册",
        path: "/gallery",
        icon: "image-library-28-filled",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["游戏相册", "Wan Gallery"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "浏览服务器的精彩游戏截图和玩家作品"
        }
      },
      {
        name: "历程",
        path: "/history",
        icon: "history-16-filled",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["WanWanCraft服历程", "Wan History"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "回顾服务器的发展历程，见证每一个重要的里程碑"
        }
      },
      {
        name: "排行榜",
        path: "/leaderboard",
        icon: "data-usage-16-filled",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["MinaWan排行榜", "Wan Leaderboard"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "看看谁是最活跃的玩家，展示你的成就"
        }
      },
      {
        name: "文档",
        path: "/docs",
        icon: "book-32-filled",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效） //请填写完整的URL，例如：https://mc.wanfory.top,必须带协议头
        // 页面标题配置
        pageTitle: {
          // 主标题配置（支持打字机效果）
          mainTitle: {
            texts: ["WanWanCraft 文档", "Wan Doc"], // 多语言标题数组
            typewriter: {
              enabled: true, // 是否启用打字机效果
              speed: 100,    // 打字速度（毫秒）
              delay: 1000,   // 切换延迟（毫秒）
              loop: true     // 是否循环播放
            }
          },
          // 副标题配置
          subtitle: "阅览服务器的详细文档，了解更多信息"
        }
      },
      {
        name: "关于",
        path: "/about",
        icon: "info-16-filled",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: false, // 是否启用外链模式
        externalUrl: "", // 外链地址（仅在external为true时生效）
        pageTitle: {
          mainTitle: {
            texts: ["关于WanWanCraft", "About WanWanCraft"],
            typewriter: {
              enabled: true,
              speed: 100,
              delay: 1000,
              loop: true
            }
          },
          subtitle: "了解我们的服务器信息、管理团队和游戏规则"
        }
      },
      {
        name: "地图",
        path: "/3d-map",
        icon: "map-16-filled",
        enabled: true,
        // 外链配置：如果external为true，则点击跳转到externalUrl
        external: true, // 是否启用外链模式
        externalUrl: "http://mc.classisband.xyz:19269", 
      },
    ],
    // 添加新页面时，只需在这里添加新的导航项即可
    autoHide: true,
    hideThreshold: 100, // 向下滚动100px后隐藏导航栏
    showThreshold: 50   // 向上滚动到距离顶部50px时显示导航栏
  },

  // 背景图片配置
  background: {
    images: [
      "/backgrounds/desktopWallpaper_1.png",
      "/backgrounds/desktopWallpaper_2.jpeg",
      "/backgrounds/desktopWallpaper_3.jpeg",
      "/backgrounds/desktopWallpaper_4.jpeg",
      "/backgrounds/desktopWallpaper_5.png",
      "/backgrounds/desktopWallpaper_6.jpeg",
    ],
    defaultImage: "/backgrounds/default.webp"
  },

  // 音乐播放器配置
  musicPlayer: {
    enabled: false,
    metingApi: "https://api.injahow.cn/meting/",
    server: "netease", // netease, kugou
    type: "playlist",   // playlist, song
    id: "12963434067",      // 歌单ID
    autoPlay: false,
    volume: 0.8
  },

  // 服务器配置
  server: {
    // 页面显示的服务器地址
    displayAddress: "mc.classisband.xyz:19269",
    // API请求使用的服务器地址（可以不同）
    apiAddress: "mc.classisband.xyz",
    port: "37372",
    version: "1.21.8 支持BE",
    apiEndpoint: "https://api.mcstatus.io/v2/status/java",
  },

  // 页脚配置
  footer: {
    copyright: "© 2026 WanWanCraft保留所有权利.",
    customHtml: `
    `
  },

  // 排行榜配置
  leaderboard: {
    // 本地JSON文件配置
    localFile: {
      path: "/assets/leaderboard/count_export.json",
      cacheTimeout: 300000 // 5分钟缓存
    },
    
    // 计分板显示配置
    objectives: {
      // 死亡次数
      "DeathList": {
        enabled: true,
        displayName: "死亡次数",
        icon: "skull",
        unit: "次",
        showTotal: true
      },
      // 挖掘数
      "MiningList": {
        enabled: true,
        displayName: "方块挖掘",
        icon: "pickaxe",
        unit: "个",
        showTotal: true
      },
      // 击杀数
      "KillEntityList": {
        enabled: true,
        displayName: "玩家击杀",
        icon: "sword",
        unit: "个",
        showTotal: true
      },
      // 放置数
      "PlacingList": {
        enabled: true,
        displayName: "放置数量",
        icon: "placement",
        unit: "个",
        showTotal: true
      }
    },
    
    // 显示设置
    display: {
      itemsPerPage: 10,
      showPlayerCount: true,
      showUpdateTime: true,
      showTotalScore: true
    }
  },

  // 历程配置
  history: {
    // 图片文件夹路径
    imagesFolder: "/assets/history-images"
  },

  // 相册配置
  gallery: {
    // 图片文件夹路径
    imagesFolder: "/assets/gallery-images"
  },

  // 关于页面配置
  about: {
    // 关于页面板块配置
    sections: {
      // 服务器信息板块
      serverInfo: {
        enabled: true,
        title: "服务器信息",
        icon: "info-sparkle-48-filled",
        items: [
          { label: "服务器类别", value: "云主机" },
          { label: "CPU", value: "铂金8368(ES6)" },
          { label: "内存", value: "16GB DDR5" },  
          { label: "类型", value: "生存，生电，互通" },
          { label: "最大玩家", value: "40人" },
          { label: "在线时间", value: "7X24小时" }
        ]
      },
      
      // 特色功能板块
      features: {
        enabled: true,
        title: "服务器特色",
        icon: "server-link-20-filled",
        items: [
          { label: "IPV4网络", value: "✓" },
          { label: "IPV6网络", value: "✓" },
          { label: "Ledger", value: "✓" },
          { label: "详细文档", value: "✓" },
          { label: "功能多样", value: "✓" },
          { label: "我喜欢你", value: "✓" }
        ]
      },
      
      // 管理团队板块
      team: {
        enabled: true,
        title: "管理团队",
        icon: "person-key-16-filled",
        items: [
          { label: "ClassIsBand(beluga14514)", value: "腐竹-技术和主要管理" },
          { label: "雷惜寒_Leshian ", value: "管理-不务正业" }
        ]
      }
    },
    
    // 游戏规则配置
    rules: {
      enabled: true,
      title: "游戏规则",
      description: "服务器基本规则和玩家行为准则",
      items: [
        {
          title: "友好相处",
          icon: "hand-open-heart-32-filled",
          description: "尊重其他玩家，禁止任何形式的骚扰和歧视行为"
        },
        {
          title: "禁止作弊",
          icon: "shield-28-filled",
          description: "严禁使用任何作弊客户端或利用游戏漏洞"
        },
        {
          title: "文明聊天",
          icon: "chat-multiple-32-filled",
          description: "保持聊天频道文明，禁止发布广告和不当内容"
        }
      ]
    },
    
    // 联系我们配置
    contact: {
      enabled: true,
      title: "联系我们",
      description: "加入我们的社区，与我们一起畅游方块世界",
      items: [
        {
          title: "QQ群",
          subtitle: "加入Cerber粉丝群交流",
          icon: "qqchat",
          buttonText: "加入 QQ 群",
          buttonType: "secondary",
          url: "https://qm.qq.com/q/5E5C3088PS"
        },
        {
          title: "邮箱",
          subtitle: "发送邮件联系腐竹",
          icon: "email",
          buttonText: "发送邮件",
          buttonType: "secondary",
          url: "mailto:2441500679@qq.com"
        }
      ]
    },
    
    // 成员列表配置
    members: {
      enabled: true,
      title: "服务器成员",
      description: "我们的服务器大家庭",
      
      // 数据获取方式："manual" 或 "localFile"
      dataSource: "localFile",
      
      // 本地文件配置（当dataSource为"localFile"时生效）
      localFile: {
        path: "/assets/memberlist/whitelist.json",
        cacheTimeout: 300000 // 5分钟缓存
      },
      
      // 手动成员列表（当dataSource为"manual"时,或未获取到数据时生效）
      manualList: [
        "EpiphanyEX",
        "Bu_XiAo_Le",
        "BIG_windows",
        "XiaoHongya",
        "lanbaicai01"
      ]
    }
  },

  // 图标配置
  icons: {
    source: "https://icones.js.org",
    // 常用图标映射
    mappings: {
      home: "mdi-history",
      history: "mdi-history", 
      trophy: "mdi-trophy",
      information: "mdi-information",
      music: "mdi-music",
      sun: "mdi-white-balance-sunny",
      moon: "mdi-weather-night",
      menu: "mdi-menu",
      close: "mdi-close",

      clock: "mdi-clock",
      airplane: "mdi-airplane",
      heartbroken: "mdi-heart-broken",
      skull: "mdi-skull",
      pickaxe: "mdi-pickaxe",
      fish: "mdi-fish",
      sword: "mdi-sword",
      placement: "mdi-arrow-down-bold-circle",
      trade: "mdi-currency-usd",
      information: "mdi-information",
      cog: "mdi-cog",
      "shield-account": "mdi-shield-account",
      heart: "mdi-heart",
      shield: "mdi-shield",
      home: "mdi-home",
      chat: "mdi-chat",
      qqchat: "mdi-qqchat",
      email: "mdi-email"
    }
  },

  // 网页图标配置
  favicon: {
    // 是否启用图标配置
    enabled: true,
    // 基础favicon路径
    default: "/favicon/favicon.ico",
    // 不同尺寸图标路径
    sizes: {
      "16x16": "/favicon/favicon-16x16.png",
      "32x32": "/favicon/favicon-32x32.png",
      "192x192": "/favicon/android-chrome-192x192.png",
      "512x512": "/favicon/android-chrome-512x512.png"
    },
    // Apple Touch图标路径
    appleTouch: "/favicon/apple-touch-icon.png"
  }
};
//此行以下的内容无需修改，如果你不知道你在干什么请停下你要继续的想法
// 页面配置模板
export const pageTemplates = {
  home: {
    title: "主页",
    description: "服务器主页",
    layout: "default"
  },
  gallery: {
    title: "相册",
    description: "服务器相册",
    layout: "default"
  },
  history: {
    title: "服务器历程", 
    description: "服务器发展历史",
    layout: "default"
  },
  leaderboard: {
    title: "排行榜",
    description: "玩家排行榜",
    layout: "default"
  },
  about: {
    title: "关于我们",
    description: "服务器信息",
    layout: "default"
  }
};

// 添加新页面的方法
export function addNewPage(pageConfig) {
  // 添加到导航栏
  websiteConfig.navigation.items.push({
    name: pageConfig.name,
    path: pageConfig.path,
    icon: pageConfig.icon,
    enabled: true
  });
  
  // 添加到页面模板
  pageTemplates[pageConfig.key] = {
    title: pageConfig.title,
    description: pageConfig.description,
    layout: pageConfig.layout || "default"
  };
}

