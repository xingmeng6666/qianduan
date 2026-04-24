// 轮播图功能
(function() {
    const bannerImgs = document.querySelectorAll('.banner .banner-imgs li');
    const circles = document.querySelectorAll('.banner .circle li');
    const prevBtn = document.querySelector('.banner .prev');
    const nextBtn = document.querySelector('.banner .next');
    let currentIndex = 0;
    let autoPlayTimer = null;
    
    // 切换到指定索引的图片
    function switchTo(index) {
        // 移除所有 active 类
        bannerImgs.forEach((img, i) => {
            img.classList.remove('active');
            circles[i].classList.remove('active');
        });
        // 添加当前索引的 active 类
        bannerImgs[index].classList.add('active');
        circles[index].classList.add('active');
        currentIndex = index;
    }
    
    // 下一张
    function next() {
        const nextIndex = (currentIndex + 1) % bannerImgs.length;
        switchTo(nextIndex);
    }
    
    // 上一张
    function prev() {
        const prevIndex = (currentIndex - 1 + bannerImgs.length) % bannerImgs.length;
        switchTo(prevIndex);
    }
    
    // 自动播放
    function startAutoPlay() {
        autoPlayTimer = setInterval(next, 3000);
    }
    
    // 停止自动播放
    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }
    
    // 绑定左右按钮事件
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        next();
    });
    
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        prev();
    });
    
    // 绑定圆点点击事件
    circles.forEach((circle, index) => {
        circle.addEventListener('click', function() {
            switchTo(index);
        });
    });
    
    // 鼠标悬停停止自动播放，离开继续
    const banner = document.querySelector('.banner');
    banner.addEventListener('mouseenter', stopAutoPlay);
    banner.addEventListener('mouseleave', startAutoPlay);
    
    // 初始化显示第一张
    switchTo(0);
    // 开始自动播放
    startAutoPlay();
})();
