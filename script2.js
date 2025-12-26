const questions = [
  {
    "id": 1,
    "text": "Peer group interaction in a classroom helps in:",
    "options": ["Concept understanding", "Realization of One's misunderstanding", "Rapport Building", "Questioning"],
    "answer": 0
  },
  {
    "id": 2,
    "text": "When learning outcomes are ensured with less resources/effort from the teacher and more self-learning initiative, the teacher is described as:",
    "options": ["Successful", "Effective", "Intelligent", "Practical"],
    "answer": 1
  },
  {
    "id": 3,
    "text": "Reflective Practice implies the use of one's:",
    "options": ["Cognition", "Metacognition", "Metacognition on cognition", "Reinforcement of learning"],
    "answer": 2
  },
  {
    "id": 4,
    "text": "Inclusive education implies:",
    "options": ["Ensuring learning outcomes are the same for all", "Including the disabled in the main stream", "Compulsory education for children below 14", "Ensuring no child is left behind in education"],
    "answer": 3
  },
  {
    "id": 5,
    "text": "Listening is important for a teacher to:",
    "options": ["Address the requirement of the learner", "Gain knowledge", "Keep the learner in good humour", "Evaluate progress made"],
    "answer": 0
  },
  {
    "id": 6,
    "text": "A hypothesis should be conceptually:",
    "options": ["Convoluted and generic", "Complex and tough", "Simple, clear and specific", "Obscure and complicated"],
    "answer": 2
  },
  {
    "id": 7,
    "text": "When an observer rates an individual based on a rating given in another aspect of interaction, it is called:",
    "options": ["Evaluation effect", "Error of central tendency", "Halo effect", "Categorical effect"],
    "answer": 2
  },
  {
    "id": 8,
    "text": "The study of 'why does stressful living result in heart attack?' is classified as:",
    "options": ["Descriptive research", "Explanatory research", "Correlational research", "Feasibility research"],
    "answer": 1
  },
  {
    "id": 9,
    "text": "The formulation of a research problem can be compared to:",
    "options": ["Laying the foundation of a building", "Building the walls", "Polishing the doors", "Constructing the ceiling"],
    "answer": 0
  },
  {
    "id": 10,
    "text": "Mailed questionnaire, observation, and interview are instances of:",
    "options": ["Secondary sources", "Personal sources", "Primary sources", "Tertiary sources"],
    "answer": 2
  },
  {
    "id": 11,
    "text": "According to the passage on organizational life cycles, when will a business create its place in the market?",
    "options": ["At maturity", "At introduction", "At early growth", "At late growth"],
    "answer": 1
  },
  {
    "id": 12,
    "text": "At which stage does the founder NOT move to a more managerial role?",
    "options": ["Early growth stage", "Maturity stage", "Decline stage", "Start up stage"],
    "answer": 3
  },
  {
    "id": 13,
    "text": "Venturing into related products and services during the growth phase does NOT mean that a business will:",
    "options": ["Ignore the original product", "Move the founder to a managerial role", "Delegate more responsibilities", "Ignore related services"],
    "answer": 0
  },
  {
    "id": 14,
    "text": "The resource requirements of a business need careful handling at which stage?",
    "options": ["Fourth (Maturity)", "First (Introduction)", "Third (Continuous Growth)", "Second (Early Growth)"],
    "answer": 2
  },
  {
    "id": 15,
    "text": "The slowing down of a business can happen if:",
    "options": ["Market share declines", "Innovative energy weakens", "Managerial roles are unclear", "Investment declines"],
    "answer": 1
  },
  {
    "id": 16,
    "text": "In mass communication, selective perception is dependent on the receiver's:",
    "options": ["Competence", "Pre-disposition", "Receptivity", "Ethnicity"],
    "answer": 1
  },
  {
    "id": 17,
    "text": "The sequence of the stages of communication process is:",
    "options": ["Source, Message, Channel, Receiver", "Sender, Encoding, Channel, Decoding", "Source, Encoding, Channel, Receiver", "Sender, Message, Decoding, Feedback"],
    "answer": 1
  },
  {
    "id": 18,
    "text": "Which of the following is a characteristic of interpersonal communication?",
    "options": ["It is focused", "It is impersonal", "It is mediated", "It is mass-oriented"],
    "answer": 0
  },
  {
    "id": 19,
    "text": "In a classroom, the teacher's use of non-verbal cues is an example of:",
    "options": ["Static communication", "Dynamic communication", "High-context communication", "Low-context communication"],
    "answer": 2
  },
  {
    "id": 20,
    "text": "The barrier to effective communication that relates to the language used is called:",
    "options": ["Physical barrier", "Psychological barrier", "Semantic barrier", "Cultural barrier"],
    "answer": 2
  },
  {
    "id": 21,
    "text": "If 'WATER' is coded as 'XBUFS', how is 'FIRE' coded?",
    "options": ["GJSF", "EJSD", "HKTG", "GJTF"],
    "answer": 0
  },
  {
    "id": 22,
    "text": "Find the next number in the series: 2, 5, 10, 17, 26, ?",
    "options": ["35", "37", "39", "41"],
    "answer": 1
  },
  {
    "id": 23,
    "text": "A man points to a photo and says, 'The lady in the photo is my nephew's maternal grandmother.' How is the lady related to the man's sister?",
    "options": ["Mother-in-law", "Mother", "Sister", "Aunt"],
    "answer": 1
  },
  {
    "id": 24,
    "text": "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less. What is the original speed?",
    "options": ["30 km/h", "40 km/h", "45 km/h", "50 km/h"],
    "answer": 1
  },
  {
    "id": 25,
    "text": "The average age of a class of 40 students is 15 years. If the teacher's age is included, the average increases by 1 year. The teacher's age is:",
    "options": ["40", "41", "55", "56"],
    "answer": 3
  },
  {
    "id": 26,
    "text": "Identify the logical fallacy: 'Every time I wash my car, it rains. Therefore, washing my car causes rain.'",
    "options": ["Ad Hominem", "Post Hoc Ergo Propter Hoc", "Slippery Slope", "Straw Man"],
    "answer": 1
  },
  {
    "id": 27,
    "text": "Which of the following is an example of an inductive argument?",
    "options": ["All men are mortal, Socrates is a man, therefore Socrates is mortal", "The sun has risen every day, so it will rise tomorrow", "If it rains, the ground is wet. It is raining, so the ground is wet", "A triangle has three sides"],
    "answer": 1
  },
  {
    "id": 28,
    "text": "In the square of opposition, if 'All S is P' is true, what can be said about 'Some S is not P'?",
    "options": ["True", "False", "Undetermined", "Partially true"],
    "answer": 1
  },
  {
    "id": 29,
    "text": "Which term in a syllogism appears in both premises but not the conclusion?",
    "options": ["Major term", "Minor term", "Middle term", "Copula"],
    "answer": 2
  },
  {
    "id": 30,
    "text": "A definition that is used to increase vocabulary or clarify meaning is called:",
    "options": ["Lexical", "Stipulative", "Precising", "Theoretical"],
    "answer": 0
  },
  {
    "id": 31,
    "text": "Based on the Data Interpretation table, which year showed the maximum percentage growth in exports?",
    "options": ["2015", "2016", "2017", "2018"],
    "answer": 2
  },
  {
    "id": 32,
    "text": "What is the average export value for the period 2014-2018?",
    "options": ["450 Cr", "500 Cr", "520 Cr", "550 Cr"],
    "answer": 2
  },
  {
    "id": 33,
    "text": "In which year was the trade deficit (Imports - Exports) the highest?",
    "options": ["2014", "2015", "2016", "2017"],
    "answer": 3
  },
  {
    "id": 34,
    "text": "The ratio of exports to imports was minimum in which year?",
    "options": ["2014", "2015", "2016", "2017"],
    "answer": 0
  },
  {
    "id": 35,
    "text": "What was the percentage increase in imports from 2016 to 2017?",
    "options": ["10%", "15%", "20%", "25%"],
    "answer": 2
  },
  {
    "id": 36,
    "text": "Which of the following is NOT an input device?",
    "options": ["Keyboard", "Mouse", "Monitor", "Scanner"],
    "answer": 2
  },
  {
    "id": 37,
    "text": "What does RAM stand for in computer terminology?",
    "options": ["Read Access Memory", "Random Access Memory", "Rapid Action Memory", "Real Analysis Memory"],
    "answer": 1
  },
  {
    "id": 38,
    "text": "Which protocol is used for sending emails?",
    "options": ["HTTP", "FTP", "SMTP", "TCP/IP"],
    "answer": 2
  },
  {
    "id": 39,
    "text": "A Megabyte (MB) is equal to:",
    "options": ["1024 Bytes", "1024 Kilobytes", "1024 Gigabytes", "1000 Kilobytes"],
    "answer": 1
  },
  {
    "id": 40,
    "text": "The binary equivalent of decimal number 10 is:",
    "options": ["1001", "1010", "1100", "1111"],
    "answer": 1
  },
  {
    "id": 41,
    "text": "Which of the following is a 'Search Engine'?",
    "options": ["Flash", "Google", "Firefox", "Internet Explorer"],
    "answer": 1
  },
  {
    "id": 42,
    "text": "The phrase 'Environmental Impact Assessment' refers to:",
    "options": ["A study of how humans affect nature", "The assessment of environmental consequences of a plan", "A report on wildlife", "The study of climate change"],
    "answer": 1
  },
  {
    "id": 43,
    "text": "The main objective of the 'Montreal Protocol' is:",
    "options": ["Global warming control", "Ozone layer protection", "Biodiversity conservation", "Hazardous waste management"],
    "answer": 1
  },
  {
    "id": 44,
    "text": "Which of the following is a renewable source of energy?",
    "options": ["Coal", "Natural Gas", "Uranium", "Wind"],
    "answer": 3
  },
  {
    "id": 45,
    "text": "The term 'Tsunami' is derived from which language?",
    "options": ["Chinese", "Japanese", "Korean", "Thai"],
    "answer": 1
  },
  {
    "id": 46,
    "text": "Which institution was established as a result of the 'Kothari Commission' recommendations?",
    "options": ["UGC", "NCERT", "IGNOU", "NIEPA"],
    "answer": 1
  },
  {
    "id": 47,
    "text": "The first Open University in India was established in which state?",
    "options": ["Andhra Pradesh", "Tamil Nadu", "Delhi", "Maharashtra"],
    "answer": 0
  },
  {
    "id": 48,
    "text": "The 'NPTEL' program is an initiative of:",
    "options": ["UGC", "IITs and IISc", "AICTE", "Ministry of Education"],
    "answer": 1
  },
  {
    "id": 49,
    "text": "Which constitutional amendment made education a Fundamental Right in India?",
    "options": ["42nd Amendment", "44th Amendment", "86th Amendment", "92nd Amendment"],
    "answer": 2
  },
  {
    "id": 50,
    "text": "The 'Gyan Vani' is an educational:",
    "options": ["TV Channel", "Radio Network", "Web Portal", "Digital Library"],
    "answer": 1
  },
  {
    "id": 51,
    "text": "According to Samkhya, the process of evolution starts when there is a contact between:",
    "options": ["Two Purushas", "Prakriti and Mahat", "Purusha and Prakriti", "Guna and Tanmatra"],
    "answer": 2
  },
  {
    "id": 52,
    "text": "The Nyaya school accepts 'Sabda' as a valid source of knowledge only when it comes from an 'Apta'. An Apta is:",
    "options": ["A religious priest", "A trustworthy person", "A government official", "A local elder"],
    "answer": 1
  },
  {
    "id": 53,
    "text": "The concept of 'Syadvada' in Jainism emphasizes:",
    "options": ["Absolute truth", "Relative and manifold nature of truth", "Non-existence of truth", "Single-point perspective"],
    "answer": 1
  },
  {
    "id": 54,
    "text": "Which of the following is an example of 'Samavaya' (Inherence) relation?",
    "options": ["A book on a table", "Cloth and its threads", "A flower and its scent", "Both 2 and 3"],
    "answer": 3
  },
  {
    "id": 55,
    "text": "In Yoga philosophy, 'Citta-vritti-nirodha' is the definition of:",
    "options": ["Dhyana", "Samadhi", "Yoga", "Pranayama"],
    "answer": 2
  },
  {
    "id": 56,
    "text": "The 'Pratityasamutpada' (Dependent Origination) is also known as:",
    "options": ["The Middle Path", "The causal wheel of existence", "The doctrine of soul", "The law of space"],
    "answer": 1
  },
  {
    "id": 57,
    "text": "Which school of Vedanta is associated with Sankaracharya?",
    "options": ["Visishtadvaita", "Dvaita", "Advaita", "Suddhadvaita"],
    "answer": 2
  },
  {
    "id": 58,
    "text": "The Vaisheshika category of 'Samanya' refers to:",
    "options": ["Particularity", "Generality/Universality", "Inherence", "Action"],
    "answer": 1
  },
  {
    "id": 59,
    "text": "The Mimamsa school gives primary importance to:",
    "options": ["Jnana-kanda", "Karma-kanda", "Bhakti-kanda", "Yoga-kanda"],
    "answer": 1
  },
  {
    "id": 60,
    "text": "According to Ramanuja, 'Brahman' is qualified by:",
    "options": ["Maya", "Cit and Acit", "Avidya", "Nothing"],
    "answer": 1
  },
  {
    "id": 61,
    "text": "In Greek philosophy, who is known for the method of 'Elenchus' (Dialectic)?",
    "options": ["Plato", "Aristotle", "Socrates", "Heraclitus"],
    "answer": 2
  },
  {
    "id": 62,
    "text": "According to Plato, the highest form is the:",
    "options": ["Form of Justice", "Form of Beauty", "Form of the Good", "Form of Courage"],
    "answer": 2
  },
  {
    "id": 63,
    "text": "Aristotle's theory of four causes includes Material, Formal, Efficient, and:",
    "options": ["Primary", "Secondary", "Final", "Logical"],
    "answer": 2
  },
  {
    "id": 64,
    "text": "Which philosopher famously said, 'Cogito, ergo sum' (I think, therefore I am)?",
    "options": ["Spinoza", "Leibniz", "Descartes", "Kant"],
    "answer": 2
  },
  {
    "id": 65,
    "text": "Spinoza describes Reality as 'Substance', which he also calls:",
    "options": ["Monad", "God or Nature", "Matter", "Mind"],
    "answer": 1
  },
  {
    "id": 66,
    "text": "Leibniz’s ultimate simple substances are called:",
    "options": ["Atoms", "Monads", "Tanmatras", "Ideas"],
    "answer": 1
  },
  {
    "id": 67,
    "text": "Which philosopher is a thorough-going Empiricist who claimed the mind is a 'Tabula Rasa'?",
    "options": ["Descartes", "John Locke", "George Berkeley", "David Hume"],
    "answer": 1
  },
  {
    "id": 68,
    "text": "Berkeley’s famous dictum 'Esse est percipi' means:",
    "options": ["To be is to think", "To be is to be perceived", "To be is to act", "To be is to doubt"],
    "answer": 1
  },
  {
    "id": 69,
    "text": "David Hume’s philosophy leads to:",
    "options": ["Rationalism", "Scepticism", "Idealism", "Mysticism"],
    "answer": 1
  },
  {
    "id": 70,
    "text": "Kant’s 'Copernican Revolution' in philosophy refers to his shift in focus from:",
    "options": ["Object to Subject", "Subject to Object", "Reason to Faith", "Matter to Spirit"],
    "answer": 0
  },
  {
    "id": 71,
    "text": "According to Hegel, the 'Dialectical Method' follows the movement of:",
    "options": ["Thesis, Anti-thesis, Synthesis", "Induction, Deduction, Conclusion", "Doubt, Belief, Knowledge", "Perception, Memory, Inference"],
    "answer": 0
  },
  {
    "id": 72,
    "text": "The existentialist philosopher who claimed 'Existence precedes Essence' is:",
    "options": ["Kierkegaard", "Nietzsche", "Jean-Paul Sartre", "Heidegger"],
    "answer": 2
  },
  {
    "id": 73,
    "text": "Who is the author of 'The Phenomenology of Spirit'?",
    "options": ["Kant", "Hegel", "Husserl", "Wittgenstein"],
    "answer": 1
  },
  {
    "id": 74,
    "text": "Husserl’s method of 'Phenomenological Reduction' is called:",
    "options": ["Elenchus", "Epoche", "Syllogism", "Dialectic"],
    "answer": 1
  },
  {
    "id": 75,
    "text": "Which philosopher is associated with the 'Language Games' theory in his later works?",
    "options": ["Bertrand Russell", "A.J. Ayer", "Ludwig Wittgenstein", "G.E. Moore"],
    "answer": 2
  },
  {
    "id": 76,
    "text": "The 'Verification Principle' is the hallmark of which philosophical school?",
    "options": ["Existentialism", "Logical Positivism", "Phenomenology", "Pragmatism"],
    "answer": 1
  },
  {
    "id": 77,
    "text": "William James and John Dewey are proponents of:",
    "options": ["Idealism", "Realism", "Pragmatism", "Existentialism"],
    "answer": 2
  },
  {
    "id": 78,
    "text": "Which philosopher spoke about the 'Death of God' and the 'Ubermensch'?",
    "options": ["Sartre", "Nietzsche", "Camus", "Marcel"],
    "answer": 1
  },
  {
    "id": 79,
    "text": "The concept of 'Dasein' (Being-in-the-world) was developed by:",
    "options": ["Husserl", "Heidegger", "Jaspers", "Merleau-Ponty"],
    "answer": 1
  },
  {
    "id": 80,
    "text": "The 'Picture Theory of Language' is found in Wittgenstein's:",
    "options": ["Philosophical Investigations", "Tractatus Logico-Philosophicus", "On Certainty", "Blue and Brown Books"],
    "answer": 1
  },
  {
    "id": 81,
    "text": "The distinction between 'Primary Qualities' and 'Secondary Qualities' was famously proposed by:",
    "options": ["Descartes", "Locke", "Berkeley", "Hume"],
    "answer": 1
  },
  {
    "id": 82,
    "text": "Who among the following is a representative of the 'Frankfurt School'?",
    "options": ["Sartre", "Habermas", "Heidegger", "Husserl"],
    "answer": 1
  },
  {
    "id": 83,
    "text": "The 'Categorical Imperative' is a central concept in the ethics of:",
    "options": ["Mill", "Aristotle", "Kant", "Bentham"],
    "answer": 2
  },
  {
    "id": 84,
    "text": "Which philosopher wrote 'Being and Nothingness'?",
    "options": ["Heidegger", "Sartre", "Husserl", "Merleau-Ponty"],
    "answer": 1
  },
  {
    "id": 85,
    "text": "The term 'Deconstruction' is associated with:",
    "options": ["Foucault", "Derrida", "Lyotard", "Barthes"],
    "answer": 1
  },
  {
    "id": 86,
    "text": "According to Jainism, the state of liberation is called:",
    "options": ["Nirvana", "Kaivalya", "Moksha", "Apavarga"],
    "answer": 1
  },
  {
    "id": 87,
    "text": "The Carvaka school accepts only one Pramana, which is:",
    "options": ["Anumana", "Sabda", "Pratyaksha", "Upamana"],
    "answer": 2
  },
  {
    "id": 88,
    "text": "Which Buddhist school is known as 'Radical Nihilism' or 'Sunyavada'?",
    "options": ["Vaibhashika", "Sautrantika", "Yogacara", "Madhyamika"],
    "answer": 3
  },
  {
    "id": 89,
    "text": "The Nyaya theory of 'Asatkaryavada' means:",
    "options": ["The effect pre-exists in the cause", "The effect is a new creation", "The effect is an illusion", "The cause and effect are identical"],
    "answer": 1
  },
  {
    "id": 90,
    "text": "The Samkhya school is:",
    "options": ["Monistic", "Dualistic", "Pluralistic", "Nihilistic"],
    "answer": 1
  },
  {
    "id": 91,
    "text": "In the context of Indian Ethics, 'Rta' refers to:",
    "options": ["Social Law", "Moral and Cosmic Order", "Individual Desire", "Ritual Action"],
    "answer": 1
  },
  {
    "id": 92,
    "text": "The doctrine of 'Apurva' is associated with which school?",
    "options": ["Nyaya", "Mimamsa", "Vedanta", "Samkhya"],
    "answer": 1
  },
  {
    "id": 93,
    "text": "Who is the author of 'The Life Divine'?",
    "options": ["Vivekananda", "Sri Aurobindo", "Radhakrishnan", "Iqbal"],
    "answer": 1
  },
  {
    "id": 94,
    "text": "Mahatma Gandhi's concept of 'Trusteeship' implies:",
    "options": ["State ownership of property", "Wealth owners acting as managers for society", "Abolition of private property", "Total capitalism"],
    "answer": 1
  },
  {
    "id": 95,
    "text": "Dr. B.R. Ambedkar's philosophical shift towards Buddhism was largely due to its focus on:",
    "options": ["Rituals", "Caste hierarchy", "Liberty, Equality, and Fraternity", "Asceticism"],
    "answer": 2
  },
  {
    "id": 96,
    "text": "The 'Integral Yoga' of Sri Aurobindo aims at:",
    "options": ["Individual liberation", "Transformation of human nature into Divine nature", "Physical health", "Mental peace"],
    "answer": 1
  },
  {
    "id": 97,
    "text": "Who defined 'Religion' as 'the realization of the Divinity already in man'?",
    "options": ["Tagore", "Vivekananda", "Gandhi", "Radhakrishnan"],
    "answer": 1
  },
  {
    "id": 98,
    "text": "The 'Law of Three Stages' (Theological, Metaphysical, Positive) was proposed by:",
    "options": ["Karl Marx", "Auguste Comte", "Max Weber", "Herbert Spencer"],
    "answer": 1
  },
  {
    "id": 99,
    "text": "According to Utilitarianism, the moral worth of an action is determined by its:",
    "options": ["Motive", "Consequences", "Intention", "Legal status"],
    "answer": 1
  },
  {
    "id": 100,
    "text": "Which of the following is NOT one of the 'Four Noble Truths' of Buddhism?",
    "options": ["Dukkha", "Dukkha Samudaya", "Dukkha Nirodha", "Atman"],
    "answer": 3
  },
  {
    "id": 101,
    "text": "In the square of opposition, 'Contrary' relation exists between:",
    "options": ["A and E", "A and I", "E and O", "I and O"],
    "answer": 0
  },
  {
    "id": 102,
    "text": "A 'Fallacy of Equivocation' occurs when:",
    "options": ["A term is used in two different senses", "The conclusion is the same as the premise", "The argument is circular", "The premise is false"],
    "answer": 0
  },
  {
    "id": 103,
    "text": "The 'Principle of Verifiability' was criticized by Karl Popper through his theory of:",
    "options": ["Confirmation", "Falsifiability", "Induction", "Deduction"],
    "answer": 1
  },
  {
    "id": 104,
    "text": "Who among the following is associated with 'Virtue Ethics'?",
    "options": ["Kant", "Mill", "Aristotle", "Sartre"],
    "answer": 2
  },
  {
    "id": 105,
    "text": "The concept of 'Overman' or 'Superman' is found in the philosophy of:",
    "options": ["Hegel", "Marx", "Nietzsche", "Schopenhauer"],
    "answer": 2
  },
  {
    "id": 106,
    "text": "Which school of thought holds that 'Knowledge is Power'?",
    "options": ["Phenomenology", "Marxism", "Modernism", "Post-structuralism (Foucault)"],
    "answer": 3
  },
  {
    "id": 107,
    "text": "The 'Social Contract' theory was supported by:",
    "options": ["Hobbes, Locke, Rousseau", "Plato, Aristotle", "Kant, Hegel", "Marx, Engels"],
    "answer": 0
  },
  {
    "id": 108,
    "text": "According to Logic, a 'Syllogism' consists of how many terms?",
    "options": ["Two", "Three", "Four", "Five"],
    "answer": 1
  },
  {
    "id": 109,
    "text": "The term 'Epistemology' refers to the study of:",
    "options": ["Being", "Knowledge", "Values", "Beauty"],
    "answer": 1
  },
  {
    "id": 110,
    "text": "Who is the author of 'The Republic'?",
    "options": ["Aristotle", "Socrates", "Plato", "Xenophon"],
    "answer": 2
  },
  {
    "id": 111,
    "text": "In Vaisheshika philosophy, 'Abhava' refers to:",
    "options": ["Presence", "Absence/Non-existence", "Motion", "Quality"],
    "answer": 1
  },
  {
    "id": 112,
    "text": "The 'Pancha-mahavratas' are central to:",
    "options": ["Buddhism", "Jainism", "Yoga", "Vedanta"],
    "answer": 1
  },
  {
    "id": 113,
    "text": "Which Vedanta school believes in 'Jivanmukti' (Liberation while living)?",
    "options": ["Advaita", "Visishtadvaita", "Dvaita", "None"],
    "answer": 0
  },
  {
    "id": 114,
    "text": "The concept of 'Vyapti' in Nyaya logic refers to:",
    "options": ["Perception", "Invariable Concomitance", "Analogy", "Testimony"],
    "answer": 1
  },
  {
    "id": 115,
    "text": "According to Yoga, 'Ishvara' is:",
    "options": ["The creator of the world", "A special Purusha untouched by kleshas", "An illusion", "The same as Prakriti"],
    "answer": 1
  },
  {
    "id": 116,
    "text": "Which philosopher wrote 'The Critique of Pure Reason'?",
    "options": ["Hegel", "Kant", "Locke", "Hume"],
    "answer": 1
  },
  {
    "id": 117,
    "text": "The 'Will to Power' is a central theme in:",
    "options": ["Schopenhauer", "Nietzsche", "Heidegger", "Marx"],
    "answer": 1
  },
  {
    "id": 118,
    "text": "The theory of 'Monads' was proposed by:",
    "options": ["Spinoza", "Descartes", "Leibniz", "Berkeley"],
    "answer": 2
  },
  {
    "id": 119,
    "text": "Who is considered the father of 'Modern Philosophy'?",
    "options": ["Bacon", "Descartes", "Kant", "Locke"],
    "answer": 1
  },
  {
    "id": 120,
    "text": "The 'Tractatus Logico-Philosophicus' was written by:",
    "options": ["Russell", "Wittgenstein", "Ayer", "Moore"],
    "answer": 1
  },
  {
    "id": 121,
    "text": "The distinction between 'Knowledge-that' and 'Knowledge-how' was introduced by:",
    "options": ["Gilbert Ryle", "A.J. Ayer", "J.L. Austin", "Richard Rorty"],
    "answer": 0
  },
  {
    "id": 122,
    "text": "According to the Nyaya school, the 'Sadhya' is the:",
    "options": ["Middle term", "Major term", "Minor term", "Example"],
    "answer": 1
  },
  {
    "id": 123,
    "text": "Which among the following is a heterodox (Nastika) school of Indian philosophy?",
    "options": ["Yoga", "Mimamsa", "Jainism", "Vaisheshika"],
    "answer": 2
  },
  {
    "id": 124,
    "text": "The 'Law of Karma' is based on the principle of:",
    "options": ["Chance", "Divine Will", "Moral Causation", "Fatalism"],
    "answer": 2
  },
  {
    "id": 125,
    "text": "In the context of Purusharthas, 'Moksha' represents:",
    "options": ["Material wealth", "Sensual pleasure", "Dharma", "Spiritual liberation"],
    "answer": 3
  },
  {
    "id": 126,
    "text": "Who is the proponent of 'Visishtadvaita' (Qualified Non-dualism)?",
    "options": ["Sankara", "Ramanuja", "Madhva", "Nimbarka"],
    "answer": 1
  },
  {
    "id": 127,
    "text": "The doctrine of 'Syadvada' belongs to:",
    "options": ["Buddhism", "Jainism", "Carvaka", "Nyaya"],
    "answer": 1
  },
  {
    "id": 128,
    "text": "According to the Upanishads, 'Brahman' and 'Atman' are:",
    "options": ["Completely different", "Identical", "Opposites", "Unknowable"],
    "answer": 1
  },
  {
    "id": 129,
    "text": "The 'Eightfold Path' (Ashtangika Marga) is part of:",
    "options": ["Jainism", "Buddhism", "Sankhya", "Yoga"],
    "answer": 1
  },
  {
    "id": 130,
    "text": "Which school accepts 'Arthapatti' (Presumption) as an independent Pramana?",
    "options": ["Nyaya", "Mimamsa", "Carvaka", "Sankhya"],
    "answer": 1
  },
  {
    "id": 131,
    "text": "The 'Unmoved Mover' is a concept in the philosophy of:",
    "options": ["Plato", "Aristotle", "Aquinas", "Descartes"],
    "answer": 1
  },
  {
    "id": 132,
    "text": "Which philosopher wrote 'The Social Contract'?",
    "options": ["Locke", "Hobbes", "Rousseau", "Mill"],
    "answer": 2
  },
  {
    "id": 133,
    "text": "The 'Greatest Happiness Principle' is associated with:",
    "options": ["Deontology", "Virtue Ethics", "Utilitarianism", "Existentialism"],
    "answer": 2
  },
  {
    "id": 134,
    "text": "Who among the following is a 'Rationalist' philosopher?",
    "options": ["Hume", "Locke", "Spinoza", "Berkeley"],
    "answer": 2
  },
  {
    "id": 135,
    "text": "The 'Problem of Evil' is a central issue in:",
    "options": ["Epistemology", "Ethics", "Philosophy of Religion", "Aesthetics"],
    "answer": 2
  },
  {
    "id": 136,
    "text": "The concept of 'Maya' as a creative power of God is found in:",
    "options": ["Advaita Vedanta", "Visishtadvaita", "Sankhya", "Carvaka"],
    "answer": 0
  },
  {
    "id": 137,
    "text": "Who is the author of 'The Critique of Practical Reason'?",
    "options": ["Hegel", "Kant", "Fichte", "Schelling"],
    "answer": 1
  },
  {
    "id": 138,
    "text": "The 'Analogy of the Cave' appears in Plato's:",
    "options": ["Meno", "Phaedo", "The Republic", "Symposium"],
    "answer": 2
  },
  {
    "id": 139,
    "text": "Which philosopher emphasized 'Authenticity' in human existence?",
    "options": ["Heidegger", "Russell", "Carnap", "Quine"],
    "answer": 0
  },
  {
    "id": 140,
    "text": "The term 'Axiology' refers to the study of:",
    "options": ["Knowledge", "Being", "Values", "Logic"],
    "answer": 2
  },
  {
    "id": 141,
    "text": "The 'Law of Contradiction' states that:",
    "options": ["A is A", "A cannot be both B and not-B", "Everything is either A or not-A", "A causes B"],
    "answer": 1
  },
  {
    "id": 142,
    "text": "The concept of 'General Will' was proposed by:",
    "options": ["Locke", "Rousseau", "Montesquieu", "Hegel"],
    "answer": 1
  },
  {
    "id": 143,
    "text": "Who is the founder of the 'Yoga' school of philosophy?",
    "options": ["Kapila", "Patanjali", "Gautama", "Kanada"],
    "answer": 1
  },
  {
    "id": 144,
    "text": "The Vaisheshika school classifies reality into how many 'Padarthas' (Categories)?",
    "options": ["Two", "Five", "Seven", "Nine"],
    "answer": 2
  },
  {
    "id": 145,
    "text": "The Buddhist doctrine of 'Anatta' means:",
    "options": ["No-soul", "Eternal soul", "Universal soul", "Transmigration"],
    "answer": 0
  },
  {
    "id": 146,
    "text": "Which philosopher is known for the 'Theory of Monads'?",
    "options": ["Spinoza", "Descartes", "Leibniz", "Berkeley"],
    "answer": 2
  },
  {
    "id": 147,
    "text": "The 'Logical Atomism' was advocated by:",
    "options": ["Wittgenstein and Russell", "Sartre and Camus", "Husserl and Heidegger", "Locke and Hume"],
    "answer": 0
  },
  {
    "id": 148,
    "text": "The 'Categorical Imperative' is a duty that is:",
    "options": ["Conditional", "Unconditional", "Optional", "Legal"],
    "answer": 1
  },
  {
    "id": 149,
    "text": "In Indian Logic, 'Anumana' stands for:",
    "options": ["Perception", "Inference", "Comparison", "Verbal Testimony"],
    "answer": 1
  },
  {
    "id": 150,
    "text": "The philosophy of 'Suddhadvaita' was propounded by:",
    "options": ["Madhva", "Vallabha", "Nimbarka", "Caitanya"],
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