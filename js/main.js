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
    const fileInput = document.getElementById('file');
    const fileName = fileInput && fileInput.files.length > 0 ? fileInput.files[0].name : '';

    return { name, email, message, fileName };
}

// モーダルにデータを表示
function populateModalData(data) {
    const confirmName = document.getElementById('confirmName');
    const confirmEmail = document.getElementById('confirmEmail');
    const confirmMessage = document.getElementById('confirmMessage');
    const confirmFile = document.getElementById('confirmFile');

    if (confirmName) confirmName.textContent = data.name;
    if (confirmEmail) confirmEmail.textContent = data.email;
    if (confirmMessage) confirmMessage.textContent = data.message;
    if (confirmFile) confirmFile.textContent = data.fileName || 'No file selected';
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

// 著作権年を動的に更新する関数
function updateCopyrightYear() {
    const copyrightElements = document.querySelectorAll('.copyright');
    const currentYear = new Date().getFullYear();

    copyrightElements.forEach(element => {
        // "2016-" の後に現在の年を動的に設定
        element.innerHTML = element.innerHTML.replace(/2016-\d{4}/, `2016-${currentYear}`);
    });
}

// DOMContentLoadedイベントでアニメーションを設定
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
    setupAnimations();
    updateCopyrightYear();
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
        // ファイル選択時の処理
        const fileInput = document.getElementById('file');
        const fileNameDisplay = document.getElementById('fileNameDisplay');

        if (fileInput && fileNameDisplay) {
            fileInput.addEventListener('change', function() {
                if (this.files.length > 0) {
                    fileNameDisplay.textContent = this.files[0].name;
                } else {
                    fileNameDisplay.textContent = 'No file selected';
                }
            });
        }

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

                // Netlify Forms用のデータを準備
                const formData = new FormData(contactForm);

                // form-nameフィールドが確実に含まれるようにする
                if (!formData.has('form-name')) {
                    formData.append('form-name', 'contact');
                }

                // フォームを送信 (multipart/form-dataはheadersを指定しない)
                fetch('/', {
                    method: 'POST',
                    body: formData
                })
                .then(() => {
                    // 成功時の処理
                    window.location.href = '/form-submission-success.html';
                })
                .catch((error) => {
                    // エラー時の処理
                    console.error('Form submission error:', error);
                    showNotification('送信中にエラーが発生しました。もう一度お試しください。', 'error');
                });
            });
        }
    }
});

// Skills ページ用の追加JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // スクロールアニメーション
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-card, .project-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // 初期実行
    animateOnScroll();

    // スクロールイベント
    window.addEventListener('scroll', animateOnScroll);

    // スキルカードのホバーエフェクト強化
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.animation = 'pulse 1s infinite';
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.animation = '';
        });
    });

    // ページタイトルのタイピングアニメーション強化
    const pageTitle = document.querySelector('.page-title');
    if (pageTitle) {
        pageTitle.classList.add('typing');

        // タイピング終了後のカーソル点滅の追加
        pageTitle.addEventListener('animationend', function() {
            const cursor = document.createElement('span');
            cursor.classList.add('cursor');
            cursor.textContent = '|';
            cursor.style.color = 'var(--color-primary)';
            cursor.style.animation = 'blink 1s step-end infinite';
            this.appendChild(cursor);
        });
    }

    // 資格セクションの特殊効果
    const certNote = document.querySelector('.certification-note');
    if (certNote) {
        certNote.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 0 20px rgba(38, 218, 253, 0.4)';
        });

        certNote.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    }

    // プロジェクト項目のホバーエフェクト
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const tech = this.querySelector('.project-tech');
            tech.style.color = 'var(--color-primary)';
            tech.style.borderTopColor = 'var(--color-primary)';
        });

        item.addEventListener('mouseleave', function() {
            const tech = this.querySelector('.project-tech');
            tech.style.color = '';
            tech.style.borderTopColor = '';
        });
    });

    // 星を生成（すでに main.js で定義されている関数を利用）
    if (typeof createStars === 'function') {
        createStars();
    } else {
        // createStars関数が存在しない場合のフォールバック
        console.log('Creating stars manually...');
        const starField = document.getElementById('starField');
        if (starField) {
            const starCount = 250;
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                const sizeClass = Math.random() < 0.6 ? 'small' : (Math.random() < 0.9 ? 'medium' : 'large');
                star.classList.add('star', sizeClass);
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                starField.appendChild(star);
            }
        }
    }
});

// ページスクロール時のヘッダー変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 画面サイズ変更時の調整
window.addEventListener('resize', function() {
    // レスポンシブ対応のための処理
    const skillCards = document.querySelectorAll('.skill-card');
    if (window.innerWidth <= 480) {
        skillCards.forEach(card => {
            const desc = card.querySelector('.skill-desc');
            if (desc && desc.textContent.length > 100) {
                desc.dataset.fullText = desc.textContent;
                desc.textContent = desc.textContent.substring(0, 100) + '...';
            }
        });
    } else {
        skillCards.forEach(card => {
            const desc = card.querySelector('.skill-desc');
            if (desc && desc.dataset.fullText) {
                desc.textContent = desc.dataset.fullText;
            }
        });
    }
});
