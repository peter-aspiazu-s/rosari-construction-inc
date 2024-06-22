import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Swal from 'sweetalert2';
import validator from 'validator';
import { SpinnerLoading } from '../spinnerLoading/SpinnerLoading';

export const FormFooter: FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phone: '',
        // city1: '',
        // city2: '',
        comment: '',
    });
    const [loading, setLoading] = useState(false);

    const {
        name, 
        email, 
        phone, 
        // city1, 
        // city2, 
        comment
    } = formData;

    const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (isValid()) {
            try {
                const response = await fetch('/api/sendEmails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'The form is valid and the email has been sent!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    });
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        comment: '',
                    });
                } else {
                    throw new Error('Failed to send email');
                }
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error sending the email',
                    icon: 'error',
                    confirmButtonText: 'ok'
                });
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const {value, name} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    // const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const { checked, name } = e.target;
    //     // Establece el valor del checkbox en función de la etiqueta correspondiente
    //     const cityValue = checked && e.target.nextSibling ? e.target.nextSibling.textContent : '';
    //     setFormData({
    //       ...formData,
    //       [name]: cityValue,
    //     });
    //   };

    const isValid = () => {
        if(name.trim().length <= 0){

            Swal.fire({
                title: 'Error!',
                text: 'The name is required',
                icon: 'error',
                confirmButtonText: 'ok'
            });
              
            return false;
        }
        if(!(validator.isEmail(email))){
            
            Swal.fire({
                title: 'Error!',
                text: 'The email is incorrect',
                icon: 'error',
                confirmButtonText: 'ok'
            });

            return false;
        }
        if(phone.trim().length <= 8){
            
            Swal.fire({
                title: 'Error!',
                text: 'Phone number is required',
                icon: 'error',
                confirmButtonText: 'ok'
            });

            return false;
        }
        
        return true;
    }

    return (
        <form 
            className='formfooter'
            onSubmit={handleSubmit}
        >
            <label id='name'>Name</label>
            <input 
                type="text"
                name='name'
                value={name} 
                onChange={handleChange}
            />

            <label id="email">Email</label>
            <input 
                type="email" 
                name='email'
                value={email}
                onChange={handleChange}
            />

            <label id="phone">Phone</label>
            <input 
                type="tel" 
                name='phone'
                value={phone}
                onChange={handleChange}
            />

            {/* <div>City</div>
            <label id="city1" className='formfooter__label-checkbox'>
                <input 
                    type="checkbox" 
                    name="city1" 
                    value={city1} 
                    onChange={handleCityChange}
                    checked={city1 ? true : false}
                />
                Buffalo
            </label>
            <label id="city2" className='formfooter__label-checkbox label-m'>
                <input 
                    type="checkbox" 
                    name="city2" 
                    value={city2} 
                    onChange={handleCityChange}
                    checked={city2 ? true : false}
                />
                Rochester
            </label> */}

            <label id="comment">Comment or Message</label>
            <textarea 
                name="comment" 
                value={comment}
                onChange={handleChange}
            ></textarea>
            
            {
                loading
                ? <SpinnerLoading />
                : <input type="submit" value="Submit" />
            }
        </form>
    )
}