        document.addEventListener('DOMContentLoaded', function() {
          // 1. 创建历史事件容器
          const historyContainer = document.createElement('div');
          historyContainer.className = 'swiper history-swiper';
          historyContainer.innerHTML = `
            <div class="swiper-wrapper"></div>
            <div class="swiper-pagination"></div>
          `;
          
          // 2. 插入到历史卡片中
          const historyCard = document.querySelector('.card-widget.card-history');
          if (historyCard) {
            historyCard.appendChild(historyContainer);
          }

          // 3. 获取历史数据
          fetch('https://api.nsmao.net/api/history/query?key=s5PgSHnz87tVfJCgbc3wE83i1R')
            .then(response => response.json())
            .then(data => {
              if (data.code === 200) {
                const events = data.data;
                const wrapper = historyContainer.querySelector('.swiper-wrapper');
                
                // 4. 动态生成轮播项
                for (const [year, event] of Object.entries(events)) {
                  const slide = document.createElement('div');
                  slide.className = 'swiper-slide';
                  slide.innerHTML = `
                    <div class="history-year">${year}</div>
                    <div class="history-event">${event}</div>
                  `;
                  wrapper.appendChild(slide);
                }
                
                // 5. 初始化Swiper轮播
                new Swiper('.history-swiper', {
                  direction: 'vertical',  // 垂直滚动
                  loop: true,             // 循环播放
                  autoplay: {
                    delay: 5000,          // 5秒切换
                    disableOnInteraction: false,
                  },
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                });
              }
            })
            .catch(error => console.error('历史数据加载失败:', error));
        });