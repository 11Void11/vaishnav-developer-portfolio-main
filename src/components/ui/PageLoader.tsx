import { useEffect, useRef, useState } from "react";
import robotLoaderLogo from "@/assets/robot-loader-logo.svg";

type Phase = "loading" | "leaving" | "gone";
type Step = "hydrated" | "fonts" | "assets" | "load";

const WEIGHTS: Record<Step, number> = {
    hydrated: 10,
    fonts: 30,
    assets: 35,
    load: 25,
};

const MESSAGES = [
    { upTo: 25, text: "Warming up the cache" },
    { upTo: 55, text: "Loading fonts and assets" },
    { upTo: 85, text: "Indexing projects" },
    { upTo: 101, text: "Almost there" },
];

function messageIndex(progress: number) {
    const index = MESSAGES.findIndex((message) => progress < message.upTo);
    return index === -1 ? MESSAGES.length - 1 : index;
}

function loadImage(src: string): Promise<void> {
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

        if (typeof img.decode === "function") {
            img.decode().then(finish, finish);
        }
    });
}

interface PageLoaderProps {
    assets?: string[];
    minDuration?: number;
    maxDuration?: number;
    onReveal?: () => void;
}

export function PageLoader({
    assets = [],
    minDuration = 1800,
    maxDuration = 9000,
    onReveal,
}: PageLoaderProps) {
    const [phase, setPhase] = useState<Phase>("loading");
    const [message, setMessage] = useState(0);
    const barRef = useRef<HTMLDivElement | null>(null);
    const pctRef = useRef<HTMLSpanElement | null>(null);
    const onRevealRef = useRef(onReveal);
    onRevealRef.current = onReveal;

    const assetsKey = assets.join("|");

    useEffect(() => {
        const root = document.documentElement;
        root.classList.add("rd-loading");

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const minMs = reducedMotion ? 500 : minDuration;
        const start = performance.now();

        const done: Record<Step, boolean> = {
            hydrated: true,
            fonts: false,
            assets: false,
            load: false,
        };

        const timers: number[] = [];
        let raf = 0;
        let shown = 0;
        let lastMessage = 0;
        let cancelled = false;
        let forced = false;
        let revealed = false;

        const finish = (step: Step) => () => {
            done[step] = true;
        };

        const fonts = document.fonts;
        const fontsReady: Promise<unknown> = fonts
            ? Promise.all([
                fonts.load('500 16px "Space Grotesk Variable"'),
                fonts.load('700 16px "Space Grotesk Variable"'),
                fonts.load('400 16px "Space Mono"'),
                fonts.load('400 16px "Lobster"'),
            ]).then(() => fonts.ready)
            : Promise.resolve();

        fontsReady.then(finish("fonts"), finish("fonts"));

        const imageList = assetsKey ? assetsKey.split("|").filter(Boolean) : [];
        Promise.all(imageList.map(loadImage)).then(
            finish("assets"),
            finish("assets"),
        );

        const onLoad = finish("load");
        if (document.readyState === "complete") {
            onLoad();
        } else {
            window.addEventListener("load", onLoad, { once: true });
        }

        timers.push(
            window.setTimeout(() => {
                forced = true;
            }, maxDuration),
        );

        const reveal = () => {
            if (revealed) return;
            revealed = true;
            root.classList.remove("rd-loading");
            setPhase("leaving");
            onRevealRef.current?.();

            timers.push(
                window.setTimeout(() => {
                    setPhase("gone");
                }, 850),
            );
        };

        const tick = (now: number) => {
            if (cancelled) return;

            const elapsed = now - start;
            const target = (Object.keys(done) as Step[]).reduce(
                (sum, key) => sum + (done[key] ? WEIGHTS[key] : 0),
                0,
            );
            const timeCap = Math.min(100, (elapsed / minMs) * 100);
            const goal = forced ? 100 : Math.min(target, timeCap);

            shown += (goal - shown) * 0.12;
            if (goal >= 100 && shown > 99.4) {
                shown = 100;
            }

            if (barRef.current) {
                barRef.current.style.transform = `scaleX(${shown / 100})`;
            }
            if (pctRef.current) {
                pctRef.current.textContent = `${Math.round(shown)}%`;
            }

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
    }, [assetsKey, minDuration, maxDuration]);

    if (phase === "gone") return null;

    return (
        <div
            className="rd-loader"
            data-phase={phase}
            role="status"
            aria-live="polite"
            aria-label="Loading portfolio"
        >
            <div className="rd-loader-grid" aria-hidden="true" />

            <div className="rd-loader-inner">
                <div className="rd-loader-stage">
                    <div className="rd-loader-glow" aria-hidden="true" />
                    <img
                        className="rd-loader-svg rd-loader-art"
                        src={robotLoaderLogo}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                    />
                </div>

                <div className="rd-loader-copy">
                    <div className="rd-loader-title">
                        Booting portfolio
                        <span className="rd-loader-dots" aria-hidden="true">
                            <i />
                            <i />
                            <i />
                        </span>
                    </div>

                    <div className="rd-loader-status" key={message}>
                        {MESSAGES[message]?.text}
                    </div>

                    <div className="rd-loader-barrow">
                        <div className="rd-loader-bar" aria-hidden="true">
                            <div ref={barRef} />
                        </div>
                        <span className="rd-loader-pct" ref={pctRef}>
                            0%
                        </span>
                    </div>
                </div>
            </div>

            <noscript>
                <style>
                    {`.rd-loader{display:none!important}html.rd-loading{overflow:auto!important}html.rd-loading *{animation-play-state:running!important}`}
                </style>
            </noscript>
        </div>
    );
}
