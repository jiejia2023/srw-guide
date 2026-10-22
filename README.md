# 超级机器人大战攻略站

超级机器人大战系列攻略静态站，Astro 5 构建，部署到 GitHub Pages：
https://jiejia2023.github.io/srw-guide/

收录系列 54 款正传与单作（不含超级机器人精灵、Link Battler、Scramble Commander 等 8 款衍生作），按年代、平台、系列组织内容。

## 本地开发

```bash
npm install
npm run dev     # 本地预览
npm run build   # 构建到 dist/
npm run preview # 预览构建结果
```

## 目录结构

```
src/
  data/games.json        # 全部 54 款游戏数据（名称/年份/平台/系列/别名）
  layouts/Base.astro     # 全站布局：标题/描述/canonical/OG/面包屑 JSON-LD
  lib/site.ts            # 站点常量与链接辅助函数
  styles/global.css      # 全站样式（纯 CSS，无框架）
  pages/
    index.astro          # 首页：即时搜索 + 平台/系列筛选 + 全部游戏网格
    search.astro         # 搜索页：关键词 + 平台/年份/系列组合筛选
    about.astro          # 关于与版权说明
    sitemap.xml.ts       # 动态生成 sitemap.xml
    platform/[slug].astro# 平台页：/<平台>/，如 /platform/ps2/
    [slug]/index.astro   # 游戏主页：/<slug>/，如 /srw-30/
    [slug]/missions/     # 关卡列表：/<slug>/missions/
    [slug]/secrets/      # 隐藏要素：/<slug>/secrets/
    [slug]/units/        # 机体图鉴：/<slug>/units/
    srw-30/missions/sample-01.astro  # 样板关卡（演示模板结构，非真实数据）
public/robots.txt
.github/workflows/deploy.yml  # GitHub Pages 自动部署
```

URL 结构不设 `/games/` 节点，游戏页直接位于根下，如 `/srw-30/`、`/srw-30/missions/`。

## 如何新增一款游戏

在 `src/data/games.json` 末尾加一条记录（字段见现有条目：slug、zh、en、ja、year、release、platform、platformSlug、platformLabel、platforms、series、aliases），重新构建后会自动生成该游戏的主页、关卡、隐藏要素、图鉴与平台页，无需改页面代码。

## 如何新增一关攻略

参考样板页 `src/pages/srw-30/missions/sample-01.astro` 的结构新建页面
`src/pages/<游戏slug>/missions/<关卡slug>.astro`，按模板填写：

1. 带坐标与地形的地图（坐标规则：左上角 (1,1)，X 右增、Y 下增；点击格子显示坐标/地形/效果）
2. 胜利条件 / 败北条件 / SR 点条件表
3. 出场与增援表（位置全部用坐标标注）
4. 分步攻略（引用位置时写坐标）
5. 本关隐藏要素

并在 `src/pages/[slug]/missions/index.astro` 对应游戏的列表区加链接（或改为数据驱动列表）。

## 内容与版权

攻略文字均为原创；未核对的数据不刊出，整理中的页面如实标注。游戏名称、封面等版权归 Bandai Namco / Banpresto 等权利方所有，本站为粉丝非商业攻略站，权利方要求即删除，详见站内关于页。
