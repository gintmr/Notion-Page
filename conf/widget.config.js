/**
 * 悬浮在网页上的挂件
 */
module.exports = {
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || true, // 是否显示切换主题按钮  
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示  
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || false, // 是否显示宠物挂件  
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题  

  SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可  

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件  
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '四季之歌', 
      artist: 'Nujabes', 
      url: 'https://m10.music.126.net/20250201155840/53a5776c5721f648b8e1f464d9abbdc4/ymusic/7807/9c70/fbd1/d012256ed1ccea7f9f51fbc1a5631f9c.mp3?vuutv=mwGdwjMSnxFHs2/sdPlp0gsb3f0fZYA7I2AvmymDbbs9r8nNaPRjIotOIBgB0O6USI4kpzJXIGXJycCQ84C7Xa+P0dyTOTljXXzoX3Glhu8=',            
      cover:
        'https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171104/fcaa568cf4764a2da92930899c72f23c.jpeg'        
    },
    {
      name: '銀色の空', 
      artist: 'redballoon', 
      url: 'https://m801.music.126.net/20250201214034/32e634f59f7031f7b3ebdaa06061d84a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/34373730326/9f4d/050a/9a89/1249d0e17866b79fd7b34e52dcfd1249.mp3?vuutv=HrC+IWpTiJRJ/sWDnd/tz36HjmemVyNo+1CpolRBWBb7/v1jEn/kppyQ08+qBmDcQKCHe+JYWuKtYHsBM04Edjh0vGldIyGfqkPXW1BHxFc=',  
      cover:  
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpiOLtKUkJeL6hW0lhOlEvqprR9QwfOSHSQ&s'  
    },
    {
      name: '才二十三',
      artist: '方大同',
      url: 'https://m801.music.126.net/20250201204949/550ce9af242690ff6759fe8a2e1d51cf/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/45379462773/b82b/2491/4de3/1a91d0d61bf3446383c6c54e1db8ccea.mp3?vuutv=PETr1Y9pa+fhBh+Uq2hHBCnihDKkDG1zbNVUcsKqX2l8e7tLbyciAKQzQxYLM8v+jz//YyaF+bXZjGcyV6b5eUI8924krmfJ7wR//frvqp4=',
      cover: 'https://chinesealbumart.com/wp-content/uploads/2024/10/2024-10-18-%E6%96%B9%E5%A4%A7%E5%90%8C-%E6%A2%A6%E6%83%B3%E5%AE%B6-LARGE.jpg'
    },
    {
      name: '桥豆麻袋',
      artist: '陈粒',
      url: 'https://m801.music.126.net/20250201214002/784adfa319b8621ffbd021fb77752a0e/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481805747/1dea/3d91/47ab/608f18e294faf558b880dc5352d00d40.mp3?vuutv=fK63BC2XM7SoY3KDFa3kt0OIhqoMA5rbpLxeiNDkyyTbCRSZ+NsXOO2ZFuvcuq9Q17LDqezjkeGusPAY93mVdrWdjn/hm1PnkywVyBAW8Ps=',
      cover: 'https://i.kfs.io/album/global/76726396,0v1/fit/500x500.jpg',
      lrc: '[00:00.000] 作词 : 什欢[00:01.000] 作曲 : 陈粒[00:16.550]请再等一下[00:18.050]还有臭美的飞雪[00:20.290]还有走失的浩劫[00:23.390]还有争气的我 哦耶[00:25.440]请再看一下[00:26.960]还有诈尸的蚯蚓[00:29.120]还有突发的爱情[00:31.700]还有从容的我 嗯哼[00:34.520]爬呀爬呀苦了自己[00:38.980]长路漫漫无目的[00:43.350]一步一步小心翼翼[00:47.750]一不小心爱上你[00:51.290]请再等一下[00:53.180]还有受伤的世界[00:55.750]还有弥留的热切[00:57.980]还有坚挺的我 哦耶[01:00.420]请再看一下[01:01.560]还有优雅的苔藓[01:04.340]还有鲁莽的时间[01:06.500]还有可爱的我 啊哈[01:09.400]是啊是啊来之不易[01:13.630]从今往后多珍惜[01:17.430]一步一步小心翼翼[01:22.290]一不小心丢了你[02:01.810]爬呀爬呀苦了自己[02:06.030]长路漫漫无目的[02:10.460]一步一步小心翼翼[02:14.710]一不小心丢了你[02:19.120]是啊是啊来之不易[02:23.580]从今往后多珍惜[02:27.590]一步一步小心翼翼[02:32.390]一不小心丢了你'
    },
    {
      name: '不开灯俱乐部',
      artist: '黄宣',
      url: 'https://m10.music.126.net/20250201214138/c5fc913002d0bcf58ddc391f2add6921/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/14054876207/a3d1/56b0/7000/7bd6d539f2168a1d42a6d8bdeceebfac.mp3?vuutv=WdF94OK8dkT20lWwUWzz4WmmY6jbwzsDwd9cTheaBsfZBLl/HtvgGb4CHLOHWdVKHactwx1lXXWLheu/NgZS07mVHj5Y48bYec/c/opjQaw=',
      cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a4/e2/f9/a4e2f9af-26e4-7ff4-11c5-e54ff167a299/4718009703193.jpg/416x416bb.webp',
      lrc: '[00:00.00] 作词 : YELLOW黄宣/9m88[00:01.00] 作曲 : YELLOW黄宣[00:02.00] 编曲 : YELLOW黄宣[00:03.00] 制作人 : YELLOW黄宣/余佳伦[00:10.47][00:13.46]一样在六点[00:15.00]泡一样的咖啡[00:18.82]其实早有预谋 在时阴多雨的气候[00:25.61]挤同一班车厢 灵魂却空荡[00:30.82]慢慢 调整姿态 故作自然却无力取暖[00:37.88]行李 塞满所有不合时宜的月光 只是比方[00:46.72]古人说的浪漫只适合欣赏[00:49.55]下了站 雨滴同样滴在你肩膀[01:00.86]怪就怪天气 像曾哭过的旧电影[01:07.77]那些是非对错留下的痕迹[01:11.64]满街都是未干的记忆[01:14.85]爱情 不过是一场无病呻吟[01:20.26]毫无预警 下了又停[01:24.23]怪这场雨不如先怪自己[01:40.59]一样在六点[01:42.34]说不完的是非[01:45.29]等车的人争先恐后 不愿落单在这街头[01:53.04]左顾右盼 却找不到方向[01:58.11]慢慢 我透过车窗 遥望一片浮云的模样[02:05.62]不想 随着霓虹闪烁起舞[02:10.26]总是怕 好景不常[02:14.03]我反复练习一个人的优雅步伐[02:16.94]下一站 或许有阵风 会为我歌唱[02:28.22]怪就怪天气 像个孩子不讲道理[02:35.04]不服气的吹散了落叶⼀地[02:39.10]乱的头发不想去整理[02:42.27]爱情 为何总来不及放晴[02:47.68]如果可以 云淡风轻[02:51.38]怪这阵风 不如先怪自己[02:55.73]不够壮丽的独白[02:59.08]不明事理的期待[03:03.68]不能保存遗憾[03:07.88]在离站的后半拍[03:11.65]徒留多余的感慨 却走得好慢[03:21.41]怪就怪天气 像曾哭过的旧电影[03:27.97]那些是非对错留下的痕迹[03:31.93]满街都是未干的记忆[03:35.27]爱情 不过是一场无病呻吟[03:40.57]毫无预警 下了又停[03:44.31]怪这场雨不如先怪自己[03:48.94][03:59.99]演唱者Lead Voclas: YELLOW黄宣, 9m88[04:00.25]作词 Lyrics / YELLOW黄宣, 9m88[04:00.47]作曲 Composer / YELLOW黄宣[04:00.70]制作人 Producer / YELLOW黄宣, 余佳伦 Chia-Lun Yue[04:00.93]编曲 Music Arrangement / YELLOW黄宣[04:01.15]和声编写 Backing Vocal Arrangement / YELLOW黄宣, 9m88[04:01.40]和声 Backing Vocals / YELLOW黄宣, 9m88[04:01.65]吉他 Guitars / YELLOW黄宣, 林庭钰 Tim Lin[04:01.88]录音工程师 Recording Engineer / 钟潍宇Yu[04:02.12]录音室 Recording Studio / 89 Studio[04:02.35]混音工程师 Mixing Engineer / 蔡周翰 Chou Han Tsay[04:02.57]混音录音室 Mixing Studio / Lights Up Studio[04:02.82]母带后制处理 Mastered by Jeff Lipton[04:03.07]母带后制处理录音室 Mastering Studio / Peerless Mastering, Boston, MA[04:03.28]母带后制处理助理工程师 Assistant Mastering Engineer / Maria Rice[04:03.50]OP: 否极泰来音乐股份有限公司 WRONGTYPE Production Co., Ltd.[04:03.74]SP: Warner Chappell Music, Hong Kong Limited Taiwan Branch[04:03.96]OP: 爵士宝贝有限公司 Jazz Baby Co., Ltd.[04:04.02]SP: Sony Music Publishing (Pte) Ltd., Taiwan Branch[04:04.13]ISRC: TWFM52002001[04:04.19]'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 已废弃！！！可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}
