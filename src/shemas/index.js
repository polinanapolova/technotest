import * as yup from "yup";

export const advancedSchema = yup.object().shape({
    tower: yup
    .string()
    .required("Выберите башню"),
    floor: yup
    .string()
    .required("Выберите этаж"),
    conferenceRoom: yup
    .string()
    .required("Выберите переговорку"),
    date: yup
    .string()
    .required("Выберите дату и время"),
});