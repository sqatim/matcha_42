import React, { useEffect } from "react";
import { Select } from "antd";
import {
  currentDay,
  daysInCurrentMonth,
  allMonths,
  getCurrentMonth,
  getCurrentYear,
  getYears,
} from "../../utils/date";
const { Option } = Select;

const handleChange = (value, setData) => {
  if (typeof value.value == "string") value.value = value.value.toString();
  setData(value.value);
};

const YearSelect = ({ setData }) => {
  const years = getYears();
  const currentYear = getCurrentYear() - 16;
  useEffect(() => {
    setData(currentYear);
  }, []);
  return (
    <Select
      labelInValue
      defaultValue={{
        value: currentYear,
        label: currentYear,
      }}
      style={{
        width: 130,
      }}
      onChange={(event) => handleChange(event, setData)}
    >
      {years.map((element, key) => (
        <Option key={key} value={element}>
          {element}
        </Option>
      ))}
    </Select>
  );
};
const MonthSelect = ({ setData }) => {
  const months = allMonths();
  const currentMonth = getCurrentMonth();
  useEffect(() => {
    setData(currentMonth.number.toString());
  }, []);
  return (
    <Select
      labelInValue
      defaultValue={{
        value: currentMonth.number,
        label: currentMonth.month,
      }}
      style={{
        width: 130,
      }}
      onChange={(event) => handleChange(event, setData)}
    >
      {months.map((element, key) => (
        <Option key={key} value={element.number}>
          {element.month}
        </Option>
      ))}
    </Select>
  );
};

const DaySelect = ({ setData }) => {
  const days = daysInCurrentMonth();
  const day = currentDay();
  useEffect(() => {
    setData(day);
  }, []);
  return (
    <Select
      labelInValue
      defaultValue={{
        value: day,
        label: day,
      }}
      style={{
        width: 130,
      }}
      onChange={(event) => handleChange(event, setData)}
    >
      {days.map((day, key) => (
        <Option key={key} value={day}>
          {day}
        </Option>
      ))}
    </Select>
  );
};

export default function DateSelect({ setData, type }) {
  switch (type) {
    case "year":
      return <YearSelect setData={setData} />;
    case "month":
      return <MonthSelect setData={setData} />;
    default:
      return <DaySelect setData={setData} />;
  }
}
