const questions = [
    {
        "id": 1,
        "text": "Which school of Indian Philosophy accepts only 'Pratyaksha' as a valid Pramana?",
        "options": ["Buddhism", "Carvaka", "Nyaya", "Sankhya"],
        "answer": 1
    },
    {
        "id": 2,
        "text": "The 'Vyapti' in Nyaya Syllogism is defined as:",
        "options": [
            "Relation of cause and effect",
            "Invariable concomitance between Hetu and Sadhya",
            "Relation of part and whole",
            "The observation of the hill"
        ],
        "answer": 1
    },
    {
        "id": 3,
        "text": "Assertion (A): Advaita Vedanta considers the world as Mithya. Reason (R): Because the world is eternally non-existent.",
        "options": [
            "Both (A) and (R) are true and (R) is correct explanation",
            "Both (A) and (R) are true but (R) is not the correct explanation",
            "(A) is true, but (R) is false",
            "(A) is false, but (R) is true"
        ],
        "answer": 2
    },
    {
        "id": 4,
        "text": "The concept of 'Alayavijnana' is associated with which school of Buddhism?",
        "options": ["Madhyamika", "Yogacara", "Sautrantika", "Vaibhasika"],
        "answer": 1
    },
    {
        "id": 5,
        "text": "In Samkhya, the equilibrium of Sattva, Rajas, and Tamas is called:",
        "options": ["Purusha", "Mahat", "Prakriti", "Ahankara"],
        "answer": 2
    },
    {
        "id": 6,
        "text": "The Vaisheshika category 'Abhava' was added by later commentators. How many types of Abhava are there?",
        "options": ["Two", "Three", "Four", "Seven"],
        "answer": 2
    },
    {
        "id": 7,
        "text": "Which school upholds 'Svatah-pramanya-vada' (Self-validity of knowledge)?",
        "options": ["Nyaya", "Mimamsa", "Buddhism", "Jainism"],
        "answer": 1
    },
    {
        "id": 8,
        "text": "The state of 'Kaivalya' in Yoga is achieved through:",
        "options": ["Bhakti", "Viveka-khyati", "Karma", "Yajna"],
        "answer": 1
    },
    {
        "id": 9,
        "text": "Match List I with List II: (A) Vivartavada (B) Parinamavada (C) Asatkaryavada (D) Pratityasamutpada | (1) Samkhya (2) Advaita (3) Buddhism (4) Nyaya",
        "options": [
            "A-2, B-1, C-4, D-3",
            "A-1, B-2, C-3, D-4",
            "A-4, B-3, C-2, D-1",
            "A-2, B-4, C-1, D-3"
        ],
        "answer": 0
    },
    {
        "id": 10,
        "text": "According to Ramanuja, the relationship between Jiva and Brahman is:",
        "options": ["Abheda", "Bheda", "Aprthaksiddhi", "Mithya"],
        "answer": 2
    },
    {
        "id": 11,
        "text": "Which of the following is NOT one of the five Skandhas (Aggregates) in Buddhism?",
        "options": ["Rupa", "Vedana", "Jiva", "Sanna"],
        "answer": 2
    },
    {
        "id": 12,
        "text": "The Madhyamika school of Nagarjuna describes Reality as 'Sunyata', which technically means:",
        "options": ["Absolute Nothingness", "Dependent Origination (Relativity)", "A physical void", "A mental illusion"],
        "answer": 1
    },
    {
        "id": 13,
        "text": "In Jainism, the state where Karma is partially destroyed and partially suppressed is called:",
        "options": ["Aupasamika", "Ksayika", "Ksayopasamika", "Parinamika"],
        "answer": 2
    },
    {
        "id": 14,
        "text": "Which school accepts the authority of the Vedas but is famously known as 'Atheistic' because it denies a creator God?",
        "options": ["Nyaya", "Purva Mimamsa", "Yoga", "Visishtadvaita"],
        "answer": 1
    },
    {
        "id": 15,
        "text": "In Buddhism, 'Samyak Dristi' (Right View) consists specifically of the knowledge of:",
        "options": ["The Soul", "The Four Noble Truths", "The Vedas", "Social duties"],
        "answer": 1
    },
    {
        "id": 16,
        "text": "The Buddhist theory of 'Kshanabhangavada' refers to:",
        "options": ["The eternity of the soul", "The doctrine of universal momentariness", "The permanent nature of matter", "The reality of space"],
        "answer": 1
    },
    {
        "id": 17,
        "text": "In Jainism, 'Astikaya' refers to substances that have extension in space. Which of the following is an 'Anastikaya' (non-extended) substance?",
        "options": ["Jiva", "Pudgala", "Kala (Time)", "Akasa"],
        "answer": 2
    },
    {
        "id": 18,
        "text": "Which Buddhist school is known as 'Representationists' who believe external objects are inferred (Bahyarthanumeyavada)?",
        "options": ["Vaibhasika", "Sautrantika", "Yogacara", "Madhyamika"],
        "answer": 1
    },
    {
        "id": 19,
        "text": "In the context of Jainism, 'Nirjara' refers to:",
        "options": ["The influx of karma", "The bondage of karma", "The wearing out or removal of accumulated karma", "The stoppage of new karma"],
        "answer": 2
    },
    {
        "id": 20,
        "text": "Which of the following is the 'Third Noble Truth' of Buddhism?",
        "options": ["Dukkha", "Dukkha Samudaya", "Dukkha Nirodha", "Dukkha Nirodha Gamini Pratipada"],
        "answer": 2
    },
    {
        "id": 21,
        "text": "In Nyaya philosophy, 'Pramana' is defined as:",
        "options": ["The subject of knowledge", "The instrument of valid knowledge", "The object of knowledge", "The memory of knowledge"],
        "answer": 1
    },
    {
        "id": 22,
        "text": "The Vaisheshika category of 'Karma' (Action) is said to reside only in:",
        "options": ["Eternal substances", "Non-eternal substances", "Limited (finite) substances", "All substances"],
        "answer": 2
    },
    {
        "id": 23,
        "text": "According to Samkhya, the Guna that is responsible for 'lightness' and 'pleasure' is:",
        "options": ["Sattva", "Rajas", "Tamas", "Purusha"],
        "answer": 0
    },
    {
        "id": 24,
        "text": "Which school of Buddhism is associated with the 'Sunyavada' doctrine?",
        "options": ["Yogacara", "Madhyamika", "Theravada", "Sautrantika"],
        "answer": 1
    },
    {
        "id": 25,
        "text": "The 'Vijnana-skandha' in Buddhism refers to:",
        "options": ["Feeling", "Perception", "Consciousness", "Dispositions"],
        "answer": 2
    },
    {
        "id": 26,
        "text": "According to Nyaya, how many 'Padarthas' (categories) are there?",
        "options": ["7", "9", "16", "24"],
        "answer": 2
    },
    {
        "id": 27,
        "text": "Which of the following is NOT a 'Dravya' in the Vaisheshika system?",
        "options": ["Atman", "Manas", "Dik (Direction)", "Samanya"],
        "answer": 3
    },
    {
        "id": 28,
        "text": "In Samkhya, 'Mahat' or 'Buddhi' is an evolute of:",
        "options": ["Purusha", "Prakriti", "Ahankara", "Tanmatra"],
        "answer": 1
    },
    {
        "id": 29,
        "text": "Which school rejects 'Upamana' as an independent Pramana?",
        "options": ["Nyaya", "Vaisheshika", "Mimamsa", "Advaita"],
        "answer": 1
    },
    {
        "id": 30,
        "text": "The 'Triratna' of Jainism consists of:",
        "options": ["Sila, Samadhi, Panna", "Right Faith, Right Knowledge, Right Conduct", "Buddha, Dharma, Sangha", "Satya, Ahimsa, Asteya"],
        "answer": 1
    },
    {
        "id": 31,
        "text": "Which stage of the Buddhist 'Twelve Links' (Pratityasamutpada) refers to 'Birth'?",
        "options": ["Jati", "Jara-marana", "Bhava", "Upadana"],
        "answer": 0
    },
    {
        "id": 32,
        "text": "In Nyaya, 'Savikalpaka Pratyaksha' is perception that is:",
        "options": ["Indeterminate and nameless", "Determinate and including name/class", "Extraordinary", "Illusory"],
        "answer": 1
    },
    {
        "id": 33,
        "text": "The Vaisheshika theory of 'Paramanuvada' (Atomism) is used to explain:",
        "options": ["The creation of the soul", "The creation of the material world", "The nature of God", "The process of liberation"],
        "answer": 1
    },
    {
        "id": 34,
        "text": "In Samkhya, 'Purusha' is described as 'Nirguna', meaning:",
        "options": ["Having bad qualities", "Without the three Gunas of Prakriti", "Unconscious", "Non-existent"],
        "answer": 1
    },
    {
        "id": 35,
        "text": "Which of the following is a 'Nastika' school that accepts the existence of an eternal soul?",
        "options": ["Carvaka", "Buddhism", "Jainism", "None of the above"],
        "answer": 2
    },
    {
        "id": 36,
        "text": "According to Nyaya, 'Anumana' (Inference) follows 'Pratyaksha'. This is called:",
        "options": ["Prama", "Tat-purvakam", "Savyabhicara", "Vyapti"],
        "answer": 1
    },
    {
        "id": 37,
        "text": "The Vaisheshika category of 'Abhava' (Absence) is of how many main types?",
        "options": ["2", "4", "7", "16"],
        "answer": 1
    },
    {
        "id": 38,
        "text": "In the Samkhya system, 'Prakriti' is the 'Uncaused Cause'. This is called:",
        "options": ["Visesha", "Pradhana", "Evolute", "Vikriti"],
        "answer": 1
    },
    {
        "id": 39,
        "text": "Which Buddhist school holds that external objects are 'directly perceived' (Bahya-pratyaksha-vada)?",
        "options": ["Vaibhasika", "Sautrantika", "Yogacara", "Madhyamika"],
        "answer": 0
    },
    {
        "id": 40,
        "text": "Jainism categorizes 'Knowledge' into five types. Which is 'Mati'?",
        "options": ["Knowledge through senses and mind", "Knowledge through scripture", "Clairvoyance", "Telepathy"],
        "answer": 0
    },
    {
        "id": 41,
        "text": "The Nyaya 'Hetu' (Middle Term) must not be 'Asiddha'. Asiddha means:",
        "options": ["Proven", "Unproven/Unestablished", "Contradictory", "Irrelevant"],
        "answer": 1
    },
    {
        "id": 42,
        "text": "Which school believes that the Gunas are in a state of 'Samyavastha' during Pralaya (dissolution)?",
        "options": ["Nyaya", "Samkhya", "Vedanta", "Mimamsa"],
        "answer": 1
    },
    {
        "id": 43,
        "text": "In Vaisheshika, 'Guna' (Quality) is said to be:",
        "options": ["Dependent on Dravya", "Independent of Dravya", "An action", "A relation"],
        "answer": 0
    },
    {
        "id": 44,
        "text": "The Buddhist term 'Sangha' refers to:",
        "options": ["The teaching", "The community of monks", "The Buddha himself", "The state of bliss"],
        "answer": 1
    },
    {
        "id": 45,
        "text": "According to Nyaya, 'Sadhya' is the term that is:",
        "options": ["The reason", "To be proved", "The subject", "The example"],
        "answer": 1
    },
    {
        "id": 46,
        "text": "Which of the following is a 'Samanatantra' (sister school) to Nyaya?",
        "options": ["Samkhya", "Vaisheshika", "Yoga", "Mimamsa"],
        "answer": 1
    },
    {
        "id": 47,
        "text": "The Jain concept of 'Dharma-astikaya' refers to the principle of:",
        "options": ["Rest", "Motion", "Space", "Consciousness"],
        "answer": 1
    },
    {
        "id": 48,
        "text": "Which Pramana is common to ALL schools of Indian Philosophy (including Carvaka)?",
        "options": ["Anumana", "Sabda", "Pratyaksha", "Upamana"],
        "answer": 2
    },
    {
        "id": 49,
        "text": "The 'Vyapti' in Nyaya Syllogism is defined as:",
        "options": ["Relation of cause and effect", "Invariable concomitance between Hetu and Sadhya", "Relation of part and whole", "The observation of the hill"],
        "answer": 1
    },
    {
        "id": 50,
        "text": "In Samkhya, 'Ahankara' (Ego) arises from:",
        "options": ["Purusha", "Mahat", "Manas", "Tanmatras"],
        "answer": 1
    },
    {
        "id": 51,
        "text": "In Nyaya philosophy, which type of 'Hetvabhasa' occurs when the middle term is contradicted by a stronger proof like perception (e.g., 'Fire is cold')?",
        "options": ["Savyabhicara", "Viruddha", "Badhita", "Asiddha"],
        "answer": 2
    },
    {
        "id": 52,
        "text": "According to Vaisheshika, 'Samavaya' (Inherence) is:",
        "options": ["A temporary contact", "An eternal relation", "A mental construct", "A type of absence"],
        "answer": 1
    },
    {
        "id": 53,
        "text": "The Samkhya argument 'Sanghatapararthatvat' is used to prove the existence of:",
        "options": ["Prakriti", "Purusha", "God", "The Gunas"],
        "answer": 1
    },
    {
        "id": 54,
        "text": "Which of the following is the correct order of the evolution of Prakriti?",
        "options": ["Mahat -> Ahankara -> Manas -> Tanmatras", "Ahankara -> Mahat -> Tanmatras -> Manas", "Mahat -> Tanmatras -> Ahankara -> Manas", "Prakriti -> Purusha -> Mahat"],
        "answer": 0
    },
    {
        "id": 55,
        "text": "In Nyaya, 'Savyabhicara' is a fallacy of:",
        "options": ["Contradictory middle", "Irregular middle", "Unestablished middle", "Non-inferentially contradicted middle"],
        "answer": 1
    },
    {
        "id": 56,
        "text": "The Vaisheshika category (Padartha) that refers to 'Particularity' residing in eternal substances is:",
        "options": ["Samanya", "Vishesha", "Samavaya", "Dravya"],
        "answer": 1
    },
    {
        "id": 57,
        "text": "According to Samkhya, the nature of 'Rajas' guna is:",
        "options": ["Lightness and illumination", "Mobility and stimulation", "Heaviness and obstruction", "Knowledge and bliss"],
        "answer": 1
    },
    {
        "id": 58,
        "text": "How many 'Dravyas' (Substances) are accepted by the Vaisheshika school?",
        "options": ["4", "7", "9", "16"],
        "answer": 2
    },
    {
        "id": 59,
        "text": "The 'Asatkaryavada' theory of Nyaya-Vaisheshika is also known as:",
        "options": ["Vivartavada", "Parinamavada", "Arambhavada", "Pratityasamutpada"],
        "answer": 2
    },
    {
        "id": 60,
        "text": "In the context of Anumana, 'Paksha' refers to:",
        "options": ["The Major term", "The Middle term", "The Minor term", "The Example"],
        "answer": 2
    },
    {
        "id": 61,
        "text": "Which Sannikarsha (contact) is involved in perceiving the 'Color of a Jar' according to Nyaya?",
        "options": ["Samyoga", "Samyukta-samavaya", "Samyukta-samaveta-samavaya", "Visesanata"],
        "answer": 1
    },
    {
        "id": 62,
        "text": "Samkhya Yoga considers 'Moksha' as 'Kaivalya', which means:",
        "options": ["Union with God", "Dissolution of the soul", "Absolute isolation of Purusha from Prakriti", "Merged into the Void"],
        "answer": 2
    },
    {
        "id": 63,
        "text": "The Nyaya school accepts how many Pramanas?",
        "options": ["2", "3", "4", "6"],
        "answer": 2
    },
    {
        "id": 64,
        "text": "Which school believes that the world is a 'real' transformation of Prakriti?",
        "options": ["Advaita", "Samkhya", "Nyaya", "Buddhism"],
        "answer": 1
    },
    {
        "id": 65,
        "text": "According to Vaisheshika, 'Akasa' (Space) is perceived through:",
        "options": ["Perception", "Inference", "Comparison", "Verbal Testimony"],
        "answer": 1
    },
    {
        "id": 66,
        "text": "The fallacy 'Viruddha' occurs when the middle term:",
        "options": ["Is not present in the Paksha", "Proves the contradictory of the Sadhya", "Is present in the Sapaksha", "Is too narrow"],
        "answer": 1
    },
    {
        "id": 67,
        "text": "In Samkhya, 'Ahankara' (Ego) arises from:",
        "options": ["Purusha", "Mahat", "Manas", "Tanmatras"],
        "answer": 1
    },
    {
        "id": 68,
        "text": "Which of the following is an 'Extraordinary' (Alaukika) perception in Nyaya?",
        "options": ["Samyoga", "Jnanalaksana", "Samavaya", "Visesanata"],
        "answer": 1
    },
    {
        "id": 69,
        "text": "The concept of 'Anyathakhyati' (theory of error) is held by:",
        "options": ["Mimamsa", "Advaita", "Nyaya", "Samkhya"],
        "answer": 2
    },
    {
        "id": 70,
        "text": "Which Vaisheshika Padartha is 'Nitya' (eternal) and 'Amurta' (all-pervading)?",
        "options": ["Manas", "Paramanu", "Akasa", "Karma"],
        "answer": 2
    },
    {
        "id": 71,
        "text": "The 'Yoga' school is often called 'Seshvara Samkhya' because:",
        "options": ["It rejects the Gunas", "It accepts the existence of God (Ishvara)", "It rejects the Vedas", "It is purely materialistic"],
        "answer": 1
    },
    {
        "id": 72,
        "text": "In Yoga, 'Chitta-Vritti' refers to:",
        "options": ["Cessation of mind", "Modifications of the mind", "Eight-fold path", "Divine grace"],
        "answer": 1
    },
    {
        "id": 73,
        "text": "Which stage of Samadhi in Yoga involves the 'seed' of past impressions?",
        "options": ["Nirvitarka", "Sabija", "Nirbija", "Dharana"],
        "answer": 1
    },
    {
        "id": 74,
        "text": "According to Nyaya, the 'Hetu' must have five characteristics. This is called:",
        "options": ["Pancavayava", "Lingaparamarsa", "Pancalaksana", "Vyapti"],
        "answer": 2
    },
    {
        "id": 75,
        "text": "Which school uses the 'Snake and Rope' analogy to describe the world?",
        "options": ["Samkhya", "Advaita", "Nyaya", "Vaisheshika"],
        "answer": 1
    },
    {
        "id": 76,
        "text": "Which Mimamsa school accepts 'Anupalabdhi' as a separate Pramana for the knowledge of non-existence?",
        "options": ["Prabhakara Mimamsa", "Bhatta Mimamsa", "Both", "Neither"],
        "answer": 1
    },
    {
        "id": 77,
        "text": "The theory of error known as 'Akhyati-vada' is held by which school?",
        "options": ["Advaita Vedanta", "Prabhakara Mimamsa", "Nyaya", "Ramanuja"],
        "answer": 1
    },
    {
        "id": 78,
        "text": "According to Shankaracharya, the world is 'Mithya'. Mithya is defined as:",
        "options": ["Absolutely non-existent", "Absolutely real", "Indescribable as either real or unreal (Sadasadvilaksana)", "A dream with no basis"],
        "answer": 2
    },
    {
        "id": 79,
        "text": "Ramanuja's philosophy is known as Vishishtadvaita because it emphasizes:",
        "options": ["Pure non-dualism", "Dualism of God and Soul", "Non-dualism qualified by diversity", "Pluralism"],
        "answer": 2
    },
    {
        "id": 80,
        "text": "The concept of 'Jivanmukti' (liberation while living) is rejected by which school?",
        "options": ["Advaita Vedanta", "Samkhya", "Vishishtadvaita Vedanta", "Buddhism"],
        "answer": 2
    },
    {
        "id": 81,
        "text": "In Advaita, 'Maya' has two powers. They are:",
        "options": ["Vidya and Avidya", "Avarana and Vikshepa", "Sattva and Tamas", "Prakriti and Purusha"],
        "answer": 1
    },
    {
        "id": 82,
        "text": "Madhvacharya's 'Pancha-bheda' (five-fold difference) includes the difference between:",
        "options": ["Jiva and Ishvara only", "Jiva and Jiva only", "Jiva, Ishvara, and Jada (matter) in five combinations", "Brahman and Maya"],
        "answer": 2
    },
    {
        "id": 83,
        "text": "Which school accepts 'Arthapatti' (postulation) as a valid source of knowledge?",
        "options": ["Nyaya", "Vaisheshika", "Advaita Vedanta", "Samkhya"],
        "answer": 2
    },
    {
        "id": 84,
        "text": "The Mimamsa doctrine of 'Apura' explains:",
        "options": ["The nature of Brahman", "The link between ritual action and its fruit", "The origin of atoms", "The process of perception"],
        "answer": 1
    },
    {
        "id": 85,
        "text": "In Vishishtadvaita, the relation between the Jiva and God is called:",
        "options": ["Samavaya", "Aprthaksiddhi", "Samyoga", "Adhyasa"],
        "answer": 1
    },
    {
        "id": 86,
        "text": "The theory of 'Abhihitanvayavada' regarding the meaning of a sentence is held by:",
        "options": ["Kumarila Bhatta", "Prabhakara", "Shankara", "Gautama"],
        "answer": 0
    },
    {
        "id": 87,
        "text": "According to Shankara, the 'Paramarthika' level of reality refers to:",
        "options": ["The dream state", "The empirical world", "The ultimate reality of Brahman", "The illusory perception of a snake in a rope"],
        "answer": 2
    },
    {
        "id": 88,
        "text": "Which Vedanta school promotes 'Prapatti' or absolute self-surrender to God?",
        "options": ["Advaita", "Dvaita", "Vishishtadvaita", "Suddhadvaita"],
        "answer": 2
    },
    {
        "id": 89,
        "text": "Mimamsa is primarily concerned with the 'Karma-kanda' of the Vedas. This means:",
        "options": ["Path of Knowledge", "Path of Ritual Action", "Path of Devotion", "Path of Logic"],
        "answer": 1
    },
    {
        "id": 90,
        "text": "In the 'Anvitabhidhanavada' theory, the meaning of words is understood as:",
        "options": ["Isolated units", "Already connected in an injunction (Action)", "Purely symbolic", "Non-existent"],
        "answer": 1
    },
    {
        "id": 91,
        "text": "Which of the following describes 'Brahman' in Advaita Vedanta?",
        "options": ["Saguna and Savishesha", "Nirguna and Nirvishesha", "A real transformation of the world", "The creator but not the material cause"],
        "answer": 1
    },
    {
        "id": 92,
        "text": "The 'Tattvamasi' Mahavakya in Advaita signifies the identity of:",
        "options": ["Brahman and the World", "Jiva and Brahman", "Maya and Brahman", "Krishna and Arjuna"],
        "answer": 1
    },
    {
        "id": 93,
        "text": "According to Kumarila Bhatta, knowledge is:",
        "options": ["Perceived (Pratyaksha)", "Inferred (Anumeya)", "Self-revealed", "A quality of the soul"],
        "answer": 1
    },
    {
        "id": 94,
        "text": "Who among the following is a 'Dvaitadvaita' (Dualistic Non-dualistic) philosopher?",
        "options": ["Vallabha", "Nimbarka", "Madhva", "Shankara"],
        "answer": 1
    },
    {
        "id": 95,
        "text": "The Advaita theory of error 'Anirvacaniya-khyati' implies the error is:",
        "options": ["Real", "Unreal", "Indescribable as either real or unreal", "A memory"],
        "answer": 2
    },
    {
        "id": 96,
        "text": "Which school accepts only 3 Pramanas: Perception, Inference, and Testimony?",
        "options": ["Nyaya", "Samkhya", "Mimamsa", "Advaita"],
        "answer": 1
    },
    {
        "id": 97,
        "text": "In Mimamsa, 'Dharma' is defined as:",
        "options": ["Moral duty", "A command of the Veda (Codana)", "Social service", "Meditation"],
        "answer": 1
    },
    {
        "id": 98,
        "text": "The 'Bhamati' and 'Vivarana' schools are sub-divisions of:",
        "options": ["Nyaya", "Advaita Vedanta", "Vishishtadvaita", "Buddhism"],
        "answer": 1
    },
    {
        "id": 99,
        "text": "The concept of 'Taratamya' (hierarchy of Jivas) is unique to which school?",
        "options": ["Advaita", "Vishishtadvaita", "Dvaita", "Jainism"],
        "answer": 2
    },
    {
        "id": 100,
        "text": "According to Prabhakara, error is due to 'Smrtipromosa', which means:",
        "options": ["Lapse of memory", "Wrong perception", "Illusion of Maya", "Logic failure"],
        "answer": 0
    },
    {
        "id": 101,
        "text": "Sri Aurobindo's theory of evolution is known as 'Integral Evolution' because it includes:",
        "options": ["Only physical change", "Ascent of consciousness and Descent of the Supermind", "Simple biological adaptation", "The denial of matter"],
        "answer": 1
    },
    {
        "id": 102,
        "text": "According to Mahatma Gandhi, 'Satyagraha' is essentially based on:",
        "options": ["Passive resistance", "The power of Truth and Non-violence", "Political strategy only", "Economic boycott"],
        "answer": 1
    },
    {
        "id": 103,
        "text": "Who among the following modern thinkers wrote 'The Reconstruction of Religious Thought in Islam'?",
        "options": ["Sir Sayyid Ahmed Khan", "Muhammad Iqbal", "Maulana Azad", "Zakir Hussain"],
        "answer": 1
    },
    {
        "id": 104,
        "text": "The concept of 'Radical Humanism' is associated with:",
        "options": ["Jawaharlal Nehru", "M.N. Roy", "B.R. Ambedkar", "Jyotirao Phule"],
        "answer": 1
    },
    {
        "id": 105,
        "text": "In B.R. Ambedkar's 'Navayana' Buddhism, the emphasis shifted from personal salvation to:",
        "options": ["Ritualistic worship", "Social justice and equality", "Strict monasticism", "Metaphysical speculation"],
        "answer": 1
    },
    {
        "id": 106,
        "text": "Swami Vivekananda's 'Practical Vedanta' emphasizes:",
        "options": ["Renunciation of the world", "Service to humanity as worship of God", "Temple building", "Sanskrit scholarship only"],
        "answer": 1
    },
    {
        "id": 107,
        "text": "According to K.C. Bhattacharyya, 'Philosophy of the Object' deals with:",
        "options": ["Pure Self", "Science and empirical thought", "The Absolute", "Artistic beauty"],
        "answer": 1
    },
    {
        "id": 108,
        "text": "The 'Integral Yoga' of Sri Aurobindo aims at:",
        "options": ["Escaping the world", "Transformation of whole human nature into Divine nature", "Physical fitness", "Mental peace only"],
        "answer": 1
    },
    {
        "id": 109,
        "text": "Who propounded the concept of 'Gnostic Being'?",
        "options": ["Ramana Maharshi", "Sri Aurobindo", "J. Krishnamurti", "S. Radhakrishnan"],
        "answer": 1
    },
    {
        "id": 110,
        "text": "Rabindranath Tagore's 'Religion of Man' is primarily based on:",
        "options": ["Dogmatic theology", "Humanity and Creative Surplus", "Asceticism", "Strict Vedic rituals"],
        "answer": 1
    },
    {
        "id": 111,
        "text": "Which modern thinker emphasized 'Choice' and 'Freedom' in the context of 'Total Revolution'?",
        "options": ["Vinoba Bhave", "Jayaprakash Narayan", "Ram Manohar Lohia", "Deendayal Upadhyaya"],
        "answer": 1
    },
    {
        "id": 112,
        "text": "The concept of 'Anuvrata' in modern Jain context was initiated by:",
        "options": ["Acharya Tulsi", "Mahavira", "Kundakunda", "Hemachandra"],
        "answer": 0
    },
    {
        "id": 113,
        "text": "According to S. Radhakrishnan, 'Intuition' is:",
        "options": ["Lower than intellect", "The perfection of intellect", "Opposed to reason", "A psychological hallucination"],
        "answer": 1
    },
    {
        "id": 114,
        "text": "Muhammad Iqbal's concept of 'Khudi' refers to:",
        "options": ["Self-annihilation", "Self-affirmation or Individuality", "The physical body", "Socialism"],
        "answer": 1
    },
    {
        "id": 115,
        "text": "Who among the following is associated with the doctrine of 'Bread Labour'?",
        "options": ["Karl Marx", "Mahatma Gandhi", "Amartya Sen", "M.G. Ranade"],
        "answer": 1
    },
    {
        "id": 116,
        "text": "The 'Life Divine' is the magnum opus of:",
        "options": ["Vivekananda", "Sri Aurobindo", "Tagore", "Dayananda Saraswati"],
        "answer": 1
    },
    {
        "id": 117,
        "text": "J. Krishnamurti's 'Freedom from the Known' emphasizes:",
        "options": ["Following a Guru", "Observation without a filter of past memory", "Studying the Upanishads", "Systematic meditation"],
        "answer": 1
    },
    {
        "id": 118,
        "text": "Which school of thought is famously summarized by the phrase 'Sarvodaya'?",
        "options": ["Marxism", "Gandhian Philosophy", "Nyaya", "Existentialism"],
        "answer": 1
    },
    {
        "id": 119,
        "text": "The concept of 'Pancha-kosha' (five sheaths) is found in which Upanishad?",
        "options": ["Katha", "Taittiriya", "Mundaka", "Mandukya"],
        "answer": 1
    },
    {
        "id": 120,
        "text": "In the context of Indian Aesthetics, 'Rasa-sutra' was first formulated by:",
        "options": ["Abhinavagupta", "Bharata Muni", "Mammata", "Anandavardhana"],
        "answer": 1
    },
    {
        "id": 121,
        "text": "Which Pramana does the Carvaka school accept?",
        "options": ["Pratyaksha only", "Anumana only", "Pratyaksha and Anumana", "Sabda only"],
        "answer": 0
    },
    {
        "id": 122,
        "text": "The 'Vijnanavada' school of Buddhism is another name for:",
        "options": ["Madhyamika", "Yogacara", "Sautrantika", "Vaibhasika"],
        "answer": 1
    },
    {
        "id": 123,
        "text": "According to Nyaya, 'Sabda' is the testimony of a:",
        "options": ["Priest", "Apta (Reliable person)", "Common man", "Politician"],
        "answer": 1
    },
    {
        "id": 124,
        "text": "The 'Visesa' in Vaisheshika refers to:",
        "options": ["Universality", "Particularity", "Inherence", "Absence"],
        "answer": 1
    },
    {
        "id": 125,
        "text": "Which Guna is responsible for 'Ignorance' and 'Inertia'?",
        "options": ["Sattva", "Rajas", "Tamas", "Purusha"],
        "answer": 2
    },
    {
        "id": 126,
        "text": "The theory of 'Pancakarana' (five-fold division) explains the creation of:",
        "options": ["Subtle elements", "Gross elements", "The Soul", "Maya"],
        "answer": 1
    },
    {
        "id": 127,
        "text": "Who is the author of 'Sankhya Karika'?",
        "options": ["Kapila", "Isvarakrishna", "Patanjali", "Vyasa"],
        "answer": 1
    },
    {
        "id": 128,
        "text": "The first step of the Eight-fold Path in Yoga is:",
        "options": ["Niyama", "Yama", "Asana", "Pranayama"],
        "answer": 1
    },
    {
        "id": 129,
        "text": "The 'Brahma Sutra' was written by:",
        "options": ["Shankara", "Badarayana", "Ramanuja", "Gaudapada"],
        "answer": 1
    },
    {
        "id": 130,
        "text": "In Jainism, 'Kevalajnana' is:",
        "options": ["Partial knowledge", "Sensory knowledge", "Infinite, all-encompassing knowledge", "Inferred knowledge"],
        "answer": 2
    },
    {
        "id": 131,
        "text": "According to Buddhism, the cause of suffering (Dukkha) is:",
        "options": ["Karma", "Tanha (Craving)", "God", "Fate"],
        "answer": 1
    },
    {
        "id": 132,
        "text": "The Vaisheshika school accepts how many Padarthas (Categories)?",
        "options": ["2", "4", "7", "16"],
        "answer": 2
    },
    {
        "id": 133,
        "text": "The Mimamsa school focuses on the interpretation of:",
        "options": ["The Yoga Sutras", "The Vedic Injunctions (Vidhi)", "The Buddhist Canon", "The Puranas"],
        "answer": 1
    },
    {
        "id": 134,
        "text": "In Advaita Vedanta, 'Adhyasa' refers to:",
        "options": ["True perception", "Superimposition (Error)", "Meditation", "Logic"],
        "answer": 1
    },
    {
        "id": 135,
        "text": "Which school is 'Nirishvara' (Atheistic) in its classical form?",
        "options": ["Nyaya", "Samkhya", "Visishtadvaita", "Dvaita"],
        "answer": 1
    },
    {
        "id": 136,
        "text": "Who among the following is a 'Suddhadvaita' philosopher?",
        "options": ["Shankara", "Vallabha", "Madhva", "Nimbarka"],
        "answer": 1
    },
    {
        "id": 137,
        "text": "The 'Jain' concept of 'Pancha Mahavratas' includes:",
        "options": ["Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha", "Yama, Niyama, Asana, Pranayama, Pratyahara", "Sila, Samadhi, Panna", "Faith, Hope, Charity"],
        "answer": 0
    },
    {
        "id": 138,
        "text": "Which philosopher wrote 'The Life Divine'?",
        "options": ["Vivekananda", "Tagore", "Sri Aurobindo", "Iqbal"],
        "answer": 2
    },
    {
        "id": 139,
        "text": "The concept of 'Dharma' in Buddhism is often equated with:",
        "options": ["Caste duty", "Cosmic Law/Universal Truth", "Animal sacrifice", "The Soul"],
        "answer": 1
    },
    {
        "id": 140,
        "text": "Nyaya philosophy defines 'Prama' as:",
        "options": ["Illusion", "Valid knowledge", "Memory", "Dream"],
        "answer": 1
    },
    {
        "id": 141,
        "text": "According to Samkhya, 'Purusha' is:",
        "options": ["Active and Unconscious", "Passive and Conscious", "Active and Conscious", "Passive and Unconscious"],
        "answer": 1
    },
    {
        "id": 142,
        "text": "The 'Syadvada' logic uses how many steps of judgment?",
        "options": ["3", "5", "7", "9"],
        "answer": 2
    },
    {
        "id": 143,
        "text": "Which school is associated with 'Anvitabhidhanavada'?",
        "options": ["Bhatta Mimamsa", "Prabhakara Mimamsa", "Nyaya", "Advaita"],
        "answer": 1
    },
    {
        "id": 144,
        "text": "Who is the author of 'Satyarth Prakash'?",
        "options": ["Swami Vivekananda", "Dayananda Saraswati", "Raja Ram Mohan Roy", "Annie Besant"],
        "answer": 1
    },
    {
        "id": 145,
        "text": "In Buddhism, 'Nirvana' is:",
        "options": ["Heaven", "The extinguishing of the fires of greed, hatred, and delusion", "Rebirth as a God", "A state of eternal war"],
        "answer": 1
    },
    {
        "id": 146,
        "text": "The 'Yoga Sutra' defines Yoga as 'Chitta Vritti ______'.",
        "options": ["Prasara", "Nirodha", "Utpatti", "Vyanjana"],
        "answer": 1
    },
    {
        "id": 147,
        "text": "According to Advaita, the efficient and material cause of the world is:",
        "options": ["Atoms", "Prakriti", "Brahman", "Maya"],
        "answer": 2
    },
    {
        "id": 148,
        "text": "Which Indian thinker is associated with 'Creative Unity'?",
        "options": ["Gandhi", "Tagore", "Radhakrishnan", "Nehru"],
        "answer": 1
    },
    {
        "id": 149,
        "text": "The 'Eight-fold Path' of Buddhism is also called:",
        "options": ["Middle Way (Madhyama Pratipada)", "Extreme Path", "The Path of Rituals", "The Vedic Path"],
        "answer": 0
    },
    {
        "id": 150,
        "text": "According to Ramanuja, 'Bhakti' is synonymous with:",
        "options": ["Intellectual debate", "Upasana (Continuous meditation on God)", "Singing only", "Temple decoration"],
        "answer": 1
    }
];

