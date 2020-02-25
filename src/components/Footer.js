import React from 'react'


const Footer = () => {
    return (
        <footer >
            <form
                name='contact'
                method='post'
                data-detlify='true'
                data-netlify-honeypot='bot-field'
            >

                <input
                    name='name'
                    type='text'
                    placeholder='Your name'
                />
                <button>Send</button>

            </form>


            <p>Esfwindows. © 2019</p>
        </footer>
    )
}

export default Footer