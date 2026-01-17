"use client";

import { JSX } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContextMenu } from "./ui/context-menu";
import { sendMessage } from "@/actions/sendMessage";

type CustomMessageProps = {
  trigger: JSX.Element;
};

const CustomMessage = ({ trigger }: CustomMessageProps) => {
  return (
    <Dialog>
      <ContextMenu>
        <DialogTrigger asChild>{trigger}</DialogTrigger>

        <DialogContent className="max-w-96">
          <DialogHeader>
            <DialogTitle>Send a Custom Message 🚀</DialogTitle>
            <DialogDescription>Tip: Just say hi!.</DialogDescription>
          </DialogHeader>

          <form action={sendMessage} className="grid gap-4">
            <div className="grid gap-3">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Enter your name" />
            </div>

            <div className="grid gap-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="grid gap-3">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message"
                required
              />
            </div>

            <DialogFooter className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Send</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </ContextMenu>
    </Dialog>
  );
};

export default CustomMessage;
