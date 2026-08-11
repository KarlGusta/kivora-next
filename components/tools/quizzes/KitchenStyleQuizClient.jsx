"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, RotateCcw } from "lucide-react";
import { QUESTIONS, STYLES } from "@/data/quizData";
import { purchaseUrl } from "@/data/commercialPages";

function computeResult(answers) {
  const scores = {};

  Object.keys(STYLES).forEach((id) => {
    scores[id] = 0;
  });

  answers.forEach((answer) => {
    if (!answer) return;
    answer.styles.forEach((styleId) => {
      scores[styleId] = (scores[styleId] || 0) + 1;
    });
  });

  const winnerId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

  return STYLES[winnerId];
}

function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="h-1.5 w-full bg-kivora-ink/10">
      <div
        className="h-1.5 bg-kivora-ink transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function QuizStep({ question, index, total, onAnswer }) {
  return (
    <div className="border border-kivora-ink/15 bg-kivora-cream p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/40">
        Question {index + 1} of {total}
      </p>
      <h2 className="mt-3 text-xl font-semibold text-kivora-ink md:text-2xl">
        {question.prompt}
      </h2>

      <div className="mt-6 grid gap-3">
        {question.options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => onAnswer(option)}
            className="border border-kivora-ink/15 bg-kivora-cream px-4 py-3.5 text-left text-sm font-medium text-kivora-ink transition-colors hover:border-kivora-ink hover:bg-kivora-yellow/20"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultDetail({ label, value }) {
  return (
    <li className="flex items-start justify-between gap-4 py-2.5 text-sm">
      <span className="text-kivora-ink/50">{label}</span>
      <span className="text-right font-medium text-kivora-ink">{value}</span>
    </li>
  );
}

function QuizResult({ style, onRetake }) {
  return (
    <div>
      <div className="border border-kivora-ink bg-kivora-yellow/25 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/50">
          Your Kitchen Style
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-kivora-ink md:text-3xl">
          {style.title}
        </h2>
        <p className="mt-1 text-sm font-medium text-kivora-ink/60">
          {style.tagline}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-kivora-ink/70">
          {style.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {style.colors.map((color) => (
            <span
              key={color}
              className="border border-kivora-ink/20 bg-kivora-cream px-3 py-1 text-xs font-medium text-kivora-ink"
            >
              {color}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-kivora-ink/15 pt-5">
          <p className="text-sm font-medium text-kivora-ink">
            See {style.title.toLowerCase()} in your actual kitchen.
          </p>
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 border border-kivora-ink bg-kivora-ink px-4 py-2.5 text-sm font-semibold text-kivora-cream transition-colors hover:bg-kivora-purple hover:text-kivora-ink"
          >
            Visualize My Kitchen
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="mt-4 border border-kivora-ink/10 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kivora-ink/40">
          Recommended For This Style
        </p>
        <ul className="mt-3 divide-y divide-kivora-ink/10">
          <ResultDetail label="Cabinets" value={style.cabinets} />
          <ResultDetail label="Countertop" value={style.countertop} />
          <ResultDetail label="Hardware" value={style.hardware} />
          <ResultDetail label="Backsplash" value={style.backsplash} />
          <ResultDetail label="Flooring" value={style.flooring} />
        </ul>

        <Link
          href="/kitchen-styles"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-kivora-ink transition-colors hover:text-kivora-ink/70"
        >
          Browse more {style.title.toLowerCase()} inspiration
          <ArrowRight size={14} />
        </Link>
      </div>

      <button
        type="button"
        onClick={onRetake}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-kivora-ink/50 transition-colors hover:text-kivora-ink"
      >
        <RotateCcw size={14} />
        Retake the quiz
      </button>
    </div>
  );
}

export default function KitchenStyleQuizClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const isDone = step >= QUESTIONS.length;

  const result = useMemo(() => {
    if (!isDone) return null;
    return computeResult(answers);
  }, [isDone, answers]);

  const handleAnswer = (option) => {
    setAnswers((current) => {
      const next = [...current];
      next[step] = option;
      return next;
    });
    setStep((current) => current + 1);
  };

  const handleRetake = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <main className="bg-kivora-cream">
      <section className="mx-auto max-w-3xl px-5 pt-32 md:px-8 md:pt-40">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-kivora-ink/50 transition-colors hover:text-kivora-ink"
        >
          <ChevronLeft size={16} />
          Free Tools
        </Link>

        <h1 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-kivora-ink md:text-4xl">
          Kitchen Style Quiz
        </h1>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-kivora-ink/60">
          Eight quick questions. No email required. Find out which kitchen
          style actually fits you before you start picking finishes.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-10 md:px-8">
        {!isDone && (
          <div className="mb-6">
            <ProgressBar current={step} total={QUESTIONS.length} />
          </div>
        )}

        {isDone ? (
          <QuizResult style={result} onRetake={handleRetake} />
        ) : (
          <QuizStep
            key={QUESTIONS[step].id}
            question={QUESTIONS[step]}
            index={step}
            total={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        )}
      </section>
    </main>
  );
}