let currentIdx = 0;
let userAnswers = new Array(questions.length).fill(null);
let markedStatus = new Array(questions.length).fill(false);

function init() {
    renderPalette();
    showQuestion(0);
    startTimer(180); // 180 minutes
}

function showQuestion(index) {
    currentIdx = index;
    const q = questions[index];
    document.getElementById('q-number').innerText = index + 1;
    document.getElementById('question-text').innerText = q.text;

    const optionsHtml = q.options.map((opt, i) => `
        <div class="option ${userAnswers[index] === i ? 'selected' : ''}" onclick="selectOption(${i})">
            ${String.fromCharCode(65 + i)}. ${opt}
        </div>
    `).join('');

    document.getElementById('options-container').innerHTML = optionsHtml;
}

function selectOption(optIdx) {
    userAnswers[currentIdx] = optIdx;
    document.querySelectorAll('.option').forEach((el, i) => {
        el.classList.toggle('selected', i === optIdx);
    });
    updatePalette();
}

function nextQuestion() {
    if (currentIdx < questions.length - 1) {
        showQuestion(currentIdx + 1);
    }
}

function prevQuestion() {
    if (currentIdx > 0) {
        showQuestion(currentIdx - 1);
    }
}

function markForReview() {
    markedStatus[currentIdx] = !markedStatus[currentIdx];
    updatePalette();
}

function renderPalette() {
    const palette = document.getElementById('palette');
    palette.innerHTML = questions.map((_, i) => `
        <button class="palette-btn" id="btn-${i}" onclick="showQuestion(${i})">${i + 1}</button>
    `).join('');
}

function updatePalette() {
    const btn = document.getElementById(`btn-${currentIdx}`);
    if (userAnswers[currentIdx] !== null) btn.classList.add('visited');
    if (markedStatus[currentIdx]) btn.classList.add('marked');
}

function startTimer(minutes) {
    let seconds = minutes * 60;
    setInterval(() => {
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        document.getElementById('timer').innerText = `Time Left: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
        seconds--;
    }, 1000);
}

function finishExam() {
    let score = 0;
    userAnswers.forEach((ans, i) => {
        if (ans === questions[i].answer) score++;
    });
    alert(`Exam Finished! Your Score: ${score}/${questions.length}`);
}

init();