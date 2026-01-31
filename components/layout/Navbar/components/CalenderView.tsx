import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getDayTime } from "@/lib/utils";
import dayjs from "dayjs";

const CalenderView = () => {
  const today = dayjs().format("ddd MMM D h:mm A");
  const { date, time } = getDayTime(today);
  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="hover:scale-110 transition-all ease-in-out"
      >
        <time className="cursor-pointer md:max-w-full max-w-20 w-auto lg:w-full gap-0 md:gap-2 flex lg:flex-row flex-col justify-center items-center text-xs lg:text-sm">
          <span>{date}</span>
          <span>{time}</span>
        </time>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={new Date()}
          captionLayout="dropdown"
        />
      </PopoverContent>
    </Popover>
  );
};

export default CalenderView;
