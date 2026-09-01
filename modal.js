(function() {
    // 1. Limpieza absoluta previa
    var viejoEstilo = document.getElementById('modalIdiomaStyles');
    if (viejoEstilo) viejoEstilo.remove();
    var viejoOverlay = document.getElementById('modalIdiomaOverlay');
    if (viejoOverlay) viejoOverlay.remove();
    var viejoBtn = document.getElementById('btnCambiarIdiomaFlotante');
    if (viejoBtn) viejoBtn.remove();

    // 2. Estilos visuales: Fondo general blanco/rosa y botones oscuros con bandera
    var estilo = document.createElement('style');
    estilo.id = 'modalIdiomaStyles';
    estilo.innerHTML = `
        @keyframes animEntrada {
            0% { opacity: 0; transform: scale(0.85) translateY(20px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes rosaBrilloModal {
            0% { box-shadow: 0 0 20px rgba(255, 105, 180, 0.25), 0 25px 60px rgba(0,0,0,0.15); }
            50% { box-shadow: 0 0 35px rgba(255, 20, 147, 0.4), 0 25px 60px rgba(0,0,0,0.2); }
            100% { box-shadow: 0 0 20px rgba(255, 105, 180, 0.25), 0 25px 60px rgba(0,0,0,0.15); }
        }
        #modalIdiomaOverlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            height: 100dvh !important;
            background: rgba(255, 255, 255, 0.85) !important;
            backdrop-filter: blur(10px) !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            z-index: 2147483647 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            box-sizing: border-box !important;
            padding: 0 !important;
            margin: 0 !important;
        }
        #modalIdiomaBox {
            background: radial-gradient(circle at center, #ffffff 0%, #fff0f5 100%) !important;
            border: 2.5px solid #ff69b4 !important;
            border-radius: 24px !important;
            padding: 24px 16px !important;
            width: 92% !important;
            max-width: 550px !important;
            max-height: 88vh !important;
            max-height: 88dvh !important;
            text-align: center !important;
            box-shadow: 0 0 25px rgba(255, 105, 180, 0.25), 0 25px 60px rgba(0,0,0,0.15) !important;
            animation: animEntrada 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, rosaBrilloModal 3s infinite ease-in-out !important;
            display: flex !important;
            flex-direction: column !important;
            box-sizing: border-box !important;
        }
        #modalIdiomaBox h2 {
            color: #1a1a1a !important;
            margin: 0 0 6px 0 !important;
            font-size: 22px !important;
            font-weight: 800 !important;
            letter-spacing: 0.3px !important;
        }
        #modalIdiomaBox p {
            color: #666666 !important;
            font-size: 12px !important;
            margin-bottom: 16px !important;
            font-weight: 500 !important;
        }
        .grid-idiomas-flex {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
            overflow-y: auto !important;
            padding-right: 4px !important;
            max-height: 55vh !important;
            box-sizing: border-box !important;
            -webkit-overflow-scrolling: touch !important;
        }
        .grid-idiomas-flex::-webkit-scrollbar {
            width: 5px !important;
        }
        .grid-idiomas-flex::-webkit-scrollbar-thumb {
            background: #ff69b4 !important;
            border-radius: 4px !important;
        }
        .btn-idioma-pro {
            background: linear-gradient(135deg, #16161c 0%, #0d0d11 100%) !important;
            color: #ffffff !important;
            border: 1.5px solid #282830 !important;
            padding: 11px 12px !important;
            border-radius: 12px !important;
            cursor: pointer !important;
            font-weight: 700 !important;
            font-size: 12px !important;
            text-align: left !important;
            display: flex !important;
            align-items: center !important;
            gap: 10px !important;
            transition: all 0.2s ease !important;
            width: 100% !important;
            box-sizing: border-box !important;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05) !important;
        }
        .btn-idioma-pro:hover, .btn-idioma-pro:active {
            background: linear-gradient(135deg, #222228 0%, #121216 100%) !important;
            color: #ff69b4 !important;
            border-color: #ff69b4 !important;
            box-shadow: 0 6px 15px rgba(255, 105, 180, 0.25), inset 0 1px 2px rgba(255, 105, 180, 0.2) !important;
            transform: translateY(-1px);
        }
        .flag-contenedor {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            background: #1a1a1a !important;
            border: 1.5px solid #ff69b4 !important;
            border-radius: 8px !important;
            padding: 3px 6px !important;
            font-size: 14px !important;
            flex-shrink: 0 !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        }

        /* PANTALLA COMPLETA ABSOLUTA PARA CUALQUIER TELÉFONO MÓVIL */
        @media (max-width: 768px), (max-height: 700px) {
            #modalIdiomaOverlay {
                padding: 0 !important;
                align-items: stretch !important;
                background: #ffffff !important;
            }
            #modalIdiomaBox {
                width: 100vw !important;
                height: 100vh !important;
                height: 100dvh !important;
                max-width: 100% !important;
                max-height: 100% !important;
                max-height: 100dvh !important;
                border-radius: 0 !important;
                border: none !important;
                border-top: 4px solid #ff69b4 !important;
                padding: 20px 14px env(safe-area-inset-bottom, 20px) 14px !important;
                justify-content: center !important;
                box-shadow: none !important;
                animation: none !important;
            }
            .grid-idiomas-flex {
                grid-template-columns: 1fr !important;
                max-height: calc(100dvh - 160px) !important;
                gap: 8px !important;
            }
            .btn-idioma-pro {
                padding: 12px 14px !important;
                font-size: 13px !important;
            }
        }
    `;
    document.head.appendChild(estilo);

    // 3. HTML del Modal con un solo botón en español y los demás en sus idiomas nativos
    var htmlModal = `
    <div id="modalIdiomaOverlay">
        <div id="modalIdiomaBox">
            <div style="font-size: 11px; letter-spacing: 3px; color: #ff0010; font-weight: 800; margin-bottom: 4px; text-transform: uppercase; text-shadow: 0 2px 8px rgba(255, 20, 147, 0.2);">AVIATOR PREDICTOR</div>
            <h2>Selecciona tu Idioma</h2>
            <p>Select your region & preferred language / Selecione seu idioma</p>
            <div class="grid-idiomas-flex">
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('es', 'Español')"><span class="flag-contenedor">🇪🇸</span> Español</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('en', 'United States')"><span class="flag-contenedor">🇺🇸</span> English</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('pt', 'Brasil')"><span class="flag-contenedor">🇧🇷</span> Português</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('de', 'Deutschland')"><span class="flag-contenedor">🇩🇪</span> Deutsch</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('fr', 'France')"><span class="flag-contenedor">🇫🇷</span> Français</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('it', 'Italia')"><span class="flag-contenedor">🇮🇹</span> Italiano</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('ru', 'Россия')"><span class="flag-contenedor">🇷🇺</span> Русский</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('ja', 'Japan')"><span class="flag-contenedor">🇯🇵</span> 日本語</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('zh', 'China')"><span class="flag-contenedor">🇨🇳</span> 中文</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('ko', 'Korea')"><span class="flag-contenedor">🇰🇷</span> 한국어</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('tr', 'Türkiye')"><span class="flag-contenedor">🇹🇷</span> Türkçe</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('nl', 'Netherlands')"><span class="flag-contenedor">🇳🇱</span> Nederlands</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('pl', 'Poland')"><span class="flag-contenedor">🇵🇱</span> Polski</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('hi', 'India')"><span class="flag-contenedor">🇮🇳</span> हिन्दी</button>
                <button class="btn-idioma-pro" onclick="aplicarIdiomaYTraducir('ar', 'Saudi Arabia')"><span class="flag-contenedor">🇸🇦</span> العربية</button>
            </div>
        </div>
    </div>`;

    // 4. Diccionario de traducciones completo (incluyendo subtítulos dinámicos)
    var textosSistema = {
        'pt': {
            usuario: 'Usuário', contrasena: 'Senha', correo: 'E-mail', celular: 'Número de celular',
            registrar: 'Enviar e Registrar', ingresar: 'ENTRAR', cerrar: 'Fechar', titulo_reg: 'Registro Exclusivo',
            subtitulo: 'Selecione seu país, insira seus dados completos e conecte-se para receber sinais ao vivo.'
        },
        'it': {
            usuario: 'Utente', contrasena: 'Password', correo: 'Email', celular: 'Numero di cellulare',
            registrar: 'Invia e Registrati', ingresar: 'ACCEDI', cerrar: 'Chiudi', titulo_reg: 'Registrazione Esclusiva',
            subtitulo: 'Seleziona il tuo paese, inserisci i tuoi dati completi e connettiti per ricevere segnali dal vivo.'
        },
        'en': {
            usuario: 'Username', contrasena: 'Password', correo: 'Email Address', celular: 'Mobile Number',
            registrar: 'Submit & Register', ingresar: 'SIGN IN', cerrar: 'Close', titulo_reg: 'Exclusive Registration',
            subtitulo: 'Select your country, enter your complete details and connect to receive live signals.'
        },
        'fr': {
            usuario: "Nom d'utilisateur", contrasena: 'Mot de passe', correo: 'Courriel', celular: 'Numéro de portable',
            registrar: "S'inscrire", ingresar: 'SE CONNECTER', cerrar: 'Fermer', titulo_reg: 'Inscription Exclusive',
            subtitulo: 'Sélectionnez votre pays, entrez vos coordonnées complètes et connectez-vous pour recevoir des signaux en direct.'
        },
        'de': {
            usuario: 'Benutzername', contrasena: 'Passwort', correo: 'E-Mail-Adresse', celular: 'Handynummer',
            registrar: 'Absenden & Registrieren', ingresar: 'ANMELDEN', cerrar: 'Schließen', titulo_reg: 'Exklusive Registrierung',
            subtitulo: 'Wählen Sie Ihr Land, geben Sie Ihre vollständigen Daten ein und verbinden Sie sich, um Live-Signale zu erhalten.'
        },
        'ru': {
            usuario: 'Имя пользователя', contrasena: 'Пароль', correo: 'Электронная почта', celular: 'Номер мобильного',
            registrar: 'Отправить и зарегистрироваться', ingresar: 'ВОЙТИ', cerrar: 'Закрыть', titulo_reg: 'Эксклюзивная регистрация',
            subtitulo: 'Выберите свою страну, введите полные данные и подключитесь для получения живых сигналов.'
        },
        'ja': {
            usuario: 'ユーザー名', contrasena: 'パスワード', correo: 'メールアドレス', celular: '携帯電話番号',
            registrar: '送信して登録', ingresar: 'ログイン', cerrar: '閉じる', titulo_reg: '限定登録',
            subtitulo: '国を選択し、完全な詳細を入力して、ライブシグナルを受信するために接続してください。'
        },
        'zh': {
            usuario: '用户名', contrasena: '密码', correo: '电子邮箱', celular: '手机号码',
            registrar: '提交并注册', ingresar: '登录', cerrar: '关闭', titulo_reg: '独家注册',
            subtitulo: '选择您的国家，输入您的完整资料并连接以接收实时信号。'
        },
        'ko': {
            usuario: '사용자 이름', contrasena: '비밀번호', correo: '이메일 주소', celular: '휴대폰 번호',
            registrar: '제출 및 등록', ingresar: '로그인', cerrar: '닫기', titulo_reg: '독점 등록',
            subtitulo: '국가를 선택하고 전체 정보를 입력한 후 실시간 신호를 받으려면 연결하세요.'
        },
        'tr': {
            usuario: 'Kullanıcı Adı', contrasena: 'Şifre', correo: 'E-posta Adresi', celular: 'Cep Telefonu Numarası',
            registrar: 'Gönder ve Kaydol', ingresar: 'GİRİŞ YAP', cerrar: 'Kapat', titulo_reg: 'Özel Kayıt',
            subtitulo: 'Ülkenizi seçin, eksiksiz bilgilerinizi girin ve canlı sinyalleri almak için bağlanın.'
        },
        'nl': {
            usuario: 'Gebruikersnaam', contrasena: 'Wachtwoord', correo: 'E-mailadres', celular: 'Mobiel nummer',
            registrar: 'Verzenden & Registreren', ingresar: 'INLOGGEN', cerrar: 'Sluiten', titulo_reg: 'Exclusieve Registratie',
            subtitulo: 'Selecteer uw land, vul uw volledige gegevens in en maak verbinding om live signalen te ontvangen.'
        },
        'pl': {
            usuario: 'Nazwa użytkownika', contrasena: 'Hasło', correo: 'Adres e-mail', celular: 'Numer komórkowy',
            registrar: 'Wyślij i zarejestruj się', ingresar: 'ZALOGUJ SIĘ', cerrar: 'Zamknij', titulo_reg: 'Ekskluzywna rejestracja',
            subtitulo: 'Wybierz swój kraj, wpisz kompletne dane i połącz się, aby otrzymywać sygnały na żywo.'
        },
        'hi': {
            usuario: 'उपयोगकर्ता नाम', contrasena: 'पासवर्ड', correo: 'ईमेल पता', celular: 'मोबाइल नंबर',
            registrar: 'सबमिट करें और रजिस्टर करें', ingresar: 'साइन इन करें', cerrar: 'बंद करें', titulo_reg: 'विशेष पंजीकरण',
            subtitulo: 'अपना देश चुनें, अपना पूरा विवरण दर्ज करें और लाइव सिग्नल प्राप्त करने के लिए कनेक्ट करें।'
        },
        'ar': {
            usuario: 'اسم المستخدم', contrasena: 'كلمة المرور', correo: 'البريد الإلكتروني', celular: 'رقم الهاتف المحمول',
            registrar: 'إرسال وتسجيل', ingresar: 'تسجيل الدخول', cerrar: 'إغلاق', titulo_reg: 'تسجيل حصري',
            subtitulo: 'اختر بلدك، وأدخل بياناتك الكاملة وتصل لتلقي الإشارات المباشرة.'
        },
        'es': {
            usuario: 'Usuario', contrasena: 'Contraseña', correo: 'Correo Electrónico', celular: 'Número celular',
            registrar: 'Enviar y Registrarse', ingresar: 'INGRESA', cerrar: 'Cerrar', titulo_reg: 'Registro Exclusivo',
            subtitulo: 'Selecciona tu país, ingresa tus datos completos y conéctate para recibir señales en vivo.'
        }
    };

    // Función que aplica los cambios de texto en vivo a toda la página
    function ejecutarTraduccion(lang) {
        var t = textosSistema[lang] || textosSistema['en'];

        // Traducir inputs y placeholders
        document.querySelectorAll('input').forEach(function(input) {
            var ph = (input.placeholder || '').toLowerCase();
            var type = (input.type || '').toLowerCase();
            
            if (type === 'password' || ph.includes('pass') || ph.includes('contraseña') || ph.includes('senha') || ph.includes('şifre') || ph.includes('пароль') || ph.includes('パスワード') || ph.includes('密码') || ph.includes('비밀번호')) {
                input.placeholder = t.contrasena;
            } else if (type === 'email' || ph.includes('correo') || ph.includes('email') || ph.includes('mail') || ph.includes('e-mail')) {
                input.placeholder = t.correo;
            } else if (type === 'tel' || ph.includes('celular') || ph.includes('phone') || ph.includes('número') || ph.includes('móvil') || ph.includes('mobile')) {
                input.placeholder = t.celular;
            } else if (ph !== '') {
                input.placeholder = t.usuario;
            }
        });

        // Traducir títulos, subtítulos y botones del formulario principal
        document.querySelectorAll('h1, h2, h3, p, button, a, .btn, input[type="submit"]').forEach(function(el) {
            var txt = (el.innerText || el.value || '').trim().toUpperCase();
            
            if (txt.includes('REGISTRO EXCLUSIVO') || txt.includes('EXCLUSIVE REGISTRATION') || txt.includes('REGISTRAÇÃO') || txt.includes('ÖZEL KAYIT')) {
                el.innerText = t.titulo_reg;
            } else if (txt.includes('SELECCIONA TU PAÍS') || txt.includes('SELECT YOUR COUNTRY') || txt.includes('SELECIONE SEU PAÍS') || txt.includes('ÜLKENİZİ SEÇİN')) {
                el.innerText = t.subtitulo;
            } else if (txt.includes('REGISTRAR') || txt.includes('SUBMIT') || txt.includes('REGISTER') || txt.includes('KAYDOL')) {
                if (el.tagName === 'INPUT') el.value = t.registrar;
                else el.innerText = t.registrar;
            } else if (txt.includes('INGRESA') || txt.includes('SIGN IN') || txt.includes('ENTRAR') || txt.includes('ACCEDI') || txt.includes('ANMELDEN') || txt.includes('LOG') || txt.includes('GİRİŞ') || txt.includes('INLOGGEN') || txt.includes('ZALOGUJ')) {
                if (el.tagName === 'INPUT') el.value = t.ingresar;
                else el.innerText = t.ingresar;
            } else if (txt.includes('CERRAR') || txt.includes('CLOSE') || txt.includes('FECHAR') || txt.includes('CHIUDI') || txt.includes('SCHLIESSEN') || txt.includes('KAPAT')) {
                if (el.tagName === 'INPUT') el.value = t.cerrar;
                else el.innerText = t.cerrar;
            }
        });
    }

    // 5. Función principal llamada por el modal (Cierre instantáneo y fluido)
    window.aplicarIdiomaYTraducir = function(lang, regionName) {
        var overlay = document.getElementById('modalIdiomaOverlay');
        if (overlay) overlay.remove();

        try {
            localStorage.setItem('idioma_seleccionado_usuario', lang);
            localStorage.setItem('region_seleccionada_usuario', regionName);
            document.documentElement.lang = lang;
        } catch(e) {}

        ejecutarTraduccion(lang);

        if (window._observerIdioma) {
            window._observerIdioma.disconnect();
        }
        window._observerIdioma = new MutationObserver(function() {
            ejecutarTraduccion(lang);
        });
        window._observerIdioma.observe(document.body, { childList: true, subtree: true });
    };

    // 6. Mostrar el modal al cargar
    if (document.body) {
        document.body.insertAdjacentHTML('beforeend', htmlModal);
    } else {
        window.addEventListener('DOMContentLoaded', function() {
            document.body.insertAdjacentHTML('beforeend', htmlModal);
        });
    }
})();