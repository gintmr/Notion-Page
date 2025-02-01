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
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || false, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '1', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'random', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '四季之歌', 
      artist: 'Nujabes', 
      url: 'https://m10.music.126.net/20250201155840/53a5776c5721f648b8e1f464d9abbdc4/ymusic/7807/9c70/fbd1/d012256ed1ccea7f9f51fbc1a5631f9c.mp3?vuutv=mwGdwjMSnxFHs2/sdPlp0gsb3f0fZYA7I2AvmymDbbs9r8nNaPRjIotOIBgB0O6USI4kpzJXIGXJycCQ84C7Xa+P0dyTOTljXXzoX3Glhu8=',
      cover:
        'https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171104/fcaa568cf4764a2da92930899c72f23c.jpeg',
      lrc: '[00:00.000] 作词 : 井上秋緒[00:01.000] 作曲 : 村屋光二[00:04.682]银色の空果てない，降り続く热のように，[00:14.973]短い季节駆けてく，僕らを濡らして。[00:30.406]何も持たず行くから，頼りない手のひらに，惑ってしまうよ。[00:40.914]止んでしまった雨は，この空に痛みさえ，残さないで。[00:50.607]惹き合う力とぶつけ合う想い，[00:54.982]伤つけてでも抱き寄せた，[00:59.894]壊れそうな君に触れて，[01:05.687]视えない物信じてゆく。[01:11.300]もう何も怖れないよ，吹き抜ける热のように，[01:21.050]短く苍く駆けてく，僕らを揺らして。[01:36.767]どうせ流れてく日々…，俯き逃したのは何の梦？[01:46.739]零れゆくようなきらめきが欲しい，僕らは爱を知りながら，[01:55.507]辿り着けないか弱い光，夜が明けるのを待ってる。[02:08.515]明日だけが消えない，ただ途切れぬ约束，[02:18.871]君の瞳に灼きつけたい，変わらぬ愿いを。[02:39.302]银色の空果てない，降り続く热のように，[02:49.303]短い季节駆けてく，僕らを濡らして。'

    },
    {
      name: '銀色の空', 
      artist: 'redballoon', 
      url: 'https://m801.music.126.net/20250201214034/32e634f59f7031f7b3ebdaa06061d84a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/34373730326/9f4d/050a/9a89/1249d0e17866b79fd7b34e52dcfd1249.mp3?vuutv=HrC+IWpTiJRJ/sWDnd/tz36HjmemVyNo+1CpolRBWBb7/v1jEn/kppyQ08+qBmDcQKCHe+JYWuKtYHsBM04Edjh0vGldIyGfqkPXW1BHxFc=',  
      cover:  
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpiOLtKUkJeL6hW0lhOlEvqprR9QwfOSHSQ&s',
      lrc: '[00:00.000] 作词 : 井上秋緒[00:01.000] 作曲 : 村屋光二[00:04.682]银色の空果てない，降り続く热のように，[00:14.973]短い季节駆けてく，僕らを濡らして。[00:30.406]何も持たず行くから，頼りない手のひらに，惑ってしまうよ。[00:40.914]止んでしまった雨は，この空に痛みさえ，残さないで。[00:50.607]惹き合う力とぶつけ合う想い，[00:54.982]伤つけてでも抱き寄せた，[00:59.894]壊れそうな君に触れて，[01:05.687]视えない物信じてゆく。[01:11.300]もう何も怖れないよ，吹き抜ける热のように，[01:21.050]短く苍く駆けてく，僕らを揺らして。[01:36.767]どうせ流れてく日々…，俯き逃したのは何の梦？[01:46.739]零れゆくようなきらめきが欲しい，僕らは爱を知りながら，[01:55.507]辿り着けないか弱い光，夜が明けるのを待ってる。[02:08.515]明日だけが消えない，ただ途切れぬ约束，[02:18.871]君の瞳に灼きつけたい，変わらぬ愿いを。[02:39.302]银色の空果てない，降り続く热のように，[02:49.303]短い季节駆けてく，僕らを濡らして。'
    },
    {
      name: '才二十三',
      artist: '方大同',
      url: 'https://m801.music.126.net/20250201204949/550ce9af242690ff6759fe8a2e1d51cf/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/45379462773/b82b/2491/4de3/1a91d0d61bf3446383c6c54e1db8ccea.mp3?vuutv=PETr1Y9pa+fhBh+Uq2hHBCnihDKkDG1zbNVUcsKqX2l8e7tLbyciAKQzQxYLM8v+jz//YyaF+bXZjGcyV6b5eUI8924krmfJ7wR//frvqp4=',
      cover: 'https://chinesealbumart.com/wp-content/uploads/2024/10/2024-10-18-%E6%96%B9%E5%A4%A7%E5%90%8C-%E6%A2%A6%E6%83%B3%E5%AE%B6-LARGE.jpg',
      lrc: '[00:00.00] 作曲 : 方大同[00:00.43] 作词 : 方大同[00:00.86][00:01.17]时间 等不了人[00:04.51]生活中 一不留神[00:07.63]转个眼秒杀了[00:11.95]随秒针蒸发了[00:15.09][00:18.53]昨天变成了今天[00:21.90]过去变成了现在[00:25.09]未来刚才来[00:29.47]它从何而来[00:32.54][00:34.72]岁月 眨眼就过了[00:39.09]瞬间 就那样默默的[00:42.34]上一次看  才二十三[00:46.65]现在的日子没有那么简单[00:50.75][00:51.98]树叶  又要撒落了[00:56.44]花儿  就快要复活了[00:59.65]回想以前  没那么累[01:03.92]现在的白发  和皱纹匹配[01:08.19]也是一种美[01:10.38][01:14.73]青春  是一个梦[01:18.13]人生  如一阵春风[01:21.14]不经意的飘过[01:25.51]境界蓦然辽阔[01:28.67][01:32.11]昨天变成了今天[01:35.47]过去变成了现在[01:38.59]未来刚才来[01:42.83]它从何而来[01:46.23][01:48.24]岁月 眨眼就过了[01:52.63]瞬间 就那样默默的[01:55.85]上一次看  才二十三[02:00.13]现在的日子没有那么简单[02:04.27][02:05.45]树叶  又要撒落了[02:09.93]花儿  就快要复活了[02:13.23]回想以前  没那么累[02:17.52]现在的白发  和皱纹匹配[02:21.74]也是一种美[02:23.96][02:26.17]放下那 曾经  留下那 痕迹[02:34.80]前方的你  别忘了自己[02:43.50]成长是 永远  离别是 空悬[02:51.79]在千寻之外  我依然存在[02:59.12][03:01.85]岁月 眨眼就过了[03:06.28]瞬间 就那样默默的[03:09.42]上一次看  才二十三[03:13.60]现在的日子...[03:39.49] 制作和编曲 : 方大同[03:40.33] 所有乐器和编程 : Soulboy[03:41.16] 数字编辑 : Jeff Li[03:41.99] 混音 : Eric Lau[03:42.83] 母带处理 : Randy Merrill@Sterling Sound[03:43.66] 唱片公司 : 賦音乐'
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
      url: 'http://music.20250130.xyz/%E4%B8%8D%E5%BC%80%E7%81%AF%E4%BF%B1%E4%B9%90%E9%83%A8.mp3?e=1738420494&token=crOG_sTEYkRsksAmbPVydFmcnYO82nfyY3f2k1G_:ccRKFj10YCnPc06_b5gYqU0ivhQ=',
      cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a4/e2/f9/a4e2f9af-26e4-7ff4-11c5-e54ff167a299/4718009703193.jpg/416x416bb.webp',
      lrc: '[00:00.00] 作词 : YELLOW黄宣[00:01.00] 作曲 : YELLOW黄宣[00:30.21]Let the killer go, roll the dice and ride the boogie[00:34.01]作一半的梦 剩一只白云苍狗[00:37.51]王老先生说 生命是最奢侈的漂流 漂完才会懂[00:44.92]花怕羞 月光他不懂白昼 夜太浓 覆水难收[00:52.25]白老太太说 幸福是最美丽的阴谋 带也带不走[01:14.70]蠢蠢欲动的气味 滑稽的像一出默片[01:18.57]在失控之前优雅地抱紧全世界[01:21.62]今晚 就让灵魂失眠 今晚 就让灵魂失眠[01:29.17]欢迎不开灯俱乐部 站在墙边戴假发的玛莉莲梦露[01:32.42]长腿叔叔抖着脚的样子慌慌忽忽[01:34.43]kiang的 没kiang的 都开始跳舞[01:36.37]系上斑驳的红皮带 被谁弄脏的白衬衫[01:39.84]披着羊皮的男人独自呢喃 揉合跳针的复古唱盘声弥漫[01:43.77]点一杯庸人自扰 旷男跟怨女都害怕破晓[01:47.54]保留点温度对彼此不会感冒至少 今宵美好就醉今宵[01:51.30]回首烛光渐渐阑珊 徒留一对虎视耽耽[01:54.79]TEA? Me? Christmas tree? Down the street who u wanna be?[01:58.96]Let the killer go, roll the dice and ride the boogie[02:02.61]作一半的梦 剩一只白云苍狗[02:06.20]王老先生说 生命是最奢侈的漂流 漂完才会懂[02:13.54]花怕羞 月光他不懂白昼 夜太浓 覆水难收[02:20.78]白老太太说 幸福是最美丽的阴谋 带也带不走[02:28.46]蠢蠢欲动的气味 滑稽的像一出默片[02:32.64]在失控之前优雅地抱紧全世界[02:35.69]今晚 就让灵魂失眠 今晚 就让灵魂失眠[02:41.56]相濡以末的同类 把寂寞当作一种美学[02:49.15]那些超乎现实的以为都太明显 今晚 让我们愚昧一回[03:05.20]今晚 不会说再见~[03:19.85]制作人Producers: 余佳伦Chia-Lun Yue / YELLOW黄宣[03:22.91]编曲Arrangement: YELLOW[03:25.59]演唱与和声Lead Vocals and Backing Vocals: YELLOW黄宣[03:28.39]吉他Guitars: 林庭钰 Tim Lin[03:31.89]贝斯Bass: 曹家纬 Marcus Tsao[03:35.32]键盘Keyboards: 吴志杰 CJ Wu[03:38.10]鼓Drums: 陈彦丞Devlin Chen[03:40.39]录音工程师Recording Engineer: 蔡周翰 Chou Han Tsay[03:42.69]录音室Recording Studio: Lights Up Studio[03:44.55]混音工程师Mixing Engineer: 蔡周翰 Chou Han Tsay[03:48.11]混音录音室Mixing Studio: Lights Up Studio[03:50.34]母带后制处理Mastered by Jeff Lipton at Peerless Mastering, Boston, MA / Assastant Mastering Engineer: Maria Rice[03:53.68]OP: 否极泰来音乐股份有限公司 WRONGTYPE Production Co., Ltd.[03:55.47]SP: Warner/Chappell Music Taiwan Ltd.  ISRC: TWEO51800103[03:58.34]'
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
