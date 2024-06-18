import React from 'react'
import styled from "styled-components"


const Contact = () => {
    // const Wrapper = styled.section`

    // .container{
    //     margin-top:6rem;
    //     text-align:center;


    //  .contact-form{
    //     max-width:50rem;
    //     margin:auto;

    //     .contact-inputs{
    //         display:flex;
    //         flex-direction:column;
    //         gap:3rem;

    //         input[type="submit"]{
    //             cursor:pointer;
    //             transition:all 0.2s;

    //             &:hover {

    //                  background-color: ${({ theme }) => theme.colors.white};

    //                 border: 1px solid ${({ theme }) => theme.colors.btn};

    //                 color: ${({ theme }) => theme.colors.btn};
    //                 transform: scale(0.9);
    //             }  

    //         }
    //     }
    //  }   



    // }

    // `;


    return (
        // <Wrapper>
        <>
            <h1 className='text-center m-2 p-2 fw-bolder'>Feel Free to Contact US</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4042159862684!2d73.81510107465198!3d18.51062706947889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbd8d5112df%3A0x40888f31c5f88b84!2sFelix%20IT%20Systems%20%7C%20UI%20UX%20Training%20in%20Pune%20%7C%20Fullstack%20Development%20%7Cplacement!5e0!3m2!1sen!2sin!4v1713986733092!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <div className='text-center'>
               

                {/* <div className='contact-form'> */}
                <form action='https://formspree.io/f/xbjnqbgp' method='post' className='contact-inputs m-1 p-1'>
                    <input type='text' name='username' placeholder='username' autoComplete='off' className='m-1 p-1 w-25' required /><br />
                    <input type='email' name='Email' placeholder='Email' autoComplete='off' className='m-1 p-1  w-25' required /><br />
                    <textarea name='message' cols="30" rows="6" autoComplete='off' className='m-1 p-1  w-25' required >  </textarea><br />
                    <input type='submit' value="send" className='btn btn-danger hover rounded  px-4 py-2 ' />


                    {/* tb-4 p-2 */}

                </form>



                {/* </div> */}

            </div>





        </>
        // </Wrapper>
    );
};
export default Contact;