import { Formik, Form, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';



const DateSelect = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
  
    const { value } = meta;
    const { setValue } = helpers;
    const weekend = (date) => new Date() < date;
  
    return (
      <>
      <label>{label}</label>
        
      <DatePicker 
      className={meta.touched && meta.error ? "input-error date-error" : "date"}
      placeholderText={"Выберите дату"}
      locale={ru}
      filterDate={weekend}
        showTimeSelect
        minTime={new Date(0, 0, 0, 9, 30)}
        maxTime={new Date(0, 0, 0, 19, 0)}
        {...field}
        selected={value}
        onChange={(date) => setValue(date)}
        dateFormat="d MMMM, yyyy HH:mm "  
        
      />

      {meta.touched && meta.error && <div className="error">{meta.error} </div>}
      </>
    );
  };

  export default DateSelect;