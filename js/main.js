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
    console.log('Setting up animations...');
    
    // フレームラインのアニメーション
    const frameLines = document.querySelectorAll('.frame-line');
    console.log('Frame lines found:', frameLines.length);
    frameLines.forEach((line, index) => {
        line.style.animation = `line-appear 0.5s both`;
        line.style.animationDelay = `${0.3 + (index * 0.1)}s`;
    });

    // ヘッダーのアニメーション - すべてのページで実行
    const headerInner = document.querySelector('.header-inner');
    console.log('Header inner found:', headerInner);
    if (headerInner) {
        headerInner.style.animation = 'header-appear 0.5s both';
        headerInner.style.animationDelay = '0.1s';
    }

    // ヘッダーラインのアニメーション
    const headerLine = document.querySelector('.header-line');
    if (headerLine) {
        headerLine.style.animation = 'line-appear 0.6s both';
        headerLine.style.animationDelay = '0.3s';
    }

    // ナビゲーションアニメーション
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link, index) => {
        link.style.animation = 'text-appear 0.5s both';
        link.style.animationDelay = `${0.5 + (index * 0.1)}s`;
    });

    // タイピングアニメーションはCSSで処理されます
    console.log('Animations setup complete');
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

// DOMContentLoadedイベントでアニメーションを設定
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    setupAnimations();
});

// ページ読み込み時の処理
window.addEventListener('load', () => {
    console.log('Window loaded');
    // 星を生成（star-fieldがある場合のみ）
    createStars();
    
    // すべてのページでアニメーションを設定（念のため再度実行）
    setupAnimations();

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
