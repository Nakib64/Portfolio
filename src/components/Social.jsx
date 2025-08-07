
import Link from 'next/link';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Social = () => {

    const socials = [
        {icon: <FaGithub />, path: 'https://github.com/Nakib64'},
        {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/nafiz64/'},
    ]
    return (
        <div className={ "flex gap-6"}>
            {socials.map((item, index)=>{
                return <Link key={index} href={item.path} className={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}>{item.icon}</Link>
            })}
        </div>
    );
};

export default Social;