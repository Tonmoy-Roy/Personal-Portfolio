import { FaGithub } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;


        emailjs.send(
            "service_hiiv81g",
            "template_nzspmdk",
            {
                name: formData.name.value,
                email: formData.email.value,
                message: formData.area.value,
            },
            "dqzfNz7gbv9q-B4mD"
        )
            .then(() => {
                toast.success(`Your Message sent successfully !`);
                e.target.reset();
            })

            .catch(() => alert("Failed to send message."));
    };
    return (
        <div className="md:ml-[20vw] md:h-[90vh] overflow-hidden md:w-[60vw] pt-10">
            <div className="h-full overflow-y-auto">
                <div className="md:mt-0 p-6 text-left">
                    <p className="text-xl font-semibold text-gray-200"><span className="text-yellow-600">S</span>ocial Links</p>
                    <p className="divider md:w-[30vw] bg-gray-600 h-[1px]"></p>
                    <div className='md:flex mb-8'>
                        <div className="flex">
                            <div>
                                <Link to="mailto:roytonmoy901@gmail.com"><AiTwotoneMail className='text-5xl mr-8' /></Link>
                                <p className='ml-2 text-gray-200'>Email</p>
                            </div>
                            <button className="btn btn-neutral mt-3 mr-8 mb-3 text-gray-200 glow-on-hover" onClick={() => document.getElementById('my_modal_3').showModal()}>Phone</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box border border-red-600 w-[60vw]">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg text-black">01894176266</h3>
                                </div>
                            </dialog>
                            <div className='mb-3'>
                                <Link to="https://github.com/Tonmoy-Roy"><FaGithub className='text-5xl mr-8 text-gray-200' /></Link>
                                <p>Github</p>
                            </div>
                        </div>
                        <div>
                            <Link to="https://www.linkedin.com/in/tonmoy-roy-own/"><BsLinkedin className='text-5xl mr-8 text-gray-200' /></Link>
                            <p>LinkedIn</p>
                        </div>

                    </div>
                    <p className="text-xl font-semibold text-gray-200"><span className="text-yellow-600">C</span>ontact Form</p>
                    <p className="divider md:w-[30vw] bg-gray-600 h-[1px]"></p>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Full Name</label>
                                <input name="name" type="text" className="input text-black" placeholder="Name" required />

                                <label className="label">Email</label>
                                <input name="email" type="email" className="input mb-3 text-black" placeholder="Email" required />

                                <textarea
                                    name="area"
                                    className="md:w-[21vw] px-3 py-2 border rounded-lg text-black"
                                    placeholder="Enter your text here..."
                                    required
                                />

                                <button type="submit" className="md:w-[21vw] btn btn-primary mt-4 ">Send</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;