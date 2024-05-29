import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

import { DialogHeader } from "../ui/dialog";
import { ModalForm } from "./modal-form";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog.Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.DialogContent className="flex flex-col items-center gap-[10px] absolute bg-[rgba(200,200,200,0.9)] p-10 rounded-lg w-[100%] max-w-[700px]  md:max-h-max top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <DialogHeader className="flex flex-row items-center justify-between w-full">
          <Dialog.DialogDescription className="font-bold text-3xl">
            Add new product
          </Dialog.DialogDescription>
          <Button onClick={() => setIsOpen(false)}>X</Button>
        </DialogHeader>
        <ModalForm setIsOpen={setIsOpen} />
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
};
