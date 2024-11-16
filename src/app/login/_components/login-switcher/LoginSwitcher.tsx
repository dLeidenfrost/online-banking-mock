"use client";

import { Dispatch, SetStateAction, useState } from "react";
import CredentialsForm from "../credentials-form/CredentialsForm";
import { UserForm } from "../user-form";
import { AnimatePresence, motion } from "motion/react";

export type LoginSwitcherProps = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};

const TRANSLATE_X = 400;

export default function LoginSwitcher() {
  const [user, setUser] = useState("");
  return (
    <AnimatePresence initial={false}>
      {!user && (
        <motion.div
          key="user-form"
          className="flex flex-col items-center absolute"
          initial={{ x: TRANSLATE_X * -1, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{
            x: TRANSLATE_X * -1,
            opacity: 0,
          }}
          transition={{ bounce: 0 }}
        >
          <UserForm user={user} setUser={setUser} />
        </motion.div>
      )}
      {user && (
        <motion.div
          key="credentials-form"
          className="flex flex-col items-center absolute"
          initial={{ x: TRANSLATE_X, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: TRANSLATE_X }}
          transition={{ bounce: 0 }}
        >
          <CredentialsForm user={user} setUser={setUser} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
