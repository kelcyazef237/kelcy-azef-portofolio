import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { hobbies } from "../../constants";
import { Header } from "../atoms/Header";
import { THobby } from "../../types";
import { config } from "../../constants/config";
import { useTranslation } from "../../hooks/useTranslation";

const HobbyCard: React.FC<{ index: number } & THobby> = ({
  index,
  id,
  hobby,
  description,
  emoji,
  color,
  tags,
}) => {
  const { t } = useTranslation();
  const tHobby = t(`hobbiesList.${id}.hobby`, { defaultValue: hobby });
  const tDescription = t(`hobbiesList.${id}.description`, { defaultValue: description });

  return (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="relative w-full xs:w-[320px] overflow-hidden rounded-3xl p-[1px]"
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
    }}
  >
    <div className={`relative h-full rounded-3xl bg-gradient-to-br ${color} p-[1px]`}>
      <div className="h-full w-full rounded-[calc(1.5rem-1px)] bg-[#1a1a2e] p-7">
        {/* Emoji & Title */}
        <div className="mb-4 flex items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            {emoji}
          </span>
          <h3 className="text-[17px] font-bold leading-tight text-white">{tHobby}</h3>
        </div>

        {/* Description */}
        <p className="text-[14px] leading-relaxed text-gray-300">{tDescription}</p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full bg-gradient-to-r ${color} bg-opacity-20 px-3 py-1 text-[12px] font-medium text-white opacity-90`}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className={`mt-5 h-[2px] w-full rounded-full bg-gradient-to-r ${color} opacity-60`} />
      </div>
    </div>
  </motion.div>
  );
};

const Feedbacks = () => {
  const { t } = useTranslation();
  const [displayed, setDisplayed] = useState<THobby[]>([]);
  const [shuffleKey, setShuffleKey] = useState(0);

  useEffect(() => {
    // Just display the first 3 hobbies
    setDisplayed(hobbies.slice(0, 3));
  }, []);

  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl flex flex-col items-center text-center`}>
        <Header useMotion={true} p={t("feedbacks.subtitle")} h2={t("feedbacks.title")} />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-3 text-[14px] text-gray-400"
        >
          {t("feedbacks.showing")}
        </motion.p>

      </div>

      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap justify-center gap-7 pb-14`}
      >
        {displayed.map((hobby, index) => (
          <HobbyCard key={hobby.hobby} index={index} {...hobby} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
