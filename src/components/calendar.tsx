import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

interface MyDatePickerProps {
  textField: (props: any) => JSX.Element;
}

export default function Calendar() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <div className="calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="portrait"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          {...({
            textField: (props: any) => (
              <TextField {...props} variant="outlined" />
            ),
          } as MyDatePickerProps)}
        />
      </LocalizationProvider>
    </div>
  );
}
