// 星を生成する関数
function createStars() {
    const starField = document.getElementById('starField');
    if (!starField) return; // 要素が存在しない場合は処理をスキップ
    
    const starCount = 250; // 星の数

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        
        // 星のサイズをランダムに設定（小・中・大）
        const sizeClass = Math.random() < 0.6 ? 'small' : (Math.random() < 0.9 ? 'medium' : 'large');
        star.classList.add('star', sizeClass);

        // ランダムなポジション
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;

        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;

        // ランダムなアニメーション遅延
        star.style.animationDelay = `${Math.random() * 3}s`;

        starField.appendChild(star);
    }
}

// ページロード時に各要素をアニメーション表示
function setupAnimations() {
    document.querySelectorAll('.frame-line').forEach((line, index) => {
        line.style.animation = `line-appear 0.5s both`;
        line.style.animationDelay = `${0.3 + (index * 0.1)}s`;
    });

    document.querySelector('.header-inner').style.animation = 'header-appear 0.5s both';

    // タイピングアニメーション
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach((element, index) => {
        const text = element.textContent;
        element.textContent = '';

        let charIndex = 0;
        let delay = index * 1000; // 1つ目の要素の後に次の要素を開始

        setTimeout(() => {
            const typeInterval = setInterval(() => {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, delay);
    });
}

// 通知を表示する関数
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    if (!notification) return; // 要素が存在しない場合は処理をスキップ
    
    const notificationMessage = document.getElementById('notificationMessage');

    notification.className = 'notification ' + type;
    notificationMessage.textContent = message;

    // 表示
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // 一定時間後に非表示
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// モーダルを表示する関数
function showModal() {
    const confirmModal = document.getElementById('confirmModal');
    if (!confirmModal) return; // 要素が存在しない場合は処理をスキップ
    
    confirmModal.classList.add('active');
}

// モーダルを非表示にする関数
function hideModal() {
    const confirmModal = document.getElementById('confirmModal');
    if (!confirmModal) return; // 要素が存在しない場合は処理をスキップ
    
    confirmModal.classList.remove('active');
}

// フォームデータを取得
function getFormData() {
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';

    return { name, email, message };
}

// モーダルにデータを表示
function populateModalData(data) {
    const confirmName = document.getElementById('confirmName');
    const confirmEmail = document.getElementById('confirmEmail');
    const confirmMessage = document.getElementById('confirmMessage');
    
    if (confirmName) confirmName.textContent = data.name;
    if (confirmEmail) confirmEmail.textContent = data.email;
    if (confirmMessage) confirmMessage.textContent = data.message;
}

// 送信中の表示を切り替え
function toggleLoading(isLoading) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const loadingText = document.getElementById('loadingText');
    const modalFooter = document.querySelector('.modal-footer');

    if (!loadingIndicator || !loadingText || !modalFooter) return; // 要素が存在しない場合は処理をスキップ

    if (isLoading) {
        loadingIndicator.style.display = 'block';
        loadingText.style.display = 'block';
        modalFooter.style.display = 'none';
    } else {
        loadingIndicator.style.display = 'none';
        loadingText.style.display = 'none';
        modalFooter.style.display = 'flex';
    }
}

// スクロール時のヘッダースタイル変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// フォームデータを取得する関数
function getFormData() {
    return {
        name: document.getElementById('name') ? document.getElementById('name').value : '',
        email: document.getElementById('email') ? document.getElementById('email').value : '',
        message: document.getElementById('message') ? document.getElementById('message').value : ''
    };
}

// モーダルにデータを表示する関数
function populateModalData(data) {
    if (document.getElementById('confirmName')) {
        document.getElementById('confirmName').textContent = data.name;
    }
    if (document.getElementById('confirmEmail')) {
        document.getElementById('confirmEmail').textContent = data.email;
    }
    if (document.getElementById('confirmMessage')) {
        document.getElementById('confirmMessage').textContent = data.message;
    }
}

// モーダルを表示する関数
function showModal() {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.classList.add('active');
    }
}

// モーダルを非表示にする関数
function hideModal() {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// 通知を表示する関数
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');
    
    if (notification && notificationMessage) {
        notificationMessage.textContent = message;
        notification.className = 'notification';
        notification.classList.add(type);
        notification.classList.add('active');
        
        setTimeout(() => {
            notification.classList.remove('active');
        }, 5000);
    }
}

// ページ読み込み時の処理
window.addEventListener('load', () => {
    createStars();
    
    // index.htmlのみで実行する処理
    if (document.querySelector('.hero-content')) {
        setupAnimations();
    }

    // すべての背景を強制的に透明にする
    const transparentElements = document.querySelectorAll('.frame, .frame-content, span, p, h1, h2, h3, div');
    transparentElements.forEach(element => {
        element.style.background = 'transparent';
    });
    
    // contact.htmlのフォーム処理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // 「送信」ボタンのクリックイベント
        const showConfirmButton = document.getElementById('showConfirmButton');
        if (showConfirmButton) {
            showConfirmButton.addEventListener('click', function() {
                // フォームデータを取得
                const formData = getFormData();
                
                // フォームバリデーション
                if (!formData.name || !formData.email || !formData.message) {
                    showNotification('すべての項目を入力してください', 'error');
                    return;
                }
                
                // モーダルにデータを表示
                populateModalData(formData);
                
                // モーダルを表示
                showModal();
            });
        }
        
        // キャンセルボタンの処理
        const cancelButton = document.getElementById('cancelButton');
        if (cancelButton) {
            cancelButton.addEventListener('click', function() {
                hideModal();
            });
        }
        
        // 送信確認ボタンの処理
        const confirmButton = document.getElementById('confirmButton');
        if (confirmButton) {
            confirmButton.addEventListener('click', function() {
                // モーダルを非表示
                hideModal();
                
                // フォームを送信
                contactForm.submit();
            });
        }
    }
});
