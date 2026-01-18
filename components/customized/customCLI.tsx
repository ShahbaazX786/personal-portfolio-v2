"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type CommandHandler = string | ((args: string[]) => string | Promise<string>);

type TerminalProps = {
  commands: Record<string, CommandHandler>;
  welcomeMessage?: string;
  prompt?: string;
  theme?: "light" | "dark";
};

type Line = {
  id: number;
  type: "input" | "output" | "system";
  text: string;
};

let lineId = 0;

const TYPING_SPEED = 18;

const CustomCLI = ({
  commands,
  welcomeMessage = "",
  prompt = ">",
  theme = "dark",
}: TerminalProps) => {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [cursorPos, setCursorPos] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* -------------------- Init -------------------- */
  useEffect(() => {
    if (welcomeMessage) {
      setLines([
        {
          id: lineId++,
          type: "system",
          text: welcomeMessage,
        },
      ]);
    }
    inputRef.current?.focus();
  }, [welcomeMessage]);

  /* -------------------- Auto scroll -------------------- */
  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lines]);

  /* -------------------- Typing animation -------------------- */
  const typeOutput = async (text: string) => {
    setIsTyping(true);

    let current = "";
    const id = lineId++;

    setLines((prev) => [...prev, { id, type: "output", text: "" }]);

    for (const char of text) {
      current += char;
      await new Promise((r) => setTimeout(r, TYPING_SPEED));
      setLines((prev) =>
        prev.map((l) => (l.id === id ? { ...l, text: current } : l)),
      );
    }

    setIsTyping(false);
  };

  /* -------------------- Command execution -------------------- */
  const runCommand = async (raw: string) => {
    const [command, ...args] = raw.trim().split(" ");
    const handler = commands[command];

    setLines((prev) => [
      ...prev,
      {
        id: lineId++,
        type: "input",
        text: `${prompt}${raw}`,
      },
    ]);

    if (!handler) {
      await typeOutput(`command not found: ${command}`);
      return;
    }

    if (typeof handler === "string") {
      await typeOutput(handler);
    } else {
      const result = await handler(args);
      await typeOutput(result);
    }
  };

  /* -------------------- Submit -------------------- */
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    setHistory((h) => [...h, input]);
    setHistoryIndex(null);

    await runCommand(input);
    setInput("");
  };

  /* -------------------- Keyboard handling -------------------- */
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // ↑ History back
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const index =
        historyIndex === null
          ? history.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(index);
      setInput(history[index] ?? "");
    }

    // ↓ History forward
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;

      const index = historyIndex + 1;
      if (index >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(index);
        setInput(history[index]);
      }
    }

    // Tab autocomplete
    if (e.key === "Tab") {
      e.preventDefault();
      const matches = Object.keys(commands).filter((cmd) =>
        cmd.startsWith(input),
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  /* -------------------- Styles -------------------- */
  const terminalTheme =
    theme === "dark"
      ? "bg-black text-green-400 border-zinc-800"
      : "bg-zinc-100 text-zinc-900 border-zinc-300";

  return (
    <Card
      className={cn(
        "relative h-full min-h-80 max-h-96 w-full max-w-4xl overflow-y-auto overflow-x-hidden p-4 border scrollbar-none",
        terminalTheme,
      )}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        ref={containerRef}
        className="h-full w-full font-mono text-sm leading-relaxed"
      >
        {lines.map((line) => (
          <div key={line.id} className="whitespace-pre-wrap">
            {line.text}
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={onSubmit} className="flex items-center gap-2">
          <span>{prompt}</span>

          <div className="relative flex-1">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setCursorPos(e.target.selectionStart ?? 0);
              }}
              onKeyDown={(e) => {
                onKeyDown(e);
                requestAnimationFrame(() => {
                  setCursorPos(inputRef.current?.selectionStart ?? 0);
                });
              }}
              className="w-full bg-transparent outline-none caret-transparent"
              autoComplete="off"
              spellCheck={false}
            />

            {/* Blinking cursor */}
            <span
              className="pointer-events-none absolute top-0 animate-pulse duration-75"
              style={{ left: `${cursorPos}ch` }}
            >
              █
            </span>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default CustomCLI;
