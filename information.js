// 假设 resources 是资源列表
const resources = [
    { id: 1, name: '天气（方屏）', author: '澪', version: '1.0.0', size: '64.2KB', category: '工具', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/tq(fp).rpk' },
    { id: 2, name: '计算器（圆屏）', author: '澪', version: '1.0.0', size: '19.5KB', category: '工具', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/jsq(yp).rpk' },
    { id: 3, name: '电子木鱼', author: '星星', version: '1.0.2', size: '39KB', category: '游戏', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/dzmy.rpk' },
    { id: 4, name: '计算器（方屏）', author: '澪', version: '1.0.0', size: '19.5KB', category: '工具', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/jsq(fp).rpk' },
    { id: 5, name: '跑分', author: 'Justliuil', version: '3.1', size: '33KB', category: '工具', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/pf.rpk' },
    { id: 6, name: '王者农药（模拟器）', author: 'Justliuil', version: '1.0.0', size: '122KB', category: '娱乐', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/wzny.rpk' },
    { id: 7, name: '骰子', author: '未知', version: '1.0', size: '434KB', category: '工具', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/tz.rpk' },
    { id: 8, name: '像素鸟', author: '小赵dc', version: '1.0.0', size: '45.3KB', category: '游戏', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/xsn.rpk' },
    { id: 9, name: '蓝盒转盘', author: '小赵dc', version: '1.0.0', size: '106KB', category: '工具', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/lanhezhuanpan.rpk' },
    { id: 10, name: '水果大作战', author: '未知', version: '1.0.0', size: '209KB', category: '游戏', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/shuiguodaxiaozhan.rpk' },   
    { id: 11, name: '日历', author: 'itosEO', version: '1.0', size: '22kb', category: '工具', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/rl.rpk' },
    { id: 12, name: '空气手枪', author: '未知', version: '1.0', size: '358kb', category: '游戏', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/kqsq.rpk' },
    { id: 13, name: '音效盒子', author: '小米矿石', version: '1.0', size: '246kb', category: '娱乐', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/yxhz.rpk' },
    { id: 14, name: '电子木鱼', author: 'star7', version: '1.0.7', size: '129kb', category: '娱乐', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/dzmy.rpk' },
    { id: 15, name: '极简数字时钟', author: '未知', version: '1.0.0', size: '28kb', category: '工具', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/jjszsz.rpk' },
    { id: 16, name: '屏幕安全卫士', author: '晦月', version: '1.0', size: '23kb', category: '工具', icon: 'img/a.png', download: 'https://lanyuncraft.github.io/ku/pmaqws.rpk' }
];

const categoryMap = {
    '工具': '工具',
    '游戏': '游戏',
    '娱乐': '娱乐',
    // 其他分类映射
};

const authors = [
    { name: '澪', bio: '专注于开发实用工具', contact: 'mio@example.com', avatar: 'img/ano.png' },
    { name: '星星', bio: '游戏开发者，热爱创造有趣的游戏', contact: 'star@example.com', avatar: 'img/ano.png' },
    { name: 'Justliuil', bio: '技术爱好者，喜欢挑战复杂的项目', contact: 'justliuil@example.com', avatar: 'img/ano.png' },
    { name: '小赵dc', bio: '工具开发者，致力于提升用户体验', contact: 'xiaozhao@example.com', avatar: 'img/ano.png' },
    { name: 'itosEO', bio: '日历应用开发者，注重时间管理', contact: 'itoseo@example.com', avatar: 'img/ano.png' },
    { name: '小米矿石', bio: '音效爱好者，专注于音效设计', contact: 'xiaomi@example.com', avatar: 'img/ano.png' },
    { name: 'star7', bio: '娱乐应用开发者，喜欢创造有趣的体验', contact: 'star7@example.com', avatar: 'img/ano.png' },
    { name: '晦月', bio: '工具开发者', contact: 'huiyue@example.com', avatar: 'img/ano.png' },
    { name: '未知', bio: '这个人很神秘', contact: '未知', avatar: 'img/ano.png' }
];

function getRandomResources(count) {
    const shuffled = resources.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getResourcesByAuthor(authorName) {
    return resources.filter(resource => resource.author === authorName);
}

function findResourceById(id) {
    return resources.find(resource => resource.id === id);
}

function getAuthorInfo(authorName) {
    return authors.find(author => author.name === authorName);
}

function gotoResourceDetail(id) {
    window.location.href = `resource.html?id=${id}`;
}