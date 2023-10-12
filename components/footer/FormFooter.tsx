import { FC } from 'react';

export const FormFooter: FC = () => {
    return (
        <form className='formfooter'>
            <label htmlFor="">Name</label>
            <input type="text" />

            <label htmlFor="">Email</label>
            <input type="email" />

            <label htmlFor="">Phone</label>
            <input type="tel" />

            <div>City</div>
            <label className='formfooter__label-checkbox'>
                <input type="checkbox" name="location" value="Buffalo" />
                Buffalo
            </label>
            <label className='formfooter__label-checkbox label-m'>
                <input type="checkbox" name="location" value="Rochester" />
                Rochester
            </label>

            <label htmlFor="">Comment or Message</label>
            <textarea name="" id=""></textarea>

            <input type="submit" value="Submit" />
        </form>
    )
}