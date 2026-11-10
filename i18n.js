/* ===================================================================
   رونيلي — dil sistemi (Türkçe varsayılan · English · العربية)
   Metinler data-i18n / data-i18n-attr öznitelikleriyle eşlenir.
   =================================================================== */
(function () {
  "use strict";

  const DICT = {
    tr: {
      "meta.title": "RONELİ — Bir Takımın Anatomisi",
      "meta.description": "RONELİ ısmarlama terzilik. Bir adamın ölçüsünden çalışan manşetin son çeyrek inçine kadar, zanaatın sekiz hareketi.",
      "meta.ogDescription": "Bir adamın ölçüsünden çalışan manşetin son çeyrek inçine kadar, zanaatın sekiz hareketi.",
      "skip": "İçeriğe geç",
      "loader.label": "Atölye hazırlanıyor",
      "brand.aria": "RONELİ ana sayfa",
      "nav.aria": "Ana menü",
      "nav.atelier": "Atölye",
      "nav.collection": "Koleksiyon",
      "nav.book": "Prova Randevusu",
      "menu.open": "Menüyü aç",
      "menu.close": "Menüyü kapat",
      "scene.aria": "Bir RONELİ takımının yapımı",
      "canvas.aria": "Bir takımın yapım aşamalarını gösteren animasyon",
      "hero.eyebrow": "RONELİ · 1990'dan Beri Ölçüye Özel",
      "hero.title": "Bir Takımın<br><em>Anatomisi</em>",
      "hero.scroll": "Kaydır",
      "p1.kicker": "Temel", "p1.title": "Saf Pamuktan<br>Bir Gömlek", "p1.spec": "<i>Kumaş</i> Mısır İki Katlı Poplin · 120s",
      "p2.kicker": "Yelek", "p2.title": "Yapı,<br>Sıkıca Tutulmuş", "p2.body": "Yelek, vücudun çizgisini içe doğru çeker. Beş düğme, ipek astarlı arka bölüm ve kravatın düşüp asla bükülmemesi için çapraz kesilmiş bağ.", "p2.spec": "<i>İpek</i> Dut İpeği, Como'da Dokunmuş",
      "p3.kicker": "Gizli Katman", "p3.title": "Görünmez<br>İskelet", "p3.body": "Ceketin içinde gizli duran iç yapı, omuzların ve göğsün doğal durmasını sağlar. Her parça elle dikilir; makine yalnızca kenarları tamamlar.", "p3.spec": "<i>Yapı</i> Elle Şekillendirilmiş İç Yapı",
      "p4.kicker": "Kesim", "p4.title": "Eksiksiz<br>Siluet", "p4.spec": "<i>Kumaş</i> Super 150's Merino · 240g",
      "p5.kicker": "Adam", "p5.title": "Giyilmek<br>İçin Yapılmış", "p5.spec": "<i>Kalıp</i> Kişiye Özel Ölçüyle Üretilmiş",
      "p6.kicker": "Geçit Töreni", "p6.title": "Bir Renk<br>Dili", "p6.spec": "<i>Palet</i> Dört İmza Tonu",
      "p7.kicker": "Detay", "p7.title": "Son<br>Çeyrek İnç", "p7.body": "Çalışan cerrah manşetleri. Her biri elle düğmelenmiş boynuz düğmeler. Yalnızca dokunarak fark edilebilecek dikişler.", "p7.spec": "<i>Bitiş</i> Çalışan Cerrah Manşetleri",
      "atelier.eyebrow": "Atölye",
      "atelier.title": "Her dikiş bir<br><em>sabır işi.</em>",
      "atelier.lead": "Roneli'de her takım tek bir kişi için, tek bir ölçü alınarak kesilir. Kesim, dikiş ve son kontrol aynı eller tarafından yapılır.",
      "atelier.stat1": "Yıllık zanaat", "atelier.stat2": "Dikişte elde işçilik", "atelier.stat3": "Provada son ayar",
      "collection.eyebrow": "Koleksiyon",
      "collection.title": "Seçilmiş<br><em>parçalar.</em>",
      "card1.title": "Takım", "card1.body": "Tek parça kesim, eksiksiz iç yapı. Her ölçüye göre yeniden çizilir.",
      "card2.title": "Gömlek", "card2.body": "Mısır pamuğu poplin, işlemeli manşet ve elle takılmış düğmeler.",
      "card3.title": "Aksesuar", "card3.body": "İpek kravat, boynuz düğme ve deri kemer. Takımın son dokunuşu.",
      "outro.eyebrow": "Moda Evi",
      "outro.title": "Az Sayıdakiler<br>için terzilik.",
      "outro.body": "Her RONELİ takımı yalnızca bir adam için kesilir. Bir sohbet, bir ölçü ve yalnızca sizin için seçilmiş tek bir kumaş topu ile başlayın.",
      "form.name": "Ad Soyad", "form.email": "E-posta", "form.phone": "Telefon", "form.date": "Tercih edilen tarih", "form.submit": "Özel Prova Randevusu Al",
      "footer.tagline": "Ölçüye özel terzilik.",
      "footer.cta": "Prova Randevusu",
      "footer.col1": "Keşfet", "footer.col2": "Koleksiyon", "footer.col3": "Ziyaret", "footer.col4": "İletişim",
      "footer.process": "Dikim süreci", "footer.suit": "Takım", "footer.shirt": "Gömlek", "footer.accessories": "Aksesuar",
      "footer.location": "Mayfair · Londra", "footer.byAppt": "Randevu ile",
      "footer.mail": "E-posta", "footer.gmail": "Gmail'de aç", "footer.whatsapp": "WhatsApp",
      "footer.legal": "© {year} RONELİ Bespoke — Elde yapılmış, bir ömür için.",
      "footer.langLabel": "Dil",
      "msg.sent": "Talebiniz alındı. En kısa sürede size dönüş yapacağız.", "msg.error": "Gönderilemedi, lütfen tekrar deneyin.", "msg.required": "Lütfen tüm alanları doldurun: ad soyad, e-posta, telefon ve tercih edilen tarih.",
      "msg.email": "Lütfen geçerli bir e-posta adresi girin.", "msg.date": "Geçmiş bir tarih seçemezsiniz. Bugün veya sonrası bir gün seçin.",
      "msg.notConnected": "Form henüz bir sunucuya bağlı değil; talebiniz kaydedilmedi."
    },

    en: {
      "meta.title": "RONELİ — The Anatomy of a Suit",
      "meta.description": "RONELİ bespoke tailoring. Eight movements of craft, from the measure of a man to the last quarter-inch of a working cuff.",
      "meta.ogDescription": "From a man's measure to the last quarter-inch of a working cuff.",
      "skip": "Skip to content",
      "loader.label": "Preparing the atelier",
      "brand.aria": "RONELİ home",
      "nav.aria": "Main menu",
      "nav.atelier": "Atelier",
      "nav.collection": "Collection",
      "nav.book": "Book a Fitting",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "scene.aria": "The making of a RONELİ suit",
      "canvas.aria": "Animation showing the stages of making a suit",
      "hero.eyebrow": "RONELİ · Made to Measure Since 1990",
      "hero.title": "The Anatomy<br><em>of a Suit</em>",
      "hero.scroll": "Scroll",
      "p1.kicker": "The Foundation", "p1.title": "A Shirt of<br>Pure Cotton", "p1.spec": "<i>Cloth</i> Egyptian Two-Ply Poplin · 120s",
      "p2.kicker": "The Waistcoat", "p2.title": "Structure,<br>Held Close", "p2.body": "The waistcoat draws the line of the body inward. Five buttons, a silk-backed rear, and a tie cut on the bias so the knot falls true and never twists.", "p2.spec": "<i>Silk</i> Mulberry, Woven in Como",
      "p3.kicker": "The Structure", "p3.title": "The Unseen<br>Skeleton", "p3.body": "A hidden inner structure inside the jacket lets the shoulders and chest sit naturally. Every piece is stitched by hand; the machine only finishes the edges.", "p3.spec": "<i>Construction</i> Hand-Shaped Inner Structure",
      "p4.kicker": "The Cut", "p4.title": "The Complete<br>Silhouette", "p4.spec": "<i>Cloth</i> Super 150's Merino · 240g",
      "p5.kicker": "The Man", "p5.title": "Made<br>to Be Worn", "p5.spec": "<i>Fit</i> Individually Made to Measure",
      "p6.kicker": "The Procession", "p6.title": "A Language<br>of Colour", "p6.spec": "<i>Palette</i> Four Signature Tones",
      "p7.kicker": "The Detail", "p7.title": "The Last<br>Quarter-Inch", "p7.body": "Working surgeon's cuffs. Horn buttons, each hand-finished. Stitching you will only ever find by touch.", "p7.spec": "<i>Finish</i> Working Surgeon's Cuffs",
      "atelier.eyebrow": "Atelier",
      "atelier.title": "Every stitch is<br><em>a labour of patience.</em>",
      "atelier.lead": "At RONELİ every suit is cut for one person, from a single set of measurements. Cutting, stitching and the final check are done by the same hands.",
      "atelier.stat1": "Years of craft", "atelier.stat2": "Hand-worked stitches", "atelier.stat3": "Fittings to the final fit",
      "collection.eyebrow": "Collection",
      "collection.title": "Selected<br><em>pieces.</em>",
      "card1.title": "Suit", "card1.body": "One-piece cut, full internal structure. Redrawn for every measure.",
      "card2.title": "Shirt", "card2.body": "Egyptian cotton poplin, embroidered cuffs and hand-sewn buttons.",
      "card3.title": "Accessories", "card3.body": "Silk tie, horn buttons and a leather belt. The final touch to the suit.",
      "outro.eyebrow": "The House of Fashion",
      "outro.title": "Tailoring<br>for the few.",
      "outro.body": "Every RONELİ suit is cut for one man only. Begin with a conversation, a measurement, and a single bolt of cloth chosen for you alone.",
      "form.name": "Full name", "form.email": "Email", "form.phone": "Phone", "form.date": "Preferred date", "form.submit": "Book a Private Fitting",
      "footer.tagline": "Bespoke tailoring.",
      "footer.cta": "Book a Fitting",
      "footer.col1": "Explore", "footer.col2": "Collection", "footer.col3": "Visit", "footer.col4": "Contact",
      "footer.process": "The making", "footer.suit": "Suit", "footer.shirt": "Shirt", "footer.accessories": "Accessories",
      "footer.location": "Mayfair · London", "footer.byAppt": "By appointment",
      "footer.mail": "Email", "footer.gmail": "Open in Gmail", "footer.whatsapp": "WhatsApp",
      "footer.legal": "© {year} RONELİ Bespoke — Made by hand, for a lifetime.",
      "footer.langLabel": "Language",
      "msg.sent": "Thank you. Your request has been received.", "msg.error": "Could not send, please try again.", "msg.required": "Please fill in all fields: full name, email, phone and preferred date.",
      "msg.email": "Please enter a valid email address.", "msg.date": "Past dates cannot be chosen. Please pick today or a later date.",
      "msg.notConnected": "This form is not connected to a server yet; your request was not saved."
    },

    ar: {
      "meta.title": "رونيلي — تشريح بدلة",
      "meta.description": "خياطة رونيلي حسب الطلب. ثماني حركات من الحرفة، من قياس الرجل إلى آخر ربع بوصة في الأكمام.",
      "meta.ogDescription": "من قياس الرجل إلى آخر ربع بوصة في الأكمام.",
      "skip": "انتقل إلى المحتوى",
      "loader.label": "جارٍ تجهيز الأتيلييه",
      "brand.aria": "الصفحة الرئيسية لـ رونيلي",
      "nav.aria": "القائمة الرئيسية",
      "nav.atelier": "الأتيلييه",
      "nav.collection": "المجموعة",
      "nav.book": "احجز موعد قياس",
      "menu.open": "فتح القائمة",
      "menu.close": "إغلاق القائمة",
      "scene.aria": "صنع بدلة رونيلي",
      "canvas.aria": "رسوم متحركة تعرض مراحل صنع البدلة",
      "hero.eyebrow": "رونيلي · تفصيل حسب المقاس منذ 1990",
      "hero.title": "تشريح<br><em>بدلة</em>",
      "hero.scroll": "مرّر",
      "p1.kicker": "الأساس", "p1.title": "قميص من<br>القطن الخالص", "p1.spec": "<i>القماش</i> بوبلين مصري طبقتين · 120s",
      "p2.kicker": "الصدرية", "p2.title": "بنية<br>محكمة الشد", "p2.body": "تشدّ الصدرية خط الجسم إلى الداخل. خمسة أزرار، وظهر مبطّن بالحرير، وربطة عنق مقصوصة على الانحياز كي تستقر العقدة دون أن تلتوي أبدًا.", "p2.spec": "<i>الحرير</i> حرير التوت، منسوج في كومو",
      "p3.kicker": "البنية", "p3.title": "الهيكل<br>الخفي", "p3.body": "بنية داخلية مخفية داخل السترة تجعل الكتفين والصدر يستقران بشكل طبيعي. كل قطعة تُخاط يدويًا، والآلة تُنهي الحواف فقط.", "p3.spec": "<i>البناء</i> بنية داخلية مشكّلة يدويًا",
      "p4.kicker": "القصّ", "p4.title": "الصورة<br>الكاملة", "p4.spec": "<i>القماش</i> صوف ميرينو Super 150's · 240g",
      "p5.kicker": "الرجل", "p5.title": "مصنوع<br>ليُرتدى", "p5.spec": "<i>المقاس</i> مصنوع حسب المقاس الفردي",
      "p6.kicker": "المسيرة", "p6.title": "لغة<br>الألوان", "p6.spec": "<i>الألوان</i> أربعة درجات مميزة",
      "p7.kicker": "التفاصيل", "p7.title": "آخر<br>ربع بوصة", "p7.body": "أكمام جراحية تعمل فعليًا. أزرار من القرن، كل واحد منها مُنجز يدويًا. خياطة لا تُكتشف إلا باللمس.", "p7.spec": "<i>التشطيب</i> أكمام جراحية تعمل فعليًا",
      "atelier.eyebrow": "الأتيلييه",
      "atelier.title": "كل غرزة<br><em>عمل بالصبر.</em>",
      "atelier.lead": "في رونيلي تُقصّ كل بدلة لشخص واحد، من مجموعة واحدة من القياسات. القصّ والخياطة والفحص النهائي تُنجزها الأيدي نفسها.",
      "atelier.stat1": "سنوات من الحرفة", "atelier.stat2": "غرزة يدوية", "atelier.stat3": "قياسات حتى المقاس النهائي",
      "collection.eyebrow": "المجموعة",
      "collection.title": "قطع<br><em>مختارة.</em>",
      "card1.title": "بدلة", "card1.body": "قصّ متكامل وبناء داخلي كامل. يُرسم من جديد لكل مقاس.",
      "card2.title": "قميص", "card2.body": "بوبلين من القطن المصري، وأكمام مطرّزة وأزرار مثبتة يدويًا.",
      "card3.title": "إكسسوارات", "card3.body": "ربطة عنق حريرية، وأزرار من القرن، وحزام جلدي. اللمسة الأخيرة للبدلة.",
      "outro.eyebrow": "بيت الأزياء",
      "outro.title": "خياطة<br>للقلة.",
      "outro.body": "كل بدلة من رونيلي تُقصّ لرجل واحد فقط. ابدأ بحديث، وقياس، ورول قماش واحد يُختار لك وحدك.",
      "form.name": "الاسم الكامل", "form.email": "البريد الإلكتروني", "form.phone": "الهاتف", "form.date": "التاريخ المفضل", "form.submit": "احجز موعد قياس خاص",
      "footer.tagline": "خياطة حسب الطلب.",
      "footer.cta": "احجز موعد قياس",
      "footer.col1": "استكشف", "footer.col2": "المجموعة", "footer.col3": "زيارة", "footer.col4": "اتصل بنا",
      "footer.process": "مراحل الصنع", "footer.suit": "بدلة", "footer.shirt": "قميص", "footer.accessories": "إكسسوارات",
      "footer.location": "Mayfair · لندن", "footer.byAppt": "بموعد مسبق",
      "footer.mail": "البريد الإلكتروني", "footer.gmail": "افتح في Gmail", "footer.whatsapp": "WhatsApp",
      "footer.legal": "© {year} رونيلي Bespoke — مصنوع يدويًا، لعمر كامل.",
      "footer.langLabel": "اللغة",
      "msg.sent": "تم استلام طلبك. سنتواصل معك قريبًا.", "msg.error": "تعذر الإرسال، يرجى المحاولة مرة أخرى.", "msg.required": "يرجى ملء جميع الحقول: الاسم الكامل والبريد الإلكتروني والهاتف والتاريخ المفضل.",
      "msg.email": "يرجى إدخال بريد إلكتروني صحيح.", "msg.date": "لا يمكن اختيار تاريخ سابق. يرجى اختيار اليوم أو تاريخ لاحق.",
      "msg.notConnected": "هذا النموذج غير متصل بخادم بعد؛ لم يتم حفظ طلبك."
    }
  };

  /* v3 ek metinler: SSS, KVKK onayı, saat/not alanı, WhatsApp butonu, harita */
  const EXTRA = {
    tr: {
      "nav.faq": "SSS",
      "faq.eyebrow": "Sıkça Sorulan Sorular",
      "faq.title": "Merak edilenler<br><em>ve cevapları.</em>",
      "faq.q1": "Bir takım için kaç prova gerekir?",
      "faq.a1": "Çoğu takım üç provada tamamlanır: ilk ölçüden sonra kalıp provası, ara prova ve son prova. Her provada ayar, yalnızca sizin duruşunuza göre yapılır.",
      "faq.q2": "Teslim süresi ne kadar?",
      "faq.a2": "Süre; seçilen kumaşa, işçiliğe ve provaların takvimine göre değişir. Tahmini tarih, randevuda kesin olarak paylaşılır.",
      "faq.q3": "Fiyatlar nasıl belirleniyor?",
      "faq.a3": "Her parça kişiye özel hazırlandığı için fiyat; kumaş, yapı ve detaylara göre teklif edilir. Net bir fiyat, ilk görüşmede yazılı olarak paylaşılır.",
      "faq.q4": "İlk randevuda neler olur?",
      "faq.a4": "Bir sohbetle başlarız: ne için giyeceğinizi, tarzınızı ve günlük yaşamınızı konuşuruz. Ardından ölçünüz alınır ve kumaş seçimine geçilir.",
      "faq.q5": "Şehir dışındaysam ya da yurt dışındaysam sipariş verebilir miyim?",
      "faq.a5": "Evet. Ön görüşmeyi görüntülü yapabilir, ölçünüzü ise size gönderilecek yönergelerle alabilirsiniz.",
      "form.time": "Tercih edilen saat",
      "form.time.ph": "Saat seçin",
      "form.time.am": "Sabah · 10:00 – 12:00",
      "form.time.noon": "Öğle · 12:00 – 15:00",
      "form.time.pm": "Öğleden sonra · 15:00 – 18:00",
      "form.note": "Notunuz (isteğe bağlı)",
      "form.notePh": "Ölçü, etkinlik tarihi veya özel isteğiniz",
      "form.consent": 'Kişisel verilerimin <a href="gizlilik.html" target="_blank" rel="noopener">aydınlatma metni</a> kapsamında işlenmesini kabul ediyorum.',
      "msg.consent": "Devam etmek için aydınlatma metnini onaylayın.",
      "msg.required": "Lütfen ad soyad, e-posta, telefon, tarih ve saat alanlarını doldurun.",
      "wa.aria": "WhatsApp ile yazın",
      "wa.label": "WhatsApp",
      "map.aria": "RONELİ Mayfair konumu",
      "footer.privacy": "Gizlilik · KVKK"
    },
    en: {
      "nav.faq": "FAQ",
      "faq.eyebrow": "Questions",
      "faq.title": "Common questions<br><em>and answers.</em>",
      "faq.q1": "How many fittings does a suit need?",
      "faq.a1": "Most suits are completed in three fittings: the first measure and pattern fitting, an intermediate fitting, and a final fitting. Each fitting adjusts the cut to how you stand and move.",
      "faq.q2": "How long does it take?",
      "faq.a2": "Timing depends on the cloth, the level of handwork and the fitting schedule. An estimated date is confirmed at your appointment.",
      "faq.q3": "How are prices set?",
      "faq.a3": "Every piece is made for one person, so the price is quoted according to cloth, construction and detail. A clear price is shared in writing at the first consultation.",
      "faq.q4": "What happens at the first appointment?",
      "faq.a4": "We begin with a conversation about what you will wear it for, your style and your daily life. Then your measurements are taken and we move on to choosing the cloth.",
      "faq.q5": "Can I order if I live outside London?",
      "faq.a5": "Yes. Consultations can be held by video call, and you can take your own measurements by following the guide we send you.",
      "form.time": "Preferred time",
      "form.time.ph": "Choose a time",
      "form.time.am": "Morning · 10:00 – 12:00",
      "form.time.noon": "Midday · 12:00 – 15:00",
      "form.time.pm": "Afternoon · 15:00 – 18:00",
      "form.note": "Your note (optional)",
      "form.notePh": "Measurements, event date or any special request",
      "form.consent": 'I agree to the processing of my personal data as described in the <a href="gizlilik.html" target="_blank" rel="noopener">privacy notice</a>.',
      "msg.consent": "Please accept the privacy notice to continue.",
      "msg.required": "Please fill in full name, email, phone, date and time.",
      "wa.aria": "Message us on WhatsApp",
      "wa.label": "WhatsApp",
      "map.aria": "RONELİ location in Mayfair",
      "footer.privacy": "Privacy · KVKK"
    },
    ar: {
      "nav.faq": "الأسئلة",
      "faq.eyebrow": "الأسئلة الشائعة",
      "faq.title": "أسئلة<br><em>وإجابات.</em>",
      "faq.q1": "كم عدد القياسات التي تحتاجها البدلة؟",
      "faq.a1": "تكتمل معظم البدلات في ثلاث جلسات قياس: القياس الأول وتجربة النموذج، ثم قياس وسيط، ثم القياس النهائي. كل جلسة تضبط القصّ حسب وقفتك وحركتك.",
      "faq.q2": "كم تستغرق المدة؟",
      "faq.a2": "تعتمد المدة على القماش ومستوى العمل اليدوي وجدول القياسات. يُحدَّد موعد تقريبي خلال موعدك.",
      "faq.q3": "كيف تُحدَّد الأسعار؟",
      "faq.a3": "لأن كل قطعة تُصنع لشخص واحد، يُقدَّم السعر حسب القماش والبناء والتفاصيل. يُشارك السعر الواضح كتابيًا في أول استشارة.",
      "faq.q4": "ماذا يحدث في الموعد الأول؟",
      "faq.a4": "نبدأ بحديث عن المناسبة التي ستلبس فيها البدلة وأسلوبك وطبيعة يومك. ثم تُؤخذ قياساتك وننتقل إلى اختيار القماش.",
      "faq.q5": "هل يمكنني الطلب إذا كنت خارج لندن؟",
      "faq.a5": "نعم. يمكن إجراء الاستشارة عبر مكالمة فيديو، ويمكنك أخذ قياساتك بنفسك باتباع الإرشادات التي نرسلها إليك.",
      "form.time": "الوقت المفضل",
      "form.time.ph": "اختر الوقت",
      "form.time.am": "صباحًا · 10:00 – 12:00",
      "form.time.noon": "ظهرًا · 12:00 – 15:00",
      "form.time.pm": "بعد الظهر · 15:00 – 18:00",
      "form.note": "ملاحظتك (اختياري)",
      "form.notePh": "المقاسات أو تاريخ المناسبة أو أي طلب خاص",
      "form.consent": 'أوافق على معالجة بياناتي الشخصية وفق <a href="gizlilik.html" target="_blank" rel="noopener">إشعار الخصوصية</a>.',
      "msg.consent": "يرجى قبول إشعار الخصوصية للمتابعة.",
      "msg.required": "يرجى ملء الاسم الكامل والبريد الإلكتروني والهاتف والتاريخ والوقت.",
      "wa.aria": "راسلنا عبر واتساب",
      "wa.label": "واتساب",
      "map.aria": "موقع رونيلي في Mayfair",
      "footer.privacy": "الخصوصية · KVKK"
    }
  };
  Object.keys(EXTRA).forEach((l) => Object.assign(DICT[l], EXTRA[l]));

  const STORAGE_KEY = "octaboot-lang";
  let current = "tr";

  function t(key) {
    const d = DICT[current] || DICT.tr;
    return d[key] != null ? d[key] : (DICT.tr[key] || key);
  }
  window.octabootT = t;

  function applyLang(lang) {
    if (!DICT[lang]) lang = "tr";
    current = lang;
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      // {year} yerine yıl; yıl, alt bilgideki #year öğesi olarak yazılır (app.js bunu kullanır)
      el.innerHTML = t(key).replace("{year}", '<span id="year">' + new Date().getFullYear() + "</span>");
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const idx = pair.indexOf(":");
        if (idx < 0) return;
        el.setAttribute(pair.slice(0, idx).trim(), t(pair.slice(idx + 1).trim()));
      });
    });

    document.title = t("meta.title");
    const set = (sel, val) => { const m = document.querySelector(sel); if (m) m.setAttribute("content", val); };
    set('meta[name="description"]', t("meta.description"));
    set('meta[property="og:title"]', t("meta.title"));
    set('meta[property="og:description"]', t("meta.ogDescription"));

    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    window.dispatchEvent(new CustomEvent("octaboot:langchange", { detail: lang }));
  }

  let initial = "tr";
  try { initial = localStorage.getItem(STORAGE_KEY) || "tr"; } catch (e) {}

  const select = document.getElementById("langSelect");
  if (select) select.addEventListener("change", () => applyLang(select.value));

  applyLang(initial);
})();
