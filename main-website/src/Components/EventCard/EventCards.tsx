"use client";

import { useEffect, useId, useRef, useState, type JSX } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export function EventCards(events: {
  src: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
}[]
) {
  const [active, setActive] = useState<(typeof events)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[640px] h-full md:max-h-[90vh] flex flex-col bg-white sm:rounded-3xl overflow-hidden text-left"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="flex-shrink-0">
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-96 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  decoding="async"
                />
              </motion.div>

              <div className="flex flex-col min-h-0 flex-1">
                <div className="flex justify-between items-start p-5 flex-shrink-0">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-black-800 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-black-800 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {active.ctaLink ? (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target={active.ctaLink.startsWith("http") ? "_blank" : undefined}
                      rel={active.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white flex-shrink-0"
                    >
                      {active.ctaText}
                    </motion.a>
                  ) : null}
                </div>
                <div className="pt-4 px-5 pb-10 flex-1 min-h-0 overflow-hidden">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-full overflow-y-auto flex flex-col items-start gap-4  pr-1 [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6">
        {events.map((event) => (
          <motion.div
            layoutId={`card-${event.title}-${id}`}
            key={event.title}
            onClick={() => setActive(event)}
            className="p-5 flex flex-col hover:bg-neutral-50 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${event.title}-${id}`} className="w-full">
                <img
                  width={100}
                  height={100}
                  src={event.src}
                  alt={event.title}
                  className="h-72 w-full rounded-lg object-cover object-top md:h-80"
                  decoding="async"
                  loading="lazy"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${event.title}-${id}`}
                  className="font-medium text-neutral-200 text-center md:text-left text-base"
                >
                  {event.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${event.description}-${id}`}
                  className="text-neutral-400 text-center md:text-left text-base"
                >
                  {event.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </motion.div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

