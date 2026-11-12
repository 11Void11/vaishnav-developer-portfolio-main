import { n as __toESM } from "../_runtime.mjs";
import { n as motion, r as performance_default, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Download, i as ExternalLink, n as Linkedin, o as ArrowUpRight, r as Github, s as ArrowRight, t as Mail } from "../_libs/lucide-react.mjs";
import { a as siJavascript, c as siN8n, d as siReact, f as siScikitlearn, i as siGithub, l as siNodedotjs, m as siTypescript, n as siCplusplus, o as siMongodb, p as siTensorflow, r as siGit, s as siMysql, t as siC, u as siPython } from "../_libs/simple-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BLitruSK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var robot_loader_logo_default = "/assets/robot-loader-logo-DdO2Q5-d.svg";
var WEIGHTS = {
	hydrated: 10,
	fonts: 30,
	assets: 35,
	load: 25
};
var MESSAGES = [
	{
		upTo: 25,
		text: "Warming up the cache"
	},
	{
		upTo: 55,
		text: "Loading fonts and assets"
	},
	{
		upTo: 85,
		text: "Indexing projects"
	},
	{
		upTo: 101,
		text: "Almost there"
	}
];
function messageIndex(progress) {
	const index = MESSAGES.findIndex((message) => progress < message.upTo);
	return index === -1 ? MESSAGES.length - 1 : index;
}
function loadImage(src) {
	return new Promise((resolve) => {
		const img = new Image();
		let settled = false;
		const finish = () => {
			if (settled) return;
			settled = true;
			resolve();
		};
		img.decoding = "async";
		img.onload = finish;
		img.onerror = finish;
		img.src = src;
		if (typeof img.decode === "function") img.decode().then(finish, finish);
	});
}
function PageLoader({ assets = [], minDuration = 1800, maxDuration = 9e3, onReveal }) {
	const [phase, setPhase] = (0, import_react.useState)("loading");
	const [message, setMessage] = (0, import_react.useState)(0);
	const barRef = (0, import_react.useRef)(null);
	const pctRef = (0, import_react.useRef)(null);
	const onRevealRef = (0, import_react.useRef)(onReveal);
	onRevealRef.current = onReveal;
	const assetsKey = assets.join("|");
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		root.classList.add("rd-loading");
		const minMs = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 500 : minDuration;
		const start = performance_default.now();
		const done = {
			hydrated: true,
			fonts: false,
			assets: false,
			load: false
		};
		const timers = [];
		let raf = 0;
		let shown = 0;
		let lastMessage = 0;
		let cancelled = false;
		let forced = false;
		let revealed = false;
		const finish = (step) => () => {
			done[step] = true;
		};
		const fonts = document.fonts;
		(fonts ? Promise.all([
			fonts.load("500 16px \"Space Grotesk Variable\""),
			fonts.load("700 16px \"Space Grotesk Variable\""),
			fonts.load("400 16px \"Space Mono\""),
			fonts.load("400 16px \"Lobster\"")
		]).then(() => fonts.ready) : Promise.resolve()).then(finish("fonts"), finish("fonts"));
		const imageList = assetsKey ? assetsKey.split("|").filter(Boolean) : [];
		Promise.all(imageList.map(loadImage)).then(finish("assets"), finish("assets"));
		const onLoad = finish("load");
		if (document.readyState === "complete") onLoad();
		else window.addEventListener("load", onLoad, { once: true });
		timers.push(window.setTimeout(() => {
			forced = true;
		}, maxDuration));
		const reveal = () => {
			if (revealed) return;
			revealed = true;
			root.classList.remove("rd-loading");
			setPhase("leaving");
			onRevealRef.current?.();
			timers.push(window.setTimeout(() => {
				setPhase("gone");
			}, 850));
		};
		const tick = (now) => {
			if (cancelled) return;
			const elapsed = now - start;
			const target = Object.keys(done).reduce((sum, key) => sum + (done[key] ? WEIGHTS[key] : 0), 0);
			const timeCap = Math.min(100, elapsed / minMs * 100);
			const goal = forced ? 100 : Math.min(target, timeCap);
			shown += (goal - shown) * .12;
			if (goal >= 100 && shown > 99.4) shown = 100;
			if (barRef.current) barRef.current.style.transform = `scaleX(${shown / 100})`;
			if (pctRef.current) pctRef.current.textContent = `${Math.round(shown)}%`;
			const nextMessage = messageIndex(shown);
			if (nextMessage !== lastMessage) {
				lastMessage = nextMessage;
				setMessage(nextMessage);
			}
			if (shown >= 100) {
				reveal();
				return;
			}
			raf = window.requestAnimationFrame(tick);
		};
		raf = window.requestAnimationFrame(tick);
		return () => {
			cancelled = true;
			window.cancelAnimationFrame(raf);
			timers.forEach((timer) => window.clearTimeout(timer));
			window.removeEventListener("load", onLoad);
			root.classList.remove("rd-loading");
		};
	}, [
		assetsKey,
		minDuration,
		maxDuration
	]);
	if (phase === "gone") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rd-loader",
		"data-phase": phase,
		role: "status",
		"aria-live": "polite",
		"aria-label": "Loading portfolio",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rd-loader-grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rd-loader-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-loader-stage",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rd-loader-glow",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "rd-loader-svg rd-loader-art",
						src: robot_loader_logo_default,
						alt: "",
						"aria-hidden": "true",
						draggable: false
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-loader-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rd-loader-title",
							children: ["Booting portfolio", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rd-loader-dots",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rd-loader-status",
							children: MESSAGES[message]?.text
						}, message),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rd-loader-barrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rd-loader-bar",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: barRef })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rd-loader-pct",
								ref: pctRef,
								children: "0%"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `.rd-loader{display:none!important}html.rd-loading{overflow:auto!important}html.rd-loading *{animation-play-state:running!important}` }) })
		]
	});
}
/**
* Portfolio content lives here so project, résumé, experience, and contact edits stay centralized.
* Replace public/assets/profile/vaishnav-k.png or add verified project imagery in public/assets/projects/.
*/
var portfolio = {
	personal: {
		name: "Vaishnav K",
		email: "vaishnav.ack@gmail.com",
		phone: "8891195880",
		github: "https://github.com/11Void11",
		linkedin: "https://www.linkedin.com/in/vaishnav-ack",
		resumePath: "/assets/resume/Vaishnav_K_Resume.pdf",
		resumeFilename: "Vaishnav_K_Resume.pdf"
	},
	navigation: [
		{
			id: "home",
			label: "Home"
		},
		{
			id: "about",
			label: "About"
		},
		{
			id: "experience",
			label: "Experience"
		},
		{
			id: "projects",
			label: "Projects"
		},
		{
			id: "skills",
			label: "Skills"
		},
		{
			id: "certifications",
			label: "Certifications"
		},
		{
			id: "contact",
			label: "Contact"
		}
	],
	hero: {
		headline: "Building Intelligent Software. Engineering Real-World Impact.",
		introduction: "I'm Vaishnav K, a software-focused developer specializing in AI/ML, Data Science, backend systems, and software engineering.",
		supporting: "From building low-level C++ systems and AI-powered diagnostic pipelines to developing event-driven applications and intelligent automation workflows, I enjoy engineering software that solves meaningful problems."
	},
	about: {
		paragraphs: [
			"I'm Vaishnav K, a third-year B.Tech student in Electronics and Communication Engineering, specializing in Data Science at SRM Institute of Science and Technology, Ramapuram.",
			"My primary interests lie in software engineering, backend development, artificial intelligence, machine learning, data science, and systems programming. I enjoy building complete software solutions, working with algorithms and data structures, developing backend services, and bringing intelligent automation into practical applications.",
			"My projects explore in-memory storage systems, explainable AI, event-driven architectures, machine-learning pipelines, and distributed communication. I believe in learning by building and creating technology with meaningful real-world impact."
		],
		academic: {
			course: "B.Tech · ECE (Data Science)",
			years: "2024–2028",
			cgpa: "9.55"
		}
	},
	experience: [{
		role: "Data Science Intern",
		company: "Unified Mentor",
		location: "Remote",
		status: "ONGOING",
		project: "Machine Learning-Based Buyer Segmentation & Investment Profiling",
		contributions: [
			"Segmented 2,000 real-estate customers into four buyer personas.",
			"Applied K-Means and Hierarchical Clustering to $2.5B+ transaction data.",
			"Developed data-driven insights for investor targeting and market intelligence."
		],
		technologies: [
			"Python",
			"Machine Learning",
			"K-Means",
			"Hierarchical Clustering",
			"Data Analytics"
		]
	}, {
		role: "Software Developer Intern",
		company: "Beau Roi Technologies Private Limited",
		location: "Remote",
		status: "INTERNSHIP",
		project: "Backend development for a European client project",
		contributions: [
			"Contributed to a team improvement of 25% in API stability across eight REST APIs.",
			"Worked on backend API development, schema validation, Node.js, and MySQL.",
			"Contributed to a $2M European client project."
		],
		technologies: [
			"Node.js",
			"MySQL",
			"REST APIs",
			"Schema Validation",
			"Backend Development"
		]
	}],
	projects: [
		{
			title: "C++ Redis-Style In-Memory Key-Value Store",
			category: "Systems Programming",
			badge: "Featured Systems Project",
			featured: true,
			description: "Engineered a Redis-inspired in-memory key-value storage system in C, focused on efficient data organization, memory-based storage, persistence, and TCP communication.",
			problem: "Explore how a compact in-memory storage engine can organize key-value data, manage key lifetimes, persist state, and communicate over a network.",
			architecture: "Implemented a custom hash table for key-value storage, Time-To-Live (TTL) expiration, disk-based persistence, and TCP networking using select(). The work explores data structures, efficient access, and systems programming fundamentals.",
			highlights: [
				"Custom hash table",
				"TTL-based key expiration",
				"Disk-based persistence",
				"TCP networking with select()"
			],
			technologies: [
				"C",
				"Hash Tables",
				"Data Structures",
				"TTL",
				"TCP Networking",
				"Systems Programming"
			],
			diagramLabel: "In-Memory Store · Persistence · TCP",
			repository: null
		},
		{
			title: "Industrial Fault Diagnosis via Explainable RAG",
			category: "AI & Machine Learning",
			badge: "Explainable AI Pipeline",
			featured: true,
			description: "An intelligent industrial fault diagnosis pipeline that combines machine learning, deep learning, and Retrieval-Augmented Generation to turn sensor anomalies into actionable maintenance information.",
			problem: "Industrial sensor anomalies can be difficult to interpret quickly; the project explored connecting detected signals with useful context for maintenance diagnosis.",
			architecture: "Built an Autoencoder–LSTM anomaly-detection pipeline around more than 10,000 sensor records, then integrated retrieval-augmented generation for contextual retrieval and explainable diagnosis.",
			highlights: [
				"10,000+ sensor records",
				"Autoencoder–LSTM anomaly detection",
				"RAG-based contextual diagnosis",
				"35% reduction in false-anomaly impact and 40% less diagnosis time, as reported"
			],
			technologies: [
				"Python",
				"Machine Learning",
				"Deep Learning",
				"Autoencoder–LSTM",
				"RAG",
				"NLP"
			],
			diagramLabel: "Sensor Data · Anomaly Model · Retrieval · Diagnosis",
			repository: null
		},
		{
			title: "Drive.Net — Intelligent V2V/V2I Safety Network",
			category: "Event-Driven Systems",
			badge: "Featured Safety Prototype",
			featured: true,
			description: "A vehicle-safety proof of concept combining event processing, wireless communication, workflow automation, and alert generation to demonstrate road-hazard and vehicle-incident communication.",
			problem: "Explore how vehicle and infrastructure safety events could be validated, routed, and communicated through a distributed prototype architecture.",
			architecture: "The n8n workflow validates and normalizes demonstration events, routes road-hazard (V2I) and simulated vehicle-incident (V2V) events through separate branches, generates human-readable messages, and delivers Telegram demo notifications. The architecture separates a local communication path from the monitoring and automation layer, and explores ESP-NOW and local Wi-Fi exchange.",
			highlights: [
				"Separate V2I and V2V event branches",
				"Event validation, normalization, and conditional routing",
				"Two sample Telegram notifications successfully delivered",
				"Distributed safety communication and automation architecture"
			],
			technologies: [
				"C/C++",
				"n8n",
				"Telegram Bot API",
				"ESP-NOW",
				"Wi-Fi",
				"Event-Driven Design"
			],
			currentStatus: "Engineering prototype and proof of concept. The current workflow begins with a Manual Trigger and demonstration data; it does not receive live rover telemetry. Live hazard prediction and public emergency alerts are not validated. Excel event logging is not confirmed operational.",
			diagramLabel: "Local Safety Path · Event Router · Telegram Demo",
			repository: null
		},
		{
			title: "AI-Powered Smart Grid Monitoring & Self-Healing System",
			category: "Intelligent Automation",
			badge: "Group Project",
			featured: false,
			description: "An AI-assisted monitoring and fault-response solution combining predictive machine-learning concepts, workflow automation, and remote monitoring for rural microgrids.",
			problem: "Explore software-assisted monitoring and response workflows for rural microgrid conditions.",
			architecture: "Combined a monitoring architecture, predictive machine-learning concepts, automated alert workflows, and remote monitoring and response mechanisms using cloud-connected and workflow tools.",
			highlights: [
				"Real-time monitoring architecture",
				"Predictive machine-learning concepts",
				"Automated alerts and remote response mechanisms"
			],
			technologies: [
				"Python",
				"Machine Learning",
				"Blynk Cloud",
				"n8n",
				"Twilio",
				"ESP32"
			],
			diagramLabel: "Monitoring · Predictive Signals · Alert Workflow",
			repository: null
		},
		{
			title: "AI-Based Electronic Device Classifier",
			category: "Deep Learning",
			badge: "Group Project",
			featured: false,
			description: "A TensorFlow deep-learning classifier that distinguishes BJT and FET devices from their I–V characteristics using an automated simulated-data pipeline.",
			problem: "Explore classification of BJT and FET devices from I–V curves by creating a consistent dataset and training a deep-learning model.",
			architecture: "Processed more than 5,000 simulated LTspice models and built a TensorFlow classification pipeline. The reported result was 100% accuracy on the validation dataset.",
			highlights: [
				"5,000+ simulated LTspice models",
				"Automated data processing",
				"TensorFlow classification pipeline",
				"100% accuracy on the reported validation dataset"
			],
			technologies: [
				"Python",
				"TensorFlow",
				"Deep Learning",
				"LTspice",
				"Data Processing"
			],
			diagramLabel: "Simulated I–V Data · Processing · Classifier",
			repository: null
		},
		{
			title: "VASNOVA — Smart EV Solar Charging & Energy Monitoring",
			category: "Undergraduate Research",
			badge: "Ongoing Research",
			featured: false,
			description: "An ongoing undergraduate research project developing an energy-monitoring and EV solar-charging platform through connected systems, workflow automation, and predictive analytics.",
			problem: "Investigate an integrated software approach to energy monitoring, solar charging, and intelligent control concepts.",
			architecture: "The developing platform connects monitoring, predictive fault-detection concepts, automated alert workflows, and intelligent charging-control ideas using software, network, and cloud tools.",
			highlights: [
				"Connected energy-monitoring architecture",
				"Predictive fault-detection concepts",
				"Automated alert workflows",
				"Intelligent charging-control concepts"
			],
			technologies: [
				"Python",
				"Wi-Fi",
				"Bluetooth",
				"Blynk Cloud",
				"n8n",
				"AI / ML"
			],
			currentStatus: "Ongoing undergraduate research project.",
			diagramLabel: "Energy Data · Monitoring · Automation",
			repository: null
		}
	],
	skills: [
		{
			title: "Programming languages",
			items: [
				"C",
				"C++",
				"Python",
				"SQL",
				"JavaScript",
				"TypeScript"
			]
		},
		{
			title: "Software engineering",
			items: [
				"Data Structures",
				"Algorithms",
				"Systems Programming",
				"Backend Development",
				"REST APIs",
				"TCP Networking",
				"Object-Oriented Programming"
			]
		},
		{
			title: "AI · ML · data science",
			items: [
				"Machine Learning",
				"Deep Learning",
				"Scikit-learn",
				"TensorFlow",
				"RAG",
				"Data Analytics",
				"Data Processing"
			]
		},
		{
			title: "Developer tools",
			items: [
				"Git",
				"GitHub",
				"VS Code",
				"Jupyter Notebook",
				"MATLAB"
			]
		},
		{
			title: "Databases · automation",
			items: [
				"MySQL",
				"MongoDB",
				"n8n",
				"Blynk",
				"Twilio"
			]
		}
	],
	technologies: [
		{
			name: "C",
			simpleIcon: "siC",
			category: "Programming"
		},
		{
			name: "C++",
			simpleIcon: "siCplusplus",
			category: "Programming"
		},
		{
			name: "Python",
			simpleIcon: "siPython",
			category: "Programming"
		},
		{
			name: "JavaScript",
			simpleIcon: "siJavascript",
			category: "Programming"
		},
		{
			name: "TypeScript",
			simpleIcon: "siTypescript",
			category: "Programming"
		},
		{
			name: "React",
			simpleIcon: "siReact",
			category: "Software"
		},
		{
			name: "Node.js",
			simpleIcon: "siNodedotjs",
			category: "Software"
		},
		{
			name: "Git",
			simpleIcon: "siGit",
			category: "Software"
		},
		{
			name: "GitHub",
			simpleIcon: "siGithub",
			category: "Software"
		},
		{
			name: "TensorFlow",
			simpleIcon: "siTensorflow",
			category: "AI & Data"
		},
		{
			name: "Scikit-learn",
			simpleIcon: "siScikitlearn",
			category: "AI & Data"
		},
		{
			name: "MongoDB",
			simpleIcon: "siMongodb",
			category: "Databases"
		},
		{
			name: "MySQL",
			simpleIcon: "siMysql",
			category: "Databases"
		},
		{
			name: "n8n",
			simpleIcon: "siN8n",
			category: "Automation"
		}
	],
	certifications: [
		{
			name: "Data Analytics with Python",
			issuer: "NPTEL · IIT Roorkee",
			date: null
		},
		{
			name: "MongoDB Basics for Students",
			issuer: "MongoDB",
			date: "JUNE 2025"
		},
		{
			name: "RAG with MongoDB",
			issuer: "MongoDB",
			date: "JULY 2026"
		},
		{
			name: "Oracle Database for Developers: Foundation’s Course",
			issuer: "Oracle",
			date: null
		},
		{
			name: "Automated Machine Learning for Beginners",
			issuer: "Google & Apple · Udemy",
			date: null
		}
	]
};
var vaishnav_portrait_default = "/assets/vaishnav-portrait-B3krUdlO.png";
var DIY_Robotic_Car_Platform_with_Colorful_Wiring_default = "/assets/DIY%20Robotic%20Car%20Platform%20with%20Colorful%20Wiring-BVaq-0QF.png";
var drivenet_workflow_neatly_arranged_default = "/assets/drivenet-workflow-neatly-arranged-BVjLuqUh.svg";
var microgrid_rag_workflow_high_resolution_default = "/assets/microgrid-rag-workflow-high-resolution-DYZs4d83.svg";
var industrial_fault_diagnosis_rag_default = "/assets/industrial-fault-diagnosis-rag-p6xbyh1G.svg";
var redis_kv_store_minimal_default = "/assets/redis-kv-store-minimal-CpMENXYe.svg";
var solar_energy_default = "/assets/solar%20energy-eUkxEY-K.png";
var simpleIconMap = {
	siC,
	siCplusplus,
	siPython,
	siJavascript,
	siTypescript,
	siReact,
	siNodedotjs,
	siGit,
	siGithub,
	siTensorflow,
	siScikitlearn,
	siMongodb,
	siMysql,
	siN8n
};
/**
* Each project becomes a "problem" tab, like the "What's your problem?" panel on redis.io.
* Keys must match `title` in portfolio.projects. Unknown titles fall back to the title itself.
*/
var projectMeta = {
	"C++ Redis-Style In-Memory Key-Value Store": {
		tab: "Slow data access",
		headline: "Keep hot data in memory, right where it's needed."
	},
	"Industrial Fault Diagnosis via Explainable RAG": {
		tab: "Silent machine faults",
		headline: "Turn sensor noise into a diagnosis you can trust."
	},
	"Drive.Net — Intelligent V2V/V2I Safety Network": {
		tab: "Blind mountain roads",
		headline: "Warn drivers before the fog does."
	},
	"AI-Powered Smart Grid Monitoring & Self-Healing System": {
		tab: "Unstable rural grids",
		headline: "Spot faults early. Respond automatically."
	},
	"AI-Based Electronic Device Classifier": {
		tab: "Manual device sorting",
		headline: "Tell a BJT from a FET in one look."
	},
	"VASNOVA — Smart EV Solar Charging & Energy Monitoring": {
		tab: "Wasted solar energy",
		headline: "Charge smarter with the sun you already have."
	}
};
var marqueeTechnologies = portfolio.technologies.flatMap((technology) => "simpleIcon" in technology ? [technology] : []);
var desktopNav = portfolio.navigation.filter(({ id }) => id !== "home" && id !== "contact");
function PortfolioPage() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("home");
	const [activeProject, setActiveProject] = (0, import_react.useState)(0);
	const reduceMotion = useReducedMotion();
	useHeroGridReveal();
	const project = portfolio.projects[activeProject] ?? portfolio.projects[0];
	(0, import_react.useEffect)(() => {
		const observers = portfolio.navigation.map(({ id }) => document.getElementById(id)).filter((item) => item !== null).map((section) => {
			const observer = new IntersectionObserver(([entry]) => {
				if (entry?.isIntersecting) setActiveSection(section.id);
			}, { rootMargin: "-32% 0px -58% 0px" });
			observer.observe(section);
			return observer;
		});
		return () => observers.forEach((observer) => observer.disconnect());
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		const onKey = (event) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		const onResize = () => {
			if (window.innerWidth >= 1200) setMenuOpen(false);
		};
		window.addEventListener("keydown", onKey);
		window.addEventListener("resize", onResize);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("resize", onResize);
		};
	}, [menuOpen]);
	const closeMenu = () => setMenuOpen(false);
	const navigateFromMenu = (event, id) => {
		const target = document.getElementById(id);
		if (!target) return;
		event.preventDefault();
		setMenuOpen(false);
		document.body.style.overflow = "";
		const headerHeight = document.querySelector(".rd-header")?.offsetHeight ?? 0;
		const destination = () => id === "home" ? 0 : Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight);
		requestAnimationFrame(() => requestAnimationFrame(() => {
			const startY = window.scrollY;
			window.scrollTo({
				top: destination(),
				behavior: reduceMotion ? "auto" : "smooth"
			});
			window.setTimeout(() => {
				if (Math.abs(window.scrollY - startY) < 2 && Math.abs(window.scrollY - destination()) > 8) window.scrollTo({
					top: destination(),
					behavior: "instant"
				});
			}, 400);
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-rd-bg text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLoader, { assets: [
				vaishnav_portrait_default,
				DIY_Robotic_Car_Platform_with_Colorful_Wiring_default,
				drivenet_workflow_neatly_arranged_default,
				microgrid_rag_workflow_high_resolution_default,
				industrial_fault_diagnosis_rag_default,
				redis_kv_store_minimal_default,
				solar_energy_default
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rd-banner",
				"aria-label": "Status notice",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rd-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open to software engineering and AI/ML internships and roles." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "rd-header",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "rd-container rd-nav",
					"aria-label": "Main navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "rd-logo",
							href: "#home",
							"aria-label": `${portfolio.personal.name}, home`,
							children: "vaishnav"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "rd-pill",
							href: "#projects",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rd-dot" }), " Portfolio"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rd-nav-links",
							children: desktopNav.map(({ id, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${id}`,
								className: `rd-nav-link ${activeSection === id ? "rd-nav-link-active" : ""}`,
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rd-nav-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rd-icon-btn",
									href: portfolio.personal.github,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "GitHub",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-[18px] w-[18px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rd-icon-btn",
									href: portfolio.personal.linkedin,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "LinkedIn",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-[18px] w-[18px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rd-btn rd-btn-red rd-btn-nav",
									href: "#contact",
									children: "Get in touch"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "rd-menubtn",
							"aria-label": "Open menu",
							"aria-expanded": menuOpen,
							onClick: () => setMenuOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rd-menubtn-label",
								children: "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rd-menubtn-icon",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `rd-menu ${menuOpen ? "rd-menu-open" : ""}`,
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Menu",
				"aria-hidden": !menuOpen,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rd-menu-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "rd-logo",
							href: "#home",
							onClick: (event) => navigateFromMenu(event, "home"),
							children: "vaishnav"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "rd-menubtn rd-menubtn-close",
							"aria-label": "Close menu",
							onClick: closeMenu,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rd-menubtn-label",
								children: "Close"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rd-menubtn-icon rd-menubtn-icon-x",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									width: "14",
									height: "14",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.6",
									strokeLinecap: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 6L6 18" })
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "rd-menu-links",
						children: portfolio.navigation.map(({ id, label }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `#${id}`,
							onClick: (event) => navigateFromMenu(event, id),
							style: { transitionDelay: menuOpen ? `${80 + index * 45}ms` : "0ms" },
							className: `rd-menu-link ${activeSection === id ? "rd-menu-link-active" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5" })]
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rd-menu-foot",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								onClick: (event) => navigateFromMenu(event, "contact"),
								className: "rd-btn rd-btn-red",
								children: "Get in touch"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: portfolio.personal.resumePath,
								download: portfolio.personal.resumeFilename,
								className: "rd-btn rd-btn-dark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download résumé"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rd-menu-social",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rd-icon-btn",
									href: portfolio.personal.github,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "GitHub",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-[18px] w-[18px]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rd-icon-btn",
									href: portfolio.personal.linkedin,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "LinkedIn",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-[18px] w-[18px]" })
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rd-hero",
				id: "home",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rd-hero-art",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rd-hero-art-inner",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rd-hero-art-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rd-hero-art-photo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "rd-hero-art-img",
								src: vaishnav_portrait_default,
								alt: portfolio.personal.name,
								fetchPriority: "high",
								decoding: "async"
							})
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-container flex flex-col items-center pb-20 pt-20 text-center md:pb-28 md:pt-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.figure, {
							className: "rd-portrait lg:hidden",
							initial: reduceMotion ? false : {
								opacity: 0,
								y: 40,
								scale: .96
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							transition: {
								duration: 1.1,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rd-portrait-float",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "rd-portrait-img",
									src: vaishnav_portrait_default,
									alt: portfolio.personal.name,
									fetchPriority: "high",
									decoding: "async"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							className: "rd-headline",
							initial: reduceMotion ? false : {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .7 },
							children: [
								"Building intelligent software.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Engineering real-world impact."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							className: "rd-hero-sub mt-8",
							initial: reduceMotion ? false : {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .12
							},
							children: [
								"I'm ",
								portfolio.personal.name,
								". I build fast backend systems and AI pipelines that work in the real world, not just in a notebook."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "mt-12 flex flex-wrap items-center justify-center gap-5",
							initial: reduceMotion ? false : {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .22
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "rd-btn rd-btn-red",
								children: "Explore projects"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: portfolio.personal.resumePath,
								download: portfolio.personal.resumeFilename,
								className: "rd-btn rd-btn-dark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download résumé"]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pb-16 pt-4 md:pb-20",
				"aria-label": "Technologies and tools",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rd-marquee-mask",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rd-marquee-track",
						children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rd-marquee-group",
							"aria-hidden": copy > 0,
							children: marqueeTechnologies.map((technology) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rd-marquee-item",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleLogo, { iconName: technology.simpleIcon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: technology.name })]
							}, `${copy}-${technology.name}`))
						}, copy))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-center text-base text-rd-sub",
					children: "Built with the tools fast engineering teams rely on"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-16 md:pb-24",
				id: "projects",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionHeading, { children: [
							"What's your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-rd-lime",
								children: "problem"
							}),
							"?"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rd-panel hidden md:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rd-tabs",
								role: "tablist",
								"aria-label": "Projects",
								children: portfolio.projects.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": activeProject === index,
									onClick: () => setActiveProject(index),
									className: `rd-tab ${activeProject === index ? "rd-tab-active" : ""}`,
									children: projectMeta[item.title]?.tab ?? item.title
								}, item.title))
							}), project && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectPanel, {
								project,
								index: activeProject
							}, project.title)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemStack, {})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-rd-deep py-16 md:py-24",
				id: "about",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-container grid gap-10 lg:grid-cols-12 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rd-label",
							children: "About"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl md:text-[48px] md:leading-[1.1]",
							children: ["Learn by building. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-rd-red",
								children: "Ship what matters."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-w-[640px] space-y-5",
							children: portfolio.about.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[18px]",
								children: paragraph
							}, paragraph))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "rd-facts",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "rd-label rd-label-mute",
									children: "Degree"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: portfolio.about.academic.course })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "rd-label rd-label-mute",
									children: "Years"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono",
									children: portfolio.about.academic.years
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "rd-label rd-label-mute",
									children: "CGPA"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono",
									children: [portfolio.about.academic.cgpa, " / 10"]
								})] })
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 md:py-24",
				id: "experience",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionHeading, { children: [
						"Proven in ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-rd-lime",
							children: "production"
						}),
						"."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 lg:grid-cols-2",
						children: portfolio.experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `rd-card rd-experience-card flex flex-col p-8 md:p-10 ${item.company.toLowerCase().includes("beau roi") ? "rd-experience-card-beau-roi" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-6 flex flex-wrap items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rd-label text-rd-red",
										children: item.company
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs tracking-wider text-rd-lime",
										children: item.status
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl leading-tight",
									children: item.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-5 mt-2 text-[16px] text-rd-mute",
									children: item.location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 text-[16px] text-white",
									children: item.project
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "rd-points mb-8 text-rd-sub",
									children: item.contributions.map((contribution) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: contribution }, contribution))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rd-stack mt-auto border-t border-rd-line pt-6",
									children: item.technologies.join(" · ")
								})
							]
						}, item.company))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-rd-deep py-16 md:py-24",
				id: "skills",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-container",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionHeading, {
							className: "mb-4",
							children: [
								"The tools behind the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-rd-lime",
									children: "thinking"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-12 max-w-2xl text-[18px]",
							children: "From memory management in C and C++ to deep learning pipelines in TensorFlow and automated workflows in n8n."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rd-skill-rows",
							children: portfolio.skills.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rd-skill-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "rd-skill-title",
									children: group.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: group.items.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rd-chip",
										children: skill
									}, skill))
								})]
							}, group.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-16 md:py-24",
				id: "certifications",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-container",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { children: "Credentials" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "rd-ledger",
						children: portfolio.certifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rd-ledger-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg",
								children: cert.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[15px] text-rd-mute",
								children: cert.issuer
							})] }), cert.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "whitespace-nowrap font-mono text-xs text-rd-mute",
								children: cert.date
							})]
						}, cert.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-rd-deep py-20 md:py-28",
				id: "contact",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-container text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-sans text-[clamp(34px,5.4vw,80px)] font-bold uppercase leading-[1.02] tracking-[-0.03em]",
							children: "Let's build something meaningful."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mb-10 mt-6 max-w-xl text-[19px] text-white",
							children: "Have an engineering problem, an AI system to scale, or an opportunity to explore? I'd like to hear about it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-12 flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${portfolio.personal.email}`,
								className: "rd-btn rd-btn-red",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Start a conversation"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: portfolio.personal.resumePath,
								download: portfolio.personal.resumeFilename,
								className: "rd-btn rd-btn-dark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download résumé"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-rd-line pt-8 text-[15px] text-rd-sub",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${portfolio.personal.email}`,
									className: "transition-colors hover:text-white",
									children: portfolio.personal.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:+91${portfolio.personal.phone}`,
									className: "transition-colors hover:text-white",
									children: ["+91 ", portfolio.personal.phone]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: portfolio.personal.github,
									target: "_blank",
									rel: "noreferrer",
									className: "transition-colors hover:text-white",
									children: "GitHub"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: portfolio.personal.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "transition-colors hover:text-white",
									children: "LinkedIn"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-rd-line-soft bg-[#050f15] px-6 py-8 text-sm text-rd-mute",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rd-container flex flex-col items-center justify-between gap-4 px-0 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-logo text-2xl text-rd-red",
							children: "vaishnav"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Engineered with intention and speed" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#home",
							className: "transition-colors hover:text-white",
							children: "Back to top ↑"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" ",
							portfolio.personal.name
						] })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatPill, { href: `mailto:${portfolio.personal.email}?subject=Hi%20Vaishnav%2C%20let’s%20connect` })
		]
	});
}
var projectArtwork = {
	"C++ Redis-Style In-Memory Key-Value Store": {
		images: [redis_kv_store_minimal_default],
		alt: "Redis-style in-memory key-value store architecture"
	},
	"Industrial Fault Diagnosis via Explainable RAG": {
		images: [industrial_fault_diagnosis_rag_default],
		alt: "Industrial fault diagnosis and explainable RAG architecture"
	},
	"Drive.Net — Intelligent V2V/V2I Safety Network": {
		images: [DIY_Robotic_Car_Platform_with_Colorful_Wiring_default, drivenet_workflow_neatly_arranged_default],
		alt: "Drive.Net rover platform and V2V/V2I safety workflow"
	},
	"AI-Powered Smart Grid Monitoring & Self-Healing System": {
		images: [microgrid_rag_workflow_high_resolution_default],
		alt: "Microgrid RAG monitoring workflow"
	},
	"VASNOVA — Smart EV Solar Charging & Energy Monitoring": {
		images: [solar_energy_default],
		href: "https://vasnova-delta.vercel.app/",
		alt: "VASNOVA solar-powered electric vehicle charging concept"
	}
};
function ProjectVisual({ projectTitle, compact = false }) {
	const artwork = projectArtwork[projectTitle];
	if (!artwork) return null;
	const visual = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `rd-project-visual${compact ? " rd-project-visual-compact" : ""}${artwork.images.length > 1 ? " rd-project-visual-slideshow" : ""}`,
		"data-image-count": artwork.images.length,
		children: artwork.images.map((src, imageIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: imageIndex === 0 ? artwork.alt : `${artwork.alt} — alternate view`,
			className: `rd-project-visual-img rd-project-visual-img-${imageIndex + 1}`,
			loading: "lazy",
			decoding: "async"
		}, src))
	});
	return artwork.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: "rd-project-visual-link",
		href: artwork.href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": `Open ${projectTitle} website`,
		children: visual
	}) : visual;
}
function ProjectPanel({ project, index }) {
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const meta = projectMeta[project.title];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "tabpanel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 px-6 pb-12 pt-10 md:px-11 lg:grid-cols-12 lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rd-label",
							children: [project.category, project.badge ? ` · ${project.badge}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 max-w-[520px] text-[34px] leading-[1.12] md:text-[40px]",
							children: meta?.headline ?? project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[15px] text-rd-mute",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-[540px] text-[18px] text-white",
							children: project.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "rd-learn",
								onClick: () => setExpanded((value) => !value),
								"aria-expanded": expanded,
								children: [expanded ? "Close case study" : "Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: `h-4 w-4 transition-transform ${expanded ? "-rotate-90" : ""}` })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, { projectTitle: project.title }), !projectArtwork[project.title] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IsoHub, { seed: index })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid border-t border-rd-line md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 md:px-11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rd-label rd-label-mute",
						children: "Highlights"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "rd-points mt-4",
						children: project.highlights.map((highlight) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: highlight }, highlight))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 md:px-11",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rd-label rd-label-mute",
						children: "Built with"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rd-stack mt-4",
						children: project.technologies.join(" · ")
					})]
				})]
			}),
			expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 border-t border-rd-line p-8 md:grid-cols-2 md:px-11 animate-in fade-in slide-in-from-top-2 duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rd-label text-rd-red",
						children: "The problem"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[16px]",
						children: project.problem
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rd-label text-rd-lime",
						children: "The architecture"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[16px]",
						children: project.architecture
					})] }),
					"currentStatus" in project && project.currentStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rd-label rd-label-mute",
							children: "Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[15px]",
							children: project.currentStatus
						})]
					}),
					project.repository && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.repository,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 font-medium text-rd-red hover:underline",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }),
								" View GitHub repository ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
							]
						})
					})
				]
			})
		]
	});
}
var RED = "#ff4438";
var RED_FILL = "#8f2622";
function Glyph({ kind, x, y, s = 1 }) {
	const k = (kind % 4 + 4) % 4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${x} ${y}) scale(${s})`,
		fill: "none",
		stroke: RED,
		strokeWidth: "1.5",
		strokeLinejoin: "round",
		children: [
			k === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "0,-26 18,0 0,26 -18,0",
				fill: RED_FILL
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M-18 0H18M0 -26V26" })] }),
			k === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				r: "20",
				fill: RED_FILL
			}),
			k === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "0,-24 21,-12 21,12 0,24 -21,12 -21,-12",
				fill: RED_FILL
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 0V24M0 0L-21 -12M0 0L21 -12" })] }),
			k === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "0,-24 23,-8 14,20 -14,20 -23,-8",
				fill: RED_FILL
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 -24L-14 20M0 -24L14 20M-23 -8H23" })] })
		]
	});
}
function Satellite({ cx, cy, kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: `M${cx - 62} ${cy + 64}v10a62 21 0 0 0 124 0v-10`,
			fill: "#3a1a1f",
			stroke: RED,
			strokeWidth: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx,
			cy: cy + 64,
			rx: "62",
			ry: "21",
			fill: "#0b1d27",
			stroke: RED,
			strokeWidth: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx,
			cy: cy + 64,
			rx: "38",
			ry: "13",
			fill: "none",
			stroke: RED,
			strokeWidth: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx,
			cy,
			r: "52",
			fill: "#0d212c",
			stroke: RED,
			strokeWidth: "1.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
			kind,
			x: cx,
			y: cy
		})
	] });
}
function IsoHub({ seed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 600 440",
		className: "mx-auto h-auto w-full max-w-[560px]",
		role: "img",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: RED,
				strokeWidth: "1.2",
				fill: "none",
				className: "rd-iso-flow",
				opacity: "0.8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M150 120L240 215" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M450 120L360 215" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M150 312L240 290" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M450 312L360 290" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M150 300v26a150 54 0 0 0 300 0v-26",
					fill: "#3a1a1f",
					stroke: RED,
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "300",
					cy: "300",
					rx: "150",
					ry: "54",
					fill: "#0b1d27",
					stroke: RED,
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "300",
					cy: "300",
					rx: "14",
					ry: "6",
					fill: "none",
					stroke: RED,
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "190",
					cy: "305",
					rx: "12",
					ry: "5",
					fill: "none",
					stroke: RED,
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "410",
					cy: "305",
					rx: "12",
					ry: "5",
					fill: "none",
					stroke: RED,
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "222",
					y: "168",
					width: "156",
					height: "140",
					rx: "70",
					fill: RED_FILL,
					stroke: RED,
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
					kind: seed,
					x: 268,
					y: 218,
					s: .8
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
					kind: seed + 2,
					x: 336,
					y: 226,
					s: .9
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "262",
					cy: "278",
					r: "22",
					fill: "#4a1816",
					stroke: RED,
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
					kind: seed + 3,
					x: 338,
					y: 282,
					s: .8
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Satellite, {
				cx: 110,
				cy: 70,
				kind: seed
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Satellite, {
				cx: 490,
				cy: 70,
				kind: seed + 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Satellite, {
				cx: 90,
				cy: 318,
				kind: seed + 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Satellite, {
				cx: 510,
				cy: 318,
				kind: seed + 3
			})
		]
	});
}
function SimpleLogo({ iconName }) {
	const icon = simpleIconMap[iconName];
	if (!icon) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "h-7 w-7 fill-current",
		role: "img",
		"aria-label": `${icon.title} logo`,
		viewBox: "0 0 24 24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: icon.path })
	});
}
function SectionHeading({ children, className = "mb-12" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: `${className} text-4xl md:text-[48px] md:leading-[1.1]`,
		children
	});
}
function ChatPill({ href }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [hovered, setHovered] = (0, import_react.useState)(false);
	const reduceMotion = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const open = !scrolled || hovered;
	const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
	const dur = reduceMotion ? "0s" : "0.5s";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		"aria-label": "Email Vaishnav",
		onPointerEnter: (event) => {
			if (event.pointerType === "mouse") setHovered(true);
		},
		onPointerLeave: () => setHovered(false),
		onFocus: (event) => {
			if (event.currentTarget.matches(":focus-visible")) setHovered(true);
		},
		onBlur: () => setHovered(false),
		style: {
			position: "fixed",
			right: "clamp(14px, 2vw, 24px)",
			bottom: "calc(clamp(14px, 2vw, 24px) + env(safe-area-inset-bottom, 0px))",
			zIndex: 60,
			display: "flex",
			alignItems: "center",
			boxSizing: "border-box",
			height: 60,
			padding: open ? "10px 28px 10px 10px" : "10px",
			borderRadius: 9999,
			background: "#ffffff",
			color: "#091a23",
			fontSize: 16,
			fontWeight: 500,
			textDecoration: "none",
			boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
			transition: `padding ${dur} ${ease}`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			style: {
				flex: "none",
				display: "grid",
				placeItems: "center",
				width: 40,
				height: 40,
				borderRadius: 9999,
				background: "#ff4438",
				color: "#ffffff",
				fontFamily: "\"Lobster\", \"Pacifico\", cursive",
				fontSize: 24,
				fontWeight: 400,
				lineHeight: 1,
				textTransform: "none",
				paddingBottom: 3
			},
			children: "v"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				display: "inline-block",
				overflow: "hidden",
				whiteSpace: "nowrap",
				maxWidth: open ? 180 : 0,
				marginLeft: open ? 14 : 0,
				opacity: open ? 1 : 0,
				transition: `max-width ${dur} ${ease}, margin-left ${dur} ${ease}, opacity 0.25s ease`
			},
			children: "Ask Vaishnav"
		})]
	});
}
function useHeroGridReveal() {
	(0, import_react.useEffect)(() => {
		const hero = document.querySelector(".rd-hero");
		if (!hero) return;
		const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		if (!finePointer.matches || reducedMotion.matches) return;
		let frame = 0;
		let snapFrame1 = 0;
		let snapFrame2 = 0;
		let x = 0;
		let y = 0;
		const paint = () => {
			frame = 0;
			hero.style.setProperty("--mouse-x", `${x}px`);
			hero.style.setProperty("--mouse-y", `${y}px`);
		};
		const onMove = (event) => {
			if (event.pointerType !== "mouse") return;
			const rect = hero.getBoundingClientRect();
			x = event.clientX - rect.left;
			y = event.clientY - rect.top;
			if (hero.getAttribute("data-grid-active") !== "true") {
				hero.setAttribute("data-grid-snap", "true");
				hero.style.setProperty("--mouse-x", `${x}px`);
				hero.style.setProperty("--mouse-y", `${y}px`);
				hero.setAttribute("data-grid-active", "true");
				snapFrame1 = requestAnimationFrame(() => {
					snapFrame2 = requestAnimationFrame(() => {
						hero.removeAttribute("data-grid-snap");
					});
				});
				return;
			}
			if (!frame) frame = requestAnimationFrame(paint);
		};
		const onLeave = () => {
			hero.setAttribute("data-grid-active", "false");
		};
		hero.addEventListener("pointermove", onMove, { passive: true });
		hero.addEventListener("pointerleave", onLeave);
		hero.addEventListener("pointercancel", onLeave);
		return () => {
			hero.removeEventListener("pointermove", onMove);
			hero.removeEventListener("pointerleave", onLeave);
			hero.removeEventListener("pointercancel", onLeave);
			if (frame) cancelAnimationFrame(frame);
			if (snapFrame1) cancelAnimationFrame(snapFrame1);
			if (snapFrame2) cancelAnimationFrame(snapFrame2);
			hero.removeAttribute("data-grid-active");
			hero.removeAttribute("data-grid-snap");
			hero.style.removeProperty("--mouse-x");
			hero.style.removeProperty("--mouse-y");
		};
	}, []);
}
function ProblemStack() {
	const listRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	const reduceMotion = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const cards = Array.from(listRef.current?.querySelectorAll("[data-problem-card]") ?? []);
		if (!cards.length) return;
		if (reduceMotion || typeof IntersectionObserver === "undefined") {
			cards.forEach((card) => card.setAttribute("data-seen", "true"));
			return;
		}
		const seen = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.setAttribute("data-seen", "true");
			seen.unobserve(entry.target);
		}), { threshold: .1 });
		const focus = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) setActive(Number(entry.target.getAttribute("data-index")));
		}), { rootMargin: "-45% 0px -45% 0px" });
		cards.forEach((card) => {
			seen.observe(card);
			focus.observe(card);
		});
		return () => {
			seen.disconnect();
			focus.disconnect();
		};
	}, [reduceMotion]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rd-problems md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "rd-problem-list",
			ref: listRef,
			children: portfolio.projects.map((item, index) => {
				const meta = projectMeta[item.title];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rd-problem",
					"data-problem-card": true,
					"data-index": index,
					"data-active": active === index,
					"data-passed": index <= active,
					"data-line": index < active,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rd-problem-dot",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rd-problem-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rd-label",
								children: [item.category, item.badge ? ` · ${item.badge}` : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "rd-problem-title",
								children: meta?.headline ?? item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rd-problem-name",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, {
								projectTitle: item.title,
								compact: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rd-problem-desc",
								children: item.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "rd-points rd-problem-points",
								children: item.highlights.map((highlight) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: highlight }, highlight))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rd-stack",
								children: item.technologies.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "rd-problem-more",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rd-problem-more-body",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rd-label text-rd-red",
											children: "The problem"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.problem }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rd-label text-rd-lime",
											children: "The architecture"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.architecture }),
										"currentStatus" in item && item.currentStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rd-label",
											children: "Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.currentStatus })] })
									]
								})]
							})
						]
					})]
				}, item.title);
			})
		})
	});
}
//#endregion
export { PortfolioPage as component };
