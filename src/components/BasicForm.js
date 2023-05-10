import { Form, Formik } from "formik";
import CustomSelect from "./CustomSelect";
import DateSelect from "./DateSelect";
import TextArea from "./TextArea";
import { advancedSchema } from "../shemas/index.js";


const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

const BasicForm = () => {
    
    return(
        
        <Formik
            initialValues={{ tower: "", floor: "", conferenceRoom: "" ,date: "" ,comment: "" }}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
            >

{({ isSubmitting }) => (
    <Form>
            <h1>Бронирование переговорной</h1>
            <CustomSelect
                label="Башня"
                name="tower"
                placeholder="Выберите башню"
            >
                <option value="tower">Выберите башню</option>
                
                <option value="a">А</option>
                <option value="b">Б</option>
                
                
            </CustomSelect>
            <CustomSelect
                label="Этаж"
                name="floor"
                placeholder="Выберите этаж"
            >
                <option value="floor">Выберите этаж</option>

                
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="15">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                

            </CustomSelect>

            <CustomSelect
                label="Переговорная"
                name="conferenceRoom"
                
            >
                <option value="conferenceRoom">Выберите переговорную</option>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                

            </CustomSelect>
    
            <DateSelect  
                label="Выберите дату"
                name="date">
                </DateSelect>

            <TextArea  placeholder="Комментарий..."
            label="Комментарий"
            name="comment"/>

        <div className="buttons">
        <button className="button-submit" disabled={isSubmitting} type="submit">
            Отправить
          </button>
        <button className="button-reset" type="reset">
            Очистить
        </button>
        </div>
        
          </Form>
)}
        </Formik>
    );
};

export default BasicForm;