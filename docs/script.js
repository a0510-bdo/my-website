document.addEventListener('DOMContentLoaded', () => {
    // عناصر DOM
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const submitBtn = document.getElementById('submitBtn');
    const resultContainer = document.getElementById('resultContainer');
    const resultText = document.getElementById('resultText');
    const restartBtn = document.getElementById('restartBtn');
    const progressBar = document.querySelector('.progress-bar');
    const stageCounter = document.getElementById('stageCounter');
    const questionContainer = document.getElementById('questionContainer');
    const difficultyLevel = document.getElementById('difficultyLevel');

    // الأسئلة المضمنة مباشرة في الكود
    const allQuestions = [
        {
            question: "أول نادي حقق دوري أبطال أوربا؟",
            options: ["بايرن ميونخ", "ريال مدريد", "برشلونة", "ليفربول"],
            correctAnswer: 1,
            difficulty: 1
        },
        {
            question: "من اللاعب الذي حقق الكرة الذهبية 2023؟",
            options: ["رودري", "ميسي", "هالاند", "ديبروين"],
            correctAnswer: 1,
            difficulty: 1
        },
        {
            question: "كم عدد ألقاب الجزائر في كأس افريقيا؟",
            options: ["7", "2", "4", "1"],
            correctAnswer: 1,
            difficulty: 1
        },
        {
            question: "من أول رياضي جزائري حقق ذهبية المونديال؟",
            options: ["حسيبة بولمرقة", "توفيق مخلوفي", "نور الدين مرسلي", "حسين سلطاني"],
            correctAnswer: 0,
            difficulty: 2
        },
        {
            question: "من أول لاعب عربي في التاريخ يحقق دوري أبطال أوروبا؟",
            options: ["رابح ماجر", "محمد صلاح", "رياض محرز", "أشرف حكيمي"],
            correctAnswer: 0,
            difficulty: 2
        },
        {
            question: "كم يبلغ طول ملعب كرة السلة؟",
            options: ["80 قدم", "48 قدم", "92 قدم", "60 قدم"],
            correctAnswer: 2,
            difficulty: 3
        },
        {
            question: "كم عدد قوانين لعبة كرة القدم؟",
            options: ["54", "17", "32", "27"],
            correctAnswer: 1,
            difficulty: 3
        },
        {
            question: "كم مرة فازت البرازيل بكأس العالم؟",
            options: ["8", "2", "5", "4"],
            correctAnswer: 2,
            difficulty: 1
        },
        {
            question: "كم لاعب في فريق كرة اليد؟",
            options: ["سبعة لاعبين", "ستة لاعبين", "خمسة لاعبين", "ثمانية لاعبين"],
            correctAnswer: 0,
            difficulty: 2
        },
        {
            question: "الرقم القياسي للوثب الطويل رجال بلغ",
            options: ["6 أذرع", "10 أذرع", "8.95 متر", "7.85 متر"],
            correctAnswer: 2,
            difficulty: 5
        },
        {
            question: "من اخر مدرب جزائري حقق كأس افريقيا للامم في كرة القدم؟",
            options: ["فلاديمير بيتكوفيتش", "عبد المجيد بوقرة", "جمال بلماضي", "رابح سعدان"],
            correctAnswer: 2,
            difficulty: 1
        },
        {
            question: "ما هو اسم الرياضي الاكثر تتويجا بالميداليات الاولمبية عبر التاريخ؟",
            options: ["نيكولاي أندريانوف", "مايكل فيليبس", "بافو نورمي", "بيرجيت فيشر"],
            correctAnswer: 1,
            difficulty: 5
        },
        {
            question: "ضد أي نادي فاز بايرن ميونخ في نهائي دوري أبطال أوروبا 2001؟",
            options: ["ليفربول", "فالنسيا", " ريال مدريد", " يوفنتوس"],
            correctAnswer: 1,
            difficulty: 5
        },
        {
            question: "كم مرة فاز ميشيل بلاتيني بالكرة الذهبية؟",
            options: ["0", "3", "4", "1"],
            correctAnswer: 1,
            difficulty: 4
        },
        {
            question: "ما هي أكبر نتيجة في تاريخ الكلاسيكو؟",
            options: ["ريال مدريد 2-5 برشلونة", "ريال مدريد 11-1 برشلونة", "ريال مدريد 2-6 برشلونة", "ريال مدريد 4-0 برشلونة"],
            correctAnswer: 1,
            difficulty: 3
        },
        {
            question: "من لاعب التنس الأكثر تتويجا بالألقاب الكبرى في التاريخ؟",
            options: ["كارلوس الكاراز", "نوفاك دجوكوفيتش", "رافاييل نادال", "يانيك سينر"],
            correctAnswer: 1,
            difficulty: 4
        },
       {
            question: "علم الفيسيولوجيا هو علم؟",
            options: ["النفس", "وظائف الأعضاء", "التغذية", "الحركة"],
            correctAnswer: 1,
            difficulty: 3
        },
       {
            question: "مكونات الجهاز الدوراني هي",
            options: ["الرئة , الأنف , الفم , الدم", "القلب , الدم , الأوعية الدموية , الجهاز الليمفي", "الدم , الرئة , المعدة , الكلية", "القلب , الرئة , الكبد , الدم"],
            correctAnswer: 1,
            difficulty: 2
        },
        {
            question: "التغذية الراجعة في الرياضة مصطلح يعبر عموما عن",
            options: ["الاختبارات", "عملية التقويم", "العمل الجماعي", "عملية التسخين"],
            correctAnswer: 1,
            difficulty: 3
        },
       {
            question: "مؤشر كتلة الجسم هو صيغة رياضية للتعرف على الوزن المثالي للشخص ب؟",
            options: ["قسمة الحجم على الكتلة", "قسمة الوزن على مربع الطول", "قسمة مربع الطول على الوزن", "قسمة الطول على الوزن"],
            correctAnswer: 1,
            difficulty: 3
        },
       {
            question: "عدد عظام الجسم عند الانسان البالغ هي؟",
            options: ["302", "206", "180", "250"],
            correctAnswer: 1,
            difficulty: 2
        },
        {
            question: "ما هي الصفات البدنية الأساسية؟",
            options: ["المرونة , السرعة , القوة , اللياقة", "القوة , السرعة , التحمل , التوازن , المرونة", "القدرة , السرعة , التحمل , التوازن", "القوة , السرعة , التحمل , اللياقة , الرشاقة"],
            correctAnswer: 1,
            difficulty: 3
        },
        {
            question: "متى أقيمت دورة الألعاب الأولمبية مكسيكو بالمكسيك؟",
            options: ["1992", "1968", "2004", "1972"],
            correctAnswer: 1,
            difficulty: 5
        },
        {
            question: "سنة 2006 أقيمت كأس العالم لكرة القدم في",
            options: ["ألمانيا", "فرنسا", "بلجيكا", "البرازيل"],
            correctAnswer: 0,
            difficulty: 3
        },
        {
            question: "C6H12O6 هو الرمز الكيميائي لـ",
            options: ["الجليكوجين", "المالتوز", "اللاكتوز", "الغلوكوز"],
            correctAnswer: 3,
            difficulty: 2
        },
        {
            question: "تحتاج تفاعلات حلقة كالفن الى ما يلي",
            options: ["G3P CO2 RuBP NADPH", "ATP CO2 G3P NADPH", "ATP CO2 RuBP G3P", "ATP CO2 RuBP NADPH"],
            correctAnswer: 3,
            difficulty: 5
        },
        {
            question: "يعتبر ميروسلاف كلوزه هداف كأس العالم لكرة القدم عبر التاريخ بـ",
            options: ["12 هدف", "24 هدف", "18 هدف", "16 هدف"],
            correctAnswer: 3,
            difficulty: 4
        },
       {
            question: "المنتخب الاكثر فوزا بمونديال كرة اليد  هو المنتخب ",
            options: ["الفرنسي", "الياباني", "الامريكي", "الاسباني"],
            correctAnswer: 0,
            difficulty: 5
        },
        {
            question: "لاعب كرة السلة الفائز بأكبر عدد من ألقاب NBA عبر التاريخ؟",
            options: ["ليبرون جايمس", "بيل راسل", "مايكل جوردان", "شاكيل اونيل"],
            correctAnswer: 1,
            difficulty: 5
        },
        {
            question: "من سجل الهدف الرابع على برشلونة في ريمونتادا ليفربول الشهيرة؟",
            options: ["ماني", "اوريجي", "صلاح", "ارنولد"],
            correctAnswer: 1,
            difficulty: 1
        },
        {
            question: "من اللاعب الحائز على الكرة الذهبية عام 1999؟",
            options: ["مارادونا", "ريفالدو", "زيدان", "فييرا"],
            correctAnswer: 1,
            difficulty: 4
        },
        {
            question: "قاطعت 28 دولة افريقية اولمبياد مونتريال 1976 بسبب",
            options: ["استبعاد السنغال", "عدم استبعاد نيوزيلندا", "سحب التنظيم من جنوب افريقيا", "عنصرية الكنديين"],
            correctAnswer: 1,
            difficulty: 5
        },
        {
            question: "من هو هداف كرة القدم التاريخي؟",
            options: ["نيمار", "CR7", "مارادونا", "بيليه"],
            correctAnswer: 1,
            difficulty: 1
        },
        {
            question: "من هو اللاعب الافريقي الاكثر تتويجا بلقب الدوري الانجليزي الممتاز؟",
            options: ["يايا توريه", "محمد صلاح", "ديدييه دروغبا", "رياض محرز"],
            correctAnswer: 3,
            difficulty: 3
        },
        {
            question: "من الفائزة في بطولة ويمبلدون 2025 فردي سيدات؟",
            options: ["ماريا شاباروفا", "سيرينا ويليامز", "أنس جابر", "ايغا شيفيونتيك"],
            correctAnswer: 3,
            difficulty: 5
        },
         {
            question: "سجل زلاتان ابراهيموفيتش مقصيته الشهيرة ضد",
            options: ["نادي يوفنتوس", "منتخب انجلترا", "نادي برشلونة", "منتخب النرويج"],
            correctAnswer: 1,
            difficulty: 5
        },
        {
            question: "ما هو الرقم القياسي في رياضة الوثب العالي رجال؟",
            options: ["2.25 متر", "2.85 متر", "3.25 متر", "2.45 متر"],
            correctAnswer: 3,
            difficulty: 5
        },
        {
            question: "ما هو البعد بين نقطة الجزاء و خط المرمى في كرة القدم؟",
            options: ["16 متر", "18 متر", "12 متر", "11 متر"],
            correctAnswer: 3,
            difficulty: 5
        },
        {
            question: "أي دولة هي الأكثر تحقيقا للميداليات في الأولمبياد؟",
            options: ["المملكة المتحدة", "الولايات المتحدة", "روسيا", "فرنسا"],
            correctAnswer: 1,
            difficulty: 5
        },    
    ];

    
    // متغيرات اللعبة
    let currentStage = 0;
    let selectedOption = null;
    let gameQuestions = [];
    let score = 0;
    const TOTAL_STAGES = 10;

    // تهيئة اللعبة
    function initializeGame() {
        if (allQuestions.length < TOTAL_STAGES) {
            questionText.textContent = 'يحتاج 10 أسئلة على الأقل لبدء اللعبة';
            submitBtn.disabled = true;
            return;
        }
        
        gameQuestions = selectRandomQuestions();
        currentStage = 0;
        score = 0;
        loadStage(currentStage);
    }

    // اختيار أسئلة عشوائية
    function selectRandomQuestions() {
        const questionsByDifficulty = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };

        // تصنيف الأسئلة حسب الصعوبة
        allQuestions.forEach(question => {
            if (question.difficulty >= 1 && question.difficulty <= 5) {
                questionsByDifficulty[question.difficulty].push(question);
            }
        });

        const selectedQuestions = [];
        
        // اختيار سؤالين من كل مستوى
        for (let difficulty = 1; difficulty <= 5; difficulty++) {
            const questions = shuffleArray([...questionsByDifficulty[difficulty]]);
            selectedQuestions.push(...questions.slice(0, 2));
        }
        
        // إذا لم يكتمل العدد، أضف أسئلة عشوائية
        while (selectedQuestions.length < TOTAL_STAGES) {
            const remainingQuestions = allQuestions.filter(q => !selectedQuestions.includes(q));
            if (remainingQuestions.length === 0) break;
            selectedQuestions.push(...shuffleArray(remainingQuestions).slice(0, TOTAL_STAGES - selectedQuestions.length));
        }
        
        return shuffleArray(selectedQuestions);
    }

    // خلط المصفوفة
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // تحميل السؤال
    function loadStage(stageIndex) {
        if (stageIndex >= TOTAL_STAGES || stageIndex >= gameQuestions.length) {
            showResult();
            return;
        }

        const question = gameQuestions[stageIndex];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        selectedOption = null;

        // عرض مستوى الصعوبة
        updateDifficultyIndicator(question.difficulty);

        // عرض الخيارات
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(optionElement, index));
            optionsContainer.appendChild(optionElement);
        });

        submitBtn.disabled = true;
        updateProgress(stageIndex);
    }

    // اختيار إجابة
    function selectOption(optionElement, index) {
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        optionElement.classList.add('selected');
        selectedOption = index;
        submitBtn.disabled = false;
    }

    // تأكيد الإجابة
    submitBtn.addEventListener('click', () => {
        if (selectedOption === null) return;

        const currentQuestion = gameQuestions[currentStage];
        const options = document.querySelectorAll('.option');
        const correctIndex = currentQuestion.correctAnswer;

        // تعطيل الخيارات
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });

        // تمييز الإجابات
        options.forEach((option, index) => {
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedOption) {
                option.classList.add('wrong');
            }
        });

        // حساب النقاط
        if (selectedOption === correctIndex) {
            score++;
        }

        // الانتقال للسؤال التالي
        submitBtn.disabled = true;
        setTimeout(() => {
            currentStage++;
            loadStage(currentStage);
        }, 1500);
    });

    // تحديث مؤشر الصعوبة
    function updateDifficultyIndicator(difficulty) {
        difficultyLevel.textContent = getDifficultyName(difficulty);
        difficultyLevel.className = `difficulty-${getDifficultyClass(difficulty)}`;
    }

    function getDifficultyName(difficulty) {
        const levels = {
            1: "سهلة",
            2: "متوسطة", 
            3: "صعبة",
            4: "صعبة جدًا",
            5: "خبراء"
        };
        return levels[difficulty] || "غير معروف";
    }

    function getDifficultyClass(difficulty) {
        if (difficulty <= 2) return "easy";
        if (difficulty <= 4) return "medium";
        return "hard";
    }

    // تحديث التقدم
    function updateProgress(stageIndex) {
        const progress = ((stageIndex + 1) / TOTAL_STAGES) * 100;
        progressBar.style.width = `${progress}%`;
        stageCounter.textContent = `${stageIndex + 1}/${TOTAL_STAGES}`;
    }

    // عرض النتيجة
    function showResult() {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        
        const percentage = Math.round((score / TOTAL_STAGES) * 100);
        let message;
        
        if (percentage >= 80) message = `ممتاز! ${score}/${TOTAL_STAGES}`;
        else if (percentage >= 60) message = `جيد جدًا! ${score}/${TOTAL_STAGES}`;
        else if (percentage >= 40) message = `ليس سيئًا! ${score}/${TOTAL_STAGES}`;
        else message = `حاول مرة أخرى! ${score}/${TOTAL_STAGES}`;
        
        resultText.textContent = message;
    }

    // إعادة التشغيل
    restartBtn.addEventListener('click', () => {
        questionContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        initializeGame();
    });

    // بدء اللعبة
    initializeGame();
});